import { useState, useEffect, useRef } from 'react';
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
import GetItem from '../localStorage/getItem';

const Product = ({ router }) => {
    const Router = useRouter();
    const imgRef = useRef(null);
    const { id, name } = Router?.query;
    const imgContent = useRef(null);
    const [credential, setCredential] = useState(false);
    const [imgContentState, setImgContentState] = useState('');
    const [cookies, setCookie] = useState(GetItem('user'));
    const [product, setProduct] = useState([]);
    const [packageSendingAlert, setPackageSendingAlert] = useState('d-none')
    const [acceptPaymentSwitch, setAcceptPaymentSwitch] = useState('accept-payment-close');
    const [valueBtnSwitchPayment, setValueBtnSwitchPayment] = useState('Comprar');
    const [discountHiddeNotLogged, setDiscountHiddeNotLogged] = useState('')
    const [imageProd, setImageProd] = useState('/img/img-not-found.png');
    const [imageIsSelected, setImageIsSelected] = useState(false);
    const [paymentIsOpen, setPaymentIsOpen] = useState(false);
    const [imgUpload, setImgUpload] = useState({});
    const [discount, setDiscount] = useState('');
    const [amount, setAmount] = useState('');
    const [isTransfer, setIsTransfer] = useState(false);
    const [isWhatsApp, setIsWhatsApp] = useState(false);
    const [userPayer, setUserPayer] = useState('');
    const [finishPay, setFinishPay] = useState(false);

    const HandlerFindUser = async idUser => {
        const getUser = await axios.get(`${process.env.API_PATH}/v1/user/${idUser}`),
        resUser = await getUser?.data
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
        setAmount(dataFetch?.amount)
        setDiscount(dataFetch?.discount)
        !cookies?.user?.discount_token 
        || !cookies?.user
        || product?.discount <= 0 
        ? setDiscountHiddeNotLogged('d-none')
        : setDiscountHiddeNotLogged('')

        return dataFetch
    }

    useEffect(() => {
        product?.business === cookies?.user?.business 
        || cookies?.user?.rol === 'master' 
        ? setCredential(true) : setCredential(false);
        product?.img && setImgContentState(imgContent?.current?.offsetWidth);
    })
    
    useEffect(() => {
        if (Router?.asPath !== Router?.route) {
            getAllProduct()
        }
        HandlerFindUser(cookies?.user?.id)
        .then(r => {
            setUserPayer({
                area_code: r?.phone?.area_code,
                number: r?.phone?.number
            })
        })
        .catch(t => console.error(t))
    }, [Router])
    
    const handlerAcceptPaymentSwitch = e => {
        if(cookies?.user){
            if(acceptPaymentSwitch === 'accept-payment-close'){
                setPaymentIsOpen(true);
                setAcceptPaymentSwitch('');
            }else{
                setPaymentIsOpen(false);
                setAcceptPaymentSwitch('accept-payment-close');
                setFinishPay(false);
                setPackageSendingAlert('d-none');
            } 
        }else{
            window.location = '/iniciar-sesion';
        }
    },
    handlerTransaction = async (isWhatsApp) => {
        const userAnonymousNoLogged = {
            since_create: "---",
            fullname: "---",
            name: "---",
            surname: "---",
            username: "---",
            public_token: "---",
            location: "---",
            address: {
                street_name: "---",
                street_number: "---",
                zip_code: "---"
            },
            DNI: 0,
            email: "---",
            business: "---",
            social_medial: "---",
            rol: "---",
            phone: {
                number: 0,
                area_code: 0
            },
            CBU: 0
        }
        const customer = cookies?.user?.id ? (await HandlerFindUser(cookies?.user?.id)) : userAnonymousNoLogged
        setPackageSendingAlert('');
        let frmData = new FormData();
        frmData.append('id_product', product?._id);
        frmData.append('product', JSON.stringify(product));
        frmData.append('payer', JSON.stringify(customer));
        frmData.append('token_influencer', (cookies?.user?.discount_token) ? cookies?.user?.discount_token : 'organic');
        frmData.append('id_client', cookies?.user?.id  || '---');
        frmData.append('status_transaction', isWhatsApp ? 'whatsapp' : 'pending');
        frmData.append('proof_payment', !isWhatsApp ? imgRef?.current?.files[0] : false);
        frmData.append('create_at', `${moment()._d}`);
        frmData.append('create_at_filter', moment().format('YYYY-MM-DD'));
        const resTransaction = await SendTransaction(frmData, cookies)
        setIsTransfer(false)
        setFinishPay(true)

        return resTransaction
    },
    imgPreviewProd = e => {
        let reader = new FileReader()
        setImageIsSelected(true)
        reader.onloadend = () => {
            setImageProd(reader.result);
        }
        if (e.target.files[0]){
            setImgUpload(e.target.files[0])
            reader.readAsDataURL(e.target.files[0]);
        }else{
            setImageProd('');
        }
    },
    handlerIsWhatsApp = () => {
        handlerTransaction(true); 
        setIsTransfer(false);
        setIsWhatsApp(true);
        window.open(`https://api.whatsapp.com/send?phone=${product?.contact_business}&text=Hola!%20${window?.location?.href}.%20Gracias!`)
    },
    handlerIsTransfer = () => {
        setIsWhatsApp(false);
        setIsTransfer(true);
    }    
    // handlerCheckoutProMP = async () => {
    //     const payment = await ( await axios.post(`${process.env.API_PATH}/v1/product/transaction/mp/checkoutpro`, {}) )?.data
    //     console.log(payment)
    //     handlerTransaction()
    //     window.open(
    //         payment?.response?.init_point,
    //         "Popup","toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30"
    //     )
    // }

    return(
        <>
        <section className="row section-product">
            <article className='col-12 col-sm-12 col-lg-12 col-xl-12 p-0 mt-1'>
                <nav aria-label="breadcrumb breadcrumb-product-open">
                    <ol className="breadcrumb breadcrumb-product-open">
                        <li className="breadcrumb-item text-primary"><Link href="/" as='/'><a>Inicio</a></Link></li>
                        <li className="breadcrumb-item active text-primary" aria-current="page">{name}</li>
                    </ol>
                </nav>
            </article>
            <article className="col-12 col-sm-12 col-lg-8 col-xl-8">
                <article ref={imgContent} className="col-12 content-img-prod-open">
                    {credential && <RemoveProduct product={product}/>}
                    {credential && <EditProduct product={product}/>}
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
                            - Categoría: <span className='text-primary'><strong>{product.type}</strong></span><br/>
                        </li>
                        {
                            product.subcategory 
                            ? <li>
                                - Edición: <span className='text-primary'><strong>{product.subcategory}</strong></span>
                            </li>
                            : '' 
                        }
                        <li>
                            - Nombre del negocio: <span className='text-primary'><strong>{product.business}</strong></span>
                        </li>
                        <li>
                            - Ubicación: <span className='text-primary'><strong>{product.location}</strong></span>
                        </li>
                    </ul><hr/>
                    <pre className='wrapping'>
                        <p>
                            {product.description}
                        </p>
                    </pre>
                </article>
            </article>
            <article className="col-12 col-sm-12 col-lg-4 col-xl-4 p-3">
                <article className="col-12 card">
                    <article className="card-body">
                        <pre className='wrapping'>
                            <h1 className="text-secondary component-info-buy">
                                {product.title}
                            </h1>
                        </pre>
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
                                <button 
                                    type="button" 
                                    className='btn text-danger btn-close-btn-payment' 
                                    onClick={ handlerAcceptPaymentSwitch }
                                />
                                <article className="btn-content">
                                    {/* <input 
                                        onClick={() => handlerCheckoutProMP()}
                                        className='btn btn-primary d-block mb-1'
                                        type="button" 
                                        value="Continuar con Mercado Pago"
                                    /> */}
                                    <div className={`alert alert-success mt-1 mb-1 ${packageSendingAlert}`} role="alert">
                                        Tu pedido se ha enviado! Pronto nos pondremos en contácto.
                                        Sea paciente, por favor.
                                    </div>
                                    {
                                        isTransfer && (
                                            <>
                                            <p className='mt-3'>Continuar por transferencia bancaria: <span className='text-light bg-primary'>CBU/ALIAS {product?.CBU}</span></p>
                                            <p className='mt-4'>
                                                <strong className='text-light bg-primary badge'>Atención</strong>
                                                <small className='d-block'>Envíar screenshot del comprobante de pago</small>
                                                <label htmlFor="screenshot-payment" className='btn btn-success'>
                                                    Seleccionar imagen
                                                </label>
                                                <input ref={imgRef} type="file" onChange={imgPreviewProd} className='d-none' id='screenshot-payment'/>
                                                <img src={imageProd} alt="preview proof" className='proof-preview-prod d-block'/>
                                                {
                                                    imageIsSelected && <input 
                                                        type='button' 
                                                        onClick={() => handlerTransaction(false)}
                                                        className='btn btn-warning d-block'
                                                        value='Finalizar y Enviar'
                                                    />
                                                }
                                            </p>
                                            </>
                                        )
                                    }
                                    {
                                        !isTransfer && !finishPay && (
                                        <span className='text-dark'>
                                            <strong>
                                                <img src="/img/car.svg" alt="car" className='mr-2'/>
                                                Ya casi es tuyo! ¿Cómo querés pagar?
                                            </strong>
                                        </span>

                                        )
                                    }
                                    {
                                        !finishPay && (
                                            <p className="mt-4 d-flex">
                                                <button 
                                                    onClick={ handlerIsTransfer }
                                                    type="button" 
                                                    className='btn btn-primary text-light d-block m-1 ml-auto mr-auto'
                                                >
                                                    Por transferencia
                                                    <img src="/img/card.svg" alt="wpp" className='ml-2'/>
                                                </button>
                                                <button 
                                                    onClick={ handlerIsWhatsApp }
                                                    type="button" 
                                                    className='btn btn-success text-light d-block m-1 ml-auto mr-auto'
                                                >
                                                    Por WhatsApp
                                                    <img src="/img/wpp.svg" alt="wpp" className='ml-2'/>
                                                </button>
                                            </p>
                                        )
                                    }
                                </article>       
                            </article>
                        </article>
                        {
                            cookies?.user?.auth?.user_verify && (
                                <input 
                                    disabled={!cookies?.user?.auth?.user_verify}
                                    onClick={handlerAcceptPaymentSwitch} 
                                    type='button'
                                    className="btn btn-buy-now btn-primary text-light col-12" 
                                    value={valueBtnSwitchPayment}
                                />
                            )
                        }
                        {
                            !cookies?.user?.auth?.user_verify && (
                                <button 
                                    onClick={ handlerIsWhatsApp }
                                    type="button" 
                                    className='btn btn-buy-now btn-success text-light col-12'
                                >
                                    Comprar por WhatsApp
                                    <img src="/img/wpp.svg" alt="wpp" className='ml-2'/>
                                </button>
                            )
                        }
                        {/* {
                            !cookies?.user?.auth?.user_verify && (
                                <p className="alert bg-info mt-1">
                                    Completa tu datos para realizar esta compra
                                </p>
                            )
                        } */}
                    </article>
                </article>
            </article>
        </section>
        { paymentIsOpen && <article className='content-onload-shadow'/> }
        </>
    )
}
// 0720006988000038698918
export default Product;