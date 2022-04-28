import { DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_LOADING, DELETE_PRODUCT_SUCCESS, GET_ALL_PRODUCTS_FAILURE, GET_ALL_PRODUCTS_LOADING, GET_ALL_PRODUCTS_SUCCESS, GET_PRODUCT_FAILURE, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS } from "../ActionType"


const initialState = {
    loading: false,
    allProducts: [],
    product:[],
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
                    loading: true,
                }
            }

            case GET_PRODUCT_SUCCESS: {
                return{
                    ...state,
                    loading: false,
                    product: action.data,
                }
            }

            case GET_PRODUCT_FAILURE: {
                return{
                    ...state,
                    loading: false,
                    product: [],
                    error: action.error,
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

            default: {
                return{
                    ...state,
                }
            }
        }
}