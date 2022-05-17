import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

import {IMAGES, FONTS, COLORS, ICONS, HP} from '../../../constants';
import {Box, Button} from 'native-base';
import { BackHeader } from '../../../components';
import {Header} from '../../../components';
import {normalize} from '../../../utils/Platform';
import styles from './styles';
import ResetPassword from '../Resetpassword/ResetPassword';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../../redux/UserProfile/ActionCreators/postUserAction';

const HeaderContent = ({navigation}) => {
  return (
    <Header
      leftComponent={<BackHeader navigation={navigation} />}
      
    />
  );
};

const ForgotPassword = ({navigation}) => {
  const {loading,message} = useSelector((state) => state.userProfileReducers);
  const [emailPhone,setEmailPhone] = React.useState("");
  const dispatch = useDispatch();
  React.useEffect(() => {
    if(!loading &&message ){
      console.log(message);
      navigation.navigate('ResetPassword');
    }
  },[loading])
  return (
    <>
      <View>
      <HeaderContent navigation={navigation} />
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../../assets/Images/fpp.png')}
            style={{
              height: normalize(200),
              width: normalize(240),
              marginTop: normalize(70),
            }}
          />
        </View>
        <View style={{marginTop: normalize(30), alignItems: 'center'}}>
          <Text
            style={{
              color: '#000000',
              fontSize: normalize(20),
              fontWeight: 'normal',
            }}>
            Login for the best experience
          </Text>
          <Text
            style={{
              color: '#6C6A66',
              fontSize: normalize(14),
              marginTop: normalize(5),
            }}>
            Enter your email/Mobile no to reset password
          </Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmailPhone(text)}
          placeholder="Email / Mobile No"
          ></TextInput>
          <TouchableOpacity style={styles.button} onPress={() =>dispatch(forgotPassword(emailPhone))}>
        <Text style={styles.reset}>Reset Password</Text>
      </TouchableOpacity>
      </View>
    </>
  );
};

export default ForgotPassword;
