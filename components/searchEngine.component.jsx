import { useRouter } from "next/router";
import { useState } from "react";

const SearchEngine = () => {
    const
    [inputSearch, setInputSearch] = useState(''),
    Router = useRouter()

    const handlerInputSearch = e => {
        setInputSearch(e.target.value);
    }
    const handlerSendSearch = e => {
        e.preventDefault()
        inputSearch && inputSearch !== '' 
        ? Router.push(`/buscar/${inputSearch}`) : false;
    }

    return(
        <>
        <article className="row contain-search">
            <article className="col-12 p-0">
                <form onSubmit={handlerSendSearch} className="col-11 col-sm-11 col-lg-6 col-xl-6 m-auto p-0 bg-light">
                    <input onChange={handlerInputSearch} type="search" className='form-control' placeholder='Buscar zapatillas'/>
                    <input type="submit" className='btn btn-primary' value="Ir" />
                </form>
            </article>
        </article>
        </>
    )
}

export default SearchEngine