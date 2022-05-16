import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Loader} from '../components';
import {authIsLogedIn} from './../redux/reducers/authReducer';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import jwt_decode from "jwt-decode";
import { getUserDetails } from '../redux/UserProfile/ActionCreators/getUserAction';
import { getAllStores } from '../redux/StoreData/ActionCreator/getStoreAction';

export default function Navigations() {
  const dispatch = useDispatch();
  const {loading, token} = useSelector(state => state.userProfileReducers);
  
  React.useEffect(() => {
    if(token){
      var decoded = jwt_decode(token);
      var user_id = decoded.User.id;
      dispatch(getUserDetails(user_id));
      dispatch(getAllStores());
    } 
  },[token])
 
  return(
    token ? (
      <HomeStack /> 
    ): (
      <AuthStack />
    )
  );
}