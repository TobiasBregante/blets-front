import Head from '../components/head.component';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import MyProfileComp from '../components/influencer.profile.component';
import { CookiesProvider } from 'react-cookie';

const MyProfile = () => {
    return(
        <>
        <CookiesProvider>
            <Head/>
            <main className="container-fluid">
                <Header/>
                <section className="row section-home">
                    <MyProfileComp/>
                </section>
                <Footer/>
            </main>
        </CookiesProvider>
        </>
    )
}

export default MyProfile;