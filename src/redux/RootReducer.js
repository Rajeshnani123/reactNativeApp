import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import {userProfileReducers} from "./UserProfile/Reducers/postUserReducers";
import {getUserReducers} from "./UserProfile/Reducers/getUserReducers";
import {getProductReducers} from "./ProductResource/Reducers/getProductReducers"
import { persistReducer } from "redux-persist";
import {getStoreReducers} from "./StoreData/Reducers/getStoreReducers";
import {getMdmReducers} from "./mdmProduct/Reducers/getMdmReducers";
import {postProductReducers}  from "./ProductResource/Reducers/postProductReducers";
import {postCartReducers} from "./cartManagement/Reducers/postCartReducers";
//import {getCardReducers} from "./cartManagement/Reducers/getCartReducers";
import {getCardReducers} from "./cartManagement/Reducers/getCartReducers"
const initialConfig = {
    key: "auth",
    storage: AsyncStorage,
    whitelist: ["token","roleType"]
};


export const rootReducer = combineReducers({
    userProfileReducers: persistReducer(initialConfig,userProfileReducers),
    getProductReducers,
    getUserReducers,
    getStoreReducers,
    postProductReducers,
    getMdmReducers,
    getCardReducers,
    postCartReducers,
})