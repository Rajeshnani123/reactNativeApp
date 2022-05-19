import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyCart from '../../screens/enduser/MyCart/MyCart';
import Success from '../../screens/enduser/Success/Success';


const UserStk = createNativeStackNavigator();

const CartStk = ({navigation}) => {
  return (
    <UserStk.Navigator initialRouteName="ProductList">
      <UserStk.Screen
        name="MyCart"
        component={MyCart}
        options={{
          headerShown: false,
        }}
      />
      
      <UserStk.Screen
        name="Success"
        component={Success}
        options={{
          headerShown: false,
        }}
      />
      <UserStk.Screen
        name="Error"
        component={Error}
        options={{
          headerShown: false,
        }}
      />
     
        
      
    </UserStk.Navigator>
  );
};

export default CartStk;
