import { useRef, useState } from "react";
import axios from 'axios';
import { useRouter } from "next/router";
import CategoryList from './category.list.component';
import OnLoadComponent from '../onload.component';
import GetItem from '../localStorage/getItem'

const EditProduct = prop => {
    const Router = useRouter();
    const frmUpdate = useRef(null);
    const beforeFrm = useRef(null);
    const imgRef = useRef(null);
    const [cookies, setCookie] = useState(GetItem('user'));
    const [imageProd, setImageProd] = useState('')
    const [title, setTitle] = useState('');
    const [titleSuccessProduct, setTitleSuccessProduct] = useState('d-none');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [amountSale, setAmountSale] = useState('');
    const [discount, setDiscount] = useState('');
    const [shipping, setShipping] = useState('true');
    const [business, setBusiness] = useState('');
    const [location, setLocation] = useState('');
    const [type, setType] = useState('');
    const [contact, setContact] = useState('');
    const [CBU, setCBU] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [payment, setPayment] = useState('');
    const [onLoadAdd, setOnLoadAdd] = useState(false);
    const [hiddenBtn, setHiddenBtn] = useState('d-block');

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
                frmData.append('amount_sale', amountSale);
                frmData.append('discount', discount);
                frmData.append('payment', payment);
                frmData.append('shipping', shipping);
                frmData.append('CBU', CBU);
                frmData.append('contact_business', contact);
                frmData.append('business', cookies?.user?.business);
                frmData.append('location', location);
                frmData.append('type', type);
                frmData.append('subcategory', subCategory);
                axios.put(`${process.env.API_PATH}/v1/product/update/${prop.product._id}`, frmData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Access-Control-Allow-Origin': '*',
                        'token': cookies.user.token
                    }
                })
                .then(productAdd => {
                    if(productAdd.data.update){
                        setOnLoadAdd(false)
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
        setOnLoadAdd(true)
        setHiddenBtn('d-none')
        setLocation('')
        setDescription('')
        setAmount('')
        setAmountSale('')
        setDiscount('')
        setContact('')
        setCBU('')
        setTitle('')
        setType('')
        setImageProd('')
        setPayment('')
        handleUpdateProduct()
    }

    const handleInputTitle = e => setTitle(e.target.value),
    handleInputDescription = e => setDescription(`${e.target.value}`),
    handleInputAmount = e => setAmount(e.target.value),
    handleInputAmountSale = e => setAmountSale(e.target.value),
    handleInputDiscount = e => setDiscount(e.target.value),
    handleInputLocation = e => setLocation(e.target.value),
    handleInputType= e => setType(e.target.value),
    handleInputSubCategory = e => setSubCategory(e.target.value),
    handleInputPayment = e => setPayment(e.target.value),
    handleInputCBU = e => setCBU(e.target.value),
    handleInputContact = e => setContact(e.target.value),
    imgPreviewProd = e => {
        let reader = new FileReader()
        reader.onloadend = () => {
            setImageProd(reader.result);
        }
        if (e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
        }else{
            setImageProd('');
        }
    },
    handlerOpenEdit = () => {
        frmUpdate.current.classList.remove('d-none')
        beforeFrm.current.classList.remove('d-none');
    },
    handlerCloseEdit = () => {
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
                        <option key='-1' value="null">-- Seleccionar una opción --</option>
                        {CategoryList.map((element, i) => <option key={i} value={element.category}>{element.title}</option>)}
                    </select>
                    <small className='p-2 m-0'>Sub-categoría <span className='text-danger'>*</span></small>
                    <select onChange={handleInputSubCategory} className='d-block bg-light'>
                        <option value="null">No</option>
                        <option value="hombre">Hombre</option>
                        <option value="mujer">Mujer</option>
                        <option value="niños">Niños</option>
                        <option value="invierno">Invierno</option>
                        <option value="verano">Verano</option>
                    </select>
                    <small className='p-2 m-0'>Precio <span className='text-danger'>*</span></small>
                    <input onChange={handleInputAmount} className='d-block' type="text" placeholder='Precio' value={amount}/>
                    <small className='p-2 m-0'>Descuento <span className='text-danger'>*</span></small>
                    <input onChange={handleInputDiscount} className='d-block' type="text" placeholder='Descuento' value={discount}/>
                    <small className='p-2 m-0'>Descripción <span className='text-danger'>*</span></small>
                    <textarea onChange={handleInputDescription} className='d-block' value={description} placeholder='Descripción'></textarea>
                    <small className='p-2 m-0'>Link Mercado Pago <span className='text-danger'>*</span></small>
                    <input onChange={handleInputPayment} className='d-block' type="text" placeholder='Link Mercado Pago' value={payment}/>
                    <small className='p-2 m-0'>Link Mercado Pago con descuento <span className='text-danger'>*</span></small>
                    <input onChange={handleInputAmountSale} type="text" className="d-block" placeholder='Link Mercado Pago con descuento'/>
                    <small className="p-2 m-0">CBU de ingresos <span className='text-danger'>*</span></small>
                    <input onChange={handleInputCBU} type="text" name="CBU" className="d-block" placeholder='CBU de ingresos'/>
                    <small className="p-2 m-0">Teléfono <span className='text-danger'>*</span></small>
                    <input onChange={handleInputContact} type="text" name="contact_business" className="d-block" placeholder='Teléfono'/>
                    <small className='p-2 m-0'>Localidad <span className='text-danger'>*</span></small>
                    <input onChange={handleInputLocation} className='d-block' type="text" placeholder='Localidad' value={location}/>
                    <input onChange={handleInputTitle} type="submit" value="Agregar" className='form-control d-block btn'/>
                    <p className={`bg-success text-light add-success ${titleSuccessProduct}`}>Se ha insertado con éxito!</p>
                </form>
            </article>
        </article>
        <OnLoadComponent.OnloadProductComponent status={onLoadAdd}/>
        </>
    )
}

export default EditProduct;