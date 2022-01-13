import BusinessComp from "../components/business.component";
import Head from '../components/head.component';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import { CookiesProvider } from 'react-cookie';

const Business = () => {
    return(
        <>
        <CookiesProvider>
            <Head/>
            <main className="container-fluid">
                <Header/>
                <section className='row section-home'>
                    <BusinessComp/>
                </section>
                <Footer/>
            </main>
        </CookiesProvider>
        </>
    )
}

export default Business