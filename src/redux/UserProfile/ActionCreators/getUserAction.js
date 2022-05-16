import { ApiConnections } from "../../../Api/ApiConnections";
import { get } from "../../../Api/BaseApi";
import { USER_DETAILS_FAILURE, USER_DETAILS_LOADING, USER_DETAILS_SUCCESS } from "../Action/ActionType"


export const getUserDetails = (user_id) => {
    return async(dispatch) => {
        try{
            dispatch({type: USER_DETAILS_LOADING});
            const url = ApiConnections.Account+`/${user_id}`;
           const response = await get(url);
           if(response && response.data){
               dispatch({type: USER_DETAILS_SUCCESS, data: response.data})
           }else{
               dispatch({type: USER_DETAILS_FAILURE, error: "Data not found"})
           }
        }catch(error){
            dispatch({type: USER_DETAILS_FAILURE, error: "data not found"})
        }
    }
}