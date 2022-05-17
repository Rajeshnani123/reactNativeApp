import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {Center} from 'native-base';
import {
  IMAGES,
  FONTS,
  COLORS,
  ICONS,
  HP,
  SIZES,
  ICON,
  WP,
} from '../../../constants';
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
  CustomModal,
  MenuHeader,
  FormSelect,
  TextInput,
} from '../../../components';
import {normalize} from '../../../utils/Platform';

const HeaderContent = ({navigation}) => {
  return <Header leftComponent={<BackHeader navigation={navigation} />} />;
};

const ResetPassword = ({navigation}) => {
  return (
    <>
      <ScrollView style={styles.root}>
        <HeaderContent navigation={navigation} />

        <View style={{alignItems: 'center'}}>
          <Text style={styles.title}>Reset Password</Text>
        </View>

        <View style={{marginTop: normalize(50), alignItems: 'center'}}>
          <TextInput
            bg={'white'}
            placeHolder={'Enter OTP'}
            width={'82%'}
            mx={10}
            mt={17}
          />
          <TextInput
            bg={'white'}
            placeHolder={'New password'}
            width={'82%'}
            mx={10}
            mt={17}
          />
          <TextInput
            bg={'white'}
            placeHolder={'Confirm password'}
            width={'82%'}
            mx={10}
            mt={17}
          />
        </View>
        <View style={{marginTop: normalize(40), alignItems: 'center'}}>
          <Btn width={WP('80%')} colorScheme={'primary'} value={'SUBMIT'} />
        </View>
      </ScrollView>
    </>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFF7EA',
  },
  head: {
    height: normalize(50),
    backgroundColor: '#FFB43A',
    flexDirection: 'row',
  },

  title: {
    fontSize: normalize(20),
    color: '#000',
    marginTop: normalize(50),
  },

  button: {
    height: normalize(45),
    backgroundColor: '#FFB43A',
    width: normalize(220),
    marginHorizontal: normalize(60),
    alignItems: 'center',
    marginVertical: normalize(30),
    borderRadius: normalize(5),
  },
  buttonText: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#000',
    marginVertical: normalize(15),
  },
  edit: {
    width: normalize(70),
    height: normalize(45),
    borderRadius: normalize(5),
    backgroundColor: '#ffb43a',
    alignItems: 'center',
    marginVertical: normalize(20),
    marginLeft: normalize(255),
  },
  input: {
    backgroundColor: '#ffffff',
    paddingHorizontal: normalize(25),
    borderRadius: normalize(5),
    color: '#c4c4c4c4',
    marginVertical: normalize(6),
    marginTop: normalize(20),
    height: normalize(45),
    width: normalize(295),
    marginLeft: normalize(32),
  },
});
