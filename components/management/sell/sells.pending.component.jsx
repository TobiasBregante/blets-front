import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { useCookies } from 'react-cookie';
import ColSell from './col.sells.pending.component';

const SellsPending = e => {
    const [transactionFind, setTransactionFind] = useState([]);
    const [cookies, setCookies] = useCookies(['user']);
    const Router = useRouter();
    useEffect(() => {
        if(cookies.user 
            && cookies.user.rol !== 'seller'){
            Router.push('/')
        }else if(!cookies.user){
            Router.push('/')
        }
        const handlerFetch = async () => {
            const getFetch = await fetch(`${process.env.API_PATH}/v1/product/transaction/sells`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
            const resFetch = await getFetch.json();
            setTransactionFind(resFetch);
        }
        handlerFetch();
    }, [e])
    return(
        <>
        {
            transactionFind.status == 200 
            ? transactionFind.transaction.map((data, i) => <ColSell key={i} idProduct={data.id_product} dataOrder={data}/>) 
            : <p>No hay transacciones disponibles</p> 
        }
        </>
    )
}

export default SellsPending;