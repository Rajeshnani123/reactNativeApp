import { ApiConnections } from "../../../Api/ApiConnections";
import { deleteAxios, get, put } from "../../../Api/BaseApi";
import { DELETE_CART_MANAGEMENT_FAILURE, DELETE_CART_MANAGEMENT_LOADING, DELETE_CART_MANAGEMENT_SUCCESS, GET_CART_MANAGEMENT_FAILURE, GET_CART_MANAGEMENT_LOADING, GET_CART_MANAGEMENT_SUCCESS, LOCAL_CART_RESET } from "../ActionType"


export const getCartDetails = (userId) => {
    return async(dispatch) => {
        dispatch({type: GET_CART_MANAGEMENT_LOADING});
        try{
            const url = ApiConnections.getCart + `/${userId}`
            const response = await get(url);
            if(response && response.data){
                dispatch({type: GET_CART_MANAGEMENT_SUCCESS, data: response.data});
            }else{
                dispatch({type: GET_CART_MANAGEMENT_FAILURE, error:"Data not found"});
            }
        }catch(error){
            dispatch({type: GET_CART_MANAGEMENT_FAILURE, error: error});
        }
    }
}

export const deleteCart = (Body) => {
    return async(dispatch) => {
        dispatch({type: DELETE_CART_MANAGEMENT_LOADING});
        try{
            const url = ApiConnections.deleteCart;
            const response = await put(url,Body);
            if(response && response.includes("Successfully")){
                dispatch({type: DELETE_CART_MANAGEMENT_SUCCESS});
                dispatch(getCartDetails(Body[0].userId));
                dispatch({type: LOCAL_CART_RESET});
            }else{
                dispatch({type: DELETE_CART_MANAGEMENT_FAILURE});
        }
        }catch(error){
            dispatch({type: DELETE_CART_MANAGEMENT_FAILURE});
        }
    }
}

export const deleteItem = (Body,dispatch) => {
    console.log("data",Body);
        return async() => {
            try{
                let res = await fetch("http://cart-env.eba-vwx5vupq.ap-south-1.elasticbeanstalk.com/api/v1/cart",
                    {
                        method: 'DELETE',
                        body: JSON.stringify(Body),
                    });
               // let response = await res.json();
                    console.log(res,"response");
                    if(res){
                        dispatch({type: DELETE_CART_MANAGEMENT_SUCCESS});
                        return res;
                    }else{
                       console.log("Failure");
                       dispatch({type: DELETE_CART_MANAGEMENT_FAILURE});
                       return ;
                    }
            }catch(error){
                console.log(error,"error");
                dispatch({type: DELETE_CART_MANAGEMENT_FAILURE});
                return ;
            }
    }
}