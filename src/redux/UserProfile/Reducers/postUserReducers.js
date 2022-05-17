import { USER_ACCOUNT_CREATION, USER_ACCOUNT_CREATION_FAILURE, USER_ACCOUNT_DELETE_FAILURE, USER_ACCOUNT_LOADING, USER_ACCOUNT_LOGOUT, USER_ACCOUNT_RESET, USER_ACCOUNT_UPDATE, USER_ACCOUNT_UPDATE_FAILURE, USER_ACCOUNT_UPDATE_PASSWORD, USER_ACCOUNT_UPDATE_PASSWORD_FAILURE, USER_ACCOUNT_UPDATE_PASSWORD_LOADING, USER_DELETE_LOADING, USER_LOGIN_FAILURE, USER_LOGIN_LOADING, USER_LOGIN_SUCCESS,USER_ACCOUNT_UPDATE_LOADING, USER_FORGOT_PASSWORD_LOADING, USER_FORGOT_PASSWORD_SUCCESS, USER_FORGOT_PASSWORD_FAILURE } from "../Action/ActionType";


const initialState = {
    loading: false,
    createLoading: false,
    statusCode: 0,
    token: "",
    message:"",
    verifyMessage: "",
    error: "",
    roleType: -1,
}

export const userProfileReducers = (state= initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }

        case USER_LOGIN_SUCCESS : {
            return {
                ...state,
                loading: false,
                token: action.token,
                roleType: 1
            }
        }

        case USER_LOGIN_FAILURE : {
            return{
                ...state,
                loading: false,
                roleType: -1
            }
        }

        case USER_ACCOUNT_LOADING : {
            return {
                ...state,
                createLoading: true,
            }
        }

        case USER_ACCOUNT_RESET : {
            return{
                ...state,
                createLoading: false,
                statusCode: 0,
            }
        }

        case USER_ACCOUNT_CREATION : {
            return{
                ...state,
                createLoading: false,
                statusCode: action.statusCode,
            }
        }

        case USER_ACCOUNT_CREATION_FAILURE : {
            return{
                ...state,
                createLoading: false,
                statusCode: action.statusCode,
            }
        }

        case USER_ACCOUNT_LOGOUT : {
            return{
                ...state,
                loading: false,
                createLoading: false,
                statusCode: 0,
                token: "",
                roleType: -1,
            }
        }

        case USER_ACCOUNT_UPDATE_LOADING : {
            return{
                ...state,
                loading: true,
                statusCode: 0
            }
        }

        case USER_ACCOUNT_UPDATE : {
            return{
                ...state,
                loading: false,
                statusCode: 200,
            }
        }

        case USER_ACCOUNT_UPDATE_FAILURE : {
            return{
                ...state,
                loading: false,
                statusCode: 400
            }
        }

        case USER_FORGOT_PASSWORD_LOADING:{
            return {
                ...state,
                loading: true,
            }
        }

        case USER_FORGOT_PASSWORD_SUCCESS: {
            return {
                ...state,
                loading: false,
                message: action.message,
            }
        }

        case USER_FORGOT_PASSWORD_FAILURE:{
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        }

        // case USER_DELETE_LOADING : {
        //     return{

        //     }
        // }

        // case USER_ACCOUNT_DELETE_FAILURE : {
        //     return{

        //     }
        // }

        // case USER_ACCOUNT_UPDATE_PASSWORD_LOADING : {
        //     return{

        //     }
        // }

        // case USER_ACCOUNT_UPDATE_PASSWORD : {
        //     return{

        //     }
        // }

        // case USER_ACCOUNT_UPDATE_PASSWORD_FAILURE : {
        //     return {
                
        //     }
        // }
            
        default: {
            return {
                ...state
            };
        }
    }
}