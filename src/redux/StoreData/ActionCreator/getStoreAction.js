import { ApiConnections } from "../../../Api/ApiConnections";
import { get } from "../../../Api/BaseApi";
import { GET_ALL_STORE_FAILURE, GET_ALL_STORE_LOADING, GET_ALL_STORE_SUCCESS, GET_STORE_DATA_BY_LOCATION_FAILURE, GET_STORE_DATA_BY_LOCATION_LOADING, GET_STORE_DATA_BY_LOCATION_SUCCESS } from "../ActionType"


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

export const getStoreDatabyLocation = (location) => {
    return async (dispatch) => {
        dispatch({type: GET_STORE_DATA_BY_LOCATION_LOADING});
        console.log(ApiConnections.storeDatebyLocation+`/${location}`);
        try{
            const response = await get(ApiConnections.storeDatebyLocation+`/${location}`);
            if(response && response.data){
                dispatch({type: GET_STORE_DATA_BY_LOCATION_SUCCESS, storeDatebyLocation: response.data});
            }else{
                dispatch({type: GET_STORE_DATA_BY_LOCATION_FAILURE, error: "Data not found"});
            }
        }catch(error){
            dispatch({type: GET_STORE_DATA_BY_LOCATION_FAILURE, error:error});
        }
    }
}