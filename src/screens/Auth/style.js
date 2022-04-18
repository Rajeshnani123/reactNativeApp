import React from 'react';

import {StyleSheet} from 'react-native';
import {normalize, FONTS} from '../../utils/Platform';

const styles = StyleSheet.create({
  root: {
    // flext: 1,
    backgroundColor: '#FFEED2',
  },

  container: {
    flexDirection: 'column',
    padding: 20,
    marginTop: 10,
  },

  img: {
    marginTop: 50,
    marginLeft: 30,
    height: 100,
    width: 100,
  },

  input: {
    width: normalize(361),
    height: normalize(56),
    borderRadius: 5,
    backgroundColor: '#ffffff',

    textAlign: 'center',
    marginTop: 150,
  },
  password: {
    width: normalize(361),
    height: normalize(56),
    borderRadius: 5,
    backgroundColor: '#ffffff',
    marginTop: normalize(26),
     },
  button: {
    width: 361,
    height: 60,
    backgroundColor: "#ffb43a",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowRadius: 20,
    shadowOpacity: 1,
    marginHorizontal:20
    
    
  },
  lgn: {
    width: 60,
  height: 33,
  fontFamily: "Poppins",
  fontSize: 22,
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "left",
  color: "#ffffff"
  },
  login: {
    marginHorizontal: 110,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#332F32',
    marginLeft: 150,
    marginTop: 30,
  },

  fp: {
    width: 143,
    height: 24,
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    marginLeft: 230,
    color: '#000000',
    marginTop:normalize(17)
  },
  loginwith: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#332F32',
    marginLeft: 130,
    padding: 20,
  },
  icon: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginTop: 20,
  },
  dnt: {
    fontFamily: 'Poppins',
    fontWeight: '100',
    color: '#000',
    marginHorizontal: 90,
    flexDirection: 'row',

    width: '70%',
    marginTop: 40,
  },
});
export default styles;
