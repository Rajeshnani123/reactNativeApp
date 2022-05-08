import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
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

const PDetails = ({navigation}) => {
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
              placeHolder="Category"
              width="92%"
              options={catagories}
            />
            <FormSelect
              placeHolder=" Sub Category"
              width="92%"
              options={subCatagories}
              mt={3}
            />
          </View>
        </View>
        <TextInput
          bg={'white'}
          placeHolder={'Product name'}
          width={'82%'}
          mx={10}
          mt={25}
        />
        <TextInput
          bg={'white'}
          placeHolder={'Product attributes'}
          width={'82%'}
          mx={10}
          mt={17}
        />
        <TextInput
          bg={'white'}
          placeHolder={'Product variants'}
          width={'82%'}
          mx={10}
          mt={17}
        />
        <TextInput
          multiline
          height={70}
          bg={'white'}
          placeHolder={'Description'}
          width={'82%'}
          mx={10}
          mt={17}
        />
        <TextInput
          bg={'white'}
          placeHolder={'price'}
          width={'82%'}
          mx={10}
          mt={17}
        />
        <View style={{marginLeft: normalize(36), marginTop: normalize(16)}}>
          <FormSelect placeHolder="Qty" width="92%" options={Quantity} />
          <FormSelect
            placeHolder=" Brand"
            width="92%"
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
