import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';
import CurrencyFormat from 'react-currency-format';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import { useRef } from 'react';

const ProductAll = prop => {
    const imgContent = useRef(null)
    const Router = useRouter();
    const { categoria } = Router.query;
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const getAllProduct = async () => {
            const fetchAll = await fetch(`${process.env.API_PATH}/v1/product/category/${categoria}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            })
            const dataFetch = await fetchAll.json();
            setProduct(dataFetch);
        }
        getAllProduct()
    }, [prop])
    
    
    return(
        <>
        {
             product && product.length > 0 ? product.map((prod, i) => (
                <Link key={i} href="/[name]/[id]" as={`/${prod.title}/${prod._id}`}>
                    <a className="card-product-all card col-12 col-sm-12 col-lg-12 col-xl-12">
                        <article className="card-body">
                            <article className='img-title-payment-product-all'>
                                <CloudinaryContext 
                                    cloudName="blets" 
                                    className='img-product-all' 
                                    style={{backgroundImage: `url('http://res.cloudinary.com/blets/image/upload/${prod.img}')`}} 
                                />
                                <p className="card-title">{prod.title}</p>
                                <p className="card-price">
                                    {(prod.amount !== 0) 
                                    ? <CurrencyFormat value={prod.amount} displayType={'text'} thousandSeparator={true} prefix={'$'}/>
                                    : <span className='text-success'>GRATIS</span>}
                                </p>
                            </article>
                            <article className='description-product-all'>
                                <p className="card-description">
                                    {prod.description}
                                </p>
                            </article>
                        </article>
                    </a>
                </Link>
            )) : <h3 className='p-2 m-auto not-products-title'>No hay artículos disponibles</h3>
        }
        </>
    )
}

export default ProductAll;