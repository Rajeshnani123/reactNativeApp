import {
  GET_CART_MANAGEMENT_FAILURE,
  GET_CART_MANAGEMENT_LOADING,
  GET_CART_MANAGEMENT_SUCCESS,
} from '../ActionType';

const initialState = {
  loading: false,
  statusCode: 0,
  cartDetails: {},
  error: '',
};

export const getCardReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_MANAGEMENT_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_CART_MANAGEMENT_SUCCESS: {
      return {
        ...state,
        loading: false,
        statusCode: 200,
        cartDetails: action.data,
      };
    }

    case GET_CART_MANAGEMENT_FAILURE: {
      return {
        ...state,
        loading: false,
        statusCode: 400,
        error: action.error,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
