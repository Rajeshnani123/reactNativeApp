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
import {normalize} from '../../../utils/Platform.js';

const SignUp = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.root}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.signup}>REGISTER</Text>
          <Image
            source={require('../../../assets/Images/image2.png')}
            style={styles.img}
          />
        </View>

        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="user name"
            placeholderTextColor={'#C4C4C4'}></TextInput>
          <TextInput
            style={styles.input}
            placeholder="email"
            placeholderTextColor={'#C4C4C4'}></TextInput>
          <TextInput
            style={styles.input}
            placeholder="mobile no"
            placeholderTextColor={'#C4C4C4'}></TextInput>
          <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor={'#C4C4C4'}></TextInput>
          <TextInput
            style={styles.input}
            placeholder="confirm password"
            placeholderTextColor={'#C4C4C4'}></TextInput>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.lgn}> SUBMIT</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: normalize(70),
              marginTop:normalize(20),
              
            }}>
            <Text onPress={() => navigation.navigate('SignIn')}>
              Have an account ?
            </Text>
            <Text style={styles.acc}> SignIn</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
