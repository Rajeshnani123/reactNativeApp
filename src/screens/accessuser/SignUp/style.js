import React from 'react';
import {StyleSheet} from 'react-native';
import {normalize} from '../../../utils/Platform';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFEED2',
  },
  container: {
    flexDirection: 'column',
    padding: normalize(20),
    marginHorizontal: normalize(15),
  },
  input: {
    backgroundColor: '#ffffff',
    paddingHorizontal: normalize(25),
    borderRadius: normalize(5),
    marginVertical: normalize(6),
    marginTop:normalize(20),
    height:normalize(45)
  },
  button: {
    backgroundColor: '#FFB43A',
    padding: normalize(16),
    width: '100%',
    alignSelf: 'center',
    marginTop: normalize(30),
    borderRadius: normalize(5),
    alignItems: 'center',
  },
  lgn: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: normalize(16),
    color:'#FFF'
  },
  img: {
    marginTop: normalize(50),
    marginLeft:normalize(15),
    width:normalize(150),
    height:normalize(135),
    marginRight:normalize(47)
  },
  signup: {
    fontFamily: 'Poppins',
    fontSize: normalize(25),
    color: '#000',
    fontWeight: 'bold',
    marginLeft:normalize(40),
    marginTop:normalize(130)
    
  },
  acc: {
    fontFamily: 'Poppins',
    fontWeight: '900',
    color: '#000',
   fontSize:normalize(18),
    marginVertical: normalize(30),
    marginLeft:normalize(10)
  },
});

export default styles;
