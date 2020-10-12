import { useRef, useState } from "react";
import { useCookies } from 'react-cookie';
import axios from 'axios';

const AddProduct = props => {
    const imgRef = useRef(null);
    const [cookies, setCookie] = useCookies(['user']);
    const [imageProd, setImageProd] = useState('/img/img-not-found.png')
    const [imgUpload, setImgUpload] = useState({});
    const [title, setTitle] = useState('');
    const [titleSuccessProduct, setTitleSuccessProduct] = useState('d-none');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [discount, setDiscount] = useState('');
    const [shipping, setShipping] = useState('');
    const [business, setBusiness] = useState('');
    const [location, setLocation] = useState('');
    const [type, setType] = useState('');
    const [payment, setPayment] = useState('');

    const handleAddProduct = async () => {
        await fetch(`${process.env.API_PATH}/v1/auth`, {
            body: JSON.stringify({token: await cookies.user.token}), 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'token': cookies.user.token
            }
        })
        .then(res => res.json())
        .then(async success => {
            if(success.auth){
                let frmData = new FormData();
                frmData.append('img', imgRef.current.files[0]);
                frmData.append('title', title);
                frmData.append('description', description);
                frmData.append('amount', amount);
                frmData.append('discount', discount);
                frmData.append('payment', payment);
                frmData.append('shipping', shipping);
                frmData.append('business', business);
                frmData.append('location', location);
                frmData.append('type', type);
                axios.post(`${process.env.API_PATH}/v1/product`, frmData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Access-Control-Allow-Origin': '*',
                        'token': cookies.user.token
                    }
                })
                .then(productAdd => {
                    if(productAdd.data.insert){
                        setTitleSuccessProduct('d-block');
                        setTimeout(() => {
                            setTitleSuccessProduct('d-none'); 
                        }, 2500)
                    }else{
                        console.log('error: product is not added')
                    }
                })
                .catch(errAdd => console.error(errAdd))
            }
        })
        .catch(err => console.error(err))
    }
    const handlerSubmit = e => {
        e.preventDefault()
        handleAddProduct()
        setLocation('')
        setDescription('')
        setAmount('')
        setDiscount('')
        setShipping('')
        setBusiness('')
        setTitle('')
        setType('')
        setImageProd('')
        setPayment('')
    }
    
    const handleInputTitle = e => {
        setTitle(e.target.value)
    }
    const handleInputDescription = e => {
        setDescription(`${e.target.value}`)        
    }
    const handleInputAmount = e => {
        setAmount(e.target.value)
    }
    const handleInputDiscount = e => {
        setDiscount(e.target.value)
    }
    const handleInputShipping = e => {
        setShipping(e.target.value)
    }
    const handleInputBusiness = e => {
        setBusiness(e.target.value)
    }
    const handleInputLocation = e => {
        setLocation(e.target.value)
    }
    const handleInputType= e => {
        setType(e.target.value)
    }
    const imgPreviewProd = e => {
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
    const handleInputPayment = e => {
        setPayment(e.target.value);
    }
    return(
        <>
         <article className="col-12 col-sm-12 col-lg-6 col-xl-6 content-frm-login frm-create-influencer">
            <article className='col-12'>
                <h4 className='d-inline-flex'>Agregar un producto</h4>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="ml-2 bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                <form onSubmit={handlerSubmit}>
                    <small className='p-2 m-0'>Título <span className='text-danger'>*</span></small>
                    <input required onChange={handleInputTitle} className='d-block' type="text" placeholder='Título' value={title}/>
                    <small className='p-2 m-0'>Seleccionar una imágen <span className='text-danger'>*</span></small>
                    <input ref={imgRef} required type="file" onChange={imgPreviewProd} className='mt-2 mb-2' accept='image/*'/>
                    <article style={{backgroundImage: `url('${imageProd}')`}} className='img-preview-prod'></article>
                    <small className='p-2 m-0'>Categoría <span className='text-danger'>*</span></small>
                    <select required onChange={handleInputType} className='d-block bg-light'>
                        <option value="null">-- Seleccionar una opción --</option>
                        <option value="accesorios">Accesorios</option>
                        <option value="belleza">Belleza</option>
                        <option value="bolsos-y-carteras">Bolsos y Carteras</option>
                        <option value="celulares">Celulares</option>
                        <option value="computacion">Computación</option>
                        <option value="consolas">Consolas</option>
                        <option value="camaras">Cámaras</option>
                        <option value="deportes-y-fitness">Deportes y Fitness</option>
                        <option value="diseño">Diseño</option>
                        <option value="electrodomesticos">Electrodomésticos</option>
                        <option value="indumentarias">Indumentarias</option>
                        <option value="joyas">Joyas</option>
                        <option value="mates">Mates</option>
                        <option value="marketing">Marketing</option>
                        <option value="muebles">Muebles</option>
                        <option value="musica">Música</option>
                        <option value="viajes">Viajes</option>
                        <option value="zapatos">Zapatos</option>
                    </select>
                    <small className='p-2 m-0'>Precio <span className='text-danger'>*</span></small>
                    <input required onChange={handleInputAmount} className='d-block' type="text" placeholder='Precio' value={amount}/>
                    <small className='p-2 m-0'>Descuento <span className='text-danger'>*</span></small>
                    <input required onChange={handleInputDiscount} className='d-block' type="text" placeholder='Descuento' value={discount}/>
                    <small className='p-2 m-0'>Descripción <span className='text-danger'>*</span></small>
                    <textarea required onChange={handleInputDescription} className='d-block' value={description} placeholder='Descripción'></textarea>
                    <small className='p-2 m-0'>Link Mercado Pago <span className='text-danger'>*</span></small>
                    <input required onChange={handleInputPayment} className='d-block' type="text" placeholder='Link Mercado Pago' value={payment}/>
                    <small className='p-2 m-0'>Empresa <span className='text-danger'>*</span></small>
                    <input required onChange={handleInputBusiness} className='d-block' type="text" placeholder='Empresa' value={business}/>
                    <small className='p-2 m-0'>Localidad <span className='text-danger'>*</span></small>
                    <input required onChange={handleInputLocation} className='d-block' type="text" placeholder='Localidad' value={location}/>
                    <small className='p-2 m-0'>Envíos <span className='text-danger'>*</span></small>
                    <select required onChange={handleInputShipping} className='mb-2 d-block bg-light'>
                        <option value="null">-- Seleccionar una opción --</option>
                        <option value="true">Acepto envíos</option>
                        <option value="false">No acepto envíos</option>
                    </select>
                    <input onChange={handleInputTitle} type="submit" value="Agregar" className='form-control d-block btn'/>
                    <p className={`bg-success text-light add-success ${titleSuccessProduct}`}>Se ha insertado con éxito!</p>
                </form>
            </article>
        </article>
        </>
    )
}

export default AddProduct;