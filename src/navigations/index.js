import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Loader} from '../components';
import {authIsLogedIn} from './../redux/reducers/authReducer';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

export default function Navigations() {
  const {loading, token} = useSelector(state => state.userProfileReducers);

  return (
    <>
      {loading ? (
        <View style={{marginTop: '50%'}}>
          <Loader />
        </View>
      ) : token ? (
        <HomeStack />
      ) : (
        <AuthStack />
      )}
    </>
  );
}