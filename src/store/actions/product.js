import axios from "axios";

export function getProducts(filterValue, searchValue) {
    return (dispatch) => {

        const filterData = filterValue ? '/category/' + filterValue : '';
        const searchData = searchValue ? '/search?q=' + searchValue : '';

        axios.get(`https://dummyjson.com/products${filterData}${searchData}`)
            .then(response => {
                if (response && response.data) {
                    dispatch({ type: `GET_PRODUCTS`, payload: response.data.products });
                }
            })
    }
}


export function getProductById(productId) {
    return (dispatch) => {
        axios.get(`https://dummyjson.com/products/${productId}`)
            .then(response => {
                if (response && response.data) {
                    dispatch({ type: `GET_PRODUCT`, payload: response.data });
                }
            })
    }
}

export function getCategories() {
    return (dispatch) => {
        axios.get('https://dummyjson.com/products/categories')
            .then(response => {
                if (response && response.data) {
                    dispatch({ type: `GET_CATEGORIES`, payload: response.data });
                }
            })
    }
}
