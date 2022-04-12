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

const HeaderContent = ({navigation}) => {
  return (
    <Header
      leftComponent={<MenuHeader navigation={navigation} />}
      rightComponent={
        <View flexDirection={'row'}>
          <NotificationHeader
            navigation={navigation}
            active={true}
            onPress={() => alert('Notification')}
          />
          <CartHeader navigation={navigation} onPress={() => alert('Cart')} />
        </View>
      }
    />
  );
};

const UserDetail = ({navigation}) => {
  return (
    <>
      <HeaderContent navigation={navigation} />

      <ScrollView style={styles.root}>
        {/* <View style={styles.head}>
        <Icon
          name="arrow-left"
          size={22}
          style={{marginHorizontal: 15, marginVertical: 12, color: '#000'}}
        />
        <Icon
          name="bell"
          size={20}
          style={{marginLeft: 230, marginVertical: 15, color: '#000'}}
        />
        <Icon
          name="shopping-cart"
          size={20}
          style={{marginLeft: 20, marginVertical: 15, color: '#000'}}
        />
      </View> */}
        <Image
          source={require('../../Assets/Images/profileimage.jpeg')}
          style={styles.img}
        />
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 3}}>
            <Text style={styles.leftDescription}>Name</Text>
            <Text style={styles.leftDescription}>Email</Text>
            <Text style={styles.leftDescription}>Mobile No</Text>
            <Text style={styles.leftDescription}>DOB</Text>
            <Text style={styles.leftDescription}>Business type</Text>
            <Text style={styles.leftDescription}>GSTN</Text>
            <Text style={styles.leftDescription}>Address</Text>
          </View>
          <View style={{flex: 3}}>
            <Text style={styles.rightDescription}>Name</Text>
            <Text style={styles.rightDescription}>Email</Text>
            <Text style={styles.rightDescription}>Mobile No</Text>
            <Text style={styles.rightDescription}>DOB</Text>
            <Text style={styles.rightDescription}>Business type</Text>
            <Text style={styles.rightDescription}>GSTN</Text>
            <Text style={styles.rightDescription}>Address</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('UserDetailForm')}>
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
    height: 50,
    backgroundColor: '#FFB43A',
    flexDirection: 'row',
  },
  img: {
    height: 160,
    width: 160,
    borderRadius: 160 / 2,
    marginHorizontal: 95,
    marginVertical: 25,
  },
  leftDescription: {
    marginVertical: 10,
    marginLeft: 70,
  },
  rightDescription: {
    marginLeft: 30,
    marginVertical: 10,
  },
  button: {
    height: 45,
    backgroundColor: '#FFB43A',
    width: 220,
    marginHorizontal: 60,
    alignItems: 'center',
    marginVertical: 30,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
  },
});
