// import {createStackNavigator} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import Login from '../screens/accessuser';
import Splash from '../screens/splash';
import SignIn from '../screens/accessuser/Login/SignIn';
import SignUp from '../screens/accessuser/SignUp/SignUp';
import {Home} from '../screens/enduser';

const RootStack = createNativeStackNavigator();

const RootStackFN = () => {
  return (
    <RootStack.Navigator initialRouteName="Home">
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
      <RootStack.Screen
        name="SignIn"
        component={SignIn}
        options={{header: () => null}}
      />
      <RootStack.Screen
        name="SignUp"
        component={SignUp}
        options={{header: () => null}}
      />
      <RootStack.Screen
        name="Home"
        component={Home}
        options={{header: () => null}}
      />
    </RootStack.Navigator>
  );
};

export default RootStackFN;
