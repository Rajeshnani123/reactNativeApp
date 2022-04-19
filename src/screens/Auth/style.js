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

  img: {
    marginTop: normalize(50),
    marginLeft: normalize(36),
    height: normalize(100),
    width: normalize(100),
  },

  input: {
    
    height: normalize(56),
    borderRadius: 5,
    backgroundColor: '#ffffff',
    marginLeft: normalize(36),
    marginRight: normalize(31),
    padding: normalize(20),
    marginTop: 150,
  },

  password: {
   
    height: normalize(56),
    borderRadius: 5,
    backgroundColor: '#ffffff',
    marginTop: normalize(24),
    padding: normalize(20),
    marginLeft: normalize(36),
    marginRight: normalize(31),
  },
  button: {
    
    height: normalize(60),
    backgroundColor: '#ffb43a',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 20,
    shadowOpacity: 1,
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: normalize(28),
    marginLeft: normalize(36),
    marginRight: normalize(31),
  },
  lgn: {
    width: normalize(90),
    height: normalize(33),
    fontFamily: 'Poppins',
    marginTop: normalize(13),
    fontSize: 22,
    fontWeight: 'normal',
    marginLeft: normalize(149),
    marginRight: normalize(154),
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
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
    
    width:normalize(143),
    fontFamily: 'Poppins',
    fontSize: normalize(16),
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    marginLeft:normalize(200),
    marginRight:normalize(34),
    

    color: '#000000',
    marginTop: normalize(17),
  },
  loginwith: {
    fontFamily: 'Poppins',
    fontSize: normalize(16),
    color: '#332F32',
    marginLeft: normalize(159),
    marginTop: normalize(30),
    marginRight:normalize(159),
    width:normalize(110)
  },
  icon: {
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    marginTop: normalize(36),
    marginLeft: normalize(87),
    marginRight:normalize(100)
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
