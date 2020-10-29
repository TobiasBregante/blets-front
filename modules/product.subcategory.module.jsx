import Head from '../components/head.component';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import ProductSubcategory from '../components/product/product.subcategory.component';
import { CookiesProvider } from 'react-cookie';

const ProductSubCategory = () => {
    return(
        <>
        <CookiesProvider>
            <Head/>
            <main className="container-fluid">
                <Header/>
                <section className="row section-home">
                    <article className="col-10 col-sm-10 col-lg-8 col-xl-6">
                        <ProductSubcategory api='all'/>
                    </article>
                </section>
                <Footer/>
            </main>
        </CookiesProvider>
        </>
    )
}

export default ProductSubCategory;