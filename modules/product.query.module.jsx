import Head from '../components/head.component';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import ProductAllQuery from '../components/product/product.query.component';
import { CookiesProvider } from 'react-cookie';

const QueryProduct = () => {
    return(
        <>
        <CookiesProvider>
            <Head/>
            <main className="container-fluid">
                <Header/>
                <section className="row section-home">
                    <article className="col-10 col-sm-10 col-lg-8 col-xl-6">
                        <ProductAllQuery/>
                    </article>
                </section>
                <Footer/>
            </main>
        </CookiesProvider>
        </>
    )
}

export default QueryProduct;