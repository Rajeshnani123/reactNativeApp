import React, {useState} from 'react';
import {Alert} from 'react-native';
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
import ICON from 'react-native-vector-icons/AntDesign';
import {IMAGES, FONTS, COLORS, ICONS, WP, HP, SIZES} from '../../constants';
import {loginUser} from '../../redux/UserProfile/ActionCreators/postUserAction';
import LinearGradient from 'react-native-linear-gradient';

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
    if (validate()) {
      dispatch(loginUser(username, password));
    }
    //dispatch(login({accessToken: 'ss', roleType: '1'}));
  };
  return (
    <ScrollView style={styles.root}>
      <View style={styles.img}>
        <Image
          source={require('../../assets/Images/log.png')}
          style={{
            marginLeft: normalize(30)
          }}
        />
        <Text
          style={{
            width: normalize(90),
            height: normalize(40),
            fontSize: normalize(24),
            fontWeight: 'bold',
            color: '#000',
            marginVertical: normalize(30),
            marginHorizontal: normalize(110),
          }}>
          LOGIN
        </Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email / Mobile No"
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
      <TouchableOpacity colors={['#FFB43A','#FFB43A','#FFB43A']} style={styles.button} onPress={() => making_api_call()}>
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
          alignItems:'center',
          marginBottom: normalize(50),
          marginTop: normalize(60),
          
        }}>
        <Text
          style={{
            fontSize: 14,
marginLeft:normalize(75),
            color: '#000',
            fontFamily: 'Poppins',
            fontWeight: 'normal',
          }}>
          Don't have an account?
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginLeft:normalize(10),
            color: '#000',
            fontFamily: 'Poppins',
            fontWeight: '900',
          }}
          onPress={() => navigation.navigate('SignUp')}>
          SignUp
        </Text>
      </View>
    </ScrollView>
  );
};

export default Login;
