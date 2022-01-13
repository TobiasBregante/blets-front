import Link from 'next/link';
import { useState } from 'react';
import { useEffect } from 'react';
import CurrencyFormat from 'react-currency-format';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

const BlockProduct = prop => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getAllProduct = async () => {
            const fetchAll = await fetch(`${process.env.API_PATH}/v1/product/category/${prop?.api}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            })
            const dataFetch = await fetchAll.json();
            setProduct(dataFetch);
        }
        getAllProduct()
    }, [prop.api])

    return(
        <>
        <article className="title-block-prod-home col-12 col-sm-12 col-lg-12 col-xl-12">
            <article className="col-12 col-sm-12 col-lg-3 col-xl-3 sub-contain">
                <h1>{prop.section}</h1>
            </article>
        </article>
        {
            product.length > 0 ? product.map((prod, i) => (
                <Link key={i} href='/[name]/[id]' as={`${prod.title}/${prod._id}`}>
                    <a className="card col-12 col-sm-12 col-lg-2 col-xl-2">
                        <article className="card-body">
                            <CloudinaryContext 
                                    cloudName="blets" 
                                    className='img-card-product-block-home' 
                                    style={{backgroundImage: `url('http://res.cloudinary.com/blets/image/upload/${prod.img}')`}} 
                                />
                            <p className="card-title">{
                                prod.title.length > 34 
                                ? `${prod.title.slice(0, 15)} ..`
                                : prod.title
                            }</p>
                            <p className="card-price">
                            {(prod.amount !== 0) 
                            ? <CurrencyFormat value={prod.amount} displayType={'text'} thousandSeparator={true} prefix={'$'}/>
                            : <span className='text-success'>GRATIS</span>}
                            </p>
                            <p className="d-none card-description">
                                {prod.description}
                            </p>
                        </article>
                    </a>
                </Link>
            )) : <h3 className='content-not-such-product-home'>Esta sección esta vacía</h3>
        }
        </>
    )
}

export default BlockProduct;