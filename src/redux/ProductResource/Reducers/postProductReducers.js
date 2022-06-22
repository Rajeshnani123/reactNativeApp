import { CREATE_PRODUCT_CATEGORIES_FAILURE, CREATE_PRODUCT_CATEGORIES_LOADING, CREATE_PRODUCT_CATEGORIES_SUCCESS, FILE_UPLOAD_FAILURE, FILE_UPLOAD_LOADING, FILE_UPLOAD_SUCCESS, MULTI_PRODUCT_ADD_FAILURE, MULTI_PRODUCT_ADD_LOADING, MULTI_PRODUCT_ADD_SUCCESS } from "../ActionType"


const initialState = {
    loading: false,
    addProduct: false,
    imageURl: "",
    error: "",
    categories: []
}

export const postProductReducers = (state = initialState, action) => {
    switch (action.type){
        case MULTI_PRODUCT_ADD_LOADING: {
            return{
                ...state,
                loading: true,
            }
        }

        case MULTI_PRODUCT_ADD_SUCCESS : {
            return{
                ...state,
                loading: false,
                addProduct: true
            }
        }

        case MULTI_PRODUCT_ADD_FAILURE : {
            return {
                ...state,
                loading: false,
                addProduct: false
            }
        }

        case FILE_UPLOAD_LOADING:{
            return{
                ...state,
                loading: true,
            }
        }

        case FILE_UPLOAD_SUCCESS: {
            return{
                ...state,
                loading: false,
                imageURl: action.imageURl,
            }
        }

        case FILE_UPLOAD_FAILURE: {
            return{
                ...state,
                loading: false,
                error: action.error,
            }
        }

        case POST_PRODUCTS_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }

        case POST_PRODUCTS_SUCCESS: {
            return{
                ...state,
                loading: false,
                statusCode: 200,
            }
        }

        case POST_PRODUCTS_FAILURE: {
            return{
                ...state,
                loading: false,
                statusCode: 400,
            }
        }

        case POST_PRODUCTS_RESET: {
            return{
                ...state,
                loading: false,
                statusCode: 0,
                addProduct: false,
            }
        }
        case CREATE_PRODUCT_CATEGORIES_LOADING:{
            return{
                ...state,
                loading: true,
                error: '',
            }
        }

        case CREATE_PRODUCT_CATEGORIES_SUCCESS:{
            return{
                ...state,
                loading: false,
                categories: action.categories
            }
        }

        case CREATE_PRODUCT_CATEGORIES_FAILURE:{
            return{
                ...state,
                loading: false,
                error: action.error,
            }
        }

        default : {
            return{
                ...state,
            }
        }
    }
}