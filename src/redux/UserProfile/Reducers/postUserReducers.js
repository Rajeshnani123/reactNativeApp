import { USER_ACCOUNT_CREATION, USER_ACCOUNT_CREATION_FAILURE, USER_ACCOUNT_DELETE_FAILURE, USER_ACCOUNT_LOADING, USER_ACCOUNT_LOGOUT, USER_ACCOUNT_RESET, USER_ACCOUNT_UPDATE, USER_ACCOUNT_UPDATE_FAILURE, USER_ACCOUNT_UPDATE_PASSWORD, USER_ACCOUNT_UPDATE_PASSWORD_FAILURE, USER_ACCOUNT_UPDATE_PASSWORD_LOADING, USER_DELETE_LOADING, USER_LOGIN_FAILURE, USER_LOGIN_LOADING, USER_LOGIN_SUCCESS } from "../Action/ActionType";


const initialState = {
    loading: false,
    createLoading: false,
    statusCode: 0,
    token: "",
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

        // case USER_ACCOUNT_UPDATE_LOADING : {
        //     return{

        //     }
        // }

        // case USER_ACCOUNT_UPDATE : {
        //     return{

        //     }
        // }

        // case USER_ACCOUNT_UPDATE_FAILURE : {
        //     return{

        //     }
        // }

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