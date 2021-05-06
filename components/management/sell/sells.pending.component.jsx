import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { useCookies } from 'react-cookie';
import ColSell from './col.sells.pending.component';
import OnLoadComponent from '../../onload.component';
import axios from 'axios';

const SellsPending = ({ dateFilter }) => {
    const [transactionFind, setTransactionFind] = useState([]);
    const [cookies, setCookies] = useCookies(['user']);
    const [onLoadAdd, setOnLoadAdd] = useState(false);
    const Router = useRouter();
    
    const handlerFetch = async () => {
        setOnLoadAdd(true)
        const getFetch = await axios.get(`${process.env.API_PATH}/v1/product/transaction/sells`, 
        {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'date_filter': dateFilter
            }
        });
        const resFetch = await getFetch.data;
        await resFetch && resFetch.status && dateFilter && setOnLoadAdd(false) 
        setTransactionFind(resFetch);
    }
    
    useEffect(() => {
        if(cookies.user 
            && cookies.user.rol !== 'seller'){
            Router.push('/')
        }else if(!cookies.user){
            Router.push('/')
        }
        handlerFetch();
    }, [dateFilter])
    return(
        <>
        {
            transactionFind.status == 200 
            && transactionFind.transaction.length > 0
            ? transactionFind.transaction.map((data, i) => (
                <ColSell transaction={data} key={i}/>
            )) 
            : <p>No hay transacciones disponibles</p> 
        }
        <OnLoadComponent.OnloadArticlesComponent status={onLoadAdd}/>
        </>
    )
}

export default SellsPending;