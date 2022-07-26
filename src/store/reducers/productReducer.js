const INITIAL_STATE = {
    products: [],
    categories: [],
    product: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            };
        case 'GET_PRODUCT':
            return {
                ...state,
                product: action.payload
            };
        case 'GET_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            };
        default:
            return state;
    }
};
