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
    color: '#c4c4c4c4',
    marginVertical: normalize(6),
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
  },
  img: {
    marginTop: normalize(25),
    alignSelf: 'center',
  },
  signup: {
    fontFamily: 'Poppins',
    fontSize: normalize(25),
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: normalize(40),
  },
  acc: {
    fontFamily: 'Poppins',
    fontWeight: '900',
    color: '#000',
    marginHorizontal: normalize(70),
    marginVertical: normalize(30),
  },
});

export default styles;
