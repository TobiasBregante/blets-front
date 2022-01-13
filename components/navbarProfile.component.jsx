import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const NavbarProfile = () => {
    const 
    Router = useRouter(),
    [isActive, setIsActive] = useState([])

    useEffect(() => {
        const activeList = {
            profile: {
                active: Router?.pathname === '/usuario/perfil' && 'active'
            },
            personalData: {
                active: Router?.pathname === '/usuario/datos-personales' && 'active'
            },
            // security: {
            //     active: Router?.pathname === '/usuario/seguridad' && 'active'
            // },
            // configurations: {
            //     active: Router?.pathname === '/usuario/configuraciones' && 'active'
            // }
        }
        setIsActive(activeList)
    }, [Router])

    return(
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link href='/usuario/perfil' as='/usuario/perfil'>
                    <a className={`nav-link ${isActive?.profile?.active}`}>Mi Perfil</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href='/usuario/datos-personales' as='/usuario/datos-personales'>
                    <a className={`nav-link ${isActive?.personalData?.active}`}>Datos Personales</a>
                </Link>    
            </li>
            {/* <li className="nav-item">
                <Link href='/usuario/seguridad' as='/usuario/seguridad'>
                    <a className={`nav-link ${isActive?.security?.active}`}>Seguridad</a>
                </Link>    
            </li>
            <li className="nav-item">
                <Link href='/usuario/configuraciones' as='/usuario/configuraciones'>
                    <a className={`nav-link ${isActive?.configurations?.active}`}>Configuraciones</a>
                </Link>
            </li> */}
        </ul>
    )
}

export default NavbarProfile