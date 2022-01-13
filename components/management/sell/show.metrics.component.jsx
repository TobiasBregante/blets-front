import { useState, useEffect } from 'react';
import SellsPending from './sells.pending.component';
import CurrencyFormat from 'react-currency-format';
import moment from 'moment';
import axios from 'axios';
import GetItem from  '../../localStorage/getItem'

const TransactionsComp = prop => {
    const [transactionMetrics, setTransactionMetrics] = useState([]);
    const [valueDate, setValueDate] = useState(moment().format('YYYY-MM-DD'));
    const [cookie, setCookie] = useState(GetItem('user'));

    const handlerFetchMetrics = async (date = moment().format('YYYY-MM-DD')) => {
        // fetch metrics
        const getFetchMetrics = await axios.get(`${process.env.API_PATH}/v1/product/transaction/sells/metrics`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'date_filter': date,
                'business':  cookie?.user?.business,
                'rol':  cookie?.user?.rol
            }
        });
        const resFetchMetrics = await getFetchMetrics?.data;
        setTransactionMetrics(resFetchMetrics);
    },
    handlerChangeFilterDate = e => {
        setValueDate(moment(e.target.value).format('YYYY-MM-DD'))
        const date = moment(e.target.value).format('YYYY-MM-DD')
        handlerFetchMetrics(date)
        console.log(date);
        console.log(transactionMetrics);
    }
    
    useEffect(() => {
        handlerFetchMetrics();
    }, [prop]);

    return(
        <>
        <article className="content-metrics-header-mybusiness col-12 col-sm-12 col-lg-12 col-xl-12">
            <ul>
                <li title='Pago exitoso'>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="currentColor" 
                        className="bi bi-bag-check text-primary" 
                        viewBox="0 0 16 16">
                        <path 
                            fillRule="evenodd" 
                            d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                        />
                        <path 
                            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                        />
                    </svg> 
                    <span className='text-primary d-block'>{transactionMetrics?.success}</span>
                </li>
                <li title='Pago pendiente'>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="currentColor" 
                        className="bi bi-bag-dash text-secondary" 
                        viewBox="0 0 16 16">
                        <path 
                            fillRule="evenodd" 
                            d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
                        />
                        <path 
                            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                        />
                    </svg> 
                    <span className='text-secondary d-block'>{transactionMetrics?.pending}</span>
                </li>
                <li>
                    <label className="badge p-2">
                    <span className='m-1 d-block text-dark'>Filtrar por fecha</span>
                        {
                            transactionMetrics.latest_sell 
                            && <input
                                className='d-block form-control'
                                onChange={handlerChangeFilterDate} 
                                type="date" 
                                min={moment(
                                    transactionMetrics?.latest_sell[0]?.length >= 0 
                                    && transactionMetrics.latest_sell[0]?.create_at_filter)} 
                                max={moment().format('YYYY-MM-DD')}
                                value={valueDate}
                            />
                        }
                    </label>
                </li>
                <li>
                    <span className='text-dark'>Cash total: </span> 
                    <span className='text-success badge bg-dark p-2 metrics-badge-amount'>
                        <CurrencyFormat 
                            value={transactionMetrics?.amount_total_cancel || 0} 
                            displayType={'text'} 
                            thousandSeparator={true} 
                            prefix={'$'}
                        />
                    </span>
                </li>
                <li>
                    <span className='text-dark'>Cash aprobado: </span> 
                    <span className='text-success badge bg-dark p-2 metrics-badge-amount'>
                        <CurrencyFormat 
                            value={transactionMetrics?.amount_total_cancel || 0} 
                            displayType={'text'} 
                            thousandSeparator={true} 
                            prefix={'$'}
                        />
                    </span>
                </li>
                <li>
                    <span className='text-dark'>Cash pendiente: </span> 
                    <span className='text-warning badge bg-dark p-2 metrics-badge-amount'>
                        <CurrencyFormat 
                            value={transactionMetrics?.amount_total_cancel || 0} 
                            displayType={'text'} 
                            thousandSeparator={true} 
                            prefix={'$'}
                        />
                    </span>
                </li>
                <li>
                    <span className='text-dark'>Cash rechazado: </span> 
                    <span className='text-danger badge bg-dark p-2 metrics-badge-amount'>
                        <CurrencyFormat 
                            value={transactionMetrics?.amount_total_cancel || 0} 
                            displayType={'text'} 
                            thousandSeparator={true} 
                            prefix={'$'}
                        />
                    </span>
                </li>
            </ul>
        </article>
        <article className='col-12 col-sm-12 col-lg-12 col-xl-12 content-sells-pending'>
            <SellsPending dateFilter={valueDate}/>
        </article>
        </>
    )
}

export default TransactionsComp;