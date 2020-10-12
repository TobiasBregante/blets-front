import Head from '../components/head.component';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import ProductAll from '../components/product/product.all.component';
import { CookiesProvider } from 'react-cookie';

const Home = () => {
    return(
        <>
        <CookiesProvider>
            <Head/>
            <main className="container-fluid">
                <Header/>
                <section className="row section-home">
                    <article className="col-6">
                        <ProductAll api='all'/>
                    </article>
                </section>
                <Footer/>
            </main>
        </CookiesProvider>
        </>
    )
}

export default Home;