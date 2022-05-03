import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import UserStack from './UserStack'
import VendorStack from './VendorStack'


const HomeStack = createNativeStackNavigator();

export default function CommonStack({ route, navigation }) {

  const {roleType} = useSelector(state => state.userProfileReducers);
  return (
    <HomeStack.Navigator>
      {roleType == 1 ? <HomeStack.Screen
        name="UserStack"
        component={UserStack}
        options={{
          headerShown: false,
        }}
      /> : <HomeStack.Screen
        name="VendorStack"
        component={VendorStack}
        options={{
          headerShown: false,
        }}
      />}
    </HomeStack.Navigator>
  );
}
