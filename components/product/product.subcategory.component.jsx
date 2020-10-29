import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';
import CurrencyFormat from 'react-currency-format';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import { useRef } from 'react';

const ProductSubcategory = prop => {
    const imgContain = useRef(null)
    const Router = useRouter();
    const { subcategory } = Router.query;
    const [product, setProduct] = useState([]);
    const [imgContentState, setImgContentState] = useState('');
    useEffect(() => {
        if(imgContain.current){
            setImgContentState(imgContain.current.offsetWidth)
        }
    }, null)
    useEffect(() => {
        const getAllProduct = async () => {
            const fetchAll = await fetch(`${process.env.API_PATH}/v1/product/category/indumentarias/${subcategory}`, {
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
                <Link key={i} href="/[name]/[id]" as={`/${prod.title}/${prod._id}`}>
                    <a className="card-product-all card mb-3 col-12 col-sm-12 col-lg-12 col-xl-12" style={{maxWidth: '540px'}}>
                        <article className="row no-gutters">
                            <article ref={imgContain} className="col-md-4">
                                {
                                    prod.img 
                                    ? <CloudinaryContext cloudName="blets">
                                        <Image className='card-img' publicId={`${prod.img}.jpg`}>
                                            <Transformation crop='scale' quality='60' width={(imgContentState - 50)} dpr='auto'/>
                                        </Image>
                                    </CloudinaryContext>
                                    : ''
                                }
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

export default ProductSubcategory;