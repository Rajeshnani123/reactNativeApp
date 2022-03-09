import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import image from '../../../Assets/Images/image2.png';
import styles from '../SignUp/style.js';

const SignUp = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.root}>
        <View style={styles.img}>
          <Image source={require('../../../Assets/Images/image2.png')} />
        </View>
        <Text style={styles.signup}>REGISTER</Text>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="User name"
            placeholderTextColor={'#C4C4C4'}></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={'#C4C4C4'}></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Mobile no"
            placeholderTextColor={'#C4C4C4'}></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={'#C4C4C4'}></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Confirm password"
            placeholderTextColor={'#C4C4C4'}></TextInput>
          <TouchableOpacity style={styles.button} onPress={() => alert('d')}>
            <Text style={styles.lgn}> Register</Text>
          </TouchableOpacity>
          <Text style={styles.acc} onPress={() => navigation.navigate('Login')}>
            Have an account ? SignIn
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
