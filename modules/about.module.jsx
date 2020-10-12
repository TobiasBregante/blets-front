import Heads from '../components/head.component';
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import { CookiesProvider } from 'react-cookie';

const About = () => {
    return(
        <>
        <CookiesProvider>
            <main className="container-fluid bg-dark text-light">
                <Heads/>
                <Header/>
                <section className="row section-about">
                    <article className="col-12 col-sm-12 col-lg-12 col-xl-12">
                        <h1><img className="title-brand-about" src="../img/brand.png" alt="Blets"/></h1>
                        <p className='biography-blets-text'>¿QUIENES SOMOS?</p>
                        <p className="biography-blets-text">
                        Somos una empresa nueva en el ambiente, ofrecemos todo tipo de productos y 
                        servicios de diferentes empresas con envíos a todo el país, haciendo Marketing 
                        de Influencers. Nos encargamos de la organización,producción publicidad e imagen 
                        de influencers.
                        </p>
                        <p className="biography-blets-text">
                        Y ¿Qué es el Marketing de Influencers? Es la Herramienta de promoción por excelencia 
                        en las redes sociales, Y ¿Porqué lo es? Porque tus productos/servicios son recomendados 
                        por personas con muchísimos seguidores y eso genera mucha más confianza en tus futuros 
                        clientes.
                        </p>
                        <p className="biography-blets-text">
                        Contactamos a las mejores empresas con los mejores productos y servicios con el fin de 
                        que cualquier persona de cualquier parte del país, pueda comprar lo que necesite con una 
                        rápida atención y siempre con descuentos por parte de nuestro equipo de influencers.
                        </p>
                    </article>
                </section>
                <Footer/>
            </main>
        </CookiesProvider>
        </>
    )
}

export default About;