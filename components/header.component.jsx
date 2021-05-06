import Link from 'next/link';
import NavbarVertical from  './navbar.vertical.component';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import { useState } from 'react';
import InputTokenInfluencer from './get.token.influencer';
import { useRouter } from 'next/router';
import CategoryList from './management/category.list.component';

const Header = () => {
    const Router = useRouter();
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const [inputSearch, setInputSearch] = useState('');
    const [viewBtnLoginRegister, setViewBtnLoginRegister] = useState('');
    const [userLogged, setUserLogged] = useState('d-none');
    const [userLoggedSellers, setUserLoggedSellers] = useState('d-none');
    const [userLoggedInfluencer, setUserLoggedInfluencer] = useState('d-none');
    const [userLoggedBusiness, setUserLoggedBusiness] = useState('d-none');
    const [stateNav, setStateNav] = useState('navbar-vertical-close');
    const [navbarContent, setNavbarContent] = useState('navbar-content-close');
    const [offOn, setOffOn] = useState('d-none')

    const Logout = () => {
        removeCookie('user');
        document.cookie.split(";").forEach((c) => {
            document.cookie = c
            .replace(/^ +/, "")
            .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
    }
    const handlerLogout = async () => {
        Logout()
        if(!cookies.user){
            window.location = '/'
        }
    }
    useEffect(() => {
        if(cookies.user && cookies.user.rol === 'master'){
            setUserLogged('')
        }else{
            setUserLogged('d-none')
            if(cookies.user && cookies.user.rol === 'influencer'){
                setUserLoggedInfluencer('');
            }else{
                setUserLoggedInfluencer('d-none');
                if(cookies.user && cookies.user.rol === 'seller'){
                    setUserLoggedSellers('');
                }else{
                    setUserLoggedSellers('d-none');
                    cookies.user 
                    && CategoryList.forEach(element => element.category === cookies.user.rol && setUserLoggedBusiness(''))
                }
            }
        }
        if(cookies.user){
            setViewBtnLoginRegister('d-none')
            cookies.user.discount_token
            && setOffOn('')
        }else{
            setViewBtnLoginRegister('')
            setOffOn('d-none')
        }
    }, null)
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
                        <li className="nav-item">
                            <Link href="/nosotros" as="/nosotros">
                                <a className="nav-link">Sobre nosotros</a>
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
                        <li className={`nav-item ${userLoggedSellers}`}>
                            <Link href="/transacciones" as="/transacciones">
                                <a className="nav-link">Transacciones</a>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Soporte
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link href="/ayuda" as="/ayuda">
                                    <a className="dropdown-item">Ayúda</a>
                                </Link>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item content-code-ref-input">
                            <InputTokenInfluencer/>
                        </li>
                        <li className="nav-item">
                            <Link href='/#' as='/#'>
                                <a className={`content-btn-register-now nav-link ${(!viewBtnLoginRegister) ? 'd-none' : ''}`} onClick={handlerLogout}>
                                    Cerrar sesión
                                </a>
                            </Link>
                        </li>
                        <li className={`nav-item ${offOn}`}>
                            <span className="badge bg-danger text-light p-1">
                                Descuentos activos!
                            </span>
                        </li>
                    </ul>
                    <article className="form-inline my-2 my-lg-0">
                        <form onSubmit={handlerSendSearch}>
                            <input onChange={handlerInputSearch} className="form-control mr-sm-2" type="search" placeholder="Buscalo acá" aria-label="Search" value={inputSearch}/>
                            <button className="btn my-2 my-sm-0 btn-search" type="submit">Buscar</button>
                        </form>
                    </article>
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