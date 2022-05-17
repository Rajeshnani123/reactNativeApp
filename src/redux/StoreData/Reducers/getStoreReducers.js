import { GET_ALL_PRODUCTS_FAILURE } from "../../ProductResource/ActionType"
import { GET_ALL_STORE_LOADING, GET_ALL_STORE_SUCCESS } from "../ActionType"

const initialState = {
    loading: false,
    allStores: [],
    product:[],
}

export const getStoreReducers = (state = initialState,action) => {

    switch (action.type){
        case GET_ALL_STORE_LOADING:{
            return {
                ...state,
                loading: true,
            }
        }

        case GET_ALL_STORE_SUCCESS : {
            return {
                ...state,
                loading: false,
                allStores: action.data,
            }
        }

        case GET_ALL_PRODUCTS_FAILURE : {
            return {
                ...state,
                loading: false,
                allStores: [],
                error: action.error,
            }
        }

        default:{
            return{
                ...state
            }
        }
    }
}