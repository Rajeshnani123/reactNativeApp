import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {GLOBALDATA} from '../../../constants/GLOBALJSON';
import {IMAGES, FONTS, COLORS, ICONS, HP, ICON} from '../../../constants';
import {Box, Button, Image} from 'native-base';
import styles from './Style';

import {
  Header,
  BackHeader,
  StoreHeader,
  NotificationHeader,
  CartHeader,
  SearchBox,
  Title,
  Btn,
  HorizontalCard,
  ActionBtn,
  RightArrowBtn,
  CustomModal,
  MenuHeader,
} from '../../../components';
import {normalize} from '../../../utils/Platform';
import {background} from 'native-base/lib/typescript/theme/styled-system';
import {Circle} from 'react-native-svg';
import { useDispatch, useSelector } from 'react-redux';
import { getStoreDatabyLocation } from '../../../redux/StoreData/ActionCreator/getStoreAction';

const HeaderContent = ({navigation}) => {
  return (
    <Header
      leftComponent={<MenuHeader navigation={navigation} />}
      title="Global store"
      rightComponent={
        <View flexDirection={'row'}>
          <NotificationHeader
            navigation={navigation}
            active={true}
            onPress={() => alert('Notification')}
          />
          {/* <CartHeader navigation={navigation} onPress={() => alert('Cart')} /> */}
        </View>
      }
    />
  );
};

const leftComponent = (title, address, noOfOrders, noOfPeople) => {
  return (
    <>
      <Box alignItems="flex-start" flexDirection={'row'}>
        <Image
          alt="productImg"
          resizeMode={'stretch'}
          borderRadius={10}
          width={100}
          height={120}
          source={{uri: IMAGES.dummy2}}
        />

        <Box mx={8} marginVertical={5}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{address}</Text>
          <Text style={styles.orders}>{noOfOrders}</Text>
          <View style={styles.icon}>
            <ICON
              type={ICONS.usersType}
              name={ICONS.users}
              size={18}
              color={COLORS.black}
            />
            <Text>{noOfPeople}</Text>
          </View>
        </Box>
        <RightArrowBtn
          my={12}
          iconType={ICONS.rightType}
          iconName={ICONS.right}
        />
      </Box>
    </>
  );
};

const GlobalStore = ({navigation}) => {
  const [search, setSearch] = useState();
  const {storeDatebyLocation,loading} = useSelector((state) => state.getStoreReducers);
  const dispatch = useDispatch();
  React.useLayoutEffect(() => {
    dispatch(getStoreDatabyLocation("500090"));
  },[])

  return (
    <ScrollView style={styles.root}>
      <HeaderContent navigation={navigation} />
      <View style={{alignItems: 'center'}}>
        <SearchBox
          value={search}
          onChangeText={val => setSearch(val)}
          onSearch={() => alert('Searchnow')}
          width={'330'}
        />
      </View>

      <FlatList
        style={styles.container}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={storeDatebyLocation && storeDatebyLocation.content && storeDatebyLocation.content[0].orderItems}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => (
          <HorizontalCard
            containerStyle={{
              borderRadius: 10,
              marginBottom: normalize(10),
              height: normalize(140),
            }}
            customWidth={'100%'}
            leftCardWidth={'75%'}
            rightCardWidth={'25%'}
            cardColor={'white'}
            rightWidth={100}
            leftWidth={100}
            leftComponent={leftComponent(
              item.itemInfo,
              item.address,
              item.noOfOrders,
              item.noOfPeople,
            )}
            onPress={() =>
              navigation.navigate('ProductDetails')
            }></HorizontalCard>
        )}
        ListFooterComponent={() => (
          <View style={{marginBottom: HP('50%')}}></View>
        )}
      />
    </ScrollView>
  );
};

export default GlobalStore;
