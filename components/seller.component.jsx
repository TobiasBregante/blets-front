const Seller = () => {
    return(
        <>
        <article className="contain-plans col-12 col-sm-12 col-lg-12 col-xl-12">
            <h2>
                Plan <strong className='text-warning'>vendedores</strong>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" 
                    className="text-warning bi bi-megaphone-fill" 
                    viewBox="0 0 16 16">
                    <path 
                        d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z"
                    />
                </svg>
            </h2>
            <p>
                Sé parte del equipo de ventas de <span className='text-warning'>BLETS</span>, promociona 
                la plataforma 
                y obtén las comisiones más competitivas del mercado.
            </p>
            <p>
                Nuestros vendedores cuentan con entrenamiento constante en la plataforma, 
                y beneficios como vendedor
            </p>
            <a 
                href="https://api.whatsapp.com/send?phone=5491156168994&text=Hola!%20Me%20interesa%el%plan%vendedor!" 
                target='_blank' 
                className='btn btn-apply-influencer col-6 col-sm-10 col-lg-6 col-xl-4'>
                Aplicar ahora!
            </a>
        </article>
        </>
    )
}

export default Seller