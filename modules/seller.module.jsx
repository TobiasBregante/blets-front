import InfluencerComp from "../components/seller.component";
import Head from '../components/head.component';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import { CookiesProvider } from 'react-cookie';

const Influencer = () => {
    return(
        <>
        <CookiesProvider>
            <Head/>
            <main className="container-fluid">
                <Header/>
                <section className='row section-home'>
                    <InfluencerComp/>
                </section>
                <Footer/>
            </main>
        </CookiesProvider>
        </>
    )
}

export default Influencer