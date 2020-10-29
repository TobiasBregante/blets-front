import uniqid from 'uniqid';
import { useRef } from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { useCookies } from 'react-cookie';

const SuperUser = () => {
    const inputTokenInfluencer = useRef(null);
    const handleCreateTokenInfluencer = () => {
        inputTokenInfluencer.current.value = `${uniqid()}-blets`;
    }
    
    // get value inputs of form login
    const [user, setUser] = useState('');
    const [pdw, setPdw] = useState('');
    const [userEmail, setEmail] = useState('');
    const [geoData, setGeoData] = useState([]);
    const [fullname, setFullname] = useState('');
    const [location, setLocation] = useState('');
    const [followers, setFollowers] = useState('');
    const [pdwVerify, setPdwVerify] = useState('');
    const [business, setBusiness] = useState('');
    const [rol, setRol] = useState('');
    const userDenied = useRef(null);
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
        const res = await fetch(`${process.env.API_PATH}/v1/user/signup-influencer`, {
            body: JSON.stringify({
                since_create: valueDate.toLocaleDateString("es-AR", options),
                username: username,
                fullname: fullname,
                pdw: userPdw, 
                email: userEmail,
                public_token: inputTokenInfluencer.current.value,
                location: location, 
                business: business,
                followers: followers,
                rol: rol
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
            userSuccess.current.classList.toggle('d-block');
            setTimeout(() => {
                userSuccess.current.classList.toggle('d-block');
            }, 2500)
        }
    }
    const handlerVerifyMaster = async (username, userPdw) => {
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
            console.warn(datares)
            userDenied.current.classList.toggle('d-block');
            setTimeout(() => {
                userDenied.current.classList.toggle('d-block');
            }, 2500)
        }else{
            userSessionStart(user, pdw);
            statusUser = true;
        }
        return statusUser; 
    }
    // event submit and get data of the user for the login
    const handleSubmit = e => {
        e.preventDefault()
        // get for parameter the data of the form login for your verification 
        handlerVerifyMaster(cookies.user.user, pdwVerify)
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
    const handleChangeFollowers = e => {
        setFollowers(e.target.value);
    }
    const handleChangeRol = e => {
        setRol(e.target.value);
    }
    const handleChangePdwVerify = e => {
        setPdwVerify(e.target.value);
    }
    const handleChangeBusiness = e => {
        setBusiness(e.target.value);
    }

    return(
        <>
        <article className='content-frm-login frm-create-influencer col-12 col-sm-12 col-lg-6 col-xl-6'>
            <article className='col-12 col-sm-12 col-lg-12 col-xl-12'>
                <h4 className='d-inline'>Crear super-usuarios</h4>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="ml-2 bi bi-people-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                </svg>
            </article>
            <form onSubmit={handleSubmit}>
                <small>Nombre de usuario <span className="text-danger">*</span></small>
                <input onChange={handleChangeUsername} className='d-block' type="text" placeholder='Nombre de usuario'/>
                <small>Nombre completo <span className="text-danger">*</span></small>
                <input onChange={handleChangeFullname} className='d-block' type="text" placeholder='Nombre completo'/>
                <small>Contraseña <span className="text-danger">*</span></small>
                <input onChange={handleChangePdw} className='d-block' type="password" placeholder='Contraseña'/>
                <small>Correo electrónico <span className="text-danger">*</span></small>
                <input onChange={handleChangeEmail} type='email' name='email' placeholder='Correo electrónico'/>
                <small>Nombre de negocio <span className="text-danger">*</span></small>
                <input onChange={handleChangeBusiness} className='d-block' type="text" placeholder='Nombre de negocio'/>
                <small>Nº seguidores <span className="text-danger">*</span></small>
                <input onChange={handleChangeFollowers} className='d-block' type="text" placeholder='N° seguidores'/>
                <small>Localidad <span className="text-danger">*</span></small>
                <select onChange={handleChangeLocation} name="location">
                    {
                        geoData ? 
                        geoData.map(location => <option key={location.id}>{location.nombre}</option>) 
                        : <option>No hay provincias</option>
                    }
                </select>
                <label className='col-12 p-0 mt-2'>
                    <span className='p-2 d-block text-light bg-dark'>Credencial de usuario</span>
                    <select onChange={handleChangeRol} className='mt-2 d-block'>
                        <option value="null">-- Elegir una opción --</option>
                        <option value="master">Administrador</option>
                        <option value="influencer">Influencer</option>
                        <option value="seller">Ventas y cobranzas</option>
                        <option value="indumentarias">Indumentaria</option>
                    </select>
                </label>
                <small>Generar token promocional <span className="text-danger">*</span></small>
                <label className='content-input-create-code-influencer'>
                    <input ref={inputTokenInfluencer} className='d-block input-create-code-influencer' type="text" placeholder='Generar código'/>
                    <button onClick={handleCreateTokenInfluencer} type='button' className='ico-create-code-influencer btn'>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-upc-scan" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                            <path d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z"/>
                        </svg>
                    </button>
                </label>
                <label className='pdw-info-add-superuser col-12 p-0 mt-2'>
                    <small className='p-2 d-block text-dark'>
                        Para mayor seguridad, verificaremos su contraseña
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-info-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        </svg>
                    </small>
                </label>
                <article className="col-12 p-0">
                    <input onChange={handleChangePdwVerify} type={viewPdw} name='pdw' placeholder='Contraseña'/>
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
                <input type="submit" value="Agregar" className='mt-2 d-block btn'/>
                <p ref={userDenied} className="mt-1 user-warning d-none bg-danger p-2 text-light">Acceso denegado!</p>
                
                <p ref={userSuccess} className="mt-1 user-warning d-none bg-success p-2">Se ha creado exitosamente!</p>
                <p ref={userWarning} className="mt-1 user-warning d-none bg-secondary p-2">Este usuario ya existe</p>
            </form>
        </article>
        </>
    )
}

export default SuperUser;