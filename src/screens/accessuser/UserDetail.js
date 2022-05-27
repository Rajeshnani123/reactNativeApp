import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

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
import {normalize} from '../../utils/Platform';
import {useDispatch, useSelector} from 'react-redux';
import {getUserDetails} from '../../redux/UserProfile/ActionCreators/getUserAction';
import jwt_decode from 'jwt-decode';
import {useIsFocused} from '@react-navigation/native';

const HeaderContent = ({navigation}) => {
  return (
    <Header
      leftComponent={<MenuHeader navigation={navigation} />}
      title="User Deatils"
      rightComponent={
        <View flexDirection={'row'}>
          <NotificationHeader
            navigation={navigation}
            active={true}
            onPress={() => alert('Notification')}
          />
          {/* <CartHeader navigation={navigation} onPress={() => alert('Cart')} /> */}
        </View>
      }
    />
  );
};

const UserDetail = ({navigation}) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const {token} = useSelector(state => state.userProfileReducers);
  const {loading, data} = useSelector(state => state.getUserReducers);
  var decoded = jwt_decode(token);
  var user_id = decoded.User.id;
  React.useLayoutEffect(() => {
    dispatch(getUserDetails(user_id));
  }, [isFocused]);

  return (
    <>
      <HeaderContent navigation={navigation} />
      <ScrollView style={styles.root}>
        <Image
          source={require('../../assets/Images/profileimage.jpeg')}
          style={styles.img}
        />
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 3}}>
            <Text style={styles.leftDescription}>Name</Text>
            <Text style={styles.leftDescription}>Email</Text>
            <Text style={styles.leftDescription}>Mobile No</Text>
            <Text style={styles.leftDescription}>DOB</Text>
            {/* <Text style={styles.leftDescription}>Business type</Text> */}
            <Text style={styles.leftDescription}>GSTN</Text>
            <Text style={styles.leftDescription}>Address</Text>
          </View>
          <View style={{flex: 3}}>
            <Text style={styles.rightDescription}>
              {loading ? 'Name' : data.userName}
            </Text>
            <Text style={styles.rightDescription}>
              {loading ? 'Email' : data.email}
            </Text>
            <Text style={styles.rightDescription}>
              {loading ? 'Mobile No' : data.phoneNumber}
            </Text>
            <Text style={styles.rightDescription}>
              {loading ? 'DOB' : data.userId}
            </Text>
            {/* <Text style={styles.rightDescription}>
              {loading ? 'Business type' : data.userType}
            </Text> */}
            <Text style={styles.rightDescription}>
              {loading ? 'GSTN' : data.gstin}
            </Text>
            <Text style={styles.rightDescription}>
              {loading ? 'Address' : data.address}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={
            () => navigation.navigate('userDetailForm')
            // navigation.navigate('ProfileStack', {
            //   screen: 'userDetailForm',
            // })
          }>
          <Text style={styles.buttonText}>EDIT</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default UserDetail;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFF7EA',
  },
  head: {
    height: normalize(50),
    backgroundColor: '#FFB43A',
    flexDirection: 'row',
  },
  img: {
    height: normalize(160),
    width: normalize(160),
    borderRadius: 160 / 2,
    marginHorizontal: normalize(95),
    marginVertical: normalize(25),
  },
  leftDescription: {
    marginVertical: normalize(10),
    marginLeft: normalize(70),
  },
  rightDescription: {
    marginLeft: normalize(30),
    marginVertical: normalize(10),
  },
  button: {
    height: normalize(45),
    backgroundColor: '#FFB43A',
    width: normalize(220),
    marginHorizontal: normalize(60),
    alignItems: 'center',
    marginVertical: normalize(30),
    borderRadius: normalize(5),
  },
  buttonText: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#000',
    marginVertical: normalize(15),
  },
});
