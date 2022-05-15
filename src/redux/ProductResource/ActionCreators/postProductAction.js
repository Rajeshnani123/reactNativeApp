import { ApiConnections } from "../../../Api/ApiConnections";
import { post } from "../../../Api/BaseApi";
import { MULTI_PRODUCT_ADD_FAILURE, MULTI_PRODUCT_ADD_LOADING, MULTI_PRODUCT_ADD_SUCCESS, POST_PRODUCTS_FAILURE, POST_PRODUCTS_LOADING, POST_PRODUCTS_SUCCESS } from "../ActionType"


export const addProduct = (Body) => {
    return async(dispatch) => {
        try{
            dispatch({type: POST_PRODUCTS_LOADING});
            const response = await post(ApiConnections.Products,Body);
            if(response.data){
                dispatch({type: POST_PRODUCTS_SUCCESS});
            }else{
                dispatch({type: POST_PRODUCTS_FAILURE});
            }
        }catch(error){
            dispatch({type: POST_PRODUCTS_FAILURE});
        }
    }
}

export const multiStoreProduct = (Body) => {
    return async (dispatch) => {
        dispatch({ type: MULTI_PRODUCT_ADD_LOADING});
        try{
            const response = await post(ApiConnections.multiProduct,Body);
            if(response && response.data){
                dispatch({type: MULTI_PRODUCT_ADD_SUCCESS})
            }else{
                dispatch({type: MULTI_PRODUCT_ADD_FAILURE})
            }
        }catch(error){
            dispatch({type: MULTI_PRODUCT_ADD_FAILURE})
        }
    }
}
