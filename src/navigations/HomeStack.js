import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawer} from './CustomDrawer';
import CommonStack from './CommonStack';

const Drawer = createDrawerNavigator();
export default function HomeStack() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Tabs">
      <Drawer.Screen
        name="Common"
        options={{
          headerShown: false,
        }}
        component={CommonStack}
      />
    </Drawer.Navigator>
  );
}
