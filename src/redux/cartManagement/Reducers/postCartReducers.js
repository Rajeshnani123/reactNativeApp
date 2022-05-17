import { ADD_CART_MANAGEMENT_FAILURE, ADD_CART_MANAGEMENT_LOADING, ADD_CART_MANAGEMENT_SUCCESS, REMOVE_CART_MANAGEMENT_FAILURE, REMOVE_CART_MANAGEMENT_LOADING, REMOVE_CART_MANAGEMENT_SUCCESS, UPDATE_CART_MANAGEMENT_FAILURE, UPDATE_CART_MANAGEMENT_LOADING, UPDATE_CART_MANAGEMENT_SUCCESS } from "../ActionType"


const initialState = {
    loading: false,
    addCart: {},
    removeCart: {},
    updateCart: {},
    error: ""
}

export const postCartReducers = (state = initialState,action) => {

    switch(action.type){
        case ADD_CART_MANAGEMENT_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }

        case ADD_CART_MANAGEMENT_SUCCESS: {
            return {
                ...state,
                loading: false,
                addCart: action.data,
            }
        }

        case ADD_CART_MANAGEMENT_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        }

        case REMOVE_CART_MANAGEMENT_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }

        case REMOVE_CART_MANAGEMENT_SUCCESS: {
            return {
                ...state,
                loading: false,
                removeCart: action.removeData,
            }
        }

        case REMOVE_CART_MANAGEMENT_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        }

        case UPDATE_CART_MANAGEMENT_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }

        case UPDATE_CART_MANAGEMENT_SUCCESS: {
            return {
                ...state,
                loading: false,
                updateCart: action.updateData,
            }
        }

        case UPDATE_CART_MANAGEMENT_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }
}