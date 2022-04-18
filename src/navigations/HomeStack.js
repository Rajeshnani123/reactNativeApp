import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawer, CustomDrawerContent} from './CustomDrawer';
import CommonStack from './CommonStack';
import {Button} from 'react-native';
import VendorStack from './VendorStack';
// import UserStack from './UserStack';
import {UserDetail} from './../screens';
import ProductList from '../screens/enduser/ProductList/ProductList';
import GlobalStore from '../screens/enduser/GlobalStore/GlobalStore';

const Drawer = createDrawerNavigator();

// export function CustomDrawerContent({navigation}) {
//   return (
//     <Button
//       title="Go somewhere"
//       onPress={() => {
//         // Navigate using the `navigation` prop that you received
//         navigation.navigate('SignUp');
//       }}
//     />
//   );
// }

export default function HomeStack() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Common">
      <Drawer.Screen
        name="Common"
        options={{
          headerShown: false,
        }}
        component={CommonStack}
      />
      <Drawer.Screen
        name="Manage Store"
        options={{
          headerShown: false,
        }}
        component={VendorStack}
      />
      <Drawer.Screen
        name="Profile"
        options={{
          headerShown: false,
        }}
        component={UserDetail}
      />
      <Drawer.Screen
        name="Product List "
        options={{
          headerShown: false,
        }}
        component={ProductList}
      />
      <Drawer.Screen
        name="Global store "
        options={{
          headerShown: false,
        }}
        component={GlobalStore}
      />
    </Drawer.Navigator>
  );
}
