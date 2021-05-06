import { useState, useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from "next/router";
import CurrencyFormat from 'react-currency-format';
import SendTransaction from './send.transaction.component';
import RemoveProduct from '../management/remove.product.component';
import EditProduct from '../management/edit.product.component';
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';
import Link from 'next/link';
import SwitchPrice from './price.convert.component'
import axios from 'axios'
import moment from 'moment';

const Product = ({ router }) => {
    const Router = useRouter();
    const imgRef = useRef(null);
    const { id, name } = Router.query;
    const imgContent = useRef(null);
    const [credential, setCredential] = useState('');
    const [imgContentState, setImgContentState] = useState('');
    const [cookies, setCookie] = useCookies(['user']);
    const [product, setProduct] = useState([]);
    const [packageSendingAlert, setPackageSendingAlert] = useState('d-none')
    const [acceptPaymentSwitch, setAcceptPaymentSwitch] = useState('accept-payment-close');
    const [valueBtnSwitchPayment, setValueBtnSwitchPayment] = useState('Comprar');
    const [discountHiddeNotLogged, setDiscountHiddeNotLogged] = useState('')
    const [imageProd, setImageProd] = useState('/img/img-not-found.png');
    const [imgUpload, setImgUpload] = useState({});
    const [discount, setDiscount] = useState('')
    const [amount, setAmount] = useState('')

    const HandlerFindUser = async idUser => {
        const getUser = await axios.get(`${process.env.API_PATH}/v1/user/${idUser}`),
        resUser = await getUser.data
        return resUser
    }
    const getAllProduct = async () => {
        const fetchAll = await fetch(`${process.env.API_PATH}/v1/product/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        const dataFetch = await fetchAll.json();
        setProduct(dataFetch);
        setAmount(dataFetch.amount)
        setDiscount(dataFetch.discount)
        cookies.user 
        && !cookies.user.discount_token 
        || !cookies.user
        || product.discount <= 0 
        ? setDiscountHiddeNotLogged('d-none')
        : setDiscountHiddeNotLogged('')
        return dataFetch
    }

    useEffect(() => {
        if(cookies.user 
            && cookies.user.rol !== 'master'){
            setCredential('false');
        }else if(!cookies.user){
            setCredential('false');
        }
        if(cookies.user 
            && cookies.user.rol === 'master'){
                setCredential('true');
        }
        product.img && setImgContentState(imgContent.current.offsetWidth);
    })
    
    useEffect(() => {
        if (Router.asPath !== Router.route) {
            getAllProduct()
        }
    }, [Router])
    
    
    const handlerAcceptPaymentSwitch = e => {
        if(cookies.user){
            if(acceptPaymentSwitch === 'accept-payment-close'){
                e.target.classList.toggle('btn-danger');
                e.target.classList.remove('btn-buy-now');
                setValueBtnSwitchPayment('Cerrar');
                setAcceptPaymentSwitch('');
            }else{
                e.target.classList.toggle('btn-danger');
                e.target.classList.add('btn-buy-now');
                setValueBtnSwitchPayment('Pagar con Mercado Pago!');
                setAcceptPaymentSwitch('accept-payment-close');
            } 
        }else{
            window.location = '/iniciar-sesion';
        }
    },
    handlerTransaction = async () => {
        const customer = await HandlerFindUser(cookies.user.id)
        
        setPackageSendingAlert('');
        let frmData = new FormData();
        frmData.append('id_product', product._id);
        frmData.append('product', JSON.stringify(product));
        frmData.append('payer', JSON.stringify(customer));
        frmData.append('token_influencer', (cookies.user.discount_token) ? cookies.user.discount_token : 'organic');
        frmData.append('id_client', cookies.user && cookies.user.id);
        frmData.append('status_transaction', 'pending');
        frmData.append('proof_payment', imgRef.current.files[0]);
        frmData.append('create_at', `${moment()._d}`);
        frmData.append('create_at_filter', moment().format('YYYY-MM-DD'));
        const resTransaction = await SendTransaction(frmData, cookies)

        return resTransaction
    },
    imgPreviewProd = e => {
        let reader = new FileReader()
        reader.onloadend = () => {
            setImageProd(reader.result);
        }
        if (e.target.files[0]){
            setImgUpload(e.target.files[0])
            reader.readAsDataURL(e.target.files[0]);
        }else{
            setImageProd('');
        }
    }
    return(
        <>
        <section className="row section-product">
            <article className='col-12 col-sm-12 col-lg-12 col-xl-12 p-0 mt-1'>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link href="/" as='/'><a>Inicio</a></Link></li>
                        <li className="breadcrumb-item active text-light" aria-current="page">{name}</li>
                    </ol>
                </nav>
            </article>
            <article className="col-12 col-sm-12 col-lg-8 col-xl-8">
                <article ref={imgContent} className="col-12 content-img-prod-open">
                    {credential === 'true' ? <RemoveProduct product={product}/> : false}
                    {credential === 'true' ? <EditProduct product={product}/> : false}
                    {
                        product.img 
                        ? <CloudinaryContext cloudName="blets">
                            <Image className='card-img' publicId={`${product.img}.jpg`}>
                                <Transformation crop='scale' quality='40' width={(imgContentState - 50)} dpr='auto'/>
                            </Image>
                        </CloudinaryContext>
                        : ''
                    }
                </article>
                <article className="product-description-content col-12 p-5">
                    <h2 className='col-2'>Descripción</h2><hr/>
                    <ul type='none'>
                        <li>
                            - Categoría: <span className='text-light'><strong>{product.type}</strong></span><br/>
                        </li>
                        {
                            product.subcategory 
                            ? <li>
                                - Edición: <span className='text-light'><strong>{product.subcategory}</strong></span>
                            </li>
                            : '' 
                        }
                        <li>
                            - Nombre del negocio: <span className='text-light'><strong>{product.business}</strong></span>
                        </li>
                        <li>
                            - Ubicación: <span className='text-light'><strong>{product.location}</strong></span>
                        </li>
                    </ul><hr/>
                    <p>
                        {product.description}
                    </p>
                </article>
            </article>
            <article className="col-12 col-sm-12 col-lg-4 col-xl-4 p-3">
                <article className="col-12 card">
                    <article className="card-body">
                        <h1 className="text-secondary component-info-buy">{product.title}</h1>
                        <h4 className={`text-dark component-info-buy`}>
                            {
                                amount && discount && <SwitchPrice.SwitchPriceAuth 
                                    discount={discount} 
                                    amount={amount}
                                />
                            }
                        </h4>
                        <strike className='text-secondary'>
                            <h5 className={`component-info-buy ${discountHiddeNotLogged}`}>
                                <CurrencyFormat 
                                    value={product.amount} 
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}/>
                            </h5>
                        </strike>
                        <p className='col-12 col-sm-12 col-lg-6 col-xl-6 p-0 m-0'>
                            <span className={`${(!product.shipping) ? 'd-none' : 'd-block'} shipping-open bg-primary text-light`}>
                                Lo recibís en tu domicilio
                            </span>
                            <span className={`shipping-open bg-success text-light d-block`}>
                                Envío gratis
                            </span>
                        </p>
                    </article>
                </article>
                <article className="col-12 card mt-1">
                    <article className="card-body">
                        <p className="text-dark component-info-buy">Pagá al contado o en cuotas con 
                        <span className="text-info"> <strong>Mercado Pago</strong></span></p>
                        <p>
                            <span className='bg-primary p-2 text-light'>
                                Se encuentra en <strong>{product.location}</strong>
                            </span>
                        </p>
                        <hr/>
                        <p>
                            <img className='ico-payments' src="../img/visa.png" alt="Visa"/>
                            <img className='ico-payments' src="../img/mastercard.png" alt="Mastercard"/>
                            <img className='ico-payments' src="../img/transfer.png" alt="Transferencia"/>
                            <img className='ico-payments' src="../img/mp.webp" alt="Mercado Pago"/>
                        </p>
                        <article className={`col-12 accept-payment ${acceptPaymentSwitch}`}>
                            <article className={`content--btn-payment p-5 ${acceptPaymentSwitch}`}>
                                <article className="btn-content">
                                    <input 
                                        onClick={() => window.open(
                                            "http://localhost:3000",
                                            "Popup","toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
                                        )}
                                        className='btn btn-primary d-block mb-1'
                                        type="button" 
                                        value="Continuar con Mercado Pago"
                                    />
                                    <div class={`alert alert-success mt-1 mb-1 ${packageSendingAlert}`} role="alert">
                                        Tu pedido se ha enviado! Pronto nos pondremos en contácto.
                                        Sea paciente, por favor.
                                    </div>
                                    <p className='mt-3 d-none'>Continuar con transferencia bancaria: <span className='text-warning'>CBU {product.CBU}</span></p>
                                    <p className='mt-4'>
                                        <strong className='text-warning'>IMPORTANTE</strong>
                                        <small className='d-block'>Envíar screenshot del comprobante de pago</small>
                                        <label htmlFor="screenshot-payment" className='btn btn-success'>
                                            Subir archivo
                                        </label>
                                        <input ref={imgRef} type="file" onChange={imgPreviewProd} className='d-none' id='screenshot-payment'/>
                                        <input 
                                            type='button' 
                                            onClick={handlerTransaction}
                                            className='btn btn-warning d-block'
                                            value='Enviar archivo'
                                        />
                                        <img src={imageProd} alt="preview proof" className='proof-preview-prod'/>
                                    </p>
                                </article>       
                            </article>
                        </article>
                        <input 
                            onClick={handlerAcceptPaymentSwitch} 
                            type='button' 
                            className="btn btn-buy-now text-light col-12" 
                            value={valueBtnSwitchPayment}
                        />
                    </article>
                </article>
            </article>
        </section>
        </>
    )
}
// 0720006988000038698918
export default Product;