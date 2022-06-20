import { ApiConnections } from "../../../Api/ApiConnections";
import { deleteAxios, get } from "../../../Api/BaseApi";
import { DELETE_PRODUCT_CATEGORIES_FAILURE, DELETE_PRODUCT_CATEGORIES_LOADING, DELETE_PRODUCT_CATEGORIES_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_LOADING, DELETE_PRODUCT_SUCCESS, GET_ALL_PRODUCTS_FAILURE, GET_ALL_PRODUCTS_LOADING, GET_ALL_PRODUCTS_SUCCESS, GET_PRODUCT_CATEGORIES_FAILURE, GET_PRODUCT_CATEGORIES_LOADING, GET_PRODUCT_CATEGORIES_SUCCESS, GET_PRODUCT_FAILURE, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS, STORE_PRODUCT_GET_FAILURE, STORE_PRODUCT_GET_LOADING, STORE_PRODUCT_GET_SUCCESS } from "../ActionType"



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

export const getProductbyId = (ids) => {
    return async(dispatch) => {
        try{
            dispatch({type: GET_PRODUCT_LOADING});
            const url = ApiConnections.getProduct+`?ids=${ids}`;
            const response = await get(url);
            if(response && response.data){
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

export const getStoreProducts = (seller) => {
    return async(dispatch) => {
        dispatch({type: STORE_PRODUCT_GET_LOADING});
        try{
            const url = ApiConnections.storeSeller+`/${seller}`;
            const response = await get(url);
            if(response && response.data){
                dispatch({type: STORE_PRODUCT_GET_SUCCESS,storeProduct: response.data});
            }else{
                dispatch({type: STORE_PRODUCT_GET_FAILURE, error: "Data not found"});
            }
        }catch(error){
            dispatch({type: STORE_PRODUCT_GET_FAILURE,error: error});
        }
    }
}

export const getProductCategories = () => {
    return async(dispatch) => {
        try{
            dispatch({type: GET_PRODUCT_CATEGORIES_LOADING})
            const url = ApiConnections.getAllSellerCategories ;
            const response = await get(url)
            if(response){
                dispatch({type: GET_PRODUCT_CATEGORIES_SUCCESS, categories: response.data})
            }else{
                dispatch({type: GET_PRODUCT_CATEGORIES_FAILURE, error: "Data not found"})
            }
        }
        catch{
            dispatch({type: GET_PRODUCT_CATEGORIES_FAILURE, error: "Api Failure"})
        }
    }
}

export const getProductCategoriesById = (parentId) => {
    return async(dispatch) => {
        try{
            dispatch({type: GET_PRODUCT_CATEGORIES_LOADING})
            const url = ApiConnections.getSellerChildCategory + `/${parentId}`;
            const response = await get(url)
            if(response){
                dispatch({type: GET_PRODUCT_CATEGORIES_SUCCESS, categories: response.data})
            }else{
                dispatch({type: GET_PRODUCT_CATEGORIES_FAILURE, error: "Data not found"})
            }
        }
        catch{
            dispatch({type: GET_PRODUCT_CATEGORIES_FAILURE, error: "Api Failure"})
        }
    }
}

export const deleteProductCategoryById = (categoryId) => {
    return async(dispatch) => {
        try{
            dispatch({type: DELETE_PRODUCT_CATEGORIES_LOADING});
            const response = await deleteAxios(ApiConnections.Products+`/${categoryId}`);
            if(response){
                dispatch({type: DELETE_PRODUCT_CATEGORIES_SUCCESS});
            }else{
                dispatch({type: DELETE_PRODUCT_CATEGORIES_FAILURE});
            }
            }catch(error){
                dispatch({type: DELETE_PRODUCT_CATEGORIES_FAILURE});
            }
    }
}
