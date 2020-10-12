import { useRef } from "react";
import { useState } from "react"
import { useEffect } from "react"
import { useRouter } from 'next/router';


const ColSellPending = prop => {
    const Router = useRouter();
    const [product, setProduct] = useState([]);
    const [user, setUser] = useState([]);
    const cardViewMore = useRef(null);
    const cardViewMoreUser = useRef(null);
    const getAllProduct = async id => {
        const fetchAll = await fetch(`${process.env.API_PATH}/v1/product/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        const dataFetch = await fetchAll.json();
        setProduct(dataFetch);
    }
    const FindUser = async id => {
        const fetchUser = await fetch(`${process.env.API_PATH}/v1/user/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        const dataFetch = await fetchUser.json();
        setUser(dataFetch);
    }
    const handlerAcceptPayment = async (id, value) => {
        // prop.dataOrder
        let data = false;
        const fetchUser = await fetch(`${process.env.API_PATH}/v1/product/transaction/payments/${id}`, {
            method: 'PUT',
            body: JSON.stringify({response: value}),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        const dataFetch = await fetchUser.json();
        if(dataFetch.update){
            data = true;
        }
        return data;
    }
    const handlerClickPayment = e => {
        handlerAcceptPayment(prop.dataOrder._id, e.target.value)
        .then(success => {
            if(success){
                Router.push(window.location.pathname)
            }
        })
        .catch(err => console.error(err))
    }
    useEffect(() => {
        getAllProduct(prop.idProduct);
        FindUser(prop.dataOrder.id_client);
    }, [prop]);

    const handlerSwitchCardView = e => {
        if(cardViewMore !== null){
            cardViewMore.current.classList.toggle('d-block');
            e.target.classList.toggle('btn-danger');
            e.target.value = (e.target.value === 'Ver descripción del producto') ? 'Cerrar' : 'Ver descripción del producto'
        }
    }
    const handlerSwitchCardViewCustomer = e => {
        if(cardViewMoreUser !== null){
            cardViewMoreUser.current.classList.toggle('d-block');
            e.target.classList.toggle('btn-danger');
            e.target.value = (e.target.value === 'Ver descripción del cliente') ? 'Cerrar' : 'Ver descripción del cliente'
        }
    }
    const canalBuyClient = (prop.dataOrder.token_influencer === 'organic') 
    ? 'Orgánico' : prop.dataOrder.token_influencer;
    return(
        <article className='col-12 col-sm-12 col-lg-12 col-xl-12 col-sells'>
            <ul>
                <li>Cliente: <span className='text-dark'><strong>{user.username}</strong></span></li>
                <li>Canal: <span className='text-primary'> <strong>{canalBuyClient}</strong></span></li>
                <li>Precio: <span className='text-success'><strong>{product ? `$${product.amount}` : <span className='text-secondary'>producto no disponible</span>}</strong></span></li>
                <li className={prop.dataOrder.status_transaction === 'success'
                    || prop.dataOrder.status_transaction === 'refuse'
                    ? 'd-none' : ''}>
                    <button onClick={handlerClickPayment} type="button" value="success" className="btn btn-primary">
                        Acreditado
                    </button>
                    <button onClick={handlerClickPayment} type="button" value="refuse" className="btn btn-warning">
                        Rechazado
                    </button>
                </li>
                <li className={prop.dataOrder.status_transaction === 'success' ? 'text-success' : 'd-none'}>
                    <strong>Acreditado</strong>
                    <svg width="2em" 
                        height="2em" 
                        viewBox="0 0 16 16" 
                        className="ml-2 bi bi-check-circle-fill" 
                        fill="currentColor" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path 
                        fillRule="evenodd" 
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                </li>
                <li className={prop.dataOrder.status_transaction === 'refuse' ? 'text-danger' : 'd-none'}>
                    <strong>Rechazado</strong>
                    <svg width="2em" 
                        height="2em" 
                        viewBox="0 0 16 16" 
                        className="ml-2 bi bi-x-octagon-fill" 
                        fill="currentColor" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" 
                        d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                    </svg>
                </li>
            </ul>
            <input onClick={handlerSwitchCardView} type="button" className='btn btn-secondary' value="Ver descripción del producto"/>
            <input onClick={handlerSwitchCardViewCustomer} type="button" className='btn btn-info' value="Ver descripción del cliente"/>
            <ul className='content-description-prod-transaction d-none' ref={cardViewMore}>
                <li>Título: <strong>{product ? product.title : 'producto no disponible'}</strong></li>
                <li className='desc-card-view-transaction'>Descripción: <p className='p-3 d-inline'><strong>{product ? product.description  : 'producto no disponible'}</strong></p></li>
                <li>Localidad: <strong>{product ? product.location : 'producto no disponible'}</strong></li>
                <li>Negocio: <strong>{product ? product.business : 'producto no disponible'}</strong></li>
                <li>Categoría <strong>{product ? product.type : 'producto no disponible'}</strong></li>
            </ul>
            <ul className='content-description-prod-transaction d-none' ref={cardViewMoreUser}>
                <li>Nombre de Usuario: <strong>{user.username}</strong></li>
                <li>Nombre completo: <strong>{user.fullname}</strong></li>
                <li>Correo electrónico: <strong>{user.email}</strong></li>
                <li>Localidad: <strong>{user.location}</strong></li>
            </ul>
        </article>
    )
}

export default ColSellPending;