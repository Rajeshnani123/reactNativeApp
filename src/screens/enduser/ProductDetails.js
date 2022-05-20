import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import style from '../style';
import Icon from 'react-native-vector-icons';
import plateform, {normalize} from '../../../src/utils/Platform';
import {Review} from '../enduser/Review';
import {
  Header,
  BackHeader,
  NotificationHeader,
  CartHeader,
  SearchBox,
  Title,
  Btn,
  HorizontalCard,
  ActionBtn,
  CustomModal,
  constants,
} from '../../components';
import {COLORS, FONTS, SIZES, ICON, ICONS} from '../../constants';
import styles from '../../components/basics/styles';
import {useSelector} from 'react-redux';
import CompareProduct from './CompareProduct/CompareProduct'

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
          {/* <CartHeader navigation={navigation} onPress={() => alert('Cart')} /> */}
        </View>
      }
    />
  );
};

const leftComponent = (title, subTitle, qty) => {
  return (
    <>
      <Box alignItems="flex-start" flexDirection={'row'}>
        <Image
          alt="productImg"
          resizeMode={'stretch'}
          borderRadius={10}
          width={100}
          height={120}
          source={{uri: IMAGES.dummy}}
        />
        <Box mx={5}>
          <Text style={FONTS.h3}>{title}</Text>
          <Text style={{color: COLORS.gray, ...FONTS.h4}}>{subTitle}</Text>
          <Text style={{color: COLORS.gray, ...FONTS.h4}}>Qty {qty}</Text>
        </Box>
      </Box>
    </>
  );
};

const rightComponent = () => {
  return (
    <View mt={-2}>
      <ActionBtn
        iconType={ICONS.noteType}
        iconName={ICONS.note}
        onPress={() => alert('btn')}
      />
      <ActionBtn
        iconType={ICONS.deleteType}
        iconName={ICONS.delete}
        onPress={() => alert('btn')}
      />
    </View>
  );
};

const ReviewsComponent = () => {
  return (
    <View style={{width: 180}}>
      <TouchableOpacity
        style={{
          borderColor: '#000',
          borderBottomWidth: 2,
          borderBottomColor: '#ffb43a',
          height: 45,
        }}>
        <Text
          style={{
            marginHorizontal: 50,
            fontFamily: 'Poppins',
            fontWeight: '600',
            fontSize: 18,
            marginVertical: 8,
            color: '#000',
          }}>
          Reviews
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const CompareComponent = () => {

  return (
    <View style={{width: 180}}>
      <TouchableOpacity>
        <Text
          style={{
            marginHorizontal: 40,
            fontFamily: 'Poppins',
            fontWeight: '600',
            fontSize: 18,
            marginVertical: 8,
            color: '#000',
          }}>
          Compare
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const ProductDetails = ({navigation}) => {
  const {product} = useSelector(state => state.getProductReducers);

  const Data = {
    name: 'Product name',
    qty: 'Quantity',
    item: 'ItemType',
    retail: 'Retailer',
    price: 'Price',
  };
const [ref, setRef] = useState(null);
const [cord, setCord] = useState(null);
const handlePress = () => {
  ref.scrollTo({x:0,y:cord})
}
  return (
    <View>
      <ScrollView ref={(ref)=>{setRef(ref)}} style={{backgroundColor: '#FFF7EA'}}>
        <HeaderContent navigation={navigation} />

        <View style={{flexDirection: 'row'}}>
          <ReviewsComponent />
          {/* <CompareComponent /> */}
          <View style={{width: 180}}>
          <TouchableOpacity onPress={handlePress}>
            <Text
              style={{
                marginHorizontal: 40,
                fontFamily: 'Poppins',
                fontWeight: '600',
                fontSize: 18,
                marginVertical: 8,
                color: '#000',
              }}>
              Compare
            </Text>
          </TouchableOpacity>
        </View>
        </View>

        <Text
          style={{
            marginHorizontal: 50,
            fontFamily: 'Poppins',
            fontWeight: '600',
            fontSize: 18,
            marginVertical: 20,
            color: '#000',
          }}>
          Product Details
        </Text>
        <View>
          <Image
            source={require('../../assets/Images/prodec.png')}
            style={{
              height: 230,
              width: 300,
              marginHorizontal: 30,
              marginVertical: 20,
            }}
          />
        </View>
        <View style={{marginHorizontal: 50}}>
          <Text style={styless.defaultNames}>
            {Data.name} :{' '}
            {product[0] && product[0].product && product[0].product.productName}
          </Text>
          <Text style={styless.defaultNames}>
            {Data.qty} :{' '}
            {product[0] && product[0].availableQty && product[0].availableQty}
          </Text>
          <Text style={styless.defaultNames}>
            {Data.retail} :{' '}
            {product[0] &&
              product[0].product &&
              product[0].product.store &&
              product[0].product.store.storeName}
          </Text>
          <Text style={styless.defaultNames}>
            {Data.item} :{' '}
            {product[0] && product[0].variant && product[0].variant}
          </Text>
          <Text style={styless.defaultNames}>
            {Data.price} : {product[0] && product[0].price && product[0].price}
          </Text>
        </View>

        <View style={{marginLeft: 20, marginVertical: 24}}>
          <Text
            style={{
              color: '#000',
              fontSize: normalize(20),
              marginLeft: normalize(10),
              fontWeight: 'bold',
            }}>
            Reviews
          </Text>
          {Review.map((item, index) => (
            <View
              key={index}
              style={{
                marginTop: 30,
                flexDirection: 'row',
                marginVertical: 10,
                marginRight: 20,
              }}>
              <Image source={item.image} />
              <View style={{marginRight: 60}}>
                <Text style={styless.name}>{item.name}</Text>
                <Text style={styless.desc}>{item.desc}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      marginLeft: normalize(18),
                      marginTop: normalize(10),
                      flexDirection: 'row',
                    }}>
                    <ICON
                      type={ICONS.filledstarType}
                      name={ICONS.filledstar}
                      size={18}
                      color={COLORS.green}
                    />
                    <ICON
                      type={ICONS.filledstarType}
                      name={ICONS.filledstar}
                      size={18}
                      color={COLORS.green}
                    />
                    <ICON
                      type={ICONS.filledstarType}
                      name={ICONS.filledstar}
                      size={18}
                      color={COLORS.green}
                    />
                    <ICON
                      type={ICONS.filledstarType}
                      name={ICONS.filledstar}
                      size={18}
                      color={COLORS.green}
                    />
                    <ICON
                      type={ICONS.outlinedstarType}
                      name={ICONS.outlinedstar}
                      size={18}
                      color={COLORS.green}
                    />
                  </View>
                  <Text style={styless.time}>{item.time}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
        <CompareProduct setCord={setCord}/>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;

const styless = StyleSheet.create({
  defaultNames: {
    marginVertical: 10,
    color: '#000',
  },
  name: {
    marginLeft: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  desc: {
    marginLeft: 20,
    fontSize: 13,
    marginTop: 5,
    color: '#000',
  },
  rating: {
    marginLeft: 20,
    marginTop: 10,
    color: 'green',
  },
  time: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 12,
  },

});
