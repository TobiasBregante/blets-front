import { useRef } from "react";
import { useState } from "react";
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useRouter } from "next/router";

const EditProduct = prop => {
    const Router = useRouter();
    const frmUpdate = useRef(null);
    const beforeFrm = useRef(null);
    const imgRef = useRef(null);
    const [cookies, setCookie] = useCookies(['user']);
    const [imageProd, setImageProd] = useState('')
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
    const handleUpdateProduct = async () => {
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
                frmData.append('imgPublicId', prop.product.img);
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
                axios.put(`${process.env.API_PATH}/v1/product/update/${prop.product._id}`, frmData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Access-Control-Allow-Origin': '*',
                        'token': cookies.user.token
                    }
                })
                .then(productAdd => {
                    if(productAdd.data.update){
                        Router.reload(window.location.pathname);
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
        handleUpdateProduct()
    }
    const handleInputTitle = e => {
        setTitle(e.target.value)
    }
    const handleInputDescription = e => {
        setDescription(e.target.value)
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
            reader.readAsDataURL(e.target.files[0]);
        }else{
            setImageProd('');
        }
    }
    const handleInputPayment = e => {
        setPayment(e.target.value);
    }
    const handlerOpenEdit = () => {
        frmUpdate.current.classList.remove('d-none')
        beforeFrm.current.classList.remove('d-none');
    }
    const handlerCloseEdit = () => {
        frmUpdate.current.classList.add('d-none')
        beforeFrm.current.classList.add('d-none');
    }
    return(
        <>
        <button onClick={handlerOpenEdit} className='btn-edit-product-open btn-warning btn' type='button'>
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="ml-2 bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
        </button>
        <article ref={beforeFrm} className='d-none content-edit-product-before'></article>
         <article ref={frmUpdate} className="d-none col-12 col-sm-12 col-lg-12 col-xl-12 content-frm-login frm-create-influencer content-edit-product">
            <button onClick={handlerCloseEdit} type='button' className='btn btn-danger btn-close-frm-edit'>
                x
            </button>
            <article className='col-12'>
                <h4 className='d-inline-flex'>Editar un producto</h4>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="ml-2 bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
                <form onSubmit={handlerSubmit}>
                    <small className='p-2 m-0'>Título <span className='text-danger'>*</span></small>
                    <input onChange={handleInputTitle} className='d-block' type="text" placeholder='Título' value={title}/>
                    <small className='p-2 m-0'>Seleccionar una imágen <span className='text-danger'>*</span></small>
                    <input ref={imgRef} type="file" onChange={imgPreviewProd} className='mt-2 mb-2' accept='image/*'/>
                    <article style={{backgroundImage: `url('${imageProd}')`}} className='img-preview-prod'></article>
                    <small className='p-2 m-0'>Categoría <span className='text-danger'>*</span></small>
                    <select onChange={handleInputType} className='d-block bg-light'>
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
                    <input onChange={handleInputAmount} className='d-block' type="text" placeholder='Precio' value={amount}/>
                    <small className='p-2 m-0'>Descuento <span className='text-danger'>*</span></small>
                    <input onChange={handleInputDiscount} className='d-block' type="text" placeholder='Descuento' value={discount}/>
                    <small className='p-2 m-0'>Descripción <span className='text-danger'>*</span></small>
                    <textarea onChange={handleInputDescription} className='d-block' value={description} placeholder='Descripción'></textarea>
                    <small className='p-2 m-0'>Link Mercado Pago <span className='text-danger'>*</span></small>
                    <input onChange={handleInputPayment} className='d-block' type="text" placeholder='Link Mercado Pago' value={payment}/>
                    <small className='p-2 m-0'>Empresa <span className='text-danger'>*</span></small>
                    <input onChange={handleInputBusiness} className='d-block' type="text" placeholder='Empresa' value={business}/>
                    <small className='p-2 m-0'>Localidad <span className='text-danger'>*</span></small>
                    <input onChange={handleInputLocation} className='d-block' type="text" placeholder='Localidad' value={location}/>
                    <small className='p-2 m-0'>Envíos <span className='text-danger'>*</span></small>
                    <select onChange={handleInputShipping} className='mb-2 d-block bg-light'>
                        <option value="null">-- Seleccionar una opción --</option>
                        <option value="true">Acepto envíos</option>
                        <option value="false">No acepto envíos</option>
                    </select>
                    <input onChange={handleInputTitle} type="submit" value="Agregar" className='d-block btn'/>
                    <p className={`bg-success text-light add-success ${titleSuccessProduct}`}>Se ha insertado con éxito!</p>
                </form>
            </article>
        </article>
        </>
    )
}

export default EditProduct;