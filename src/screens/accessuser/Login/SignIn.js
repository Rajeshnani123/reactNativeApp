import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect, Component} from 'react';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import styles from '../Login/style';
import SignUp from '../SignUp/SignUp';
import {Formik, Form, Field} from 'formik';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  validate = () => {
    const {username, password} = this.state;
    if (username == '') {
      alert('Please fill the user name');
      return false;
    } else if (password == '') {
      alert('please fill passord');
      return false;
    }
    return true;
  };
  making_api_call = () => {
    if (this.validate()) {
      alert('Successfully login');
      this.props.navigation.navigate('SignUp');
    }
  };

  render() {
    return (
      <ScrollView style={styles.root}>
        <View style={styles.img}>
          <Image source={require('./../../../assets/Images/image1.png')} />
        </View>
        <Text style={styles.login}>LOGIN</Text>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={'#c4c4c4'}
            onChangeText={value =>
              this.setState({username: value})
            }></TextInput>

          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="password"
            placeholderTextColor={'#c4c4c4'}
            onChangeText={value =>
              this.setState({password: value})
            }></TextInput>
        </View>
        <Text style={styles.fp}>Forgot Password?</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.making_api_call()}>
          <Text style={styles.lgn}> LOGIN</Text>
        </TouchableOpacity>

        <Text style={styles.loginwith}>or login with</Text>
        <View style={styles.icon}>
          <Image source={require('./../../../assets/Icons/google.png')} />
          <Image source={require('../../../assets/Icons/facebook.png')} />
          <Image source={require('../../../assets/Icons/twitter.png')} />
          <Image source={require('../../../assets/Icons/instagram.png')} />
        </View>

        <Text
          style={{
            fontSize: 14,
            marginHorizontal: 90,
            marginTop: 40,
            color: '#000',
            fontFamily: 'Poppins',
            fontWeight: '900',
          }}
          onPress={() => this.props.navigation.navigate('SignUp')}>
          Don't have an account? SignUp
        </Text>
      </ScrollView>
    );
  }
}
