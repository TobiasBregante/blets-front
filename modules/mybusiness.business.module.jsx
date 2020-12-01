import Head from '../components/head.component';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import MyBussinesComp from '../components/myBusiness.business.component';
import { CookiesProvider } from 'react-cookie';
import { useState } from 'react';

const FailedUser = () => <h1>Is not logged</h1>

const MyBussines = () => {
    const [userLogged, setUserLogged] = useState(true)

    if(userLogged){
        return(
            <>
            <CookiesProvider>
                <Head/>
                <main className="container-fluid">
                    <Header/>
                    <section className="row section-home">
                        <MyBussinesComp/>
                    </section>
                    <Footer/>
                </main>
            </CookiesProvider>
            </>
        )
    }else{
        return <FailedUser/>
    }
}

export default MyBussines;