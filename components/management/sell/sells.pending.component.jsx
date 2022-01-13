import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ColSell from './col.sells.pending.component';
import OnLoadComponent from '../../onload.component';
import axios from 'axios';
import GetItem from '../../localStorage/getItem'

const SellsPending = ({ dateFilter }) => {
    const [transactionFind, setTransactionFind] = useState([]);
    const [cookies, setCookies] = useState(GetItem('user'));
    const [onLoadAdd, setOnLoadAdd] = useState(false);
    const Router = useRouter();
    
    const handlerFetch = async () => {
        setOnLoadAdd(true)
        const getFetch = await axios.get(`${process.env.API_PATH}/v1/product/transaction/sells`, 
        {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'date_filter': dateFilter,
                'business': cookies?.user?.business
            }
        });
        const resFetch = await getFetch?.data;
        await resFetch && resFetch.status && dateFilter && setOnLoadAdd(false) 
        setTransactionFind(resFetch);
    }
    
    const cred = ['seller', 'master'];
    let accessDenied = false;
    
    useEffect(() => {
        handlerFetch()
    }, [dateFilter])

    useEffect(() => {
        cred?.length > 0 && cred.forEach(credential => {
            if(cookies?.user?.rol === credential){
                accessDenied = true;
            }
        })
        !accessDenied && Router.push('/')
    }, [cookies?.user])
    
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