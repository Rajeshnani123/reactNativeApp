import { USER_DETAILS_FAILURE, USER_DETAILS_LOADING, USER_DETAILS_SUCCESS } from "../Action/ActionType"


const initialState = {
    loading: false,
    data:{},
    statusCode: 0,
    token: "",
    error: "",
    roleType: -1,
}

export const getUserReducers = (state= initialState,action) => {
    switch(action.type){
        case USER_DETAILS_LOADING:{
            return{
                loading: true,
                data:{},
            }
        }

        case USER_DETAILS_SUCCESS:{
            return{
                loading: false,
                data: action.data,
            }
        }

        case USER_DETAILS_FAILURE: {
            return{
                loading: false,
                data: action.error,
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }
}