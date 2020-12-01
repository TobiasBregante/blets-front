import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Router from 'next/router';
import SuperUser from './superUser/create.user.component';
import AddProduct from './management/add.product.component';
import ShowMetrics from './management/show.metrics.component';

const MyBusinessComp = () => {
    const [cookies, setCookie] = useCookies(['user']);
    const [valueDate, onChangeDate] = useState(new Date());
    useEffect(() => {
        if(cookies.user 
            && cookies.user.rol !== 'master'){
            Router.push('/')
        }else if(!cookies.user){
            Router.push('/')
        }
    })
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return(
        <>
        <article className="col-12 col-sm-12 col-lg-12 col-xl-12 content-title-my-business text-light mb-2 p-4">
            <img src="img/party.png" alt="welcome" className='party-title-gestion'/>
            <p className='d-inline p-4 title-gestion'>Bienvenido al Centro de Gestión, {cookies.user && cookies.user.user}</p>
            <span className='text-light bg-dark p-2 time-gestion'>{valueDate.toLocaleDateString("es-AR", options)}</span>
        </article>
        <ShowMetrics/>
        <AddProduct/>
        <SuperUser/>
        </>
    )
}
/*
    rol: String*/

export default MyBusinessComp;