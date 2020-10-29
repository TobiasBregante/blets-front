import Head from '../components/head.component';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import LoginComp from '../components/user/login.component';
import { CookiesProvider } from 'react-cookie';

const Login = () => {
    return(
        <>
        <CookiesProvider>
            <Head/>
            <main className="container-fluid">
                <Header/>
                <section className="row section-home section-login-register">
                    <LoginComp/>
                </section>
                <Footer/>
            </main>
        </CookiesProvider>
        </>
    )
}

export default Login;