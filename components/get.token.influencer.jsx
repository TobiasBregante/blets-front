import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";

const InputTokenInfluencer = () => {
    const Router = useRouter();
    const [tokenValue, setTokenValue] = useState('');
    const [btnValueToken, setBtnValueToken] = useState('');
    const [cookies, setCookie] = useCookies(['user']);
    useEffect(() => {
        if(cookies.user && cookies.user.discount_token){
            setBtnValueToken('d-none')
        }
    })

    const handlerInputToken = e => {
        setTokenValue(e.target.value);
    }
    const AuthToken = async token_payment => {
        const fetchToken = await fetch(`${process.env.API_PATH}/v1/influencer/${token_payment}`);
        const getFetch = await fetchToken.json();
        return getFetch;
    }
    const handlerSubmit = e => {
        e.preventDefault()
        if(cookies.user){
            AuthToken(tokenValue)
            .then(success => {
                if(success.token_verify === 1){
                    setBtnValueToken('d-none')
                    let userCookieCredentials = cookies.user;
                    userCookieCredentials.discount_token = tokenValue;
                    setCookie('user', userCookieCredentials, { maxAge: 86400 });
                }else{
                    setBtnValueToken('')
                }
            })
        }else{
            window.location = '/iniciar-sesion';
        }
    }
    return(
        <>
        <form className={`frm-token ${btnValueToken}`} onSubmit={handlerSubmit}>
            <input onChange={handlerInputToken} className={`border-0 code-ref-input form-control bg-light text-dark`} 
                type="text" 
                placeholder='#Código de referido' 
                aria-label="#Código de referido"/>
            <input type="submit" className='btn btn-search' value='Ir'/>
        </form>
        </>
    )
}

export default InputTokenInfluencer;