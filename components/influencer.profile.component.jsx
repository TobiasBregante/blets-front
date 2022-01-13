import { useEffect, useState } from 'react';
import Router from 'next/router';
import ShowMetrics from './management/influencer/show.metrics.component';
import PanelPrivacy from './management/influencer/panel.privacy.component'
import GetItem from "./localStorage/getItem";

const MyProfileComp = () => {
    const [cookies, setCookie] = useState(GetItem('user'));
    const [valueDate, onChangeDate] = useState(new Date());
    const [influencerLogged, setInfluencerLogged] = useState('');

    useEffect(() => {
        if(cookies.user 
            && cookies.user.rol !== 'influencer'){
            window.location = '/';
        }else if(!cookies.user){
            window.location = '/';
        }
        cookies.user ? setInfluencerLogged(cookies.user.user) : false;
    })
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    
    return(
        <>
        <article className="col-12 col-sm-12 col-lg-12 col-xl-12 bg-dark text-light mb-2 p-4">
            <img src="img/party.png" alt="welcome" className='party-title-gestion'/>
            <h2 className='d-inline p-4 title-gestion'>Bienvenido a tu perfil, {influencerLogged}</h2>
            <span className='text-light bg-dark p-2 time-gestion'>{valueDate.toLocaleDateString("es-AR", options)}</span>
        </article>
        <ShowMetrics/>
        <article className='col-8 col-sm-8 col-lg-8 col-xl-8 p-0'>
            <hr/><h5>Mi cuenta</h5>
        </article>
        <article className='col-4 col-sm-4 col-lg-4 col-xl-4 p-0 btn-support-influencer'>
            <hr/><a href='#' className='btn btn-primary' target='_blank'>
                Contactar soporte
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-info-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg>
            </a>
        </article>
        <PanelPrivacy dataUser={cookies}/>
        </>
    )
}
/*
    rol: String*/

export default MyProfileComp;