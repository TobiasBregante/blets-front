import Head from '../components/head.component';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import MyBussinesComp from '../components/myBusiness.component';
import { CookiesProvider } from 'react-cookie';

const MyBussines = () => {
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
}

export default MyBussines;