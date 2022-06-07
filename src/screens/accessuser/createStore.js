import React from "react";
import {Alert} from "react-native";
import {View,Button,TouchableOpacity,Text,StyleSheet,ScrollView} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { TextInput, Header, MenuHeader, NotificationHeader } from "../../components";
import { postStore } from "../../redux/StoreData/ActionCreator/postStoreAction";


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
    const {userId} = useSelector((state) => state.getUserReducers.data);

    const dispatch = useDispatch();
    const saveStore = () => {
     if(location){
       const Body = {
        location,
        userId,
      }
      dispatch(postStore(Body));
    }else{
        Alert.alert("Enter the location");
      }
    }
    return(
        <ScrollView style={Styles.root}>
        <HeaderContent navigation={navigation} />
        <View style={Styles.view}>
        <Text style={Styles.textstyle}>CREATE STORE </Text>
           <TextInput
          style={Styles.input}
          value={location}
          placeholder="Location"
          onChangeText={(text) => setLocation(text)}
          placeholderTextColor={'#c4c4c4'} />
        <TouchableOpacity style={Styles.button} onPress={saveStore}>
          <Text style={Styles.buttonText}>Create Store</Text>
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
