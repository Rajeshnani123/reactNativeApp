import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from '../screens/accessuser/ForgotPassword/ForgotPassword';
import { Login, Register } from '../screens';
import SignUp from '../screens/accessuser/SignUp/SignUp'
import ResetPassword from '../screens/accessuser/Resetpassword/ResetPassword';

const Stack = createNativeStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      /> 
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          headerShown: false,
        }}
      /> 
    </Stack.Navigator>
  );
}
