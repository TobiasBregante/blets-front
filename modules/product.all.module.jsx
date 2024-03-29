import Head from '../components/head.component';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import ProductAll from '../components/product/product.all.component';
import { CookiesProvider } from 'react-cookie';

const ProductCategory = () => {
    return(
        <>
        <CookiesProvider>
            <Head/>
            <main className="container-fluid">
                <Header/>
                <section className="row section-home">
                    <article className="col-10 col-sm-10 col-lg-8 col-xl-6">
                        <ProductAll api='all'/>
                    </article>
                </section>
                <Footer/>
            </main>
        </CookiesProvider>
        </>
    )
}

export default ProductCategory;