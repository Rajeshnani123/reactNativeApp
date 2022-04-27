import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {normalize} from '../utils/Platform';
import ICON from 'react-native-vector-icons/Feather';
import {IMAGES, FONTS, COLORS, ICONS, WP,HP, SIZES} from '../constants';
import {Btn, TextInput, FormSelect} from './../components';
const DropDown2 = () => {

    const [showOption,setshowOption] =  useState(false);
  return (
    <View>
      <TouchableOpacity style={styles.DropDownStyle} onPress={()=>setshowOption(!showOption)}>
        <Text style={styles.address}>Secondary Address</Text>
        <ICON
                  type={ICONS.chevronType}
                  name={ICONS.chevrondown}
                  size={16}
                  color={COLORS.black}
                />
      </TouchableOpacity>
      {showOption && (<View>
      <View style={styles.input}>
      <TextInput
            bg={'white'}
            placeHolder={'Name'}
            width={'48%'}
            height={'65%'}
          />
          <TextInput
            bg={'white'}
            placeHolder={'Landmark'}
            width={'48%'}
            height={'65%'}
          />
      </View>
      <View style={styles.input}>
      <TextInput
            bg={'white'}
            placeHolder={'Mob no'}
            width={'48%'}
            height={'65%'}
            
          />
          <TextInput
            bg={'white'}
            placeHolder={'city'}
            width={'48%'}
            height={'65%'}
          />
          </View>
          <View style={styles.input}>
      <TextInput
            bg={'white'}
            placeHolder={'address'}
            width={'48%'}
            height={'65%'}
            
          />
          <TextInput
            bg={'white'}
            placeHolder={'pincode'}
            width={'48%'}
            height={'65%'}
          />
          </View>
      </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  DropDownStyle: {
    marginTop: normalize(30),
    padding: 15,
    borderWidth: 0.5,
    borderRadius: 5,
    flexDirection:'row',
    justifyContent:'space-between'
    
  },
  address:{
      color:'#000',
      fontSize:14,
      marginLeft:normalize(75)
  },input:{
      flexDirection:'row',
      justifyContent:'space-between'
  },


});
export default DropDown2;
