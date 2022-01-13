import Head from '../components/head.component';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import UserPanelComp from '../components/user.profile.component';
import { CookiesProvider } from 'react-cookie';

const UserPanel = () => {
    return(
        <>
        <CookiesProvider>
            <Head/>
            <main className="container-fluid">
                <Header/>
                <section className="row section-home">
                    <UserPanelComp/>
                </section>
                <Footer/>
            </main>
        </CookiesProvider>
        </>
    )
}

export default UserPanel;