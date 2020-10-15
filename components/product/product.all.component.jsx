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
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link href="/" as='/'><a>Inicio</a></Link></li>
              <li className="breadcrumb-item active" aria-current="page">{categoria}</li>
            </ol>
          </nav>
        {
             product && product.length > 0 ? product.map((prod, i) => (
                <Link key={i} href="/[name]/[id]" as={`/${prod.title}/${prod._id}`}>
                    <a className="card-product-all card mb-3 col-12 col-sm-12 col-lg-12 col-xl-12" style={{maxWidth: '540px'}}>
                        <article className="row no-gutters">
                            <article className="col-md-4">
                                <CloudinaryContext 
                                    cloudName="blets" 
                                    >
                                    <Image className='card-img' src={`https://res.cloudinary.com/blets/image/upload/${prod.img}`}/>
                                </CloudinaryContext>
                            </article>
                            <article className="col-md-8">
                                <article className="card-body">
                                    <h5 className="card-title">{prod.title}</h5>
                                    <p className="card-text">{prod.description}</p>
                                    <p className="card-price card-text">
                                        {(prod.amount !== 0) 
                                        ? <CurrencyFormat value={prod.amount} displayType={'text'} thousandSeparator={true} prefix={'$'}/>
                                        : <span className='text-success'>GRATIS</span>}
                                    </p>
                                    <p className="card-text"><small className="text-muted">{prod.last_since}</small></p>
                                </article>
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