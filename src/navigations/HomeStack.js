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
import ProfileStk from './authStack/ProfileStk';
import ProductStk from './endUserStack/ProductStk';
import MyCart from '../screens/enduser/MyCart/MyCart';
import {useDispatch} from 'react-redux';
// import { logout } from './../../../redux/reducers/authReducer';
import {logout} from '../redux/reducers/authReducer';
import Checkout from '../screens/enduser/Checkout/Checkout';
import CartStk from './endUserStack/CartStk';
import Success from '../screens/enduser/Success/Success';
import Error from '../screens/enduser/Error/Error';
import AsyncStrorage from "@react-native-async-storage/async-storage";
import { USER_ACCOUNT_LOGOUT } from '../redux/UserProfile/Action/ActionType';

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
  const dispatch = useDispatch();
  
  return (
    <Drawer.Navigator
      // drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Product List">
      {/* <Drawer.Screen
        name="Common"
        options={{
          headerShown: false,
        }}
        component={CommonStack}
      /> */}
      <Drawer.Screen
        name="Manage Store"
        options={{
          headerShown: false,
        }}
        component={VendorStack}
      />
      {/* <Drawer.Screen
        name="Profile"
        options={{
          headerShown: false,
        }}
        component={UserDetail}
      /> */}
      <Drawer.Screen
        name="Profile"
        options={{
          headerShown: false,
        }}
        component={ProfileStk}
      />
      <Drawer.Screen
        name="Product List"
        options={{
          headerShown: false,
        }}
        component={ProductStk}
      />
      {/* ProductStk */}
      <Drawer.Screen
        name="Global store "
        options={{
          headerShown: false,
        }}
        component={GlobalStore}
      />
      <Drawer.Screen
        name="My Cart "
        options={{
          headerShown: false,
        }}
        component={MyCart}
      />
      <Drawer.Screen
        name="Checkout "
        options={{
          headerShown: false,
        }}
        component={Checkout}
      />
      <Drawer.Screen
        name="CartStk "
        options={{
          headerShown: false,
        }}
        component={CartStk}
      />
      <Drawer.Screen
        name="Logout"
        component={MyCart}
        listeners={({navigation}) => ({
          state: e => {
            // if (e.data.state.index === 3) {
            // 3 is index of logout item in drawer

            // navigation.replace('Login');
            dispatch({type: USER_ACCOUNT_LOGOUT});
          
            // }
          },
        })}
      />
    </Drawer.Navigator>
  );
}
