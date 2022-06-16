import {View, Text, ScrollView, Button, Center} from 'native-base';
import React from 'react';
import {Btn, TextInput, FormSelect} from './../../../components';
import {WP, FONTS, COLORS, ICON, ICONS} from './../../../constants';
import styles from './../../../components/basics/styles';
import {TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addProduct, fetchOne} from '../../../redux/ProductResource/ActionCreators/postProductAction';
import { launchImageLibrary } from 'react-native-image-picker';
import { POST_PRODUCTS_RESET } from '../../../redux/ProductResource/ActionType';
import { getProducts } from '../../../redux/ProductResource/ActionCreators/getProductAction';
export const AddProduct = ({setIsModelOpen}) => {
  const catagories = [
    {title: 'Breakfast', value: 'Breakfast'},
    {title: 'Cereal', value: 'Cereal'},
    {title: 'Noodles', value: 'Noodles'},
    {title: 'Pasta', value: 'Pasta'},
  ];
  const subCatagories = [
    {title: 'Chocolates', value: 'Chocolates'},
    {title: 'Cookies', value: 'Cookies'},
    {title: 'Biscuits', value: 'Biscuits'},
    {title: 'Waffle', value: 'Waffle'},
  ];
  const Quantity = [
    {title: '1', value: 'one'},
    {title: '2', value: 'two'},
    {title: '3', value: 'three'},
    {title: '4', value: 'four'},
    {title: '5', value: 'five'},
  ];
  const Brands = [
    {title: 'Britannia', value: 'Britannia'},
    {title: 'Karachi', value: 'Karachi'},
    {title: 'Oreo', value: 'Oreo'},
    {title: 'Bauli moonFils', value: 'Bauli moonFils'},
  ];
  const [cat, setCat] = React.useState('');
  const [subCat, setSubCat] = React.useState('');
  const [productName, setProductName] = React.useState('');
  const [productImg, setProductImg] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [Qty, setQty] = React.useState('');
  const [brand, setBrand] = React.useState('');
  const dispatch = useDispatch();
  const {imageURl,loading,statusCode} = useSelector((state) => state.postProductReducers);
  const AddToStore = () => {
    const Body = {
      brand: brand,
      details: 'string',
      invoiceDetails: 'string',
      productCategories: cat,
      productName: productName,
      productSlug: productName,
      productVariants:[{ 
        availableQty: 27,
        isBestSale: true,
        isFeatured: true,
        isUnlimited: true,
        maxQty: 0,
        minQty: 0,
        price: Number(price),
        productImage: imageURl,
        sku: description,
        variant: subCat,
      }],
      seller: 1
    }
    dispatch(addProduct(Body));
  };

  React.useEffect(() => {
    if(!loading && statusCode === 200){
      dispatch(getProducts());
      setIsModelOpen(false);
      dispatch({type: POST_PRODUCTS_RESET});
    }
  },[loading])


  const imageUpload = () => {
    try{
      launchImageLibrary({
        mediaType:"photo",
        includeBase64: true,
        quality: 0.5,
      },(response) => {
        if(response && response.assets && response.assets.length >0 &&
          response.assets[0] && response.assets[0].uri
          ){
            const form = new FormData();
            const file = {
              uri: response.assets[0].uri,
              type: response.assets[0].type,
              name: response.assets[0].fileName
            }
            form.append('files[0]',file);
            fetchOne(form,dispatch)();
          }
      })
    }catch(error){
      console.log(error);
    }
  }

  return (
    <ScrollView>
      <View bg={COLORS.primaryLight} px={2} py={3}>
        <View flexDirection={'row'} mt={2} mb={2}>
          <TouchableOpacity onPress={() => setIsModelOpen(false)}>
            <ICON type={ICONS.arrowLeftType} name={ICONS.arrowLeft} size={28} />
          </TouchableOpacity>
          <View style={{marginLeft: '25%'}}>
            <Text style={FONTS.h3}>Add Product</Text>
          </View>
        </View>
        <View style={styles.modalContainer}>
          <View flexDirection={'row'} mt={2} mb={3}>
            <FormSelect
              placeHolder="Category"
              width="50%"
              options={catagories}
              setValue={setCat}
            />
            <FormSelect
              mx={-12}
              placeHolder="Sub Category"
              width="50%"
              options={subCatagories}
              setValue={setSubCat}
            />
          </View>

          <TextInput
            bg={'white'}
            placeHolder={'Product name'}
            width={'100%'}
            onChangeText={text => setProductName(text)}
          />
            <Button  style={styles.button} title="Upload Image" onPress={imageUpload} />
          <TextInput
            multiline
            bg={'white'}
            height={70}
            placeHolder={'Description'}
            width={'100%'}
            onChangeText={text => setDescription(text)}
          />
          <TextInput
            bg={'white'}
            placeHolder={'Price'}
            width={'100%'}
            type="numeric"
            onChangeText={text => setPrice(text)}
          />

          <View flexDirection={'row'} mt={2} mb={3}>
            <FormSelect
              placeHolder="Qty"
              width="50%"
              options={Quantity}
              setValue={setQty}
            />
            <FormSelect
              mx={-12}
              placeHolder="Brand"
              width="50%"
              options={Brands}
              setValue={setBrand}
            />
          </View>
          <Center>
            <Btn
              height={50}
              width={WP('43%')}
              colorScheme={'primary'}
              value={'Add'}
              onPress={AddToStore}
            />
          </Center>
        </View>
      </View>
    </ScrollView>
  );
};
