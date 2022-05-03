import React, {useState} from 'react';
import {Alert} from "react-native";
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
import {normalize, font} from '../../utils/Platform';
import {login} from './../../redux/reducers/authReducer';
<<<<<<< HEAD
import ICON from 'react-native-vector-icons/AntDesign';
import {IMAGES, FONTS, COLORS, ICONS, WP, HP, SIZES} from '../../constants';
=======
import { loginUser } from '../../redux/UserProfile/ActionCreators/postUserAction';

>>>>>>> d739cb2bc0d64f87b765785582455f7498e68ec3

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const validate = () => {
    if (username == '') {
      Alert.alert('Please fill the user name');
      return false;
    } else if (password == '') {
      Alert.alert('please fill password');
      return false;
    }
    return true;
  };
  const making_api_call = () => {
    // if (validate()) {

    // }
    if(validate()){
      dispatch(loginUser(username,password));
    }
    //dispatch(login({accessToken: 'ss', roleType: '1'}));
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
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.fp}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => making_api_call()}>
        <Text style={styles.lgn}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.lgnbtn}>
        <Text style={styles.loginwith}>or signin with</Text>
      </View>
      <View style={styles.icon}>
        <ICON
          type={ICONS.googleType}
          name={ICONS.google}
          size={24}
          color={COLORS.black}
        />
        <ICON
          type={ICONS.facbookType}
          name={ICONS.facbook}
          size={24}
          color={COLORS.black}
        />
        <ICON
          type={ICONS.twitterType}
          name={ICONS.twitter}
          size={24}
          color={COLORS.black}
        />
        <ICON
          type={ICONS.instagramType}
          name={ICONS.instagram}
          size={24}
          color={COLORS.black}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft:normalize(71),
          marginBottom: normalize(50),
          marginTop: normalize(70),
        }}>
        <Text
          style={{
            fontSize: 16,

            
            color: '#000',
            fontFamily: 'Poppins',
            fontWeight: 'normal',
          }}
          >
          Don't have an account?
        </Text>
        <Text
          style={{
            fontSize: 18,
marginLeft:normalize(10),
            
            color: '#000',
            fontFamily: 'Poppins',
            fontWeight: '900',
          }} onPress={() => navigation.navigate('SignUp')}>
          SignUp
        </Text>
      </View>
    </ScrollView>
  );
};

export default Login;
