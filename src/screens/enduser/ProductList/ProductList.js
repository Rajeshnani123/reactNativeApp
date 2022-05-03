import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {PLDATA} from '../../../constants/PLJASON';
import {
  IMAGES,
  FONTS,
  COLORS,
  ICONS,
  HP,
  SIZES,
  ICON,
} from '../../../constants';
import {Box, Button, Image} from 'native-base';
// import ProductDetails from '../ProductDetails';
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
import {Circle} from 'react-native-svg';

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

const leftComponent = (
  title,
  subtitle,
  price,
  prevprice,
  discount,
  barganing,
) => {
  return (
    <>
      <Box alignItems="flex-start" flexDirection={'row'}>
        <Image
          alt="productImg"
          resizeMode={'stretch'}
          my={2}
          width={120}
          height={140}
          source={{uri: IMAGES.dummy1}}
        />

        <Box mx={3} my={2}>
          <Text style={styles.productName}>{title}</Text>
          <Text style={styles.subName}>{subtitle}</Text>
          <Box
            width={110}
            flexDirection={'row'}
            justifyContent={'space-between'}
            my={2}>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.prevprice}>{prevprice}</Text>
            <Text style={styles.discount}>{discount}</Text>
          </Box>

          <View style={{flexDirection: 'row', marginTop: 10}}>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.primary,
                width: normalize(85),
                height: normalize(50),
                borderRadius: normalize(5),
                alignItems: 'center',
              }}
              onPress={() => alert('btn')}>
              <Text style={{fontSize:normalize(18),color:'#000', marginTop: 12}}>
                Buy
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.primary,
                width: normalize(85),
                height: normalize(50),
                borderRadius: normalize(5),
                alignItems: 'center',
                marginLeft:normalize(15)
              }}
              onPress={() => alert('btn')}>
              <View style={{marginTop:normalize(13)}}>
              <ICON
                type={ICONS.cartType}
                name={ICONS.cart}
                size={24}
                color={COLORS.black}
                
              />
              </View>
            </TouchableOpacity>
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
        <View style={styles.container}>
          <View flexDirection={'row'}>
            <SearchBox
              value={search}
              onChangeText={val => setSearch(val)}
              onSearch={() => alert('Searchnow')}
              width={'80%'}
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
                containerStyle={{
                  borderRadius: 10,
                  marginBottom: normalize(21),

                  // marginHorizontal: normalize(1),
                }}
                customWidth={'100%'}
                customHeight={214}
                leftCardWidth={'75%'}
                rightCardWidth={'25%'}
                cardColor={'white'}
                rightWidth={100}
                leftWidth={100}
                leftComponent={leftComponent(
                  item.title,
                  item.subtitle,
                  item.price,
                  item.prevprice,
                  item.discount,
                )}
                onPress={() =>
                  navigation.navigate('ProductDetails')
                }></HorizontalCard>
            )}
            ListFooterComponent={() => (
              <View style={{marginBottom: HP('50%')}}></View>
            )}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: normalize(15),
    marginVertical: normalize(5),
  },
  root: {
    backgroundColor: '#FFF7EA',
  },
  head: {
    height: normalize(50),
    backgroundColor: '#FFB43A',
    flexDirection: 'row',
  },
  img: {
    height: normalize(160),
    width: normalize(160),
    borderRadius: 160 / 2,
    marginHorizontal: normalize(95),
    marginVertical: normalize(25),
  },
  leftDescription: {
    marginVertical: normalize(10),
    marginLeft: normalize(70),
  },
  rightDescription: {
    marginLeft: normalize(30),
    marginVertical: normalize(10),
  },
  button: {
    height: normalize(45),
    backgroundColor: '#FFB43A',
    width: 220,
    marginHorizontal: normalize(60),
    alignItems: 'center',
    marginVertical: normalize(30),
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#000',
    marginVertical: normalize(10),
  },
  productName: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,

    color: '#000000',
  },
  price: {
    fontSize: normalize(18),
    color: '#000',
  },
  prevprice: {
    fontSize: normalize(14),
    marginTop: normalize(5),
    marginLeft: normalize(15),
  },
  discount: {
    marginTop: normalize(5),
    color: '#ffb43a',
    marginLeft: normalize(15),
    fontSize: normalize(14),
  },
  subName:{
    marginTop:normalize(5)
  }
});
