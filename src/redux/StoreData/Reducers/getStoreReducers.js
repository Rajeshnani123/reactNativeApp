import { GET_ALL_PRODUCTS_FAILURE } from "../../ProductResource/ActionType"
import { GET_ALL_STORE_LOADING, GET_ALL_STORE_SUCCESS, GET_STORE_DATA_BY_LOCATION_FAILURE, GET_STORE_DATA_BY_LOCATION_LOADING, GET_STORE_DATA_BY_LOCATION_SUCCESS } from "../ActionType"

const initialState = {
    loading: false,
    allStores: [],
    product:[],
    storeDatebyLocation:[],
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

        case GET_STORE_DATA_BY_LOCATION_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }

        case GET_STORE_DATA_BY_LOCATION_SUCCESS : {
            return {
                ...state,
                loading: false,
                storeDatebyLocation: action.storeDatebyLocation,
            }
        }

        case GET_STORE_DATA_BY_LOCATION_FAILURE : {
            return {
                ...state,
                loading: false,
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