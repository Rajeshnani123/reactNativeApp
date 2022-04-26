import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

const UserDetailForm = () => {
  return (
    <ScrollView style={Styles.root}>
      <View style={Styles.view}>
        <Text style={Styles.textstyle}>USER DETAILS</Text>

        <TextInput
          style={Styles.input}
          placeholder="Name"
          placeholderTextColor={'#c4c4c4'}></TextInput>
        <TextInput
          style={Styles.input}
          placeholder="Email"
          placeholderTextColor={'#c4c4c4'}></TextInput>
        <TextInput
          style={Styles.input}
          placeholder="Mobile No"
          placeholderTextColor={'#c4c4c4'}></TextInput>
        <TextInput
          style={Styles.input}
          placeholder="DOB"
          placeholderTextColor={'#c4c4c4'}></TextInput>
        <TextInput
          style={Styles.input}
          placeholder="Change profile image"
          placeholderTextColor={'#c4c4c4'}></TextInput>
        <TextInput
          style={Styles.input}
          placeholder="Change shop image"
          placeholderTextColor={'#c4c4c4'}></TextInput>
        <TextInput
          style={Styles.input}
          placeholder="Business type"
          placeholderTextColor={'#c4c4c4'}></TextInput>
        <TextInput
          style={Styles.input}
          placeholder="Add GSTN"
          placeholderTextColor={'#c4c4c4'}></TextInput>

        <TextInput
          style={{
            height: 120,
            backgroundColor: '#fff',
            marginVertical: 10,
            borderRadius: 5,
            paddingHorizontal: 20,
            width: 290,
          }}
          placeholder="Address"
          placeholderTextColor={'#c4c4c4'}></TextInput>

        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.buttonText}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
