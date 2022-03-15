import {View, Text, ScrollView, Button, Center} from 'native-base';
import React from 'react';
import {Btn, TextInput, FormSelect} from './../../../components';
import {WP, FONTS, COLORS, ICON, ICONS} from './../../../constants';
import styles from './../../../components/basics/styles';
import {TouchableOpacity} from 'react-native';

export const AddProduct = ({setIsModelOpen}) => {
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
            <FormSelect placeHolder="Category" width="50%" />
            <FormSelect mx={-12} placeHolder="Sub Category" width="50%" />
          </View>

          <TextInput bg={'white'} placeHolder={'Product name'} width={'100%'} />
          <TextInput
            bg={'white'}
            placeHolder={'Product image'}
            width={'100%'}
          />
          <TextInput
            multiline
            bg={'white'}
            height={70}
            placeHolder={'Description'}
            width={'100%'}
          />
          <TextInput bg={'white'} placeHolder={'Price'} width={'100%'} />
          <View flexDirection={'row'} mt={2} mb={3}>
            <FormSelect placeHolder="Qty" width="50%" />
            <FormSelect mx={-12} placeHolder="Brand" width="50%" />
          </View>
          <Center>
            <Btn
              height={50}
              width={WP('43%')}
              colorScheme={'primary'}
              value={'Add'}
              onPress={() => setIsModelOpen(false)}
            />
          </Center>
        </View>
      </View>
    </ScrollView>
  );
};
