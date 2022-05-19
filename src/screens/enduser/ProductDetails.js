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
const handlePress = () => {
 console.log(ref)
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
          {Review.map(item => (
            <View
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
        <View onLayout={(event)=>{const layout = event.nativeEvent.layout
          setRef(layout.y)
        }} style={styless.compareContainer}>
          <Text
            style={styless.similarText}>
            Similar products to compare
          </Text>
          <View style={{flexDirection:'row'}}>
            <View style={styless.first}>
              <View style={styless.compareParameter}>
                  <Text style={styless.productNameText}>Product name</Text>
                  <Text style={styless.productQtyText}>Qty</Text>
                  <Text style={styless.productPriceText}>Price</Text>
              </View>
            </View>
            <View style={styless.second}>
                <View style={styless.imgContainer}>
                <Image
                  source={require('../../assets/Images/fotune.jpg')}
                  style={{
                    height: 189,
                    width: 166,
                    resizeMode: 'contain',
                  }}
                />
                </View>
                <View style={styless.productDetails}>
                  <Text style={styless.fortune}>Fortune Oil</Text>
                  <Text style={styless.qty}>10</Text>
                  <Text style={styless.price}>999/-</Text>
                </View>
            </View>
            <View style={styless.third}>
                <View style={styless.imgContainer}>
                  <Image
                    source={require('../../assets/Images/fotune.jpg')}
                    style={{
                      height: 189,
                      width: 166,
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <View style={styless.productDetails}>
                  <Text style={styless.fortune}>Fortune Oil</Text>
                  <Text style={styless.qty}>10</Text>
                  <Text style={styless.price}>999/-</Text>
                </View>
            </View>
          </View>
        </View>
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
  compareContainer:{
    width: 428,
    marginVertical: 24,
  },
  similarText:{
    marginLeft:20,
    marginBottom:22,
    width: 223,
    height: 23,
    fontFamily: "Poppins",
    fontSize: 15,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0.3,
    textAlign: "left",
    color: "#000000"
  },

  compareParameter:{
    height: 101,
    marginTop:189,
    paddingLeft:8,
    backgroundColor: "rgba(255, 180, 58, 0.3)"
  },
  imgContainer:{
    width: 166,
    height: 189,
  },
  first:{
    width:102,
  },
  second:{
    width:166,
    height:290,
  },
  third:{
    marginLeft:6,
    width:166,
    height:290,
  },
  productDetails:{
    width:166,
    height:101,
    alignItems:"center",
    backgroundColor: "#ffb43a"
  },
  productNameText:{
    marginTop:12,
    width: 86,
    height: 18,
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000"
  },
  productQtyText:{
    marginTop:9,
    width: 21,
    height: 18,
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000"
  },
  productPriceText:{
    marginTop:9,
    width: 30,
    height: 18,
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000"
  },
  fortune:{
    marginTop:12,
    width: 73,
    height: 21,
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000"
  },
  qty:{
    marginTop:5,
    width: 14,
    height: 21,
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000"
  },
  price:{
    marginTop:7,
    width: 41,
    height: 21,
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#000000"
  }
});
