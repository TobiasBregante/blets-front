import { useRef, useState, useEffect } from "react";
import axios from 'axios';
import CategoryList from './category.list.component';
import OnLoadComponent from '../onload.component';
import GetItem from '../localStorage/getItem'
import { Router } from "next/router";

const AddProduct = props => {
    const imgRef = useRef(null);
    const [cookies, setCookie] = useState(GetItem('user'));
    const [imageProd, setImageProd] = useState('/img/img-not-found.png')
    const [imgUpload, setImgUpload] = useState({});
    const [title, setTitle] = useState('');
    const [titleSuccessProduct, setTitleSuccessProduct] = useState('d-none');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [amountSale, setAmountSale] = useState('');
    const [discount, setDiscount] = useState('');
    const [shipping, setShipping] = useState('true');
    const [location, setLocation] = useState('');
    const [type, setType] = useState('');
    const [contact, setContact] = useState('');
    const [CBU, setCBU] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [payment, setPayment] = useState('');
    const [onLoadAdd, setOnLoadAdd] = useState(false);
    const [hiddenBtn, setHiddenBtn] = useState('d-block');
    const [usrData, setUsrData] = useState({});

    const HandlerFindUser = async idUser => {
        const getUser = await axios.get(`${process.env.API_PATH}/v1/user/${idUser}`),
        resUser = await getUser?.data
        return resUser
    }

    useEffect(() => {
        HandlerFindUser(cookies?.user?.id)
        .then(r => setUsrData(r))
        .catch(er => console.error(er));
    }, [Router])

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
                frmData.append('title', `${title}`);
                frmData.append('description', `${description}`);
                frmData.append('amount', amount);
                frmData.append('amount_sale', amountSale || 'http://');
                frmData.append('discount', discount);
                frmData.append('payment', payment || 'http://');
                frmData.append('shipping', shipping);
                frmData.append('CBU', CBU);
                frmData.append('contact_business', contact || `${usrData?.phone?.area_code}${usrData?.phone?.number}`);
                frmData.append('business', cookies?.user?.business);
                frmData.append('location', location);
                frmData.append('type', type);
                frmData.append('subcategory', subCategory);
                axios.post(`${process.env.API_PATH}/v1/product`, frmData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Access-Control-Allow-Origin': '*',
                        'token': cookies.user.token
                    }
                })
                .then(productAdd => {
                    if(productAdd.data.insert){
                        setOnLoadAdd(false)
                        setHiddenBtn('d-block')
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
        handleAddProduct()
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
    }
    
    const handleInputTitle = e => setTitle(`${e.target.value}`),
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
            setImgUpload(e.target.files[0])
            reader.readAsDataURL(e.target.files[0]);
        }else{
            setImageProd('');
        }
    }
    return(
        <>
         <article className="col-12 col-sm-12 col-lg-6 col-xl-6 content-frm-login frm-create-influencer">
            <article className='col-12'>
                <h4 className='d-inline-flex'>Agregar un producto</h4>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="ml-2 bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg><hr/>
                <form onSubmit={handlerSubmit}>
                    <article className="row p-0">
                        <article className="col-12 col-sm-12 col-lg-6 col-xl-6 ml-auto mr-auto p-0">
                            <small className='p-2 m-0'>Título <span className='text-danger'>*</span></small>
                            {/* <input required onChange={handleInputTitle} className='d-block' type="text" placeholder='Título' value={title}/> */}

                            <textarea required onChange={handleInputTitle} className='d-block txt-title-frm' value={title} placeholder='Título'></textarea>
                            <small className='p-2 m-0'>Precio <span className='text-danger'>*</span></small>
                            <input required onChange={handleInputAmount} className='d-block' type="text" placeholder='Precio' value={amount}/>
                            <hr/>
                            <small className='p-2 m-0'>Seleccionar una imágen <span className='text-danger'>*</span></small>
                            <label htmlFor="btn-img-file" className="btn-label-file col-7 btn">
                                Seleccionar imágen
                            </label>
                            <input ref={imgRef} required id='btn-img-file' type="file" onChange={imgPreviewProd} className='d-none mt-2 mb-2' accept='image/*'/>
                            <article style={{backgroundImage: `url('${imageProd}')`}} className='img-preview-prod'></article>
                            <hr/>
                            <small className='p-2 m-0'>Categoría <span className='text-danger'>*</span></small>
                            <select required onChange={handleInputType} className='d-block bg-light'>
                                <option key='-1' value="null">-- Seleccionar una opción --</option>
                                {CategoryList.map((element, i) => <option key={i} value={element.category}>{element.title}</option>)}
                            </select>
                            {
                                type === 'indumentarias' && (
                                    <>
                                    <small className='p-2 m-0'>Sub-categoría <span className='text-danger'>*</span></small>
                                    <select required onChange={handleInputSubCategory} className='d-block bg-light'>
                                        <option value="null">No</option>
                                        <option value="hombre">Hombre</option>
                                        <option value="mujer">Mujer</option>
                                        <option value="niños">Niños</option>
                                        <option value="invierno">Invierno</option>
                                        <option value="verano">Verano</option>
                                    </select>
                                    </>
                                )
                            }
                        </article>
                        <article className="col-12 col-sm-12 col-lg-4 col-xl-4 ml-auto mr-auto p-0">
                            <small className='p-2 m-0'>Descuento <span className='text-danger'>*</span></small>
                            <input required onChange={handleInputDiscount} className='d-block' type="text" placeholder='Descuento' value={discount}/>
                            {/* <small className='p-2 m-0'>Link Mercado Pago <span className='text-danger'>*</span></small>
                            <input required onChange={handleInputPayment} className='d-block' type="text" placeholder='Link Mercado Pago' value={payment}/>
                            <small className='p-2 m-0'>Link Mercado Pago con descuento <span className='text-danger'>*</span></small>
                            <input required onChange={handleInputAmountSale} type="text" className="d-block" placeholder='Link Mercado Pago con descuento'/> */}
                            <small className="p-2 m-0">CBU de ingresos <span className='text-danger'>*</span></small>
                            <input onChange={handleInputCBU} type="text" name="CBU" className="d-block" placeholder='CBU de ingresos'/>
                            <small className="p-2 m-0">Teléfono { usrData?.phone && `(${usrData?.phone?.area_code}${usrData?.phone?.number})` }<span className='text-danger'>*</span></small>
                            <input onChange={handleInputContact} type="text" name="contact_business" className="d-block" placeholder={`${usrData?.phone?.area_code}${usrData?.phone?.number}`}/>
                            <small className='p-2 m-0'>Localidad <span className='text-danger'>*</span></small>
                            <input required onChange={handleInputLocation} className='d-block' type="text" placeholder='Localidad' value={location}/>
                        </article>
                        <article className="col-12 ml-auto mr-auto p-0">
                            <small className='p-2 m-0'>Descripción <span className='text-danger'>*</span></small>
                            <textarea required onChange={handleInputDescription} className='d-block' value={description} placeholder='Descripción'></textarea>
                            <input type="submit" value="Agregar" className='form-control d-block btn'/>
                            <p className={`bg-success text-light add-success ${titleSuccessProduct}`}>Se ha insertado con éxito!</p>
                        </article>
                    </article>
                </form>
            </article>
        </article>
        <OnLoadComponent.OnloadProductComponent status={onLoadAdd}/>
        </>
    )
}

export default AddProduct;