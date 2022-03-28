import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from './style';

import {login} from './../../redux/reducers/authReducer';

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const validate = () => {
    if (username == '') {
      alert('Please fill the user name');
      return false;
    } else if (password == '') {
      alert('please fill passord');
      return false;
    }
    return true;
  };
  const making_api_call = () => {
    // if (validate()) {

    // }
    dispatch(login({accessToken: 'ss', roleType: '1'}));
  };
  return (
    <ScrollView style={styles.root}>
      <View style={styles.img}>
        <Image source={require('./../../assets/Images/image2.png')} />
      </View>
      <Text style={styles.login}>LOGIN</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={'#c4c4c4'}
          onChangeText={value => setUsername(value)}></TextInput>

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="password"
          placeholderTextColor={'#c4c4c4'}
          onChangeText={value => setPassword(value)}></TextInput>
      </View>
      <Text style={styles.fp}>Forgot Password?</Text>
      <TouchableOpacity style={styles.button} onPress={() => making_api_call()}>
        <Text style={styles.lgn}> LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.loginwith}>or login with</Text>
      <View style={styles.icon}>
        <Image source={require('./../../assets/Icons/google.png')} />
        <Image source={require('./../../assets/Icons/facebook.png')} />
        <Image source={require('./../../assets/Icons/twitter.png')} />
        <Image source={require('./../../assets/Icons/instagram.png')} />
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
        onPress={() => navigation.navigate('SignUp')}>
        Don't have an account? SignUp
      </Text>
    </ScrollView>
  );
};

export default Login;
