import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import {userProfileReducers} from "./UserProfile/Reducers/postUserReducers";
import {getUserReducers} from "./UserProfile/Reducers/getUserReducers";
import {getProductReducers} from "./ProductResource/Reducers/getProductReducers"
import { persistReducer } from "redux-persist";


const initialConfig = {
    key: "auth",
    storage: AsyncStorage,
    whitelist: ["token","roleType"]
};


export const rootReducer = combineReducers({
    userProfileReducers: persistReducer(initialConfig,userProfileReducers),
    getProductReducers,
    getUserReducers,
})