import { ApiConnections } from "../../../Api/ApiConnections";
import { post } from "../../../Api/BaseApi";
import { POST_PRODUCTS_FAILURE, POST_PRODUCTS_LOADING, POST_PRODUCTS_SUCCESS } from "../../ProductResource/ActionType"


export const postStore = (Body) => {
    return async (dispatch) => {
        dispatch({type: POST_PRODUCTS_LOADING});
        try{
            const response = await post(ApiConnections.store,Body);
            console.log(response);
            if(response && response.data){
                dispatch({type: POST_PRODUCTS_SUCCESS});
            }else{
                dispatch({type: POST_PRODUCTS_FAILURE,error: "Data not found"});
            }
        }catch(error){
            dispatch({type: POST_PRODUCTS_FAILURE, error: error});
        }
    }
}