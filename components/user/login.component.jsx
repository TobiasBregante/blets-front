import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useState } from "react";
import { useCookies } from 'react-cookie';

const Login = () => {
    // get value inputs of form login
    const [user, setUser] = useState('');
    const [pdw, setPdw] = useState('');
    const userWarning = useRef(null);
    // user cookie
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    // switch for view or not pdw when write
    const [viewPdw, setViewPdw] = useState('password');
    const [viewPdwClose, setViewPdwClose] = useState('d-none');
    const [viewPdwOpen, setViewPdwOpen] = useState('d-block');
    // handler of view pdw or not
    const handlePdwView = () => {
        if(viewPdwClose === 'd-none'){
            setViewPdwClose('d-block');
            setViewPdwOpen('d-none');
            setViewPdw('text');
        }else{
            setViewPdwClose('d-none');
            setViewPdwOpen('d-block');
            setViewPdw('password');
        }
    }
    // handler of the start session of the login
    const userSessionStart = async (username, userPdw) => {
        let statusUser = false;
        const res = await fetch(`${process.env.API_PATH}/v1/user/login`, {
            body: JSON.stringify({username: username, pdw: userPdw}), 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        const datares = await res.json()
        if(datares.status == 401){
            userWarning.current.classList.toggle('d-block');
            setTimeout(() => {
                userWarning.current.classList.toggle('d-block');
            }, 2500)
        }else{
            setCookie('user', datares, { maxAge: 86400 });
            statusUser = {
                status: true
            }
        }
        return statusUser;
    }
    // event submit and get data of the user for the login
    const handleSubmit = e => {
        e.preventDefault()
        // get for parameter the data of the form login for your verification
        userSessionStart(user, pdw)
        .then(success => success.status ? window.location = '/' : false);
    }
    // handler value input username
    const handleChangeUsername = e => {
        setUser(e.target.value);
    }
    const handleChangePdw = e => {
        setPdw(e.target.value);
    }
    return(
        <article className="content-frm-login col-10 col-sm-10 col-lg-4 col-xl-4 m-auto bg-dark">
            <h1 className='title-login'>Iniciar sesión</h1>
            <form onSubmit={handleSubmit} id='frm-login'>
                <p ref={userWarning} className="user-warning d-none bg-danger p-2">Los datos son incorrectos</p>
                <input onChange={handleChangeUsername} type='text' name='user' placeholder='Nombre de usuario'/>
                <article className="col-12 p-0">
                    <input onChange={handleChangePdw} type={viewPdw} name='pdw' placeholder='Contraseña'/>
                    <button onClick={handlePdwView} type='button' className='btn-switch-pdw'>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className={`bi bi-eye-slash ${viewPdwClose}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709z"/>
                            <path fillRule="evenodd" d="M13.646 14.354l-12-12 .708-.708 12 12-.708.708z"/>
                        </svg>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className={`bi bi-eye ${viewPdwOpen}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"/>
                            <path fillRule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                        </svg>
                    </button>
                </article>
                <input className='btn' type='submit' value='Iniciar sesión'/>
                <Link href='/registrarme' as='/registrarme'>
                    <a>
                        Registrarme ahora
                    </a>
                </Link>
            </form>
        </article>
    )
}

export default Login;
