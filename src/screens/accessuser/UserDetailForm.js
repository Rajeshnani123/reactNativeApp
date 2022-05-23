import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {updateAccount} from '../../redux/UserProfile/ActionCreators/postUserAction';
import {USER_ACCOUNT_RESET} from '../../redux/UserProfile/Action/ActionType';
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
} from '../../components';

const UserDetailForm = ({navigation}) => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.getUserReducers);
  const [name, setName] = React.useState(data.userName ? data.userName : '');
  const [email, setEmail] = React.useState(data.email ? data.email : '');
  const [mobile, setMobile] = React.useState(
    data.phoneNumber ? data.phoneNumber : '',
  );
  const [dob, setDob] = React.useState(data.userId ? data.userId : '');
  const [type, setType] = React.useState(data.userType ? data.userType : '');
  const [gstin, setGstin] = React.useState(data.gstin ? data.gstin : '');
  const [address, setAddress] = React.useState(
    data.address ? data.address : '',
  );
  const {loading, statusCode, token} = useSelector(
    state => state.userProfileReducers,
  );
  // const {token} = useSelector(state => state.userProfileReducers);

  const updateData = () => {
    let Body = {
      address: address,
      email: data.email,
      gstin: gstin,
      password: '',
      phoneNumber: data.phoneNumber,
      userName: name,
    };
    if(mobile !== data.phoneNumber){
      Body={
        ...Body,
        newPhoneNumber: mobile,
      }
    }
    if(email !== data.email){
      Body={
        ...Body,
        newEmail: email,
      }
    }
   dispatch(updateAccount(Body));
  };

  React.useEffect(() => {
    if (!loading && statusCode === 200) {
      Alert.alert('data saved');
      navigation.navigate("UserDetail");
      dispatch({type: USER_ACCOUNT_RESET});
    }
  }, [loading]);

  const HeaderContent = ({navigation}) => {
    return (
      <Header
        leftComponent={<BackHeader navigation={navigation} />}
        title="User Details"
        rightComponent={
          <View flexDirection={'row'}>
            <NotificationHeader
              navigation={navigation}
              active={true}
              onPress={() => alert('Notification')}
            />
          </View>
        }
      />
    );
  };

  return (
    <>
      <HeaderContent navigation={navigation} />

      <ScrollView style={Styles.root}>
        <View style={Styles.view}>
          <Text style={Styles.textstyle}>USER DETAILS</Text>

          <TextInput
            style={Styles.input}
            value={name}
            placeholder="Name"
            onChangeText={(text) => setName(text)}
            placeholderTextColor={'#c4c4c4'} />
          <TextInput
            style={Styles.input}
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            placeholderTextColor={'#c4c4c4'} />
          <TextInput
            style={Styles.input}
            value={mobile}
            onChangeText={text => setMobile(text)}
            placeholder="Mobile No"
            placeholderTextColor={'#c4c4c4'} />
          <TextInput
            style={Styles.input}
            placeholder="DOB"
            value={dob}
            onChangeText={(text) => setDob(text)}
            placeholderTextColor={'#c4c4c4'} />
          <TextInput
            style={Styles.input}
            placeholder="Change profile image"
            placeholderTextColor={'#c4c4c4'} />
          <TextInput
            style={Styles.input}
            placeholder="Change shop image"
            placeholderTextColor={'#c4c4c4'} />
          <TextInput
            style={Styles.input}
            value={type}
            onChangeText={(text) => setType(text)}
            placeholder="Business type"
            placeholderTextColor={'#c4c4c4'} />
          <TextInput
            style={Styles.input}
            placeholder="Add GSTN"
            value={gstin}
            onChangeText={(text) => setGstin(text)}
            placeholderTextColor={'#c4c4c4'} />

          <TextInput
            style={{
              height: 120,
              backgroundColor: '#fff',
              marginVertical: 10,
              borderRadius: 5,
              paddingHorizontal: 20,
              width: 290,
            }}
            value={address}
            onChangeText={(text) => setAddress(text)}
            placeholder="Address"
            placeholderTextColor={'#c4c4c4'} />

          <TouchableOpacity style={Styles.button} onPress={updateData}>
            <Text style={Styles.buttonText}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default UserDetailForm;

const Styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFEED2',
  },
  input: {
    backgroundColor: '#fff',
    width: 290,
    marginVertical: 10,
    height: 45,
    borderRadius: 5,
    paddingHorizontal: 20,
  },

  view: {
    alignItems: 'center',
  },
  textstyle: {
    fontSize: 22,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#000',
    paddingVertical: 30,
  },
  button: {
    backgroundColor: '#FFB43A',
    width: 300,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
    width: 320,
  },
  buttonText: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 12,
  },
});
