import { STORE_PRODUCTS_FAILURE, STORE_PRODUCTS_LOADING, STORE_PRODUCTS_SUCCESS } from "../ActionType"


const initialState = {
    loading: false,
    storeData: {},
    products: {}
}

export const getMdmReducers = (state =  initialState, action) => {

    switch(action.type){
        case STORE_PRODUCTS_LOADING:{
            return{
                ...state,
                loading: true,
            }
        }

        case STORE_PRODUCTS_SUCCESS: {
            return{
                ...state,
                loading: false,
                storeData: action.data,
            }
        }

        case STORE_PRODUCTS_FAILURE: {
            return{
                ...state,
                loading: false,
                error: action.error
            }
        }

        default : {
            return{
                ...state,
            }
        }
    }
}