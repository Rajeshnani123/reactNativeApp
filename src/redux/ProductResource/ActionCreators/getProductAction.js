import { ApiConnections } from "../../../Api/ApiConnections";
import { deleteAxios, get } from "../../../Api/BaseApi";
import { DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_LOADING, DELETE_PRODUCT_SUCCESS, GET_ALL_PRODUCTS_FAILURE, GET_ALL_PRODUCTS_LOADING, GET_ALL_PRODUCTS_SUCCESS, GET_PRODUCT_FAILURE, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS } from "../ActionType"



export const getProducts = () => {
    return async(dispatch) => {
        try{
        dispatch({type: GET_ALL_PRODUCTS_LOADING});
        const response = await get(ApiConnections.Products);
        if(response){
            dispatch({type: GET_ALL_PRODUCTS_SUCCESS,data: response.data.content});
        }else{
            Alert.alert("Please try after some time");
            dispatch({type: GET_ALL_PRODUCTS_FAILURE,error: "data not found"});
        }
        }catch(error){
            Alert.alert("Please try after some time");
            dispatch({type: GET_ALL_PRODUCTS_FAILURE, error: "Api Failure"});
        }
    }
}

export const getProductbyId = (id) => {
    return async(dispatch) => {
        try{
            dispatch({type: GET_PRODUCT_LOADING});
            const response = await get(ApiConnections.Products+`/${id}`);
            if(response){
                dispatch({type: GET_PRODUCT_SUCCESS,data: response.data});
            }else{
                Alert.alert("Please try after some time");
                dispatch({type: GET_PRODUCT_FAILURE,error: "data not found"});
            }
            }catch(error){
                Alert.alert("Please try after some time");
                dispatch({type: GET_PRODUCT_FAILURE, error: "Api failure"});
            }
    }
}

export const deleteProductById = (id) => {
    return async(dispatch) => {
        try{
            dispatch({type: DELETE_PRODUCT_LOADING});
            const response = await deleteAxios(ApiConnections.Products+`/${id}`);
            console.log(response);
            if(response){
                dispatch({type: DELETE_PRODUCT_SUCCESS});
            }else{
                Alert.alert("Please try after some time");
                dispatch({type: DELETE_PRODUCT_FAILURE});
            }
            }catch(error){
                Alert.alert("Please try after some time");
                dispatch({type: DELETE_PRODUCT_FAILURE});
            }
    }
}