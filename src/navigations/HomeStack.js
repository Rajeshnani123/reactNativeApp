import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawer, CustomDrawerContent} from './CustomDrawer';
import CommonStack from './CommonStack';
import {Button,Alert} from 'react-native';
import VendorStack from './VendorStack';
// import UserStack from './UserStack';
import {UserDetail} from './../screens';
import ProductList from '../screens/enduser/ProductList/ProductList';
import GlobalStore from '../screens/enduser/GlobalStore/GlobalStore';
import ProfileStk from './authStack/ProfileStk';
import ProductStk from './endUserStack/ProductStk';
import MyCart from '../screens/enduser/MyCart/MyCart';
import {useDispatch,useSelector} from 'react-redux';
// import { logout } from './../../../redux/reducers/authReducer';
import {logout} from '../redux/reducers/authReducer';
import Checkout from '../screens/enduser/Checkout/Checkout';
import CartStk from './endUserStack/CartStk';
import Success from '../screens/enduser/Success/Success';
import Error from '../screens/enduser/Error/Error';
import AsyncStrorage from "@react-native-async-storage/async-storage";
import { USER_ACCOUNT_LOGOUT } from '../redux/UserProfile/Action/ActionType';
import PDetails from '../screens/accessuser/PDetails/Pdetails';
import {CreateStore} from "../screens/accessuser/createStore"
import jwt_decode from "jwt-decode";
import { COLORS, ICON, ICONS} from '../constants';
import { normalize } from '../utils/Platform';

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
  const {userType} = useSelector(state => state.getUserReducers.data);

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Product List"
      screenOptions={{
          drawerActiveBackgroundColor:COLORS.primary,
          drawerActiveTintColor: COLORS.white,
          drawerStyle: {
            backgroundColor: COLORS.primary
          },
      }}
      >
      {/* <Drawer.Screen
        name="Common"
        options={{
          headerShown: false,
        }}
        component={CommonStack}
      /> */}


     {userType && userType.includes("VENDOR") && <Drawer.Screen
        name="Manage Store"
        options={{
          headerShown: false,
        }}
        component={VendorStack}
      />}
       {userType && userType.includes("VENDOR") && <Drawer.Screen
        name="Create Store"
        options={{
          headerShown: false,
        }}
        component={CreateStore}
      />}


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
          drawerIcon: ({color, backgroundColor}) => (
            <ICON
              type={ICONS.usersType}
              name={ICONS.users}
              size={normalize(18)}
              color={color}
            />
          )
        }}
        component={ProfileStk}
      />
      <Drawer.Screen
        name="Product List"
        options={{
          headerShown: false,
          drawerIcon: ({color, backgroundColor}) => (
            <ICON
              type={ICONS.listBoxType}
              name={ICONS.listBox}
              size={normalize(18)}
              color={color}
            />
          )
        }}
        component={ProductStk}
      />
      {/* ProductStk */}
      <Drawer.Screen
        name="Global store "
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <ICON
              type={ICONS.storeType}
              name={ICONS.store}
              size={normalize(18)}
              color={color}
            />
          )
        }}
        component={GlobalStore}
      />
      <Drawer.Screen
        name="My Cart "
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <ICON
              type={ICONS.cartType}
              name={ICONS.cart}
              size={normalize(18)}
              color={color}
            />
          )
        }}
        component={MyCart}
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
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <ICON
              type={ICONS.logoutType}
              name={ICONS.logout}
              size={normalize(18)}
              color={color}
            />
          )
        }}

      />
    </Drawer.Navigator>
  );
}
