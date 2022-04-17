import React from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Loader} from '../components';
// import {authIsLogedIn} from './../redux/reducers/authReducer';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

export default Navigations = () => {
  const {loading, token} = useSelector(state => state.userProfileReducers);

  return (
    <>
      {loading ? (
        <View style={{marginTop: '50%'}}>
          <Loader isLoading={loading}/>
        </View>
      ) : token ? (
        <HomeStack />
      ) : (
        <AuthStack />
      )}
    </>
  );
}
