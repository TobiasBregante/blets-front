import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';
import SwitchPrice from './price.convert.component'
import GetItem from '../localStorage/getItem.js'

const ProductList = ({ prod }) => {
    const imgContain = useRef(null)
    const [imgContentState, setImgContentState] = useState('');
    const [cookie, setCookie] = useState(GetItem('user'))

    useEffect(() => {
        if(imgContain.current){
            setImgContentState(imgContain.current.offsetWidth)
        }
    }, null)

    return(
        <>
        <Link href="/[name]/[id]" as={`/${prod.title}/${prod._id}`}>
            <a className="card-product-all card mb-3 col-12 col-sm-12 col-lg-12 col-xl-12">
                <article className="row no-gutters">
                    <article ref={imgContain} className="col-md-4 m-auto">
                        {
                            prod.img 
                            ? <CloudinaryContext cloudName="blets">
                                <Image className='card-img' publicId={`${prod.img}.jpg`}>
                                    <Transformation crop='scale' quality='60' width='120' dpr='auto'/>
                                </Image>
                            </CloudinaryContext>
                            : ''
                        }
                    </article>
                    <article className="col-md-8">
                        <article className="card-body">
                            <h5 className="card-title">{prod.title}</h5>
                            <p className="card-text">{prod.description.slice(0, 70)}...</p>
                            <p className="card-price card-text">
                                <SwitchPrice.SwitchPriceAuth 
                                    discount={prod.discount} 
                                    amount={prod.amount}
                                />
                            </p>
                            <p className="card-text"><small className="text-muted">{prod.last_since}</small></p>
                        </article>
                    </article>
                </article>
            </a>
        </Link>
        </>
    )
}

export default ProductList