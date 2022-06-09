import { View, Text } from 'react-native'
import React from 'react'
import {
    Header,
    NotificationHeader,
    MenuHeader,
  } from '../../../components';

const HeaderContent = ({navigation}) => {
    return (
      <Header
        leftComponent={<MenuHeader navigation={navigation} />}
        title="Product Categories"
        rightComponent={
          <View flexDirection={'row'}>
            <NotificationHeader
              navigation={navigation}
              active={true}
              onPress={() => alert('Notification')}
            />
          </View>
        }
      />
    )
}

const ProductCategories = ({navigation}) => {
  return (
      <>
        <HeaderContent navigation={navigation} />
        <View>
            <Text>ProductCategories</Text>
        </View>
      </>
  )
}

export default ProductCategories