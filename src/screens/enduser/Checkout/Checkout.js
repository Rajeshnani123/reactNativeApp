import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ICON from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IMAGES, FONTS, COLORS, ICONS, WP,HP, SIZES} from '../../../constants';
import {Box, Button, Image} from 'native-base';
import styles from './styles';
import CheckBox from '@react-native-community/checkbox';
import DropDown from '../../../components/DropDown';
import {
  Header,
  NotificationHeader,
  CartHeader,
  SearchBox,
  MenuHeader,
  Btn,
} from '../../../components';
import {normalize} from '../../../utils/Platform';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../../../redux/cartManagement/ActionCreators/postCartAction';
const HeaderContent = ({navigation}) => {
  return (
    <Header
      leftComponent={<MenuHeader navigation={navigation} />}
      title="Checkout"
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
const Rating = () => {
  return (
    <Box style={styles.ratingContainer} flexDirection={'row'} mx={7}>
      <Icon
        type={ICONS.AwesomeStar}
        name={ICONS.star}
        size={22}
        color={COLORS.primary}

      />
      <Icon
        type={ICONS.AwesomeStar}
         name={ICONS.star}
        size={22}
        color={COLORS.primary}
      />
      <Icon
        type={ICONS.AwesomeStar}
        name={ICONS.star}
        size={22}
        color={COLORS.primary}
      />
      <Icon
        type={ICONS.AwesomeStar}
        name={ICONS.star}
        size={22}
        color={COLORS.primary}
      />
      <Icon
        type={ICONS.AwesomeStar}
        name={ICONS.emptyStar}
        size={22}
        color={COLORS.primary}
      />
    </Box>
  );
};

const Checkout = ({navigation}) => {
  const [search, setSearch] = useState();
  const [isSelected, setSelection] = useState(false);
  const [totalprice,setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const {userId} = useSelector((state) => state.getUserReducers.data);
  const {storeProducts,nonStoreProducts,primary,secondary} = useSelector(state => state.getCardReducers);

  const leftComponent = (
    title,
    packs,
    company,
    prevprice,
    currentprice,
    discount,
  ) => {
    return (
      <>
        <Box alignItems="flex-start" flexDirection={'row'}>
          <CheckBox value={isSelected} onValueChange={setSelection} />

          <Image
            alt="productImg"
            resizeMode={'stretch'}
            borderRadius={10}
            width={62}
            height={84}
            source={{uri: IMAGES.dummy1}}
          />
          <Box mx={5}>
            <Box flexDirection={'row'}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.packs}>{packs}</Text>
            </Box>

            <Text style={styles.company}>{company}</Text>
            <Box flexDirection={'row'}>
              <Text style={styles.prevprice}>{prevprice}</Text>
              <Text style={styles.currentprice}>{currentprice}</Text>
              <View style={styles.discountview}>
                <Text style={styles.discount}>{discount}</Text>
              </View>
            </Box>
          </Box>
        </Box>
        <Box flexDirection={'row'} mx={10} my={3}>
          <TouchableOpacity style={styles.minus}>
            <Image
              source={require('../../../assets/Images/minus.png')}
              mx={4}
              my={3}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: normalize(15),
              marginTop: normalize(15),
              color: '#000',
            }}>
            2
          </Text>
          <TouchableOpacity mx={3} style={styles.plus}>
            <Image
              source={require('../../../assets/Images/plus.png')}
              mx={4}
              my={3}
            />
          </TouchableOpacity>
          <TouchableOpacity mx={3} style={styles.remove}>
            <Text style={styles.rmtext}>Remove</Text>
          </TouchableOpacity>
        </Box>
        <View flexDirection={'row'}>
          <TouchableOpacity style={styles.Btn}>
            <Text style={styles.DO}>Discount & Offers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.layer}>
            <Image
              source={require('../../../assets/Images/layer.png')}
              mx={4}
              my={2}
            />
          </TouchableOpacity>
        </View>
      </>
    );
  };

  
  const finalPlaceOrder = () =>{
    const Body = {
      alternateNumber: secondary.secondaryMobileNumber,
      billingAddress: primary.primaryAddress,
      billingLocation: primary.primaryPincode,
      contactNumber: primary.primaryMobileNumber,
      contactPersonName: primary.primaryName,
      delivaryAddress: secondary.secondaryAddress,
      delivaryLocation: secondary.secondaryPincode,
      details: primary.primaryAddress,
      discount: 0,
      dueAmount: 0,
      invoiceDiscountL: 0,
      invoiceIds: 0,
      invoiceInfo: 0,
      orderStatus: "CREATED",
      paymentStatus: "PAID",
      serviceCharge: 0,
      userId,
    }

    if(storeProducts.length > 0){
      let orderItems = [];
      for(let i=0; i< storeProducts.length; i++){
        console.log("entering");
        let order = {
          amount: 0,
          discount: 0,
          invoiceIds: "string",
          invoiceInfo: "string",
          itemId: "string",
          itemInfo: "string",
          order:JSON.stringify(storeProducts[i]),
          orderStatus: "CREATED",
          paymentStatus: "PAID",
          qty: 0,
          serviceCharge: 0,
          storeId: userId
        }
        orderItems.push(order);
      }
      const Body1={
        ...Body,
        isFromGlobalStore: true,
        orderItems,
      }
      dispatch(placeOrder(Body1));
      
    }

    if(nonStoreProducts.length > 0){
      let orderItems = [];
      for(let i=0; i< nonStoreProducts.length; i++){
        console.log("entering");
        let order = {
          amount: 0,
          discount: 0,
          invoiceIds: "string",
          invoiceInfo: "string",
          itemId: "string",
          itemInfo: "string",
          order:JSON.stringify(nonStoreProducts[i]),
          orderStatus: "CREATED",
          paymentStatus: "PAID",
          qty: 0,
          serviceCharge: 0,
          storeId: userId
        }
        orderItems.push(order);
      }
      const Body2={
        ...Body,
        isFromGlobalStore: false,
        orderItems,
      }
      dispatch(placeOrder(Body2));
    }
    navigation.navigate("Success");
  }

  React.useEffect(() => {
    if(storeProducts){
      storeProducts.map((data) => {
        if(data.price){
          setTotalPrice(totalprice + parseFloat(data.price))
        }
      })
    }
  },[])

  const StorerenderItem = ({item}) => {
    return (
      <View style={styles.card1}>
      <View>
        <Box mx={7} my={5}>
          <Text style={styles.productname}>{item && item.product && item.product.productName}</Text>
          <Text style={styles.sub}>{item && item.product && item.product.productCategories}</Text>
        </Box>

        <Box flexDirection={'row'} mx={7}>
          <Text style={styles.currentprice}>Rs.{item && item.price}</Text>
          <Text style={styles.prevprice}>{item && item.price}</Text>
        </Box>

        <Rating/>

        <Text style={styles.delivery}>
          Delivery in 6-10 days| shipping fee Rs 40
        </Text>
      </View>
      <View>
        <Image
          source={item && item.productImage ? {uri: item.productImage} :require('../../../assets/Images/Product.jpg')}
          height={100}
          width={130}
          my={5}
        />
        <Box style={styles.qtybox}>
          <Text style={styles.qtytext}>Qty {item && item.qty}</Text>
        </Box>
      </View>
    </View>
    )
  }
  return (
    <>
      <HeaderContent navigation={navigation} />
      <ScrollView style={styles.root}>
        <View style={styles.container}>
          <View flexDirection={'row'}>
            <SearchBox
              value={search}
              onChangeText={val => setSearch(val)}
              onSearch={() => alert('Searchnow')}
              marginTop={normalize(6)}
              ml={0}
            />
          </View>
          <View style={styles.Btnview}>
            <Btn
              height={normalize(50)}
              width={WP('93%')}
              colorScheme={'primary'}
              value={'Edit Address'}
              onPress={() => navigation.navigate('EditAddress')}
            />
          </View>

         {storeProducts && storeProducts.length>0 && <FlatList 
          data={storeProducts}
          keyExtractor={item => `${item.id}`}
          renderItem={StorerenderItem}
          />}

         {nonStoreProducts && nonStoreProducts.length > 0 && <FlatList 
          data={nonStoreProducts}
          keyExtractor={item => `${item.id}`}
          renderItem={StorerenderItem}
          />}
          <View style={styles.card2}>
            <Box mx={7} my={6}>
              <Text style={styles.pricedetails}>Price Details</Text>

              <View style={styles.names}>
                <Box>
                  <Text style={styles.txtcolor}>Price (1 item)</Text>
                  <Text style={styles.txtcolor}>Discount</Text>
                  <Text style={styles.txtcolor}>Delivery Charge</Text>
                </Box>
                <Box mx={90}>
                  <Text style={styles.txtcolor}>Rs. {totalprice}</Text>
                  <Text style={styles.txtcolor}>Rs. 199</Text>
                  <Text style={styles.txtcolor}>Rs. 40</Text>
                </Box>
              </View>

              <Box flexDirection={'row'} mx={3}>
                <Text style={{fontSize: 16, color: '#000', marginTop: 5}}>
                  Total Amount
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#000',
                    marginTop: 5,
                    marginLeft: normalize(90),
                  }}>
                  Rs.499
                </Text>
              </Box>
            </Box>
          </View>

          <View style={styles.card2}>
            <Box mx={7} my={4}>
              <Text style={styles.pricedetails}>Offers</Text>
              <Box mx={3} my={5} flexDirection={'row'}>
                <ICON
                  type={ICONS.arrowRightType}
                  name={ICONS.arrowRight}
                  size={16}
                  color={COLORS.black}
                />
                <Text
                  style={{
                    fontSize: 12,
                    marginLeft: normalize(10),
                    color: '#000',
                    width: '90%',
                  }}>
                  Bank offer 10% discount on ICICI Bank cards, upto 300Rs on
                  orders of Rs1750 and above
                </Text>
                <ICON
                  type={ICONS.chevronType}
                  name={ICONS.chevronright}
                  size={16}
                  color={COLORS.black}
                />
              </Box>
              <Box mx={3} flexDirection={'row'}>
                <ICON
                  type={ICONS.arrowRightType}
                  name={ICONS.arrowRight}
                  size={16}
                  color={COLORS.black}
                />
                <Text
                  style={{
                    fontSize: 12,
                    marginLeft: normalize(10),
                    color: '#000',
                    width: '90%',
                  }}>
                  Bank offer 10% discount on ICICI Bank cards, upto 300Rs on
                  orders of Rs1750 and above
                </Text>
                <ICON
                  type={ICONS.chevronType}
                  name={ICONS.chevronright}
                  size={16}
                  color={COLORS.black}
                />
              </Box>
            </Box>
          </View>
          <View style={styles.card2}>
            <Box mx={7} my={4}>
              <Text style={styles.pricedetails}>Coupens & Points</Text>
              <Box mx={3} my={5} flexDirection={'row'}>
                <ICON
                  type={ICONS.arrowRightType}
                  name={ICONS.arrowRight}
                  size={16}
                  color={COLORS.black}
                />
                <Text
                  style={{
                    fontSize: 12,
                    marginLeft: normalize(10),
                    color: '#000',
                    width: '90%',
                  }}>
                  Bank offer 10% discount on ICICI Bank cards, upto 300Rs on
                  orders of Rs1750 and above
                </Text>
                <ICON
                  type={ICONS.chevronType}
                  name={ICONS.chevronright}
                  size={16}
                  color={COLORS.black}
                />
              </Box>
              <Box mx={3} flexDirection={'row'}>
                <ICON
                  type={ICONS.arrowRightType}
                  name={ICONS.arrowRight}
                  size={16}
                  color={COLORS.black}
                />
                <Text
                  style={{
                    fontSize: 12,
                    marginLeft: normalize(10),
                    color: '#000',
                    width: '90%',
                  }}>
                  Bank offer 10% discount on ICICI Bank cards, upto 300Rs on
                  orders of Rs1750 and above
                </Text>
                <ICON
                  type={ICONS.chevronType}
                  name={ICONS.chevronright}
                  size={16}
                  color={COLORS.black}
                />
              </Box>
            </Box>
          </View>
          <Box style={styles.ftr}>
            <View style={styles.pricebox}>
              <Text style={{color: '#000', fontSize: 18}}>Rs.499</Text>
              <Text style={{color: '#000', fontSize: 12}}>
                View all products
              </Text>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 18,
                  marginLeft: normalize(23),
                  marginTop: normalize(12),
                }}
                onPress={finalPlaceOrder}>
                Continue
              </Text>
            </TouchableOpacity>
          </Box>
        </View>
      </ScrollView>
    </>
  );
};

export default Checkout;
