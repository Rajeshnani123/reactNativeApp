import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, VStack, Badge, Avatar} from 'native-base';
import styles from './styles';
import {FONTS, ICON, COLORS, ICONTYPE, ICONS} from './../../constants';

export const Header = ({containerStyle,title,leftComponent,rightComponent,}) => {
  return (
    <View
      style={{
        ...styles.headerContainer,
        flexDirection: 'row',
        ...containerStyle,
      }}>
      {/* Left */}
      {leftComponent}
      {/* Center */}
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{...FONTS.h3}}>{title}</Text>
      </View>
      {/* Right */}
      {rightComponent}
    </View>
  );
};

export const MenuHeader = ({navigation}) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}>
        <ICON
          type={ICONTYPE.Feather}
          name="menu"
          size={24}
          color={COLORS.black}
        />
      </TouchableOpacity>
    </>
  );
};
export const StoreHeader = ({navigation, active = false, onPress}) => {
  return (
    <View mx={1}>
      <TouchableOpacity onPress={onPress}>
        <View flexDirection={'row'}>
          {/* {active && <Avatar.Badge bg="red.500" mb={5} mr={-1} />} */}
          <ICON
            type={ICONS.briefcaseType}
            name={ICONS.briefcase}
            size={24}
            color={COLORS.black}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export const NotificationHeader = ({navigation, active = false, onPress}) => {
  return (
    <View mx={1}>
      <TouchableOpacity onPress={onPress}>
        <View flexDirection={'row'}>
          {active && <Avatar.Badge bg="red.500" mb={5} mr={-1} />}
          <ICON
            type={ICONS.notificationType}
            name={ICONS.notification}
            size={24}
            color={COLORS.black}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const CartHeader = ({navigation, active = false, onPress}) => {
  return (
    <View mx={1}>
      <TouchableOpacity onPress={onPress}>
        <View flexDirection={'row'}>
          {active && <Avatar.Badge bg="red.500" mb={5} mr={-1} />}
          <ICON
            type={ICONS.cartType}
            name={ICONS.cart}
            size={24}
            color={COLORS.black}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const BackHeader = ({navigation}) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <ICON
          type={ICONTYPE.Feather}
          name="arrow-left"
          size={24}
          color={COLORS.black}
        />
      </TouchableOpacity>
    </>
  );
};

export const EditHeader = ({...rest}) => {
  return (
    <>
      <TouchableOpacity {...rest}>
        <ICON
          type={ICONTYPE.FontAwesome}
          name="pencil"
          borderRadius={10}
          size={24}
          color={COLORS.black}
        />
      </TouchableOpacity>
    </>
  );
};
