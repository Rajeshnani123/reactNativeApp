import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Screen2, Screen3, Screen4, Screen5} from './../screens';
import {COLORS, ICON, ICONS, FONTS} from './../constants';

const Tab = createBottomTabNavigator();

const customTabs = [
  {
    route: 'Tab1',
    label: 'Home',
    type: ICONS.testType,
    activeIcon: ICONS.test,
    inActiveIcon: ICONS.test,
    component: Screen2,
    isSpecial: false,
  },
  {
    route: 'Tab2',
    label: 'Mobiles',
    type: ICONS.testType,
    activeIcon: ICONS.test,
    inActiveIcon: ICONS.test,
    component: Screen3,
    isSpecial: false,
  },
  {
    route: 'Tab3',
    label: 'Tab3',
    type: ICONS.testType,
    activeIcon: ICONS.test,
    inActiveIcon: ICONS.test,
    component: Screen5,
    isSpecial: true,
  },
  {
    route: 'Tab4',
    label: 'Cart',
    type: ICONS.testType,
    activeIcon: ICONS.test,
    inActiveIcon: ICONS.test,
    component: Screen4,
    isSpecial: false,
  },
  {
    route: 'Tab5',
    label: 'Profile',
    type: ICONS.testType,
    activeIcon: ICONS.test,
    inActiveIcon: ICONS.test,
    component: Screen5,
    isSpecial: false,
  },
];

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: COLORS.primary,
        ...styles.shadow,
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

export default function Tabs() {
  return (
    <Tab.Navigator
      safeArea
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#ffffffff',
          borderTopEndRadius: 15,
          borderTopStartRadius: 15,
          height: '9%',

          elevation: 24,
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.18,
          shadowRadius: 15,
        },
      }}>
      {customTabs.map((item, index) => {
        {
          if (item.isSpecial) {
            return (
              <Tab.Screen
                key={index}
                name={item.route}
                component={item.component}
                options={{
                  headerShown: false,
                  tabBarIcon: ({focused}) => (
                    <ICON
                      type={item.type}
                      name={focused ? item.activeIcon : item.inActiveIcon}
                      style={{color: '#fff'}}
                    />
                  ),
                  tabBarButton: props => <CustomTabBarButton {...props} />,
                }}
              />
            );
          } else {
            return (
              <Tab.Screen
                key={index}
                name={item.route}
                component={item.component}
                options={{
                  tabBarIcon: ({focused}) => (
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 12,
                      }}>
                      <ICON
                        type={item.type}
                        name={focused ? item.activeIcon : item.inActiveIcon}
                        color={focused ? COLORS.primary : COLORS.primaryLight}
                      />
                      <Text
                        numberOfLines={1}
                        style={{
                          color: focused ? COLORS.primary : '#748c94',
                          ...FONTS.h5,
                        }}>
                        {item.label}
                      </Text>
                    </View>
                  ),
                }}
              />
            );
          }
        }
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    elevation: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 4.65,
    shadowOffset: {
      height: 2,
      width: 1,
    },
  },
});
