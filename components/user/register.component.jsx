import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useCookies } from 'react-cookie';

const Register = () => {
    // get value inputs of form login
    const [user, setUser] = useState('');
    const [pdw, setPdw] = useState('');
    const [userEmail, setEmail] = useState('');
    const [geoData, setGeoData] = useState([]);
    const [fullname, setFullname] = useState('');
    const [location, setLocation] = useState('');
    const userWarning = useRef(null);
    const userSuccess = useRef(null);
    // user cookie
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    // switch for view or not pdw when write
    const [viewPdw, setViewPdw] = useState('password');
    const [viewPdwClose, setViewPdwClose] = useState('d-none');
    const [viewPdwOpen, setViewPdwOpen] = useState('d-block');

    // array list of South América provinces, Argentina
    useEffect(() => {
        const geoDataFetch = async () => {
            const geo = await fetch('https://apis.datos.gob.ar/georef/api/provincias');
            const geoJSON = await geo.json();
            setGeoData(geoJSON.provincias)
        }
        geoDataFetch()
    }, [])
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
    // data since user create
    const valueDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    // handler of the start session of the login
    const userSessionStart = async (username, userPdw) => {
        const res = await fetch(`${process.env.API_PATH}/v1/user/signup`, {
            body: JSON.stringify({
                since_create: valueDate.toLocaleDateString("es-AR", options),
                username: username,
                fullname: fullname,
                location: location, 
                pdw: userPdw, 
                email: userEmail
            }), 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        const datares = await res.json()
        if(!datares.create_user){
            userWarning.current.classList.toggle('d-block');
            setTimeout(() => {
                userWarning.current.classList.toggle('d-block');
            }, 2500)
        }else{
            console.log(datares)
            userSuccess.current.classList.toggle('d-block');
            setTimeout(() => {
                userSuccess.current.classList.toggle('d-block');
                window.location = '/iniciar-sesion';
            }, 2500)
        }
    }
    // event submit and get data of the user for the login
    const handleSubmit = e => {
        e.preventDefault()
        // get for parameter the data of the form login for your verification
        userSessionStart(user, pdw);
    }
    // handler value input username
    const handleChangeUsername = e => {
        setUser(e.target.value);
    }
    const handleChangeFullname = e => {
        setFullname(e.target.value);
    }
    const handleChangeLocation = e => {
        setLocation(e.target.value);
    }
    const handleChangePdw = e => {
        setPdw(e.target.value);
    }
    const handleChangeEmail = e => {
        setEmail(e.target.value);
    }
    return(
        <article className="content-frm-login col-10 col-sm-10 col-lg-4 col-xl-4 m-auto bg-dark">
            <h1 className='title-register'>Regístrate ahora</h1>
            <form onSubmit={handleSubmit} id='frm-login'>
                <p ref={userSuccess} className="user-warning d-none bg-success p-2">Se ha creado exitosamente!</p>
                <p ref={userWarning} className="user-warning d-none bg-secondary p-2">Este usuario ya existe</p>
                <input onChange={handleChangeFullname} type="text" name="fullname" placeholder='Nombre completo'/>
                <input onChange={handleChangeUsername} type='text' name='user' placeholder='Nombre de usuario'/>
                <input onChange={handleChangeEmail} type='email' name='email' placeholder='Correo electrónico'/>
                <select onChange={handleChangeLocation} name="location">
                    {
                        geoData ? 
                        geoData.map(location => <option key={location.id}>{location.nombre}</option>) 
                        : <option>No hay provincias</option>
                    }
                </select>
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
                <input className='btn' type='submit' value='Registrarme'/>
                <Link href='/iniciar-sesion' as='/iniciar-sesion'>
                    <a>
                        Iniciar sesión
                    </a>
                </Link>
            </form>
        </article>
    )
}

export default Register;
