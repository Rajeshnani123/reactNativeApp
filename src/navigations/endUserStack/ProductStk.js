import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductList from '../../screens/enduser/ProductList/ProductList';
import ProductDetails from '../../screens/enduser/ProductDetails';

const UserStk = createNativeStackNavigator();

const ProductStk = ({navigation}) => {
  return (
    <UserStk.Navigator initialRouteName="ProductList">
      <UserStk.Screen
        name="ProductList"
        component={ProductList}
        options={{
          headerShown: false,
        }}
      />
      <UserStk.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          headerShown: false,
        }}
      />
    </UserStk.Navigator>
  );
};

export default ProductStk;
