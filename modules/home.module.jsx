import Head from '../components/head.component';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import { CookiesProvider } from 'react-cookie';
import Link from 'next/link'

const Home = () => {
    return(
        <>
        <CookiesProvider>
            <Head/>
            <main className="container-fluid">
                <Header/>
                <article className='row'>
                    <article className='col-12 col-sm-12 col-lg-12 col-xl-12 banner-influencer-home'>
                        <article className='col-12 p-5 m-auto info-influencer-home'>
                            <p>
                                ¿ QUÉ ES EL <span className='text-warning'>MARKETING</span> DE 
                                <span className='text-warning'> INFLUENCERS</span> ?
                            </p>
                            <p>
                                ES LA <span className='text-warning'>HERRAMIENTA </span> 
                                DE <span className='text-warning'>PROMOCIÓN</span> POR EXCELENCIA EN LAS 
                                <span className='text-warning'> REDES SOCIALES.</span>
                            </p>
                            <a href="https://api.whatsapp.com/send?phone=5491156168994&text=Hola!%20Me%20interesa%el%plan%empresa!" 
                                target='_blank' className='btn btn-apply-influencer col-12 col-sm-10 col-lg-6 col-xl-3'>Más información!</a>
                        </article>
                    </article>
                </article>
                <section className="row section-home">
                    <article className='presentation-influencer-home col-12 col-sm-12 col-lg-12 col-xl-12'>
                        <article className='col-12 presentation-1-home'>
                            <article className='content-text'/>
                            <p className='presentation-1-home-text'>
                                Compra de una manera más flexible<br/>con descuentos e increíbles ofertas!<br/>
                                <Link href="/registrarme" as="/registrarme">
                                    <a className="content-btn-register-now nav-link d-inline"><span className={`btn btn-register-now btn-search`}>Regístrate ahora!</span></a>
                                </Link>
                                <Link href="/iniciar-sesion" as="/iniciar-sesion">
                                    <a className="content-btn-register-now nav-link d-inline"><span className={`btn btn-login-now btn-secondary`}>Ingresar</span></a>
                                </Link>
                            </p>
                            <img className='insign-presentation' src="img/brand.png" alt="Blets"/>
                        </article>
                    </article>
                    <article className='intro-home-info col-12 col-sm-12 col-lg-12 col-xl-12'>
                        <p className='content-text'>
                            Contactamos a diferentes empresas con el propósito de que ya no paguen 
                            mas publicidad en las redes sociales, que los influencers y vendedores 
                            puedan generar ingresos por su recomendación y que los clientes obtengan 
                            beneficios de todo tipo.
                        </p>
                    </article>
                    <article className='banner-publicitary-home col-12 col-sm-12 col-lg-12 col-xl-12'>
                        <article className='content-text'>
                            <p>Espacio publicitario</p>
                        </article>
                    </article>
                    <article className='content-convocatory-influencer col-12 col-sm-12 col-lg-6 col-xl-6'>
                        <article className="content-text">
                            <h2>
                                Plan <strong className='text-warning'>vendedores</strong>
                            </h2>
                            <p><br/>
                                Sé parte del equipo de ventas de <span className='text-warning'>BLETS</span>, promociona 
                                la plataforma 
                                y obtén las comisiones más competitivas del mercado.
                            </p>
                            <p>
                                Nuestros vendedores cuentan con entrenamiento constante en la plataforma, 
                                y beneficios como vendedor
                            </p>
                            <a href="https://api.whatsapp.com/send?phone=5491156168994&text=Hola!%20Me%20interesa%el%plan%influencer!" 
                            target='_blank' className='btn btn-apply-influencer col-12 col-sm-10 col-lg-6 col-xl-4'>Aplicar ahora!</a>
                            <article className='col-12 icons-star-home'>
                                <svg viewBox="0 0 16 16" 
                                    className="bi bi-star-fill" 
                                    fill="currentColor" 
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg viewBox="0 0 16 16" 
                                    className="bi bi-star-fill" 
                                    fill="currentColor" 
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg viewBox="0 0 16 16" 
                                    className="bi bi-star-fill" 
                                    fill="currentColor" 
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                            </article>
                        </article>
                    </article>
                    <article className='content-convocatory-influencer col-12 col-sm-12 col-lg-6 col-xl-6'>
                        <article className="content-text">
                            <h2>
                                Plan <strong className='text-warning'>empresas</strong>
                            </h2>
                            <p><br/>
                                ¿Estás buscando empezar una campaña publicitaria para incrementar tus ventas? 
                            </p>
                            <p>
                                En <span className='text-warning'>BLETS</span> contás con influencers de 
                                diversas <span className='text-warning'>redes sociales</span> enfocados en 
                                promocionar tus productos y/o servicios con un gran potencial de vistas por la audiencia de 
                                diversas comunidades.
                            </p>
                            <a href="https://api.whatsapp.com/send?phone=5491156168994&text=Hola!%20Me%20interesa%el%plan%empresa!" 
                                target='_blank' className='btn btn-apply-influencer col-12 col-sm-10 col-lg-6 col-xl-4'>Aplicar ahora!</a>
                            <article className='col-12 icons-star-home'>
                                <svg viewBox="0 0 16 16" 
                                    className="bi bi-star-fill" 
                                    fill="currentColor" 
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg viewBox="0 0 16 16" 
                                    className="bi bi-star-fill" 
                                    fill="currentColor" 
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                <svg viewBox="0 0 16 16" 
                                    className="bi bi-star-fill" 
                                    fill="currentColor" 
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                            </article>
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