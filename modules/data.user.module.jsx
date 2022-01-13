import Head from '../components/head.component';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import PersonalDataComp from '../components/data.profile.component';
import { CookiesProvider } from 'react-cookie';

const PersonalData = () => {
    return(
        <>
        <CookiesProvider>
            <Head/>
            <main className="container-fluid">
                <Header/>
                <section className="row section-home">
                    <PersonalDataComp/>
                </section>
                <Footer/>
            </main>
        </CookiesProvider>
        </>
    )
}

export default PersonalData;