import { useState } from "react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const ShowMetrics = prop => {
    const [influencer, setInfluencer] = useState({});
    const [cookies, setCookie] = useCookies(['user']);
    useEffect(() => {
        const handlerFetchInfluencer = async () => {
            const userFetch = await fetch(`${process.env.API_PATH}/v1/profile/influencer/${cookies.user.id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
            const userData = await userFetch.json();
            return userData
        }
        const Dashboard = async dashboardInfluencer => {
            const getFetch = await fetch(`${process.env.API_PATH}/v1/influencer/dashboard/${dashboardInfluencer}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
            const resFetch = await getFetch.json();
            setInfluencer(resFetch);
        }
        if(cookies.user){
            handlerFetchInfluencer()
            .then(success => Dashboard(success.public_token));
        }
    }, [prop])
    return(
        <>
        <article className="content-metrics-header-mybusiness col-12 col-sm-12 col-lg-12 col-xl-12">
            <ul>
                <li>
                    Ventas: <span className='text-primary'>{influencer.success_payments}</span>
                </li>
                <li>
                    Usaron tu código: <span className='text-secondary'>{influencer.count_token}</span>
                </li>
            </ul>    
        </article>
        </>
    )
}

export default ShowMetrics;