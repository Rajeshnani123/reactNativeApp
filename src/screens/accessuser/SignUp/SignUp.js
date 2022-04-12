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

import styles from '../SignUp/style.js';

const SignUp = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.root}>
        <View style={styles.img}>
          <Image source={require('../../../assets/Images/image2.png')} />
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.lgn}> Register</Text>
          </TouchableOpacity>
          <Text
            style={styles.acc}
            onPress={() => navigation.navigate('SignIn')}>
            Have an account ? SignIn
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
