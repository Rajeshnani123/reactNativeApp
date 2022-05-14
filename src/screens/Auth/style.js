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
    padding: 10,
    marginTop: 10,
  },
  welcome: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    color: '#000',
  },

  img: {
    marginTop: normalize(70),
    marginLeft: normalize(40),
    
  },

  input: {
    height: normalize(50),
    borderRadius: normalize(5),
    backgroundColor: '#ffffff',
    marginLeft: normalize(36),
    marginRight: normalize(31),
    padding: normalize(15),
    borderWidth:normalize(3),
    borderColor:'#ffb43a'
    
  },

  password: {
    height: normalize(50),
    borderRadius: normalize(5),
    backgroundColor: '#ffffff',
    marginTop: normalize(18),
    padding: normalize(15),
    marginLeft: normalize(36),
    marginRight: normalize(31),
    borderWidth:normalize(3),
    borderColor:'#ffb43a'
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

    alignItems: 'center',
    marginTop: normalize(20),
    marginLeft: normalize(36),
    marginRight: normalize(31),
  },
  lgn: {
    height: normalize(30),
    fontFamily: 'Poppins',
    marginTop: normalize(13),
    fontSize: normalize(20),
    fontWeight: 'bold',

    fontStyle: 'normal',

    color: '#ffffff',
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
    width: normalize(143),
    fontFamily: 'Poppins',
    fontSize: normalize(16),
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    marginLeft: normalize(208),
    marginRight: normalize(34),
    marginTop: normalize(25),

    color: '#000000',
  },
  loginwith: {
    fontFamily: 'Poppins',
    fontSize: normalize(16),
    color: '#332F32',
    fontWeight: 'normal',
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: normalize(200),
    marginTop: normalize(36),
    marginLeft: normalize(75),
  },
  dnt: {
    fontFamily: 'Poppins',
    fontSize: normalize(26),
    color: '#000',
    marginHorizontal: 90,
    flexDirection: 'row',

    width: '70%',
    marginTop: 40,
  },
  lgnbtn: {
    alignItems: 'center',
    marginTop: normalize(30),
  },
});
export default styles;
