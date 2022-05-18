import { USER_DETAILS_FAILURE, USER_DETAILS_LOADING, USER_DETAILS_SUCCESS, USER_PASSWORD_DETAILS } from "../Action/ActionType"


const initialState = {
    loading: false,
    data:{},
    statusCode: 0,
    forgotEmail: "",
    token: "",
    error: "",
    roleType: -1,
}

export const getUserReducers = (state= initialState,action) => {
    switch(action.type){
        case USER_DETAILS_LOADING:{
            return{
                ...state,
                loading: true,
                data:{},
            }
        }

        case USER_DETAILS_SUCCESS:{
            return{
                ...state,
                loading: false,
                data: action.data,
            }
        }

        case USER_DETAILS_FAILURE: {
            return{
                ...state,
                loading: false,
                data: action.error,
            }
        }

        case USER_PASSWORD_DETAILS: {
            return{
                ...state,
                forgotEmail: action.forgotEmail,
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }
}