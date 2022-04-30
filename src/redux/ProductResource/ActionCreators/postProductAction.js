import { ApiConnections } from "../../../Api/ApiConnections";
import { post } from "../../../Api/BaseApi";
import { POST_PRODUCTS_FAILURE, POST_PRODUCTS_LOADING, POST_PRODUCTS_SUCCESS } from "../ActionType"


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