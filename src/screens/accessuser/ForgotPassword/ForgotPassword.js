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
              marginTop:normalize(70),
            
              
             
            }}
          /></View>
          <View style={{marginTop:normalize(30),alignItems:'center'}}>
          <Text style={{color:'#000000',fontSize:normalize(20),fontWeight:'normal'}}>Login for the best experience</Text>
          <Text style={{color:'#6C6A66',fontSize:normalize(14),marginTop:normalize(5)}}>Enter your email/Mobile no to reset password</Text>
          </View>
          <TextInput
          style={styles.input}
          placeholder="Email / Mobile No"
          ></TextInput>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={styles.reset}>Reset Password</Text>
      </TouchableOpacity>
      </View>
    </>
  );
};

export default ForgotPassword;
