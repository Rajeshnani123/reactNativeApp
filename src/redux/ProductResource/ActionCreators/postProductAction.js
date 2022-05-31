import { ApiConnections } from "../../../Api/ApiConnections";
import { post } from "../../../Api/BaseApi";
import { FILE_UPLOAD_FAILURE, FILE_UPLOAD_LOADING, FILE_UPLOAD_SUCCESS, MULTI_PRODUCT_ADD_FAILURE, MULTI_PRODUCT_ADD_LOADING, MULTI_PRODUCT_ADD_SUCCESS, POST_PRODUCTS_FAILURE, POST_PRODUCTS_LOADING, POST_PRODUCTS_SUCCESS } from "../ActionType"


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

export const fileUpload = (Body) => {
    return async (dispatch) => {
        dispatch({ type: FILE_UPLOAD_LOADING});
        try{
            const response = await post(ApiConnections.fileUpload,Body);
            if(response){
                dispatch({type: FILE_UPLOAD_SUCCESS, imageURl: response})
            }else{
                dispatch({type: FILE_UPLOAD_FAILURE, error: "Data not found"})
            }
        }catch(error){
            dispatch({type: FILE_UPLOAD_FAILURE, error: error})
        }
    }
}

export const fetchOne = (data,dispatch) => {
    return async() => {
        try{
            let res = await fetch("http://catalog.ap-south-1.elasticbeanstalk.com/api/upload",
                {
                    method: 'post',
                    body: data,
                });
            let response = await res.text();
                console.log(response,"response");
                if(response){
                    dispatch({type: FILE_UPLOAD_SUCCESS,imageURl: response});
                    return response;
                }else{
                   console.log("Failure");
                   return ;
                }
        }catch(error){
            console.log(error,"error");
            return ;
        }
        
    }
}