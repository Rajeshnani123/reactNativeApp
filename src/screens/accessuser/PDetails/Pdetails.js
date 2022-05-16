import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {Center} from 'native-base';
import {
  IMAGES,
  FONTS,
  COLORS,
  ICONS,
  HP,
  SIZES,
  ICON,
  WP,
} from '../../../constants';
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
  CustomModal,
  MenuHeader,
  FormSelect,
  TextInput,
} from '../../../components';
import {normalize} from '../../../utils/Platform';
import { useSelector } from 'react-redux';

const PDetails = ({navigation}) => {
  const {product} = useSelector(state => state.getProductReducers);
  
  const catagories = [
    {title: 'Breakfast', value: 'Breakfast'},
    {title: 'Cereal', value: 'Cereal'},
    {title: 'Noodles', value: 'Noodles'},
    {title: 'Pasta', value: 'Pasta'},
    {title: 'String', value: 'string'}
  ];
  const subCatagories = [
    {title: 'Chocolates', value: 'Chocolates'},
    {title: 'Cookies', value: 'Cookies'},
    {title: 'Biscuits', value: 'Biscuits'},
    {title: 'Waffle', value: 'Waffle'},
    {title: 'String', value: 'string'}
  ];
  const Quantity = [
    {title: '1', value: '1'},
    {title: '2', value: '2'},
    {title: '3', value: '3'},
    {title: '4', value: '4'},
    {title: '5', value: '5'},
    {title: '0', value: '0'},
    {title: '27', value:"27"}
  ];
  const Brands = [
    {title: 'Britannia', value: 'Britannia'},
    {title: 'Karachi', value: 'Karachi'},
    {title: 'Oreo', value: 'Oreo'},
    {title: 'Bauli moonFils', value: 'Bauli moonFils'},
    {title: 'String', value: 'string'}
  ];

  const [Category,setCategory] = useState(product && product[0] ? product[0].product.productCategories: "");
  const [subCategory,setSubCategory] = useState(product && product[0] ? product[0].product.store.sellerCategories: "");
  const [productName,setProductName] = useState(product && product[0] ? product[0].product.productName: "");
  const [productAttribute,setProductAttribute] = useState(product && product[0] ? product[0].product.productAttribute : "");
  const [productVariant,setProductVariant] = useState(product && product[0] ? product[0].variant: "");
  const [productDetails,setProductDetails] = useState(product && product[0] ? product[0].product.details : "");
  const [price,setPrice] = useState(product && product[0] ? product[0].price : 0);
  const [brand,setBrand] = useState(product && product[0] ? product[0].product.brand : "");
  const [availQty,setAvailQty] = useState(product && product[0] ? product[0].availableQty : "");

  console.log(availQty);
  
  return (
    <>
      <ScrollView style={styles.root}>
        <View style={{flex: 1}}>
          <View
            style={{
              alignItems: 'center',
              marginTop: normalize(40),
              flexDirection: 'row',
              marginLeft: normalize(20),
            }}>
            <TouchableOpacity>
              <ICON
                type={ICONS.arrowLeftType}
                name={ICONS.arrowLeft}
                size={28}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Product Details</Text>
          </View>
          <TouchableOpacity style={styles.edit}>
            <View style={{marginTop: normalize(10)}}>
              <ICON
                type={ICONS.eidtType}
                name={ICONS.edit}
                size={24}
                color={COLORS.black}
              />
            </View>
          </TouchableOpacity>
          <View style={{marginLeft: normalize(36)}} mt={2} mb={3}>
            <FormSelect
              placeHolder={Category ? Category : "Category"}
              width="92%"
              setValue={setCategory}
              selectedValue={Category}
              options={catagories}
            />
            <FormSelect
              placeHolder=" Sub Category"
              width="92%"
              setValue={setSubCategory}
              selectedValue = {subCategory}
              options={subCatagories}
              mt={3}
            />
          </View>
        </View>
        <TextInput
          bg={'white'}
          placeHolder={'Product name'}
          value={productName}
          onChangeText={setProductName}
          width={'82%'}
          mx={10}
          mt={25}
        />
        <TextInput
          bg={'white'}
          placeHolder={'Product attributes'}
          value={productAttribute}
          onChangeText={setProductAttribute}
          width={'82%'}
          mx={10}
          mt={17}
        />
        <TextInput
          bg={'white'}
          placeHolder={'Product variants'}
          value={productVariant}
          onChangeText={setProductVariant}
          width={'82%'}
          mx={10}
          mt={17}
        />
        <TextInput
          multiline
          height={70}
          bg={'white'}
          value={productDetails}
          onChangeText={setProductDetails}
          placeHolder={'Description'}
          width={'82%'}
          mx={10}
          mt={17}
        />
        <TextInput
          bg={'white'}
          placeHolder={'price'}
          value={String(price)}
          onChangeText={setPrice}
          width={'82%'}
          mx={10}
          mt={17}
        />
        <View style={{marginLeft: normalize(36), marginTop: normalize(16)}}>
          <FormSelect placeHolder="Qty" width="92%" options={Quantity} selectedValue={String(availQty)} setValue={setAvailQty}/>
          <FormSelect
            placeHolder=" Brand"
            width="92%"
            selectedValue={brand}
            setValue={setBrand}
            options={Brands}
            mt={3}
          />
        </View>
        <TextInput
          bg={'white'}
          placeHolder={'upload product image1'}
          width={'82%'}
          mx={10}
          mt={26}
        />
        <TextInput
          bg={'white'}
          placeHolder={'upload product image2'}
          width={'82%'}
          mx={10}
          mt={17}
        />
        <TextInput
          bg={'white'}
          placeHolder={'upload product image3'}
          width={'82%'}
          mx={10}
          mt={17}
        />
        <Center>
          <Btn
            height={50}
            width={WP('43%')}
            colorScheme={'primary'}
            value={'Add'}
            mt={20}
          />
        </Center>
      </ScrollView>
    </>
  );
};

export default PDetails;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFF7EA',
  },
  head: {
    height: normalize(50),
    backgroundColor: '#FFB43A',
    flexDirection: 'row',
  },

  title: {
    fontSize: normalize(20),
    color: '#000',
    marginLeft: normalize(65),
  },

  button: {
    height: normalize(45),
    backgroundColor: '#FFB43A',
    width: normalize(220),
    marginHorizontal: normalize(60),
    alignItems: 'center',
    marginVertical: normalize(30),
    borderRadius: normalize(5),
  },
  buttonText: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#000',
    marginVertical: normalize(15),
  },
  edit: {
    width: normalize(70),
    height: normalize(45),
    borderRadius: normalize(5),
    backgroundColor: '#ffb43a',
    alignItems: 'center',
    marginVertical: normalize(20),
    marginLeft: normalize(255),
  },
  input: {
    backgroundColor: '#ffffff',
    paddingHorizontal: normalize(25),
    borderRadius: normalize(5),
    color: '#c4c4c4c4',
    marginVertical: normalize(6),
    marginTop: normalize(20),
    height: normalize(45),
    width: normalize(295),
    marginLeft: normalize(32),
  },
});
