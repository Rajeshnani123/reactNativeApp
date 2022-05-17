import { ApiConnections } from "../../../Api/ApiConnections";
import { post } from "../../../Api/BaseApi";
import { ADD_CART_MANAGEMENT_FAILURE, ADD_CART_MANAGEMENT_LOADING, ADD_CART_MANAGEMENT_SUCCESS, REMOVE_CART_MANAGEMENT_FAILURE, REMOVE_CART_MANAGEMENT_LOADING, REMOVE_CART_MANAGEMENT_SUCCESS, UPDATE_CART_MANAGEMENT_FAILURE, UPDATE_CART_MANAGEMENT_LOADING, UPDATE_CART_MANAGEMENT_SUCCESS } from "../ActionType"



export const addCartDetails = (Body) =>{
    return async(dispatch) => {
        dispatch({type: ADD_CART_MANAGEMENT_LOADING});
        try{
            const response = await post(ApiConnections.addCart,Body);
            if(response && response.data){
                dispatch({type: ADD_CART_MANAGEMENT_SUCCESS, data: response.data})
            }else{
                dispatch({type: ADD_CART_MANAGEMENT_FAILURE, error: "Data not found"});
            }
        }catch(error){
            dispatch({type: ADD_CART_MANAGEMENT_FAILURE,error: error})
        }
    }
}

export const removeCartDetails = (Body) => {
    return async(dispatch) =>{
        dispatch({type: REMOVE_CART_MANAGEMENT_LOADING});
        try{
            const response = await post(ApiConnections.removeCart,Body);
            if(response && response.data){
                dispatch({type: REMOVE_CART_MANAGEMENT_SUCCESS, removeData: response.data});
            }else{
                dispatch({type: REMOVE_CART_MANAGEMENT_FAILURE, error: "Data not found"});
            }
        }catch(error){
            dispatch({type: REMOVE_CART_MANAGEMENT_FAILURE, error: error});
        }
    }
}

export const updateCartDetails = (Body) => {
    return async(dispatch) =>{
        dispatch({type: UPDATE_CART_MANAGEMENT_LOADING});
        try{
            const response = await post(ApiConnections.updateCart,Body);
            if(response && response.data){
                dispatch({type: UPDATE_CART_MANAGEMENT_SUCCESS, updateData: response.data});
            }else{
                dispatch({type: UPDATE_CART_MANAGEMENT_FAILURE, error: "Data not found"});
            }
        }catch(error){
            dispatch({type: UPDATE_CART_MANAGEMENT_FAILURE, error: error});
        }
    }
}