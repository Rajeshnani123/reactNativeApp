import { MULTI_PRODUCT_ADD_FAILURE, MULTI_PRODUCT_ADD_LOADING, MULTI_PRODUCT_ADD_SUCCESS } from "../ActionType"


const initialState = {
    loading: false,
    addProduct: false,
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

        default : {
            return{
                ...state,
            }
        }
    }
}