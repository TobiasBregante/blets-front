import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import ProductList from './product.list.component'
import axios from 'axios'

const ProductSubcategory = prop => {
    const Router = useRouter();
    const { subcategory } = Router.query;
    const [product, setProduct] = useState([]);

    const getAllProduct = async () => {
        const fetchAll = await axios.get(`${process.env.API_PATH}/v1/product/category/indumentarias/${subcategory}`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        })
        const dataFetch = await fetchAll.data;
        setProduct(dataFetch);
        return dataFetch
    }

    
    useEffect(() => {
        if (Router.asPath !== Router.route) {
            getAllProduct()
        }
    }, [Router])
    return(
        <>
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link href="/" as='/'>
                    <a>Inicio</a>
                </Link>
            </li>
            <li className="breadcrumb-item">
                <Link href="/categorias/[categoria]" as='/categorias/indumentarias'>
                    <a>indumentarias</a>
                </Link>
            </li>
            <li className="breadcrumb-item active text-light" aria-current="page">{subcategory}</li>
        </ol>
        </nav>
        {
            product && product.length > 0 ? product.map((prod, i) => (
                <ProductList prod={prod} key={i}/>
            )) : <h3 className='p-2 m-auto not-products-title'>No hay artículos disponibles</h3>
        }
        </>
    )
}

export default ProductSubcategory;