import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {GLOBALDATA} from '../../../constants/GLOBALJSON';
import {IMAGES, FONTS, COLORS, ICONS, HP} from '../../../constants';
import {Box, Button, Image} from 'native-base';
import style from '../../style';

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
          <CartHeader navigation={navigation} onPress={() => alert('Cart')} />
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

        <Box mx={5} marginVertical={5}>
          <Text style={{color: COLORS.black, ...FONTS.h3}}>{title}</Text>
          <Text style={{color: COLORS.gray, ...FONTS.h4}}>{address}</Text>
          <Text style={{color: COLORS.black, ...FONTS.h4}}>{noOfOrders}</Text>
          <Text style={{color: COLORS.black, ...FONTS.h4}}>{noOfPeople}</Text>
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

  return (
    <>
      <HeaderContent navigation={navigation} />
      <View flexDirection={'row'} style={style.container}>
        <SearchBox
          value={search}
          onChangeText={val => setSearch(val)}
          onSearch={() => alert('Searchnow')}
        />
     </View>

      <FlatList
      style={style.container}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={GLOBALDATA}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => (
          <HorizontalCard
            containerStyle={{borderRadius: 10, marginBottom: normalize(10)}}
            customWidth={'100%'}
            leftCardWidth={'75%'}
            rightCardWidth={'25%'}
            cardColor={'white'}
            rightWidth={100}
            leftWidth={100}
            leftComponent={leftComponent(
              item.title,
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
      
    </>
    
  );
};

export default GlobalStore;

