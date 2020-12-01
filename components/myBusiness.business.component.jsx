import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Router from 'next/router';
import OnloadComponent from './management/business/add.product.component';
import ShowMetrics from './management/show.metrics.component';
import CategoryList from './management/category.list.component';
//<ShowMetrics/>

const MyBusinessComp = () => {
    const [cookies, setCookie] = useCookies(['user']);
    const [valueDate, onChangeDate] = useState(new Date());
    const [verifyRol, setVerifyRol] = useState(false);

    const handlerVerifyUser = async () => {
        let status = false
        await cookies && cookies.user 
        ? CategoryList.forEach(element => {
            if(element.category === cookies.user.rol){
                setVerifyRol(true)
                status = true
            }
        })
        : Router.push('/')

        return status
    }

    useEffect(() => {
        handlerVerifyUser()
        .then(success => !success && Router.push('/'))
    })
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    if(verifyRol){
        return(
            <>
            <article className="col-12 col-sm-12 col-lg-12 col-xl-12 content-title-my-business text-light mb-2 p-4">
                <img src="img/party.png" alt="welcome" className='party-title-gestion'/><h2 className='d-inline p-4 title-gestion'>Bienvenido al Centro de Gestión, {cookies.user ? cookies.user.user : ''}</h2><span></span>
                <span className='text-light bg-dark p-2 time-gestion'>{valueDate.toLocaleDateString("es-AR", options)}</span>
            </article>
            <OnloadComponent.OnloadProductComponent 
                rolSeller={cookies && cookies.user && cookies.user.rol}
            />
            </>
        )
    }
    return(<></>)
}


export default MyBusinessComp