import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Linking,
  Button,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {COLORS, FONTS, ICON} from '../constants';
import { normalize } from '../utils/Platform';
import style from '../screens/style';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

export function CustomDrawerContent({navigation}) {
  return (
    <Button
      title="Go somewhere"
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate('SignUp');
      }}
    />
  );
}

export function CustomDrawer(props, {navigation}) {
  return (
    <View style={styles.customDrawerContainer}>
      <DrawerContentScrollView {...props}
      //contentContainerStyle={{backgroundColor:"blue"}}
      >
        <View style={styles.drawerContent}/>

        {/* <TouchableOpacity
          style={
            (styles.drawerContent,
            {flex: 1, alignItems: 'center', justifyContent: 'center'})
          }
          onPress={() => navigation.navigate('Register')}>
          <Text>Manage Store</Text>
        </TouchableOpacity> */}
        <DrawerItemList {...props} />
        {/* <DrawerItem
          label="Help"
          onPress={() => Linking.openURL('https://mywebsite.com/help')}
        /> */}
        {/* <DrawerItem
          label="Manage Store"
          onPress={() => navigation.navigate('VendorHome')}
        /> */}
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  customDrawerContainer:{
    flex: 1,
    marginTop:normalize(57),
    backgroundColor:'#fff7ea',
  },
  drawerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //height:normalize(57),
    //backgroundColor:"#ffb43a"
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    ...FONTS.h3,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    paddingTop: 5,
    ...FONTS.h4,
    lineHeight: 14,
    color: '#8f8f8f',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
