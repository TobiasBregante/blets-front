import Link from 'next/link';
import { useState } from 'react';

const NavbarVertical = () => {
    const [stateNav, setStateNav] = useState('navbar-vertical-close');
    const [btnIcoOpen, setbtnIcoOpen] = useState('d-block');
    const [btnIcoClose, setbtnIcoClose] = useState('d-none');
    const handleSwitchNavbar = () => {
        if(stateNav === 'navbar-vertical-close'){
            setStateNav('navbar-vertical');
            setbtnIcoOpen('d-none');
            setbtnIcoClose('d-block');
        }else{
            setStateNav('navbar-vertical-close');
            setbtnIcoOpen('d-block');
            setbtnIcoClose('d-none');
        }
    }
    return(
        <>
        <article className={`row ${stateNav}`}>
            <article className="col-12 col-sm-12 col-lg-12 col-xl-12">
                <button onClick={handleSwitchNavbar} className="btn-open-nav-vertical" type="button">
                    <svg className={`${btnIcoOpen} bi bi-chevron-compact-right`} width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                    </svg>
                    <svg className={`${btnIcoClose} bi bi-chevron-compact-left`} width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                    </svg>
                </button>
                <ul>
                    <li className="nav-item">
                        <Link href="/categorias/[categoria]" as="/categorias/accesorios">
                            <a className="nav-link">
                                Accesorios
                            </a>
                        </Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link href="/categorias/[categoria]" as="/categorias/belleza">
                            <a className="nav-link">
                                Belleza
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/categorias/[categoria]" as="/categorias/bolsos-y-carteras">
                            <a className="nav-link">
                                Bolsos y Carteras
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/categorias/[categoria]" as="/categorias/celulares">
                            <a className="nav-link">
                                Celulares
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/categorias/[categoria]" as="/categorias/computacion">
                            <a className="nav-link">
                                Computación
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/categorias/[categoria]" as="/categorias/consolas">
                            <a className="nav-link">
                                Consolas
                            </a>
                        </Link>
                    </li> 
                    <li className="nav-item">
                        <Link href="/categorias/[categoria]" as="/categorias/camaras">
                            <a className="nav-link">
                                Cámaras
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/categorias/[categoria]" as="/categorias/deportes-y-fitness">
                            <a className="nav-link">
                                Deportes y Fitness
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/categorias/[categoria]" as="/categorias/diseño">
                            <a className="nav-link">
                                Diseño
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/categorias/[categoria]" as="/categorias/electrodomesticos">
                            <a className="nav-link">
                                Electrodomésticos
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/categorias/[categoria]" as="/categorias/indumentarias">
                            <a className="nav-link">
                                Indumentarias
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/categorias/[categoria]" as="/categorias/joyas">
                            <a className="nav-link">
                                Joyas
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/categorias/[categoria]" as="/categorias/mates">
                            <a className="nav-link">
                                Mates
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/categorias/[categoria]" as="/categorias/zapatos">
                            <a className="nav-link">
                                Zapatos
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/categorias/[categoria]" as="/categorias/viajes">
                            <a className="nav-link">
                                Viajes
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/categorias/[categoria]" as="/categorias/musica">
                            <a className="nav-link">
                                Música
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/categorias/[categoria]" as="/categorias/muebles">
                            <a className="nav-link">
                                Muebles
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/categorias/[categoria]" as="/categorias/marketing">
                            <a className="nav-link">
                                Marketing
                            </a>
                        </Link>
                    </li>
                </ul>
            </article>
        </article>
        </>
    )
}

export default NavbarVertical;