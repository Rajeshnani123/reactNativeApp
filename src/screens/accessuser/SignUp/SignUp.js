import {
  StyleSheet,
  Alert,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from '../SignUp/style.js';
import { createUser } from '../../../redux/UserProfile/ActionCreators/postUserAction.js';
import { useDispatch, useSelector } from 'react-redux';
import { USER_ACCOUNT_RESET } from '../../../redux/UserProfile/Action/ActionType.js';


const SignUp = ({navigation}) => {
  const dispatch = useDispatch();
  const [name,setName] = React.useState("");
  const [email,setEmail] = React.useState("");
  const [mobile,setMobile] = React.useState("");
  const [password,setPassword] = React.useState("");
  const [confirmPassword,setConfirmPassword] = React.useState("");
  const {statusCode,createLoading} = useSelector((state) => state.userProfileReducers);
  const createUserFunc = () => {
    if(password === "" || confirmPassword === "" || email === "" || name === "" || mobile === ""){
      Alert.alert("Fields cannot be empty")
    }else if(!email.includes("@",".com")){
      Alert.alert("Enter proper format of email")
    }
    else if(password === confirmPassword){
      const Body={
        email: email,
        password: password,
        phoneNumber: mobile,
        userName: name
      }
      dispatch(createUser(Body));
    }else{
      Alert.alert("Password doesn't match")
    }
  }

  React.useLayoutEffect(() => {
    dispatch({type: USER_ACCOUNT_RESET});
  },[]);

  React.useEffect(() => {
    if(!createLoading && statusCode === 200){
      Alert.alert("Please login with your registered Details")
      navigation.navigate('Login');
    }else if(!createLoading && statusCode === 400){
      Alert.alert("User Already Exists");
    }
  },[createLoading]);


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
            value={name}
            onChangeText={(text) => setName(text)}
            placeholderTextColor={'#C4C4C4'} />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
            type="email"
            placeholderTextColor={'#C4C4C4'} />
          <TextInput
            style={styles.input}
            value={mobile}
            maxLength={10}
            keyboardType="number-pad"
            onChangeText={(text) => setMobile(text)}
            placeholder="Mobile no"
            placeholderTextColor={'#C4C4C4'} />
          <TextInput
            style={styles.input}
            value={password}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            placeholderTextColor={'#C4C4C4'} />
          <TextInput
            style={styles.input}
            value={confirmPassword}
            secureTextEntry={true}
            onChangeText={(text) => setConfirmPassword(text)}
            placeholder="Confirm password"
            placeholderTextColor={'#C4C4C4'} />
          <TouchableOpacity
            style={styles.button}
            onPress={createUserFunc}>
            <Text style={styles.lgn}> Register</Text>
          </TouchableOpacity>
          <Text
            style={styles.acc}
            onPress={() => navigation.navigate('Login')}>
            Have an account ? SignIn
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
