import Head from '../components/head.component';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import BlockProduct from '../components/blocks.prod.component';
import { CookiesProvider } from 'react-cookie';

const Home = () => {
    return(
        <>
        <CookiesProvider>
            <Head/>
            <main className="container-fluid">
                <Header/>
                <article className='row'>
                    <article className='col-12 col-sm-12 col-lg-12 col-xl-12 p-0 banner-influencer-home'>
                        <article className='col-6 p-5 m-auto info-influencer-home'>
                            <p>
                                ¿ QUÉ ES EL <span className='text-warning'>MARKETING</span> DE 
                                <span className='text-warning'> INFLUENCERS</span> ?
                            </p>
                            <p>
                                ES LA <span className='text-warning'>HERRAMIENTA </span> 
                                DE <span className='text-warning'>PROMOCIÓN</span> POR EXCELENCIA EN LAS 
                                <span className='text-warning'> REDES SOCIALES.</span>
                            </p>
                            <a href="/" className='btn btn-warning'>Más información</a>
                        </article>
                    </article>
                </article>
                <section className="row section-home">
                    <article className='presentation-influencer-home col-12 col-sm-12 col-lg-12 col-xl-12'>
                        <article className='col-12 presentation-1-home'>
                            <img src="../img/influencer-2.svg" alt="Influencer"/>
                        </article>
                    </article>
                    <BlockProduct section="Ofertas semanales" api='all'/>
                    <BlockProduct section="Entrenamiento" api='deportes-y-fitness'/>
                    <BlockProduct section="Electrodomésticos" api='electrodomesticos'/>
                </section>
                <Footer/>
            </main>
        </CookiesProvider>
        </>
    )
}

export default Home;