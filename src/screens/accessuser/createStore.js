import React from "react";
import {Alert} from "react-native";
import {View,Button,TouchableOpacity,Text,StyleSheet,ScrollView} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Header, MenuHeader, NotificationHeader } from "../../components";
import { TextInput } from "react-native";
import { postStore } from "../../redux/StoreData/ActionCreator/postStoreAction";
import { normalize } from "../../utils/Platform";

const HeaderContent = ({navigation}) => {
  return (
    <Header
      leftComponent={<MenuHeader navigation={navigation} />}
      title="Create store"
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

export const CreateStore = ({navigation, route}) => {

    const [location,setLocation] = React.useState("");
    const [storeName, setStoreName] = React.useState("");
    const {userId} = useSelector((state) => state.getUserReducers.data);

    const dispatch = useDispatch();
    const saveStore = () => {
     if(location && storeName){
       const Body = {
        location,
        storeName,
        userId,
      }
      dispatch(postStore(Body));
    }else{
        Alert.alert("Enter the Location and Store Name");
      }
    }
    return(
        <ScrollView style={Styles.root}>
          <HeaderContent navigation={navigation} />
            <View style={Styles.view}>
              <Text style={Styles.textStyle}>CREATE STORE </Text>
              <TextInput
                style={Styles.input}
                value={location}
                placeholder="Location"
                onChangeText={(text) => setLocation(text)}
                placeholderTextColor={'#c4c4c4'}
              />
              {/* This Store Name is required in Swagger API */}
              {/* <TextInput
                style={Styles.input}
                value={storeName}
                placeholder="Store Name"
                onChangeText={(text) => setStoreName(text)}
                placeholderTextColor={'#c4c4c4'}
              /> */}
            <TouchableOpacity style={Styles.button} onPress={saveStore}>
              <Text style={Styles.buttonText}>CREATE STORE</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
    )
}


const Styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFEED2',
  },
  input: {
    height: normalize(50),
    borderRadius: normalize(5),
    backgroundColor: '#ffffff',
    width: '80%',
    marginTop: normalize(18),
    padding: normalize(15),
    borderWidth:normalize(3),
    borderColor:'#ffb43a'
  },

  view: {
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 22,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#000',
    paddingVertical: 30,
  },
  button: {
    borderRadius: normalize(5),
    height: normalize(50),
    backgroundColor: '#ffb43a',
    elevation:2,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 20,
    shadowOpacity: 1,
    borderRadius:5,
    width: '80%',
    alignItems: 'center',
    marginTop: normalize(20),
  },
  buttonText: {
    height: normalize(30),
    fontFamily: 'Poppins',
    marginTop: normalize(13),
    fontSize: normalize(18),
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#ffffff',
  },
});
