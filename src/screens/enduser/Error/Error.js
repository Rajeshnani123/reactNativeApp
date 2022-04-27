import {View, Text} from 'react-native';
import React from 'react';
import {
  Header,
  BackHeader,
  StoreHeader,
  NotificationHeader,
  CartHeader,
  SearchBox,
  Title,
  Btn,
  HorizontalCard,
  ActionBtn,
  BrBtn,
  CustomModal,
  MenuHeader,
  Close,
} from '../../../components';
import {Box, Button, Image} from 'native-base';

import ICON from 'react-native-vector-icons/Feather';
import {IMAGES, FONTS, COLORS, ICONS, WP, HP, SIZES} from '../../../constants';

import {StyleSheet} from 'react-native';
import {normalize} from '../../../utils/Platform';
import style from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HeaderContent = ({navigation}) => {
  return (
    <Header
      rightComponent={
        <ICON
          type={ICONS.closeType}
          name={ICONS.close}
          size={26}
          color={COLORS.black}
        />
      }
      mx={50}
    />
  );
};

const Error = ({navigation}) => {
  return (
    <View>
      <HeaderContent navigation={navigation} />
      <View style={style.container}>
        <Image
          source={require('../../../assets/Images/Success.png')}
          style={style.image}></Image>

        <View style={style.txtbox}>
          <Text style={style.txt}>Error Placing Order!</Text>
          <View style={style.subtextbox}>
          <Text style={style.subtext}>An error occured while placing order please verufy card info and try agian</Text>
          <TouchableOpacity style={style.btn}>
              <Text style={style.btntxt}>OK</Text>
          </TouchableOpacity>
          </View>
          
        </View>
      </View>
    </View>
  );
};

export default Error;
