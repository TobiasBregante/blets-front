import Head from '../components/head.component';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import { CookiesProvider } from 'react-cookie';

const Home = () => {
    return(
        <>
        <CookiesProvider>
            <Head/>
            <main className="container-fluid">
                <Header/>
                <article className='row'>
                    <article className='col-12 col-sm-12 col-lg-12 col-xl-12 banner-influencer-home'>
                        <article className='col-9 p-5 m-auto info-influencer-home'>
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
                            <a href="/" className='view-more-btn btn'>Más información</a>
                        </article>
                    </article>
                    <article className='content-convocatory-influencer col-12 col-sm-12 col-lg-12 col-xl-12'>
                        <article className="content-text">
                            <h2>
                                ¿Quieres formar parte de MarketBlets promocionando productos 
                                y servicios de miles de negocios adheridos a nuestra marcar?
                            </h2>
                            <p><br/>
                                BENEFICIOS<br/><br/>
                                <ul>
                                    <li>
                                        Ser modelo de nuestra próxima marca de ropa.
                                    </li>
                                    <li>
                                        10% de ganancia en venta de cualquier producto que
                                        se haga de tu parte.

                                    </li>
                                    <li>
                                        30% de descuento en cualquier producto/servicio que
                                        quieras.
                                    </li>
                                    <li>
                                        Manejo de imagen por BLETS.
                                    </li>
                                    <li>
                                        Canjes de todo tipo, sorteos en el equipo por viajes,
                                        estadías y demás.
                                    </li>
                                    <li>
                                        Aumento de seguidores e interacciones en todas tus
                                        redes sociales.
                                    </li>
                                    <li>
                                        Menciones con diferentes influencers del equipo de
                                        BLETS.
                                    </li>
                                </ul>
                            </p>
                            <a href="#" className='btn btn-apply-influencer col-12 col-sm-10 col-lg-6 col-xl-4'>Aplicar ahora!</a>
                        </article>
                    </article>
                </section>
                <Footer/>
            </main>
        </CookiesProvider>
        </>
    )
}

export default Home;