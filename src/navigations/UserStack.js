import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './../screens';
import {UserDetail} from './../screens';
import {EditAddress} from '../screens/enduser/EditAddress/EditAddress'

const UserStk = createNativeStackNavigator();

export default function UserStack({route, navigation}) {
  return (
    <UserStk.Navigator initialRouteName="Home">
      <UserStk.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <UserStk.Screen
        name="UserDetail"
        component={UserDetail}
        options={{
          headerShown: false,
        }}
      />
      <UserStk.Screen
        name="EditAddress"
        component={EditAddress}
        options={{
          headerShown: false,
        }}
      />

    </UserStk.Navigator>
  );
}
