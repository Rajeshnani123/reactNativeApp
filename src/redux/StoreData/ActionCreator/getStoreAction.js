import { ApiConnections } from "../../../Api/ApiConnections";
import { get } from "../../../Api/BaseApi";
import { GET_ALL_STORE_FAILURE, GET_ALL_STORE_LOADING, GET_ALL_STORE_SUCCESS } from "../ActionType"


export const getAllStores = () => {
    return async(dispatch) => {
        dispatch({type: GET_ALL_STORE_LOADING});

        try{
        const response = await get(ApiConnections.store);
        if(response && response.data){
            dispatch({type: GET_ALL_STORE_SUCCESS, data: response.data});
        }else{
            dispatch({type: GET_ALL_STORE_FAILURE, error: "Data not found"});
        }
        }catch(error){
            dispatch({type: GET_ALL_STORE_FAILURE, error: error})
        }
    }
}
