import Link from 'next/link';
import NavbarVertical from  './navbar.vertical.component';
import { useEffect } from 'react';
import { useState } from 'react';
// import InputTokenInfluencer from './get.token.influencer';
import { useRouter } from 'next/router';
import CategoryList from './management/category.list.component';
import RemoveItem from './localStorage/removeItem';
import GetItem from "./localStorage/getItem";

const Header = () => {
    const 
    Router = useRouter(),
    [cookies, setCookie] = useState(GetItem('user')),
    [inputSearch, setInputSearch] = useState(''),
    [viewBtnLoginRegister, setViewBtnLoginRegister] = useState(''),
    [userLogged, setUserLogged] = useState('d-none'),
    [userLoggedSellers, setUserLoggedSellers] = useState('d-none'),
    [userLoggedInfluencer, setUserLoggedInfluencer] = useState('d-none'),
    [userLoggedBusiness, setUserLoggedBusiness] = useState('d-none'),
    [stateNav, setStateNav] = useState('navbar-vertical-close'),
    [navbarContent, setNavbarContent] = useState('navbar-content-close'),
    [offOn, setOffOn] = useState('d-none'),
    [userLoggedNormal, setUserLoggedNormal] = useState('d-none');

    const Logout = async () => {
        await RemoveItem('user');
        setCookie({})
        // removeCookie('user');
        // removeCookie();
        // await document.cookie.split(";").forEach((c) => {
        //     document.cookie = c
        //     .replace(/^ +/, "")
        //     .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        // });

        return true
    }
    const handlerLogout = async () => {
        await Logout()
        .then(success => {
            if(!cookies.user && success){
                Router.push('/');
            }
        })
    }
    useEffect(() => {
        cookies?.user?.rol === 'user' && setUserLoggedNormal('') 
        if(cookies?.user?.rol === 'master'){
            setUserLogged('')
            setUserLoggedNormal('')
            setUserLoggedSellers('');
            setUserLoggedBusiness('');
        }
        if(cookies?.user?.rol === 'seller'){
            setUserLoggedNormal('');
            setUserLoggedSellers('');
            setUserLoggedBusiness('');
        }if(cookies?.user?.rol === 'influencer'){
            setUserLoggedInfluencer('');
        }if(cookies?.user){
            setViewBtnLoginRegister('d-none')
            cookies.user?.discount_token
            && setOffOn('')
        }if(!cookies?.user){
            setUserLogged('d-none');
            setUserLoggedBusiness('d-none');
            setUserLoggedInfluencer('d-none');
            setUserLoggedNormal('d-none');
            setViewBtnLoginRegister('');
            setUserLoggedSellers('d-none');
            setOffOn('d-none');
        }
        console.log(cookies)
    }, cookies?.user)
    const handlerInputSearch = e => {
        setInputSearch(e.target.value);
    }
    const handlerSendSearch = e => {
        e.preventDefault()
        inputSearch && inputSearch !== '' 
        ? Router.push(`/buscar/${inputSearch}`) : false;
    }

    const handleSwitchNavbar = () => {
        if(stateNav === 'navbar-vertical-close'){
            setStateNav('navbar-vertical');
            setNavbarContent('navbar-content');
        }else{
            setStateNav('navbar-vertical-close');
            setNavbarContent('navbar-vertical-close');
        }
    }
    return(
        <>
        <header className="row">
            <nav className="navbar navbar-expand-lg navbar-dark col-12 col-sm-12 col-lg-12 col-xl-12">
                <button onClick={handleSwitchNavbar} className='btn mt-2' type='button'>
                    <i className='large material-icons text-light'>dehaze</i>
                </button>
                <Link href="/">
                    <a className="navbar-brand"><img className="brand" src="../../img/brand.png" alt="MarketBlets"/></a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className='large material-icons text-light'>apps</i>
                </button>
                <article className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link href="/" as="/">
                                <a className="nav-link">Inicio <span className="sr-only">(current)</span></a>
                            </Link>
                        </li>
                        <li className={`nav-item ${userLogged}`}>
                            <Link href="/mi-negocio" as="/mi-negocio">
                                <a className="nav-link">Mi negocio</a>
                            </Link>
                        </li>
                        <li className={`nav-item ${userLoggedBusiness}`}>
                            <Link href="/negocios" as="/negocios">
                                <a className="nav-link">Negocio</a>
                            </Link>
                        </li>
                        <li className={`nav-item ${userLoggedInfluencer}`}>
                            <Link href="/mi-perfil" as="/mi-perfil">
                                <a className="nav-link">Mi perfil</a>
                            </Link>
                        </li>
                        <li className={`nav-item ${userLoggedNormal}`}>
                            <Link href="/usuario/perfil" as="/usuario/perfil">
                                <a className="nav-link">Mi perfil</a>
                            </Link>
                        </li>
                        <li className={`nav-item ${userLoggedSellers}`}>
                            <Link href="/pedidos" as="/pedidos">
                                <a className="nav-link">Mis pedidos</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/iniciar-sesion' as='/iniciar-sesion'>
                                <a className={`content-btn-register-now nav-link ${(viewBtnLoginRegister) ? 'd-none' : ''}`}>
                                    Ingresar
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/registrarme' as='/registrarme'>
                                <a className={`content-btn-register-now nav-link ${(viewBtnLoginRegister) ? 'd-none' : ''}`}>
                                    Registrarme
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/' as='/'>
                                <a className={`content-btn-register-now nav-link ${(!viewBtnLoginRegister) ? 'd-none' : ''}`} onClick={handlerLogout}>
                                    Cerrar sesión
                                </a>
                            </Link>
                        </li>
                        {/* <li className="nav-item content-code-ref-input">
                            <InputTokenInfluencer/>
                        </li> */}
                        <li className={`nav-item ${offOn}`}>
                            <span className="badge bg-danger text-light p-1">
                                Descuentos activos!
                            </span>
                        </li>
                    </ul>
                    {
                        Router.pathname !== '/' && (
                            <article className="form-inline my-2 pl-0 my-lg-0 col-8 col-sm-8 col-lg-3 col-xl-3">
                                <form onSubmit={handlerSendSearch} className='bg-light col-12 frm-search-engine-header'>
                                    <input onChange={handlerInputSearch} className="form-control mr-sm-2" type="search" placeholder="Buscalo acá" aria-label="Search" value={inputSearch}/>
                                    <button className="btn my-2 my-sm-0 btn-primary" type="submit">Ir</button>
                                </form>
                            </article>
                        )
                    }
                </article>
            </nav>
        </header>
        <article className={`row ${stateNav}`}>
            <article className={`pl-4 ${navbarContent}`}>
                <ul>
                    <li>
                        <button onClick={handleSwitchNavbar} className='btn' type='button'>
                            <i className='large material-icons text-light'>dehaze</i>
                        </button>
                    </li>
                    <li>
                        <Link href="/">
                            <a><img className="brand" src="../../img/brand.png" alt="MarketBlets"/></a>
                        </Link>
                    </li>
                </ul>
            </article>
            <NavbarVertical/>
        </article>
        </>
    )
}

export default Header;