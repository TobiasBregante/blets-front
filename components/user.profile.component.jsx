import axios from 'axios'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import NavbarProfile from '../components/navbarProfile.component'
import handlerUpdateProfileImg from './updateProfileImg.component'
import GetItem from "./localStorage/getItem";
import { useRouter } from 'next/router'

const UserProfile = () => {
    const 
    [cookie, setCookie] = useState(GetItem('user')),
    [user, setUser] = useState({}),
    imgProfileRef = useRef(null),
    Router = useRouter()

    const handlerGetUser = async () => {
        const userData = await (await axios.get(`${process.env.API_PATH}/v1/user/${cookie?.user?.id}`))?.data
        setUser(userData)
    },
    updateImgProfile = async e => {
        console.log(await handlerUpdateProfileImg(imgProfileRef.current.files[0], cookie?.user?.id))
    }
    useEffect(() => {
        handlerGetUser()
    }, [])

    return(
        <>
        <article className="col-12 header-profile-user">
            <NavbarProfile/>
        </article>
        <article className=' col-12 col-sm-12 col-lg-1 col-xl-1 contain-profile-icon-title'>
            <article className="ico-profile bg-secondary">
                <input 
                    ref={imgProfileRef}
                    type="file" 
                    id="addImgProfile" 
                    hidden 
                    name='addImgProfile' 
                    accept='image/jpeg, image/jpg' 
                    onChange={updateImgProfile}
                />
                <label htmlFor="addImgProfile" className='p-1 btn btn-secondary'>
                    Subir
                </label>
            </article>
        </article>
        <article className='col-12 col-sm-12 col-lg-11 col-xl-11 fullname-title-profile-user contain-profile-icon-title'>
            <h1 className='text-dark'>
                {user?.fullname} 
                <span className='d-block text-secondary'>@{user?.username}</span>
                <span className='d-block text-primary'>
                    token: {user?.public_token} 
                    <input type="button" className='btn ml-2 p-0' value="Editar" />
                </span>
                <small>
                    <span className={`badge ${cookie?.user?.auth?.user_verify ? 'bg-success text-light' : 'bg-warning'}`}>
                        Cuenta { cookie?.user?.auth?.user_verify ? 'verificada' : 'no verificada' }
                    </span>
                    <span className='badge'>
                        { 
                            !cookie?.user?.auth?.user_verify && (
                                <Link href='/usuario/datos-personales' as='/usuario/datos-personales'>
                                    <a>Verificar</a>
                                </Link>
                            )
                        }
                    </span>
                </small>
            </h1>
        </article>
        <article className="contain-user-profile col-12">

        </article>
        </>
    )
}

export default UserProfile