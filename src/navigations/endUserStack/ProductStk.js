import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductList from '../../screens/enduser/ProductList/ProductList';
import ProductDetails from '../../screens/enduser/ProductDetails';
import Checkout from '../../screens/enduser/Checkout/Checkout';
import EditAddress from '../../screens/enduser/EditAddress/EditAddress';


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
       <UserStk.Screen
        name="Checkout"
        component={Checkout}
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
};

export default ProductStk;
