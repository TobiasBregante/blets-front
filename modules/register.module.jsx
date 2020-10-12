import Head from '../components/head.component';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import RegisterComp from '../components/user/register.component';
import { CookiesProvider } from 'react-cookie';

const Register = () => {
    return(
        <>
        <CookiesProvider>
            <Head/>
            <main className="container-fluid">
                <Header/>
                <section className="row section-home bg-dark">
                    <RegisterComp/>
                </section>
                <Footer/>
            </main>
        </CookiesProvider>
        </>
    )
}

export default Register;