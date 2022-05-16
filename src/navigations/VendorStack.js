import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {VendorHome, ManageProducts, SelectFromStore} from './../screens';
import PDetails from '../screens/accessuser/PDetails/Pdetails';

const VendorStk = createNativeStackNavigator();

export default function VendorStack({route, navigation}) {
  return (
    <VendorStk.Navigator initialRouteName="ManageProducts">
      {/* <VendorStk.Screen
        name="VendorHome"
        component={VendorHome}
        options={{
          headerShown: false,
        }}
      /> */}
      <VendorStk.Screen
        name="ManageProducts"
        component={ManageProducts}
        options={{
          headerShown: false,
        }}
      />
      <VendorStk.Screen 
      name="ProductDetails"
      component={PDetails}
      options={{
        headerShown: false,
      }}
      />
      <VendorStk.Screen
        name="SelectFromStore"
        component={SelectFromStore}
        options={{
          headerShown: false,
        }}
      />
  
    </VendorStk.Navigator>
  );
}
