import { useEffect, useRef, useState } from "react"
import CurrencyFormat from 'react-currency-format'
import {CloudinaryContext, Image, Transformation } from 'cloudinary-react'

const ColSellPending = ({ transaction }) => {
    const imgContent = useRef(null);
    const cardViewMore = useRef(null);
    const cardViewMoreUser = useRef(null);
    const proofRef = useRef(null);
    const [imgContentState, setImgContentState] = useState('');

    const handlerSwitchCardView = e => {
        if(cardViewMore !== null){
            cardViewMore.current.classList.toggle('d-block');
            e.target.classList.toggle('btn-danger');
            e.target.value = (e.target.value === 'Producto') ? 'Cerrar' : 'Producto'
        }
    },
    handlerSwitchCardViewCustomer = e => {
        if(cardViewMoreUser !== null){
            cardViewMoreUser.current.classList.toggle('d-block');
            e.target.classList.toggle('btn-danger');
            e.target.value = (e.target.value === 'Cliente') ? 'Cerrar' : 'Cliente'
        }
    },
    handlerSwitchCardViewProof = e => {
        if(proofRef !== null){
            proofRef.current.classList.toggle('d-block');
            e.target.classList.toggle('btn-danger');
            e.target.value = (e.target.value === 'Comprobante de pago') ? 'Cerrar comprobante' : 'Comprobante de pago'
            setImgContentState(imgContent.current.offsetWidth);
        }
    }

    useEffect(() => {
        transaction.proof_payment && setImgContentState(imgContent.current.offsetWidth);
    })

    return(
        <article className='col-12 col-sm-12 col-lg-12 col-xl-12 col-sells'>
            <ul>
                <li>Negocio: <span className='text-dark'><strong>{ transaction.product.business }</strong></span></li>
                <li>
                    Canal: 
                    <span>
                        <strong>
                            { 
                                transaction.token_influencer === 'organic' 
                                ? <span className='ml-1 badge bg-primary text-light'>Orgánico <span className='badge bg-danger text-light p-1'>sin descuento</span></span> 
                                : <span className='ml-1 badge bg-success text-light'>Referido <span className='badge bg-primary text-light p-1'>con descuento</span></span>
                            }
                        </strong>
                    </span>
                </li>
                <li>
                    Precio: <span className='text-success'>
                        <strong>
                            {
                                transaction.token_influencer === 'organic' 
                                ? <CurrencyFormat 
                                    value={transaction.product.amount} 
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                                : <CurrencyFormat 
                                    value={(transaction.product.amount -((transaction.product.amount * transaction.product.discount) / 100))} 
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            } ARS
                        </strong></span>
                </li>
                <li>
                    Estado:
                    <strong>
                        { 
                            transaction.status_transaction === 'pending' 
                            ? <span className='ml-1 badge bg-warning text-light'>Pendiente</span> 
                            : <span className='ml-1 badge bg-success text-light'>Aprobado</span>
                        }
                    </strong>
                </li>
            </ul>
            <input onClick={handlerSwitchCardView} type="button" className='btn btn-primary' value="Producto"/>
            <input onClick={handlerSwitchCardViewCustomer} type="button" className='btn btn-primary' value="Cliente"/>
            <input onClick={handlerSwitchCardViewProof} type="button" className='btn btn-primary' value="Comprobante de pago"/>
            <ul className='content-description-prod-transaction-proof d-none' ref={proofRef}>
                <li ref={imgContent}>
                    <p className='p-2 bg-warning col-2'>comprobante de pago</p> 
                    <CloudinaryContext cloudName="blets">
                        <Image className='card-img' publicId={`${transaction.proof_payment}.jpg`}>
                            <Transformation crop='scale' quality='40' width={(imgContentState - 50)} dpr='auto'/>
                        </Image>
                    </CloudinaryContext>
                </li>
            </ul>
            <ul className='content-description-prod-transaction d-none' ref={cardViewMore}>
                <li>Título: <strong>{transaction.product.title}</strong></li>
                <li className='desc-card-view-transaction'>
                    Descripción: 
                    <p className='p-3 d-inline'>
                        <strong> {transaction.product.description}</strong>
                    </p>
                </li>
                <li>Localidad: <strong>{transaction.product.location}</strong></li>
                <li>Negocio: <strong>{transaction.product.business}</strong></li>
                <li>Categoría <strong>{transaction.product.type}</strong></li>
            </ul>
            <ul className='content-description-prod-transaction d-none' ref={cardViewMoreUser}>
                <li>Nombre: <strong>{transaction.payer.name}</strong></li>
                <li>Apellido: <strong>{transaction.payer.surname}</strong></li>
                <li>Email: <strong>{transaction.payer.email}</strong></li>
                <li>Cod. área: <strong>({transaction.payer.phone.area_code})</strong> Tel: <strong>{transaction.payer.phone.number}</strong></li>
                <li>Localidad: <strong>{transaction.payer.location}</strong></li>
                <li>Cód. Postal: <strong>{transaction.payer.address.zip_code}</strong></li>
                <li>Calle: <strong>{transaction.payer.address.street_name}</strong></li>
                <li>Altura: <strong>{transaction.payer.address.street_number}</strong></li>
            </ul>
        </article>
    )
}

export default ColSellPending;