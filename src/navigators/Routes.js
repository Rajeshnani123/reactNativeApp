import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {NBTheme} from './../constants';
// import RootNavigator from './RootNavigator';
import HomeStack from './HomeStack';

const Routes = () => {
  return (
    <NativeBaseProvider theme={NBTheme}>
      <NavigationContainer>
        {/* <RootNavigator /> */}
        <HomeStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default Routes;
