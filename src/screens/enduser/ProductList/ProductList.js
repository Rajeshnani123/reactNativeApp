import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {PLDATA} from '../../../constants/PLJASON';
import {IMAGES, FONTS, COLORS, ICONS, HP} from '../../../constants';
import {Box, Button, Image} from 'native-base';
import ProductDetails from '../ProductDetails';
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
  BrBtn,
  CustomModal,
  MenuHeader,
} from '../../../components';
import {normalize} from '../../../utils/Platform';
import {background} from 'native-base/lib/typescript/theme/styled-system';
import { Circle } from 'react-native-svg';

const HeaderContent = ({navigation}) => {
  return (
    <Header
      leftComponent={<MenuHeader navigation={navigation} />}
      title="Product List"
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

const leftComponent = (title, subtitle, price, discount, barganing) => {
  return (
    <>
      <Box alignItems="flex-start" flexDirection={'row'}>
        <Image
          alt="productImg"
          resizeMode={'stretch'}
          borderRadius={10}
          width={100}
          height={120}
          source={{uri: IMAGES.dummy1}}
        />

        <Box mx={5}>
          <Text style={{color: COLORS.black, ...FONTS.h3}}>{title}</Text>
          <Text style={{color: COLORS.gray, ...FONTS.h4}}>{subtitle}</Text>
          <Box
            width={110}
            flexDirection={'row'}
            justifyContent={'space-between'}>
            <Text style={{color: COLORS.gray, ...FONTS.h4}}>{price}</Text>
            <Text style={{color: COLORS.primary, ...FONTS.h4}}>{discount}</Text>
          </Box>
          <View flexDirection={'row'} >
          <BrBtn
              
              iconType={ICONS.exclamationType}
              iconName={ICONS.exclamation}
              onPress={() => alert('btn')}
              
            />
          <Text style={{color: COLORS.green, ...FONTS.h4}}>{barganing}</Text>
          </View>
          <View flexDirection={'row'}>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.primary,
                width: 80,
                borderRadius: 10,
                alignItems: 'center',
                marginTop: 12,
              }}
              onPress={() => alert('btn')}>
              <Text style={{color: COLORS.black, ...FONTS.h3, marginTop: 12}}>
                Buy
              </Text>
            </TouchableOpacity>
            <ActionBtn
              ml={5}
              iconType={ICONS.cartType}
              iconName={ICONS.cart}
              onPress={() => alert('btn')}
              height={'50%'}
            />
          </View>
        </Box>
      </Box>
    </>
  );
};

const ProductList = ({navigation}) => {
  const [search, setSearch] = useState();

  return (
    <>
      <HeaderContent navigation={navigation} />

      <ScrollView style={styles.root}>
        {/* <View style={styles.head}>
        <Icon
          name="arrow-left"
          size={22}
          style={{marginHorizontal: 15, marginVertical: 12, color: '#000'}}
        />
        <Icon
          name="bell"
          size={20}
          style={{marginLeft: 230, marginVertical: 15, color: '#000'}}
        />
        <Icon
          name="shopping-cart"
          size={20}
          style={{marginLeft: 20, marginVertical: 15, color: '#000'}}
        />
      </View> */}
        <View flexDirection={'row'}>
          <SearchBox
            value={search}
            onChangeText={val => setSearch(val)}
            onSearch={() => alert('Searchnow')}
            width={'70%'}
            ml={2}
          />

<ActionBtn
              ml={5}
              iconType={ICONS.filterType}
              iconName={ICONS.filter}
              onPress={() => alert('Filter')}
              color={'#000'}
            />
        </View>
        <FlatList
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={PLDATA}
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
                item.subtitle,
                item.price,
                item.discount,
                item.barganing,
              )} onPress={() => navigation.navigate('ProductDetails')}></HorizontalCard>
          )}
          ListFooterComponent={() => (
            <View style={{marginBottom: HP('50%')}}></View>
          )}
        />
      </ScrollView>
    </>
  );
};

export default ProductList;