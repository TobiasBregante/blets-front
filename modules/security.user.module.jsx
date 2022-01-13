import Head from '../components/head.component';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import SecurityComp from '../components/security.profile.component';
import { CookiesProvider } from 'react-cookie';

const Security = () => {
    return(
        <>
        <CookiesProvider>
            <Head/>
            <main className="container-fluid">
                <Header/>
                <section className="row section-home">
                    <SecurityComp/>
                </section>
                <Footer/>
            </main>
        </CookiesProvider>
        </>
    )
}

export default Security;