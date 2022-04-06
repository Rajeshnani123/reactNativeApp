import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import style from '../style';
import Icon from 'react-native-vector-icons';
import plateform from '../../../src/utils/Platform';
import prodetails from '../../../src/constants/prodetails';
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
import {COLORS, FONTS, SIZES} from '../../constants';
import styles from '../../components/basics/styles';

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
          }}>
          Compare
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const ProductDetails = ({navigation}) => {
  const [search, setSearch] = useState();

  const Data = {
    name: 'Product name',
    qty: 'Quantity',
    item: 'ItemType',
    retail: 'Retailer',
    price: 'Price',
  };

  return (
    <View>
      <ScrollView>
        <HeaderContent navigation={navigation} />

        <View style={{flexDirection: 'row'}}>
          <ReviewsComponent />
          <CompareComponent />
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
            source={require('../../Assets/Images/prodec.png')}
            style={{
              height: 230,
              width: 300,
              marginHorizontal: 30,
              marginVertical: 20,
            }}
          />
        </View>
        <View style={{marginHorizontal: 50}}>
          <Text style={{marginVertical: 10}}>{Data.name}</Text>
          <Text style={{marginVertical: 10}}>{Data.qty}</Text>
          <Text style={{marginVertical: 10}}>{Data.retail}</Text>
          <Text style={{marginVertical: 10}}>{Data.item}</Text>
          <Text style={{marginVertical: 10}}>{Data.price}</Text>
        </View>
        
        <View style={{marginLeft: 20, marginVertical: 20}}>
        <Text style={FONTS.h2}>Reviews</Text>
          {Review.map(item => (
            <View
              style={{
                marginTop:20,
                flexDirection: 'row',
                marginVertical: 10,
                marginRight:20
              }}>
              <Image source={item.image} />
              <View style={{marginRight: 60}}>
                <Text style={{marginLeft: 20,fontWeight:'bold'}} >{item.name}</Text>
                <Text style={{marginLeft: 20,fontSize:14,marginTop:5}}>{item.desc}</Text>
                <Text style={{marginLeft: 20,marginTop:5}}>{item.rating}</Text>
                <Text style={{marginLeft:180,fontSize:12}}>{item.time}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;
