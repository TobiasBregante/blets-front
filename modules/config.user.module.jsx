import Head from '../components/head.component';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import ConfigComp from '../components/config.profile.component';
import { CookiesProvider } from 'react-cookie';

const Config = () => {
    return(
        <>
        <CookiesProvider>
            <Head/>
            <main className="container-fluid">
                <Header/>
                <section className="row section-home">
                    <ConfigComp/>
                </section>
                <Footer/>
            </main>
        </CookiesProvider>
        </>
    )
}

export default Config;