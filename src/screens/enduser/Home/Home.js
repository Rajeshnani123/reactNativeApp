import {View, HStack, Text, Image, Center, Box, FlatList} from 'native-base';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from './../../../redux/reducers/authReducer';
import {ICON, ICONS, FONTS, IMAGES, WP, HP, COLORS} from './../../../constants';
import {
  Header,
  MenuHeader,
  NotificationHeader,
  CartHeader,
  SearchBox,
  Title,
  Btn,
  HorizontalCard,
  ActionBtn,
} from './../../../components';
import style from './../../style';
import {DATA} from '../../../constants/DUMMYJSON';

const HeaderContent = ({navigation}) => {
  return (
    <Header
      leftComponent={<MenuHeader navigation={navigation} />}
      rightComponent={
        <View flexDirection={'row'}>
          <NotificationHeader
            navigation={navigation}
            active={true}
            onPress={() => alert('Notification')}
          />
          {/* <CartHeader navigation={navigation} onPress={() => alert('Cart')} /> */}
        </View>
      }
    />
  );
};

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <View>
      <HeaderContent navigation={navigation} />
      <Text>Users Stack screens</Text>
      <Center>
        <Btn
          width={WP('70%')}
          value={'Logout'}
          onPress={() => dispatch(logout())}
        />
      </Center>
    </View>
  );
};

export default Home;
