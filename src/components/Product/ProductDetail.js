import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../store/actions/product';
import '../../stylesheets/Product.css';

export default function ProductDetail() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const [productData, setProductData] = useState({});
    const productDetail = useSelector((product) => product.product.product);
    const { title, description, images, price, thumbnail, rating } = productData;

    useEffect(() => {
        dispatch(getProductById(id));
    }, []);

    useEffect(() => {
        if (productDetail) {
            setProductData(productDetail);
        }
    }, [productDetail])

    return (
        <>
            <div className='product-detail'>
                <section>
                    <div className='product-images'>
                        {images ? (
                            <div className='image-list'>
                                {images && images.slice(1, 4).map((product, index) => {
                                    return (
                                        <img className='product-img' key={index} src={product} />
                                    )
                                })
                                }
                            </div>) : ''
                        }
                        {thumbnail ? (
                            <div>
                                <img className='main-image' src={thumbnail} />
                            </div>
                        ) : ''
                        }
                        <div className='product-content'>
                            <h2>{title}</h2><p>{description}</p>
                            <p><b>{price} $ &nbsp;&nbsp; - </b> Rating <b>{rating}</b></p>
                            <Button color="primary">Add to cart</Button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )

}