import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import CurrencyFormat from 'react-currency-format'

const SwitchPriceAuth = ({ discount = 0, amount = 0 }) => {
    const [cookies, setCookie] = useCookies(['user'])
    const [amountEdit, setAmountEdit] = useState('')
    const [state, setState] = useState(true)

    useEffect(() => {
        if(state && amount > 0){
            cookies.user 
            && !cookies.user.discount_token 
            && discount > 0 
            || !cookies.user
            ? setAmountEdit(amount)
            : setAmountEdit((amount - ((amount * discount) / 100)))
            setState(false)
        }
    })
     
    return (
        <>
        {
            amount !== 0 
            ? <CurrencyFormat 
                value={amountEdit} 
                displayType={'text'} 
                thousandSeparator={true} 
                prefix={'$'}
            />
            : <span className='text-success'>GRATIS</span>
        }
        </>
    )
},
HandlerSwitchPriceAuth = (discount = 0, amount = 0, cookies = {}) => {
    let amountEdit

    if(amount > 0){
        amountEdit = cookies.user 
        && !cookies.user.discount_token 
        && discount > 0 
        || !cookies.user
        ? amount
        : (amount - ((amount * discount) / 100))
    }

    return amountEdit
}

export default { SwitchPriceAuth, HandlerSwitchPriceAuth }