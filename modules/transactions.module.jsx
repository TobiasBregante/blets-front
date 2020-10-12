import Head from '../components/head.component';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import TransactionsDashboard from '../components/management/sell/show.metrics.component';
import { CookiesProvider } from 'react-cookie';

const Transactions = () => {
    return(
        <>
        <CookiesProvider>
            <Head/>
            <main className="container-fluid">
                <Header/>
                <section className="row section-home">
                    <TransactionsDashboard/>
                </section>
                <Footer/>
            </main>
        </CookiesProvider>
        </>
    )
}

export default Transactions;