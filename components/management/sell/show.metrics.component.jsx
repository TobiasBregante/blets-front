import { useState } from 'react';
import { useEffect } from 'react';
import SellsPending from './sells.pending.component';

const TransactionsComp = prop => {
    const [transactionMetrics, setTransactionMetrics] = useState([]);
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
                    En proceso: <span className='text-secondary'>{transactionMetrics.pending}</span>
                </li>
            </ul>    
        </article>
        <article className='col-12 col-sm-12 col-lg-12 col-xl-12'>
            <SellsPending/>
        </article>
        </>
    )
}

export default TransactionsComp;