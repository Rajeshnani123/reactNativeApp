import { ApiConnections } from "../../../Api/ApiConnections";
import { get } from "../../../Api/BaseApi";
import { STORE_PRODUCTS_FAILURE, STORE_PRODUCTS_LOADING, STORE_PRODUCTS_SUCCESS } from "../ActionType"

export const getStoreProducts = () => {
    return async (dispatch) => {
        dispatch({type: STORE_PRODUCTS_LOADING});
        try{
            const response = await get(ApiConnections.storeProduct);
            if(response && response.data){
                dispatch({type: STORE_PRODUCTS_SUCCESS, data: response.data});
            }else{
                dispatch({type: STORE_PRODUCTS_FAILURE, error: "Data not found"});
            }
        }catch(error){
            dispatch({type: STORE_PRODUCTS_FAILURE, error: error});
        }
    }
}