import {View, Text} from 'native-base';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {ICON, ICONS, COLORS} from './../../../constants';
import {
  Header,
  BackHeader,
  NotificationHeader,
  CartHeader,
  SearchBox,
  Title,
  Button,
} from './../../../components';
import style from './../../style';

const HeaderContent = ({navigation}) => {
  return (
    <Header
      leftComponent={<BackHeader navigation={navigation} />}
      rightComponent={
        <View flexDirection={'row'}>
          <NotificationHeader
            navigation={navigation}
            active={true}
            onPress={() => alert('Notification')}
          />
          <CartHeader navigation={navigation} onPress={() => alert('Cart')} />
        </View>
      }
    />
  );
};

const Home = ({navigation}) => {
  const [search, setSearch] = useState();

  return (
    <View>
      <HeaderContent navigation={navigation} />
      <View style={style.container}>
        <SearchBox
          value={search}
          onChangeText={val => setSearch(val)}
          onSearch={() => alert('Searchnow')}
        />
        <Title mb={2} name="Manage store" />
        <Button title="Select from store" size="md" />
        <ICON type={ICONS.testType} name={ICONS.test} />
      </View>
    </View>
  );
};

export default Home;
