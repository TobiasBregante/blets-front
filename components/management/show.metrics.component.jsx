import { useState, useEffect } from "react";

const ShowMetrics = prop => {
    const [transactionMetrics, setTransactionMetrics] = useState([]);
    const [register, setRegister] = useState([])
    const [reff, setReff] = useState([])
    const [product, setProduct] = useState([])
    const [influencer, setInfluencer] = useState([])

    useEffect(() => {
        const handlerFetchMetrics = async () => {
            // fetch metrics
            const getFetchMetrics = await fetch(`${process.env.API_PATH}/v1/product/transaction/sells/metrics`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
            const resFetchMetrics = await getFetchMetrics.json();
            setTransactionMetrics(resFetchMetrics);
        }
        handlerFetchMetrics();
    }, [prop]);
    return(
        <>
        <article className="content-metrics-header-mybusiness col-12 col-sm-12 col-lg-12 col-xl-12">
            <ul>
                <li>
                    Ventas: <span className='text-primary'>{transactionMetrics.success}</span>
                </li>
                <li>
                    Registros: <span className='text-secondary'>{transactionMetrics.users}</span>
                </li>
                <li>
                    Referidos: <span className='text-secondary'>{transactionMetrics.reff}</span>
                </li>
                <li>
                    Productos y servicios: <span className='text-primary'>{transactionMetrics.products}</span>
                </li>
                <li>
                    Influencers: <span className='text-secondary'>{transactionMetrics.influencers}</span>
                </li>
                <li>
                    Admins. finanzas: <span className='text-secondary'>{transactionMetrics.sells}</span>
                </li>
            </ul>    
        </article>
        </>
    )
}

export default ShowMetrics;