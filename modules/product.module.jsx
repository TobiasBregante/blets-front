import ProductComp from '../components/product/product.component';
import Head from '../components/head.component';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import { CookiesProvider } from 'react-cookie';

const ProductComponent = () => {
    return(
        <>
        <CookiesProvider>
            <Head/>
            <main className="container-fluid">
                <Header/>
                <ProductComp/>
                <Footer/>
            </main>
        </CookiesProvider>
        </>
    )
}
export default ProductComponent;