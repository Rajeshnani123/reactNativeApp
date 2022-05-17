import {Alert} from "react-native";
import { useDispatch } from "react-redux";
import { ApiConnections } from "../../../Api/ApiConnections";
import { post, put } from "../../../Api/BaseApi";
import { USER_ACCOUNT_CREATION, USER_ACCOUNT_CREATION_FAILURE, USER_ACCOUNT_DELETE, USER_ACCOUNT_DELETE_FAILURE, USER_ACCOUNT_LOADING, USER_ACCOUNT_UPDATE, USER_ACCOUNT_UPDATE_FAILURE, USER_ACCOUNT_UPDATE_LOADING, USER_ACCOUNT_UPDATE_PASSWORD, USER_ACCOUNT_UPDATE_PASSWORD_FAILURE, USER_ACCOUNT_UPDATE_PASSWORD_LOADING, USER_DELETE_LOADING, USER_FORGOT_PASSWORD_FAILURE, USER_FORGOT_PASSWORD_LOADING, USER_FORGOT_PASSWORD_SUCCESS, USER_LOGIN_FAILURE, USER_LOGIN_LOADING, USER_LOGIN_SUCCESS, USER_VERIFY_OTP_FAILURE, USER_VERIFY_OTP_LOADING, USER_VERIFY_OTP_SUCCESS } from "../Action/ActionType"


export const loginUser = (username,password) => {
    return async (dispatch) => {
        try{
            dispatch({type: USER_LOGIN_LOADING});
            const Body = {
                password,
                username
            }
            const response = await post(ApiConnections.Login,Body);
            if(response.data && response.data.token){
                dispatch({ type: USER_LOGIN_SUCCESS, token: response.data.token })
            }else{
                Alert.alert("Please try after some time");
                dispatch({ type: USER_LOGIN_FAILURE, error: response.data });
            }
        }catch(error){
            Alert.alert("Please try after some time");
            dispatch({type: USER_LOGIN_FAILURE, error: error});
        }
    }
}

export const createUser = (Body) => {
    return async(dispatch) => {
        try{
            dispatch({type: USER_ACCOUNT_LOADING});
            const response = await post(ApiConnections.Account,Body);
            if(response.data){
                dispatch({type: USER_ACCOUNT_CREATION,statusCode: response.status})
            }else{
                dispatch({type: USER_ACCOUNT_CREATION_FAILURE,statusCode: 400});
            }
        }catch(error){
            dispatch({type: USER_ACCOUNT_CREATION_FAILURE,statusCode: 400});
        }
    }
}

export const updateAccount = (Body) => {
    return async(dispatch) => {
        try{
            dispatch({type: USER_ACCOUNT_UPDATE_LOADING});
            const response = await put(ApiConnections.Account,Body);
            if(response){
                dispatch({type: USER_ACCOUNT_UPDATE})
            }else{
                dispatch({type: USER_ACCOUNT_UPDATE_FAILURE});
            }
        }catch(error){
            dispatch({type: USER_ACCOUNT_UPDATE_FAILURE});
        }
    }
}

export const deactivateAccount = (Body) => {
    return async(dispatch) => {
        try{
            dispatch({type: USER_DELETE_LOADING});
            const response = await put(ApiConnections.Deactivate,Body);
            if(response){
                dispatch({type: USER_ACCOUNT_DELETE})
            }else{
                dispatch({type: USER_ACCOUNT_DELETE_FAILURE});
            }
        }catch(error){
            dispatch({type: USER_ACCOUNT_DELETE_FAILURE});
        }
    }
}

export const updatePassword = (Body) => {
    return async(dispatch) => {
        try{
            dispatch({type: USER_ACCOUNT_UPDATE_PASSWORD_LOADING});
            const response = await put(ApiConnections.ForgotPassword,Body);
            if(response){
                dispatch({type: USER_ACCOUNT_UPDATE_PASSWORD})
            }else{
                dispatch({type: USER_ACCOUNT_UPDATE_PASSWORD_FAILURE});
            }
        }catch(error){
            dispatch({type: USER_ACCOUNT_UPDATE_PASSWORD_FAILURE});
        }
    } 
}

export const forgotPassword = (data) => {
    return async(dispatch) => {
        dispatch({type: USER_FORGOT_PASSWORD_LOADING});
        try{
            const url = ApiConnections.forgotPassword+`/${data}`;
            const response = await put(url);
            console.log(response)
            if(response){
                dispatch({type: USER_FORGOT_PASSWORD_SUCCESS, message: response.message});
            }else{
                dispatch({type: USER_FORGOT_PASSWORD_FAILURE, error: "Data not found"});
            }
        }catch(error){
            dispatch({type: USER_FORGOT_PASSWORD_FAILURE, error: error});
        }
    }
}

export const verifyOtp = (data,Otp) => {
    return async(dispatch) => {
        dispatch({type: USER_VERIFY_OTP_LOADING});
        try{
            const url = ApiConnections.verifyOtp+`?email=${data}&otp=${Otp}`;
            const response = await put(url);
            if(response && response.data){
                dispatch({type: USER_VERIFY_OTP_SUCCESS, verifyMessage: response.data});
            }else{
                dispatch({type: USER_VERIFY_OTP_FAILURE, error: "Data not found"});
            }
        }catch(error){
            dispatch({type: USER_VERIFY_OTP_FAILURE, error: error});
        }
    }
}