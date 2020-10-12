import { useState } from "react";
import { useEffect } from "react";
import { useCookies } from 'react-cookie';

const PanelPrivacy = props => {
    const [cookies, setCookie] = useCookies(['user']);
    const [influencer, setInfluencer] = useState({});
    const [pdwPanelInfluencer, setPdwPanelInfluencer] = useState('');
    useEffect(() => {
        const handlerFetchInfluencer = async () => {
            const userFetch = await fetch(`${process.env.API_PATH}/v1/profile/influencer/${cookies.user.id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
            const userData = await userFetch.json();
            setInfluencer(userData);
        }
        if(cookies.user){
            handlerFetchInfluencer();
            setPdwPanelInfluencer(cookies.user.pdw);
        }
            
    }, [props]);
    return(
        <>
        <article className='panel-privacy-influencer col-12 col-sm-12 col-lg-12 col-xl-12 p-0 mt-4'>
            <article className='col-12 p-4 bg-primary text-light'>
                <p>Código promocional <span className='bg-warning text-dark p-2'>{influencer.public_token}</span></p>
            </article>
            <article className='col-12 p-4 bg-primary text-light'>
                <p>Nombre completo: <span className='bg-warning text-dark p-2'>{influencer.fullname}</span></p>
            </article>
            <article className='col-12 p-4 bg-primary text-light'>
                <p>Nombre usuario: <span className='bg-warning text-dark p-2'>{influencer.username}</span></p>
            </article>
            <article className='col-12 p-4 bg-primary text-light'>
                <p>Nº seguidores: <span className='bg-warning text-dark p-2'>{influencer.followers}</span></p>
            </article>
            <article className='col-12 p-4 bg-primary text-light'>
                <p>Contraseña: <span className='bg-warning text-dark p-2'>{pdwPanelInfluencer}</span></p>
            </article>
            <article className='col-12 p-4 bg-primary text-light'>
                <p>Localidad: <span className='bg-warning text-dark p-2'>{influencer.location}</span></p>
            </article>
            <article className='col-12 p-4 bg-primary text-light'>
                <p>Correo electrónico: <span className='bg-warning text-dark p-2'>{influencer.email}</span></p>
            </article>
            <article className='col-12 p-4 bg-primary text-light'>
                <p>Negocio: <span className='bg-warning text-dark p-2'>{influencer.business}</span></p>
            </article>
            <article className='col-12 p-4 bg-primary text-light'>
                <p>Fecha de registro: <span className='bg-warning text-dark p-2'>{influencer.since_create}</span></p>
            </article>
        </article>
        </>    
    )
}

export default PanelPrivacy;