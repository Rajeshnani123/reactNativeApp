import {View, Text, ScrollView, Button, Center} from 'native-base';
import React from 'react';
import {Btn, TextInput, FormSelect} from './../../../components';
import {WP, FONTS, COLORS, ICON, ICONS} from './../../../constants';
import styles from './../../../components/basics/styles';
import {TouchableOpacity} from 'react-native';
import { useDispatch } from 'react-redux';
import {addProduct} from "../../../redux/ProductResource/ActionCreators/postProductAction"
export const AddProduct = ({setIsModelOpen}) => {
  const catagories = [{title: "Breakfast",value:"Breakfast"},{title: "Cereal",value:"Cereal"},{title: "Noodles",value:"Noodles"},{title: "Pasta",value:"Pasta"}];
  const subCatagories = [{title: "Chocolates",value:"Chocolates"},{title: "Cookies",value:"Cookies"},{title: "Biscuits",value:"Biscuits"},{title: "Waffle",value:"Waffle"}];
  const Quantity = [{title: "1",value:"one"},{title: "2",value:"two"},{title:"3",value:"three"},{title: "4",value:"four"},{title: "5",value:"five"}];
  const Brands = [{title: "Britannia",value: "Britannia"},{title: "Karachi",value: "Karachi"},{title: "Oreo",value: "Oreo"},{title: "Bauli moonFils",value: "Bauli moonFils"}];
  const [cat,setCat] = React.useState("");
  const [subCat,setSubCat] = React.useState("");
  const [productName,setProductName] = React.useState("");
  const [productImg,setProductImg] = React.useState("");
  const [description,setDescription] = React.useState("");
  const [price,setPrice] = React.useState("");
  const [Qty,setQty] = React.useState("");
  const [brand,setBrand] = React.useState("");
  const dispatch = useDispatch();
  const AddToStore = () => {
    const Body = {
      brand: brand,
      details: "string",
      invoiceDetails: "string",
      productCategories: cat,
      productName: productName,
      productSlug: productImg,
      productVariants:[{ 
        availableQty: 27,
        isBestSale: true,
        isFeatured: true,
        isUnlimited: true,
        maxQty: 0,
        minQty: 0,
        price: Number(price),
        productImage: productImg,
        sku: description,
        variant: subCat,
      }],
      seller: 1
    }
    console.log(Body);
    dispatch(addProduct(Body));
   setIsModelOpen(false);
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
            <FormSelect placeHolder="Category" width="50%" options={catagories} setValue={setCat} />
            <FormSelect mx={-12} placeHolder="Sub Category" width="50%" options={subCatagories} setValue={setSubCat}/>
          </View>

          <TextInput bg={'white'} placeHolder={'Product name'} width={'100%'} onChangeText={(text) => setProductName(text)}/>
          <TextInput
            bg={'white'}
            placeHolder={'Product image'}
            width={'100%'}
            onChangeText = {(text) => setProductImg(text)}
          />
          <TextInput
            multiline
            bg={'white'}
            height={70}
            placeHolder={'Description'}
            width={'100%'}
            onChangeText={(text) => setDescription(text)}
          />
          <TextInput 
          bg={'white'} 
          placeHolder={'Price'} 
          width={'100%'} 
          type="numeric" 
          onChangeText={(text) => setPrice(text)}
          />
          
          <View flexDirection={'row'} mt={2} mb={3}>
            <FormSelect placeHolder="Qty" width="50%" options={Quantity} setValue={setQty}/>
            <FormSelect mx={-12} placeHolder="Brand" width="50%" options={Brands} setValue={setBrand}/>
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
