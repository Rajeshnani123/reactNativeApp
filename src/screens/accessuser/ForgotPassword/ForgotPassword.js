import {StyleSheet, Text, View, TouchableOpacity, FlatList,Image,TextInput} from 'react-native';
import React, {useState} from 'react';

import {IMAGES, FONTS, COLORS, ICONS, HP} from '../../../constants';
import {Box, Button} from 'native-base';

import {Header} from '../../../components';
import {normalize} from '../../../utils/Platform';
import styles from './styles'

const HeaderContent = ({navigation}) => {
  return <Header />;
};

const ForgotPassword = ({navigation}) => {
  return (
    <>
      <HeaderContent navigation={navigation} />

      <View>
      <Image
            source={require('../../../assets/Images/Forgotpassword.png')}
            style={{
              height: normalize(230),
              marginTop:normalize(70),
             marginLeft:normalize(40)
            }}
          />
          <TextInput
          style={styles.input}
          placeholder="Email/Mobile No"
          ></TextInput>
          <TouchableOpacity style={styles.button} onPress={() => making_api_call()}>
        <Text style={styles.reset}>Reset Password</Text>
      </TouchableOpacity>
      </View>
    </>
  );
};

export default ForgotPassword;
