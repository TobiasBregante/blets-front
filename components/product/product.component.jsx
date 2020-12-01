import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from "next/router";
import CurrencyFormat from 'react-currency-format';
import SendTransaction from './send.transaction.component';
import RemoveProduct from '../management/remove.product.component';
import EditProduct from '../management/edit.product.component';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import { useRef } from 'react';
import Link from 'next/link';

const Product = prop => {
    const Router = useRouter();
    const { id, name } = Router.query;
    const imgContent = useRef(null);
    const [credential, setCredential] = useState('');
    const [imgCard, setImgCard] = useState('d-none')
    const [imgContentState, setImgContentState] = useState('');
    const [cookies, setCookie] = useCookies(['user']);
    const [product, setProduct] = useState([]);
    const [influencerTokenExist, setInfluencerTokenExist] = useState('d-none');
    const [userIsNotReffered, setUserIsNotReffered] = useState('')
    const [influencerTokenNoExist, setInfluencerTokenNoExist] = useState('');
    const [acceptPaymentSwitch, setAcceptPaymentSwitch] = useState('accept-payment-close');
    const [valueBtnSwitchPayment, setValueBtnSwitchPayment] = useState('Compralo en un instante!');
    const [switchNextStepPayment, setSwitchNextStepPayment] = useState('d-none');
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
        const handlerTokenExist = () => {
            if(cookies.user 
                && cookies.user.discount_token){
                setInfluencerTokenExist('')
                setInfluencerTokenNoExist('d-none')
                setUserIsNotReffered('');
            }else{
                setInfluencerTokenExist('d-none')
                setInfluencerTokenNoExist('')
                setUserIsNotReffered('d-none');
            }
            //kfuiqqbr-blets
        }
        if(product.img)setImgContentState(imgContent.current.offsetWidth);
        handlerTokenExist()
    }, null)
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
    }
    const handlerTransaction = () => {
        const objectTransaction = {
            id_product: product._id,
            token_influencer: (cookies.user.discount_token) ? cookies.user.discount_token : 'organic',
            id_client: cookies.user.id,
            status_transaction: 'pending'
        }
        SendTransaction(objectTransaction)
        .then(success => {
            setSwitchNextStepPayment('d-block');
        })
        .catch(err => console.error(err))
    }
    useEffect(() => {
        const getAllProduct = async () => {
            const fetchAll = await fetch(`${process.env.API_PATH}/v1/product/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            })
            const dataFetch = await fetchAll.json();
            setProduct(dataFetch);
            console.log(dataFetch)
        }
        getAllProduct()
    }, [id])
    return(
        <>
        <section className="row section-product">
            <article className='col-12 col-sm-12 col-lg-12 col-xl-12 p-0 m-0'>
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
                <article className="col-12">
                    <h2>Descripción</h2><hr/>
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
            <article className="col-12 col-sm-12 col-lg-4 col-xl-4">
                <article className="col-12">
                    <h1 className="component-info-buy">{product.title}</h1>
                    <h4 className={`text-primary component-info-buy ${userIsNotReffered}`}>
                        {(product.amount !== 0) 
                        ? <CurrencyFormat value={product.amount} 
                            displayType={'text'} 
                            thousandSeparator={true} 
                            prefix={'$'}/>
                        : <span className='text-success'>GRATIS</span>}
                    </h4>
                    <h4 className={`text-light component-info-buy ${influencerTokenNoExist}`}>
                        {(product.amount !== 0) 
                        ? <CurrencyFormat value={product.amount} displayType={'text'} thousandSeparator={true} prefix={'$'}/>
                        : <span className='text-success'>GRATIS</span>}
                    </h4>
                    <strike className={influencerTokenExist}>
                        <h5 className={`text-secondary component-info-buy ${(product.discount === 0) ? 'd-none' : ''}`}>
                            <CurrencyFormat value={(product.amount * product.discount) / 100} 
                                displayType={'text'} 
                                thousandSeparator={true} 
                                prefix={'$'}/>
                        </h5 >
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
                <article className="col-12">
                    <p className="component-info-buy">Pagá al contado o en cuotas con 
                    <span className="text-info"> <strong>Mercado Pago</strong></span></p>
                    <p>
                        <span className='bg-primary p-2 text-light'>
                            Se encuentra en <strong>{product.location}</strong>
                        </span>
                    </p>
                    <article className='col-12 p-1 content-method-buy-steps mb-2 text-light'>
                        <ol type='1'>
                            <li className='p-1'>Hacé click en <small>"Compralo en un instante!"</small></li>
                            <li className='p-1'>Hacé el pago con Mercado Pago</li>
                            <li className='p-1'>Sacale una foto o screenshot al comprobante de pago</li>
                            <li className='p-1'><a href={product.contact_business} className='btn btn-success'>Envíalo por WhatsApp!</a></li>
                        </ol>
                    </article>
                    <article className={`col-12 accept-payment ${acceptPaymentSwitch}`}>
                        <article className={`content--btn-payment p-5 ${acceptPaymentSwitch}`}>
                            <article className="btn-content">
                                <p className={`${acceptPaymentSwitch}`}>Finaliza tu pago, y te lo enviamos a tu casa!</p>
                                <a href={product.payment} onClick={handlerTransaction} target='_blank' className={`btn btn-primary text-light d-block ${acceptPaymentSwitch}`}>
                                    Pagar con Mercado Pago!
                                </a>
                                <p className='mt-4 content-cbu'>
                                    CBU: <span className='text-warning'>
                                    {product.CBU}
                                    </span>
                                </p><hr/>
                                <p>
                                    <img className='ico-payments' src="../img/visa.png" alt="Visa"/>
                                    <img className='ico-payments' src="../img/mastercard.png" alt="Mastercard"/>
                                    <img className='ico-payments' src="../img/transfer.png" alt="Transferencia"/>
                                    <img className='ico-payments' src="../img/mp.webp" alt="Mercado Pago"/>
                                </p>
                                <p className={`mt-4 ${switchNextStepPayment}`}>Estás a un paso de finalizar tu compra!<br/>
                                Envía una foto del comprobante <a href='#' className='btn btn-success'>Envíalo por WhatsApp!</a></p>
                            </article>       
                        </article>
                    </article>
                    <input onClick={handlerAcceptPaymentSwitch} type='button' className="btn btn-buy-now text-light d-block col-12" value={valueBtnSwitchPayment}/>
                </article>
            </article>
        </section>
        </>
    )
}
// 0720006988000038698918
export default Product;