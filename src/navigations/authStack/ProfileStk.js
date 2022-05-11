import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserDetail} from '../../screens';
import userDetailForm from '../../screens/accessuser/UserDetailForm';
import ResetPassword from '../../screens/accessuser/Resetpassword/ResetPassword';

const UserStk = createNativeStackNavigator();

const ProfileStk = ({navigation}) => {
  return (
    <UserStk.Navigator initialRouteName="UserDetail">
      <UserStk.Screen
        name="UserDetail"
        component={UserDetail}
        options={{
          headerShown: false,
        }}
      />
      <UserStk.Screen
        name="userDetailForm"
        component={userDetailForm}
        options={{
          headerShown: false,
        }}
      />
       <UserStk.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          headerShown: false,
        }}
      />
    </UserStk.Navigator>
  );
};

export default ProfileStk;
