import { DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_LOADING, DELETE_PRODUCT_SUCCESS, GET_ALL_PRODUCTS_FAILURE, GET_ALL_PRODUCTS_LOADING, GET_ALL_PRODUCTS_SUCCESS, GET_PRODUCT_CATEGORIES_FAILURE, GET_PRODUCT_CATEGORIES_LOADING, GET_PRODUCT_CATEGORIES_SUCCESS, GET_PRODUCT_FAILURE, GET_PRODUCT_LOADING, GET_PRODUCT_RESET, GET_PRODUCT_SUCCESS, STORE_PRODUCT_GET_FAILURE, STORE_PRODUCT_GET_LOADING, STORE_PRODUCT_GET_SUCCESS } from "../ActionType"


const initialState = {
    loading: false,
    productLoading: false,
    statusCode: 0,
    allProducts: [],
    product:[],
    storeProduct:[],
    categories: [],
}

export const getProductReducers = (state= initialState, action) => {
        switch(action.type){
            case GET_ALL_PRODUCTS_LOADING: {
                return {
                    ...state,
                    loading: true,
                }
            }

            case GET_ALL_PRODUCTS_SUCCESS: {
                return {
                    ...state,
                    loading: false,
                    allProducts: action.data,
                }
            }

            case GET_ALL_PRODUCTS_FAILURE: {
                return {
                    ...state,
                    loading: false,
                    error: action.error,
                }
            }

            case GET_PRODUCT_LOADING: {
                return {
                    ...state,
                    productLoading: true,
                    statusCode: 0,
                }
            }

            case GET_PRODUCT_SUCCESS: {
                return{
                    ...state,
                    productLoading: false,
                    statusCode: 200,
                    product: action.data,
                }
            }

            case GET_PRODUCT_FAILURE: {
                return{
                    ...state,
                    productLoading: false,
                    product: [],
                    statusCode:400,
                    error: action.error,
                }
            }

            case GET_PRODUCT_RESET: {
                return {
                    ...state,
                    productLoading: false,
                    statusCode : 0,
                }
            }
            case DELETE_PRODUCT_LOADING: {
                return {
                    ...state,
                    loading: true,
                }
            }

            case DELETE_PRODUCT_SUCCESS: {
                return {
                    ...state,
                    loading: false,
                }
            }

            case DELETE_PRODUCT_FAILURE: {
                return{
                    ...state,
                    loading: false
                }
            }

            case STORE_PRODUCT_GET_LOADING:{
                return {
                    ...state,
                    loading: true,
                }
            }

            case STORE_PRODUCT_GET_SUCCESS: {
                return {
                    ...state,
                    loading: false,
                    storeProduct: action.data,
                }
            }

            case STORE_PRODUCT_GET_FAILURE: {
                return {
                    ...state,
                    loading: false,
                    error: action.error,
                }
            }
            case GET_PRODUCT_CATEGORIES_LOADING: {
                return {
                    ...state,
                    loading: true,
                }
            }
            case GET_PRODUCT_CATEGORIES_SUCCESS: {
                return {
                    ...state,
                    loading: false,
                    categories: action.categories
                }
            }
            case GET_PRODUCT_CATEGORIES_FAILURE: {
                return {
                    ...state,
                    loading: false,
                    error: action.error
                }
            }
            default: {
                return{
                    ...state,
                }
            }
        }
}