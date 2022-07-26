import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, getCategories } from '../../store/actions/product';
import Product from '../Product/Product';
import '../../stylesheets/Dashboard.css';


export default function Dashboard() {

    const dispatch = useDispatch();
    const productlist = useSelector((product) => product.product.products);
    const categoriesList = useSelector((category) => category.product.categories);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        dispatch(getProducts('', ''));
    }, [])

    useEffect(() => {
        dispatch(getCategories());
    }, [])

    useEffect(() => {
        if (categoriesList) {
            setCategories(categoriesList);
        }
    }, [categoriesList])

    useEffect(() => {
        if (productlist) {
            setProducts(productlist);
        }
    }, [productlist])

    const handleChange = (value) => {
        dispatch(getProducts(value, ''))
    }

    const searchText = (text) => {
        dispatch(getProducts('', text))
    }

    return (
        <>
            <main >
                {categories ? (
                    <div className='filter-option'>
                        <div className='category-selection'>
                            <label>Filter by category:</label>
                            <select name="categories"
                                onChange={e => handleChange(e.target.value)}>
                                {categories && categories.map((category, index) => {
                                    return (
                                        <option key={index} value={category}>{category}</option>
                                    )
                                })
                                }
                            </select>
                        </div>
                        <div>
                            <input type='text' placeholder='search product' name='searchProduct' onChange={e => searchText(e.target.value)} />
                        </div>
                    </div>
                ) : ''}
                <div className='dash-container'>
                    {products && products.map((item) => {
                        return (
                            <Product
                                key={item.id}
                                productId={item.id}
                                title={item.title}
                                category={item.category}
                                description={item.description}
                                price={item.price}
                                thumbnail={item.thumbnail}
                            />
                        )
                    })
                    }
                </div>
            </main>
        </>
    )

}