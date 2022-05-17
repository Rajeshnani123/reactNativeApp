import { ApiConnections } from "../../../Api/ApiConnections";
import { get } from "../../../Api/BaseApi";
import { GET_CART_MANAGEMENT_FAILURE, GET_CART_MANAGEMENT_LOADING, GET_CART_MANAGEMENT_SUCCESS } from "../ActionType"


export const getCartDetails = (userId) => {
    return async(dispatch) => {
        dispatch({type: GET_CART_MANAGEMENT_LOADING});
        try{
            const url = ApiConnections.getCart + `/${userId}`
            const response = await get(url);
            if(response && response.data){
                dispatch({type: GET_CART_MANAGEMENT_SUCCESS, data: response.data});
            }else{
                dispatch({type: GET_CART_MANAGEMENT_FAILURE, error:"Data not found"});
            }
        }catch(error){
            dispatch({type: GET_CART_MANAGEMENT_FAILURE, error: error});
        }
    }
}