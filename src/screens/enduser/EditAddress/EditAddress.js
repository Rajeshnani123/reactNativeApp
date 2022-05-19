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
  
} from '../../../components';
import ICON from 'react-native-vector-icons/Feather';
import {IMAGES, FONTS, COLORS, ICONS, WP,HP, SIZES} from '../../../constants';
import styles from '../../../components/basics/styles';
import style from './styles';
import DropDown from '../../../components/DropDown';
import DropDown2 from '../../../components/DropDown2';
import {StyleSheet} from 'react-native';
import { normalize } from '../../../utils/Platform';


const HeaderContent = ({navigation}) => {
  return <Header leftComponent={<BackHeader navigation={navigation} />} />;
};

const EditAddress = ({navigation}) => {
  return (
    <View  >
      <HeaderContent navigation={navigation} />
      <View style={style.container}>
        <Text style={style.txt}>Select Address</Text>
        
        <DropDown />
        <DropDown2 /> 
        <View style={{marginTop:normalize(40),alignItems:'center'}}>
        <Btn
            height={normalize(50)}
            width={WP('43%')}
            colorScheme={'primary'}
            value={'SAVE'}
            
            
          />
          </View>
      </View>
    </View>
  );
};

export default EditAddress;
