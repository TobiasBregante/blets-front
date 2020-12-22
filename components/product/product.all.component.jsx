import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import CurrencyFormat from 'react-currency-format';
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';
import { useCookies } from 'react-cookie';

const ProductAll = prop => {
    const [cookies, setCookie] = useCookies(['user'])
    const imgContain = useRef(null)
    const Router = useRouter();
    const { categoria } = Router.query;
    const [amount, setAmount] = useState('')
    const [product, setProduct] = useState([]);
    const [imgContentState, setImgContentState] = useState('');
    useEffect(() => {
        if(imgContain.current){
            setImgContentState(imgContain.current.offsetWidth)
        }
    }, null)
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
            if(!cookies.user){
                    setAmount(
                        <CurrencyFormat 
                            value={dataFetch.amount} 
                            displayType={'text'} 
                            thousandSeparator={true} 
                            prefix={'$'}
                        />
                    )
            }else{
                setAmount(
                    <CurrencyFormat 
                        value={((dataFetch.amount * dataFetch.discount) / 100)} 
                        displayType={'text'} 
                        thousandSeparator={true} 
                        prefix={'$'}
                    />
                )
            }
        }
        getAllProduct()
    }, [])
    return(
        <>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link href="/" as='/'><a>Inicio</a></Link></li>
              <li className="breadcrumb-item active text-light" aria-current="page">{categoria}</li>
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
                                        {
                                            (product.amount !== 0) 
                                            ? amount
                                            : <span className='text-success'>GRATIS</span>
                                        }
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