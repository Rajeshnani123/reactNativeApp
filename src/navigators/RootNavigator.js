// import {createStackNavigator} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import Login from '../screens/accessuser';
import Splash from '../screens/splash';

const RootStack = createNativeStackNavigator();

const RootStackFN = () => {
  return (
    <RootStack.Navigator initialRouteName="Login">
      <RootStack.Screen
        name="Splash"
        component={Splash}
        options={{header: () => null}}
      />
      <RootStack.Screen
        name="Login"
        component={Login}
        options={{header: () => null}}
      />
    </RootStack.Navigator>
  );
};

export default RootStackFN;
