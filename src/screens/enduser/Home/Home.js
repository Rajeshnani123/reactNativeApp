import { View, HStack, Text, Image, Center, Box, FlatList } from 'native-base';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ICON, ICONS, FONTS, IMAGES, WP, HP, COLORS } from './../../../constants';
import {
  Header,
  BackHeader,
  NotificationHeader,
  CartHeader,
  SearchBox,
  Title,
  Btn,
  HorizontalCard,
  ActionBtn,
} from './../../../components';
import style from './../../style';
import { DATA } from '../../../constants/DUMMYJSON';

const HeaderContent = ({ navigation }) => {
  return (
    <Header
      leftComponent={<BackHeader navigation={navigation} />}
      rightComponent={
        <View flexDirection={'row'}>
          <NotificationHeader
            navigation={navigation}
            active={true}
            onPress={() => alert('Notification')}
          />
          <CartHeader navigation={navigation} onPress={() => alert('Cart')} />
        </View>
      }
    />
  );
};

const Home = ({ navigation }) => {
  return (
    <View>
      <HeaderContent navigation={navigation} />
      <Text>Users Stack screens</Text>
    </View>
  );
};

export default Home;
