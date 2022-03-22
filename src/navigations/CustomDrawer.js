import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {FONTS} from '../constants';

export function CustomDrawer(props, {navigation}) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View
          style={
            (styles.drawerContent,
            {flex: 1, alignItems: 'center', justifyContent: 'center'})
          }>
          <Text>Custom Drawer Here</Text>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
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
