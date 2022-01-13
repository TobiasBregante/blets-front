import Head from '../components/head.component';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import { CookiesProvider } from 'react-cookie';
import BlockProduct from '../components/blocks.prod.component';
import SearchEngine from '../components/searchEngine.component';

const Home = () => {
    return(
        <>
        <CookiesProvider>
            <Head/>
            <main className="container-fluid">
                <Header/>
                <SearchEngine/>
                <section className="row section-home">
                    <BlockProduct section={'Lo mas visto'} api={'all'}/>
                    <BlockProduct section={'Articulos para el hogar'} api={'electrodomesticos'}/>
                    <BlockProduct section={'Indumentaria'} api={'indumentarias'}/>
                </section>
                <Footer/>
            </main>
        </CookiesProvider>
        </>
    )
}

export default Home;