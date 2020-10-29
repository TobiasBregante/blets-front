import Link from 'next/link';
import { useState } from 'react';

const NavbarVertical = () => {
    const [subCategory, setSubCategory] = useState('d-none');
    const handlerSubCategory = () => {
        subCategory === 'd-none' 
        ? setSubCategory('d-block') 
        : setSubCategory('d-none');
    }
    return(
        <>
        <article className="col-12 col-sm-12 col-lg-12 col-xl-12">
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
                <li className="nav-item nav-link" onClick={handlerSubCategory}>
                    Indumentarias
                    <ul className={`m-0 pl-4 ${subCategory}`}>
                        <li className="nav-item">
                            <Link href="/categorias/subcategorias/[subcategory]" 
                                as="/categorias/subcategorias/hombre">
                                <a className="nav-link">
                                    Hombre
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/categorias/subcategorias/[subcategory]" 
                                as="/categorias/subcategorias/mujer">
                                <a className="nav-link">
                                    Mujer
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/categorias/subcategorias/[subcategory]" 
                                as="/categorias/subcategorias/niños">
                                <a className="nav-link">
                                    Niños
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/categorias/subcategorias/[subcategory]" 
                                as="/categorias/subcategorias/invierno">
                                <a className="nav-link">
                                    Invierno
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/categorias/subcategorias/[subcategory]" 
                                as="/categorias/subcategorias/verano">
                                <a className="nav-link">
                                    Verano
                                </a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href="/categorias/[categoria]" as="/categorias/indumentarias">
                                <a className="nav-link">
                                    Ver todo
                                </a>
                            </Link>
                        </li>
                    </ul>
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
                <li className="nav-item">
                    <Link href="/categorias/[categoria]" as="/categorias/empleos">
                        <a className="nav-link">
                            Empleos <span className='badge badge-danger badge-pill'>Nuevas ofertas</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </article>
        </>
    )
}

export default NavbarVertical;