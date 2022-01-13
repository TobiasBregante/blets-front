import axios from 'axios'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import NavbarProfile from '../components/navbarProfile.component'
import GetItem from './localStorage/getItem'

const PersonalData = () => {
    const 
    [cookie, setCookie] = useState(GetItem('user')),
    [disabledBtn, setDisabledBtn] = useState({ disabled: true }),
    [userChange, setUserChange] = useState(false),
    [user, setUser] = useState({}),
    userModel = {
        since_create: user?.since_create,
        fullname: user?.fullname,
        name: user?.name,
        surname: user?.surname,
        username: user?.username,
        public_token: user?.public_token,
        location: user?.location,
        address: {
            street_name: user?.address?.street_name,
            street_number: user?.address?.street_number,
            zip_code: user?.address?.zip_code
        },
        DNI: user?.DNI,
        email: user?.email,
        business: user?.business,
        social_medial: user?.social_medial,
        phone: {
            number: user?.phone?.number,
            area_code: user?.phone?.area_code
        }
    }

    useEffect(() => {
        setUser(userModel)
    }, [])

    const handlerGetUser = async () => {
        const userData = await (await axios.get(`${process.env.API_PATH}/v1/user/${cookie?.user?.id}`))?.data
        let catchUserData = {
            since_create: userData?.since_create,
            fullname: userData?.fullname,
            name: userData?.name,
            surname: userData?.surname,
            username: userData?.username,
            public_token: userData?.public_token,
            location: userData?.location,
            address: {
                street_name: userData?.address?.street_name,
                street_number: userData?.address?.street_number,
                zip_code: userData?.address?.zip_code
            },
            DNI: userData?.DNI,
            email: userData?.email,
            business: userData?.business,
            social_medial: userData?.social_medial,
            phone: {
                number: userData?.phone?.number,
                area_code: userData?.phone?.area_code
            }
        }
        setUser(catchUserData)
        userChange ? setDisabledBtn({ disabled: false }) : setDisabledBtn({ disabled: true })
    }

    const handlerSubmit = async e => {
        e.preventDefault()
        e.target.reset()
        const response = await (await axios.put(`${process.env.API_PATH}/v1/user/${cookie.user.id}`, user)).data
        setUserChange(false)
        handlerGetUser()
    },
    handlerFullname = e => {
        const userData = user
        userData.fullname = e.target.value
        setUserChange(true)
        setUser(userData)
    },
    handlerName = e => {
        const userData = user
        userData.name = e.target.value
        setUserChange(true)
        setUser(userData)
    },
    handlerSurname = e => {
        const userData = user
        userData.surname = e.target.value
        setUserChange(true)
        setUser(userData)
    },
    handlerPublicToken = e => {
        const userData = user
        userData.public_token = e.target.value
        setUserChange(true)
        setUser(userData)
    },
    handlerLocation = e => {
        const userData = user
        userData.location = e.target.value
        setUserChange(true)
        setUser(userData)
    },
    handlerStreetName = e => {
        const userData = user
        userData.address.street_name = e.target.value
        setUserChange(true)
        setUser(userData)
    },
    handlerStreetNumber = e => {
        const userData = user
        userData.address.street_number = e.target.value
        setUserChange(true)
        setUser(userData)
    },
    handlerZipCode = e => {
        const userData = user
        userData.address.zip_code = e.target.value
        setUserChange(true)
        setUser(userData)
    },
    handlerDNI = e => {
        const userData = user
        userData.DNI = e.target.value
        setUserChange(true)
        setUser(userData)
    },
    handlerEmail = e => {
        const userData = user
        userData.email = e.target.value
        setUserChange(true)
        setUser(userData)
    },
    handlerBusiness = e => {
        const userData = user
        userData.business = e.target.value
        setUserChange(true)
        setUser(userData)
    },
    handlerSocialMedial = e => {
        const userData = user
        userData.social_medial = e.target.value
        setUserChange(true)
        setUser(userData)
    },
    handlerNumber = e => {
        const userData = user
        userData.phone.number = e.target.value
        setUserChange(true)
        setUser(userData)
    },
    handlerAreaCode = e => {
        const userData = user
        userData.phone.area_code = e.target.value
        setUserChange(true)
        setUser(userData)
    }
    
    useEffect(() => {
        userChange ? setDisabledBtn({ disabled: false }) : setDisabledBtn({ disabled: true })
    }, [userChange])

    useEffect(() => {
        handlerGetUser()
    }, [])


    return(
        <>
        <article className="col-12">
            <NavbarProfile/>
        </article>
        <article className="contain-user-profile container">
            {
                user && (
                    <>
                    <form id='frmDataProfile' className='row' onSubmit={handlerSubmit}>
                        {
                            !cookie?.user?.auth?.user_verify && (
                                <article className="alert alert-primary col-12 m-auto" role="alert">
                                    <p>
                                        <span className='badge bg-warning'>IMPORTANTE</span> Para comenzar a aprovechar todos los servicios que ofrecemos, debés 
                                        seguir los siguientes pasos para obtener la verificación de tu cuenta.
                                    </p><hr />
                                    <ol className='col-12 col-sm-12 col-lg-4 col-xl-4 p-3'>
                                        <li>
                                            Completá tus datos
                                        </li>
                                        <li>
                                            Haz click en <strong>Guardar</strong>
                                        </li>
                                        <li>
                                            Empezá a hacer tus compras!
                                        </li>
                                    </ol>
                                </article>
                            )
                        }
                        {
                            userChange && (
                                <article className="alert alert-primary col-12 m-auto" role="alert">
                                    <center>
                                        <p>
                                            Tienes cambios sin guardar.
                                        </p>
                                    </center>
                                </article>
                            )
                        }
                        <article className="col-12 col-sm-12 col-lg-6 col-xl-6">
                            <article className="row p-1">
                                <p className='badge'>DNI</p>
                                <input type="text" className="form-control mb-1" placeholder={user?.DNI} onChange={handlerDNI}/>
                            </article>
                            <article className="row p-1">
                                <p className='badge'>Calle 1</p>
                                <input type="text" className="form-control mb-1" placeholder={user?.address?.street_name} onChange={handlerStreetName}/> 
                            </article>
                            <article className="row p-1">
                                <p className='badge'>Altura</p>
                                <input type="text" className="form-control mb-1" placeholder={user?.address?.street_number} onChange={handlerStreetNumber}/>
                            </article>
                            <article className="row p-1">
                                <p className='badge'>Código postal</p>
                                <input type="text" className="form-control mb-1" placeholder={user?.address?.zip_code} onChange={handlerZipCode}/>
                            </article>
                            <article className="row p-1">
                                <p className='badge'>Email</p>
                                <input type="text" className="form-control mb-1" placeholder={user?.email} onChange={handlerEmail}/>
                            </article>
                            <article className="row p-1">
                                <p className='badge'>Localidad</p>
                                <input type="text" className="form-control mb-1" placeholder={user?.location} onChange={handlerLocation}/>
                            </article>
                            <article className="row p-1">
                                <p className='badge'>Nombre completo</p>
                                <input type="text" className="form-control mb-1" placeholder={user?.fullname} onChange={handlerFullname}/>
                            </article>
                            <article className="row p-1">
                                <p className='badge'>Nombre</p>
                                <input type="text" className="form-control mb-1" placeholder={user?.name} onChange={handlerName}/>
                            </article>
                            <article className="row p-1">
                                <p className='badge'>Apelido</p>
                                <input type="text" className="form-control mb-1" placeholder={user?.surname} onChange={handlerSurname}/>
                            </article>
                            <article className="row p-1">
                                <p className='badge'>Código de país</p>
                                <input type="text" className="form-control mb-1" placeholder={user?.phone?.area_code} onChange={handlerAreaCode}/>
                            </article>
                            <article className="row p-1">
                                <p className='badge'>Número celular</p>
                                <input type="text" className="form-control mb-1" placeholder={user?.phone?.number} onChange={handlerNumber}/>
                            </article>
                        </article>
                        <article className="col-12 col-sm-12 col-lg-6 col-xl-6">
                            <article className="row p-1">
                                <p className='badge'>Nombre de negocio</p>
                                <input type="text" className="form-control mb-1" placeholder={user?.business} onChange={handlerBusiness}/>
                            </article>
                            <article className="row p-1">
                                <p className='badge'>Código de descuentos</p>
                                <input type="text" className="form-control mb-1" placeholder={user?.public_token} onChange={handlerPublicToken}/>
                            </article>
                            <article className="row p-1">
                                <p className='badge'>Fecha de inscripción</p>
                                <input type="text" className="form-control mb-1" placeholder={user?.since_create} disabled/>
                            </article>
                            <article className="row p-1">
                                <p className='badge'>Redes sociales</p>
                                <input type="text" className="form-control mb-1" placeholder={user?.social_medial} onChange={handlerSocialMedial}/>
                            </article>
                            <article className="row p-1">
                                <p className='badge'>Nombre de usuario</p>
                                <input type="text" className="form-control mb-1" placeholder={user?.username} disabled/>
                            </article>
                        </article>
                        <article className='col-12 p-2'>
                            <input 
                                type="submit" 
                                className={`btn m-auto d-block col-12 col-sm-10 col-lg-5 col-xl-4 btn-${!userChange ? 'secondary' : 'primary'}`}
                                value="Guardar cambios"
                                {...disabledBtn}
                            />
                        </article>
                    </form>
                    </>
                )
            }
        </article>
        </>
    )
}

export default PersonalData