import { POST_STORE_FAILURE, POST_STORE_LOADING, POST_STORE_SUCCESS } from "../ActionType"


const initialState = {
    loading: false,
    allStores: [],
    product:[],
}

export const postStoreReducers = (state= initialState,action) => {

    switch (action.type){
        case POST_STORE_LOADING:{
            return {
                ...state,
                loading: true,
            }
        }

        case POST_STORE_SUCCESS:{
            return {
                ...state,
                loading: false,
                statusCode: 200,
            }
        }

        case POST_STORE_FAILURE : {
            return {
                ...state,
                loading: false,
                statusCode: 400
            }
        }

        default:{
            return{
                ...state,
            }
        }
    }
}