import {View, Text} from 'react-native';
import React from 'react';
import {ICON, ICONS} from './../../../constants';
import {Header} from './../../../components';

const Home = () => {
  return (
    <View>
      <Header title={'Title'} />
      <Text>Home</Text>
      <ICON type={ICONS.testType} name={ICONS.test} />
    </View>
  );
};

export default Home;
