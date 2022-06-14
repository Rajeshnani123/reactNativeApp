import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList,Alert} from 'react-native';
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
import { Box, Button, Image} from 'native-base';
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
import {useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getProductbyId,
  getProducts,
} from '../../../redux/ProductResource/ActionCreators/getProductAction';
import {addProduct} from '../../../redux/ProductResource/ActionCreators/postProductAction';
import {addCartDetails} from '../../../redux/cartManagement/ActionCreators/postCartAction';
import UserStack from '../../../navigations/UserStack';
import { LOCAL_CART_MANAGEMENT } from '../../../redux/cartManagement/ActionType';

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
          {/* <CartHeader navigation={navigation} onPress={() => alert('Cart')} /> */}
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
  productImage,
  id,
  data,
  item,
  dispatch,
  navigation,
) => {
  const addCartHandler = () => {
    const Body = {
      id: data.id,
      itemId: id,
      qty: 0,
      userId: String(data.id),
    };
    dispatch(addCartDetails(Body));
    Alert.alert(`Product ${title} is added`,`Please check my cart`)
  };

  const buyHandler = () => {
    dispatch({type: LOCAL_CART_MANAGEMENT, storeProducts: [item],nonStoreProducts: {}});
    navigation.navigate("Checkout")
  }
  return (
    <>
      <Box alignItems="flex-start" flexDirection={'row'}>
        <Image
          alt="productImg"
          resizeMode={'stretch'}
          my={2}
          width={120}
          height={150}
          source={{uri: productImage ? productImage : IMAGES.dummy1}}
        />

        <Box mx={3} my={3}>
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
                width: normalize(70),
                height: normalize(45),
                borderRadius: normalize(5),
                alignItems: 'center',
              }}
              onPress={() => buyHandler()}>
              <Text
                style={{
                  fontSize: normalize(18),
                  color: '#000',
                  marginTop: normalize(10),
                }}>
                Buy
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.primary,
                width: normalize(70),
                height: normalize(45),
                borderRadius: normalize(5),
                alignItems: 'center',
                marginLeft: normalize(15),
              }}
              onPress={addCartHandler}>
              <View style={{marginTop: normalize(10)}}>
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
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const {productLoading, allProducts, product, statusCode} = useSelector(
    state => state.getProductReducers,
  );
  const {data} = useSelector(state => state.getUserReducers);

  React.useLayoutEffect(() => {
    dispatch(getProducts());
  }, [isFocused]);

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
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 5,
              justifyContent: 'space-between',
            }}>
            <SearchBox
              value={search}
              onChangeText={val => setSearch(val)}
              onSearch={() => alert('Searchnow')}
              width={'80%'}
            />

            <ActionBtn
              style={{marginTop: normalize(13)}}
              iconType={ICONS.filterType}
              iconName={ICONS.filter}
              onPress={() => alert('Filter')}
              color={'#000'}
            />
          </View>
          <FlatList
            nestedScrollEnabled
            overScrollMode="never"
            showsVerticalScrollIndicator={false}
            numColumns={1}
            data={allProducts}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => (
              <HorizontalCard
                containerStyle={{
                  borderRadius: 10,
                  marginBottom: normalize(12),

                  // marginHorizontal: normalize(1),
                }}
                customWidth={'100%'}
                customHeight={200}
                leftCardWidth={'75%'}
                rightCardWidth={'25%'}
                cardColor={'white'}
                rightWidth={100}
                leftWidth={100}
                leftComponent={leftComponent(
                  item.product.productName,
                  item.product.details,
                  item.price,
                  item.prevprice,
                  item.discount,
                  item.productImage,
                  item.id,
                  data,
                  item,
                  dispatch,
                  navigation,
                )}
                onPress={() => {
                  dispatch(getProductbyId(item.id));
                  navigation.navigate('ProductDetails');
                }}></HorizontalCard>
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
    fontSize: normalize(20),
    color: '#000',
  },
  prevprice: {
    fontSize: normalize(14),
    marginTop: normalize(8),
    marginLeft: normalize(10),
  },
  discount: {
    marginTop: normalize(8),
    color: '#ffb43a',
    marginLeft: normalize(10),
    fontSize: normalize(14),
  },
  subName: {
    marginTop: normalize(8),
    fontSize: normalize(14),
  },
});
