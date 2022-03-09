import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFEED2',
  },
  container: {
    flexDirection: 'column',
    padding: 20,
    marginHorizontal: 15,
  },
  input: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 25,
    borderRadius: 5,
    color: '#c4c4c4c4',
    marginVertical: 6,
  },
  button: {
    backgroundColor: '#FFB43A',
    padding: 16,
    width: '100%',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 5,
    alignItems: 'center',
  },
  lgn: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 16,
  },
  img: {
    marginTop: 25,
    alignSelf: 'center',
  },
  signup: {
    fontFamily: 'Poppins',
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 40,
  },
  acc: {
    fontFamily: 'Poppins',
    fontWeight: '900',
    color: '#000',
    marginHorizontal: 70,
    marginVertical: 30,
  },
});

export default styles;
