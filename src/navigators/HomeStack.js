import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home} from './../screens/enduser';

const HStack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <HStack.Navigator initialRouteName="SignIn">
      <HStack.Screen
        name="Home"
        component={Home}
        options={{header: () => null}}
      />
    </HStack.Navigator>
  );
};

export default HomeStack;
