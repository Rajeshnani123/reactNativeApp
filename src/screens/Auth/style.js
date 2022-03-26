import React from 'react';

import {StyleSheet} from 'react-native';

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
    marginTop: 40,
    alignSelf: 'center',
  },

  input: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    borderRadius: 5,
    color: '#c4c4c4c4',
    marginVertical: 6,
  },
  button: {
    backgroundColor: '#FFB43A',
    padding: 16,
    width: '85%',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  lgn: {
    marginHorizontal: 110,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 16,
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
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: 'normal',
    marginLeft: 230,
    color: '#332F32',
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
