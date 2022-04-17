import { USER_LOGIN_FAILURE, USER_LOGIN_LOADING, USER_LOGIN_SUCCESS } from "../Action/ActionType";


const initialState = {
    loading: false,
    token: "",
    roleType: -1,
}

export const userProfileReducers = (state= initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_LOADING: {
            return {
                ...state,
                loading: true,
                token: ""
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
            
        default: {
            return {
                ...state
            };
        }
    }
}