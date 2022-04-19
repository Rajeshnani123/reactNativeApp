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
import {normalize,font} from '../../utils/Platform';
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
        <Image source={require('../../assets/Images/welcome.png')} />
      </View>
      
       
        <TextInput
          style={styles.input}
          placeholder="Email/Mobile No"
          placeholderTextColor={'#c4c4c4'}
          onChangeText={value => setUsername(value)}></TextInput>
          
        <TextInput
          style={styles.password}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor={'#c4c4c4'}
          onChangeText={value => setPassword(value)}></TextInput>
      <TouchableOpacity onPress={()=>navigation.navigate('ForgotPassword')}>
      <Text style={styles.fp} >Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => making_api_call()}>
        <Text style={styles.lgn}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.loginwith}>or login with</Text>
      <View style={styles.icon}>
        <Image source={require('../../assets/Icons/google.png')} />
        <Image source={require('../../assets/Icons/facebook.png')} />
        <Image source={require('../../assets/Icons/twitter.png')} />
        <Image source={require('../../assets/Icons/instagram.png')} />
      </View>

      <Text
        style={{
          fontSize: 14,
         width:normalize(270),
          marginTop:normalize(93),
          color: '#000',
          fontFamily: 'Poppins',
          fontWeight: '900',
          marginLeft:normalize(71)
        }}
        onPress={() => navigation.navigate('Register')}>
        Don't have an account? SignUp
      </Text>
    </ScrollView>
  );
};

export default Login;
