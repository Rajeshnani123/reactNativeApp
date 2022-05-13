import {StyleSheet, Text, View, TouchableOpacity, FlatList,Image,TextInput} from 'react-native';
import React, {useState} from 'react';

import {IMAGES, FONTS, COLORS, ICONS, HP} from '../../../constants';
import {Box, Button} from 'native-base';

import {Header} from '../../../components';
import {normalize} from '../../../utils/Platform';
import styles from './styles'
import ResetPassword from '../Resetpassword/ResetPassword';



const ForgotPassword = ({navigation}) => {
  return (
    <>
      

      <View>
      <View style={{alignItems:'center'}}>
      <Image
            source={require('../../../assets/Images/fpp.png')}
            style={{
              height: normalize(200),
              width: normalize(240),
              marginTop:normalize(127),
              
             
            }}
          /></View>
          <TextInput
          style={styles.input}
          placeholder="Email/ Mobile No"
          ></TextInput>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={styles.reset}>Reset Password</Text>
      </TouchableOpacity>
      </View>
    </>
  );
};

export default ForgotPassword;
