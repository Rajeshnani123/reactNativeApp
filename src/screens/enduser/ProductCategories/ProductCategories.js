import { View, Text, Alert } from 'react-native'
import { Button, Image, Input, ScrollView } from 'native-base';
import React, { useEffect, useLayoutEffect } from 'react'
import style from './style'
import {
    Header,
    NotificationHeader,
    MenuHeader,
    // HorizontalCard,
  } from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getProductCategories } from '../../../redux/ProductResource/ActionCreators/getProductAction';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, IMAGES } from '../../../constants';
import { normalize } from '../../../utils/Platform';
import CreateCategories from './CreateCategories';
import { useIsFocused } from '@react-navigation/native';

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

const Category = ({navigation, item, index}) => {
  // console.log(IMAGES.dummy1)
  return (
    <View key={index}>
     <View  style={{height:60,margin:10,padding:10,backgroundColor:"#FFF7EA",borderRadius:5,alignItems:"center",justifyContent:"center",borderWidth:1,borderColor:COLORS.primary}}>
       <Text>
         {item.categoryName}
       </Text>
     </View>
  {/* <View style={style.ItemContainer}>
    <View style={style.Item}>
      <Image style={style.img} alt="catImage" source={{uri: IMAGES.dummy2}}/>
      <View style={style.textContainer}>
        <Text style={style.text}>{item.categoryName}</Text>
      </View>
    </View>
  </View> */}
    </View>
  )
}

const CategoryCreation = ({navigation}) => {
//  console.log("|||||",navigation)
  return (
    <View style={style.headContainer}>
      <View style={{alignItems:"center",marginVertical:15}}>
      <TouchableOpacity
      onPress={() => navigation.navigate('CreateCategories')}
      style={{backgroundColor:COLORS.primary,padding:15,borderRadius:3}}
      >
        <Text style={{color:"#fff"}}>Create Categories</Text>
      </TouchableOpacity>
        {/* <Text>dd</Text> */}
      </View>
      <View style={style.heading}>
        <Text style={style.headingText}>ALL CATEGORIES</Text>
      </View>

    </View>
  )
}

const ProductCategories = ({navigation}) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch()
  const {categories} = useSelector(
    state => state.getProductReducers,
  )
  useEffect(()=>{
    dispatch(getProductCategories("all"))
  },[isFocused])

  return (
    <>
      <HeaderContent navigation={navigation} />
      <View>
        <View style={style.root}>
          <View style={style.catContainer}>
            <FlatList
              data={categories}
              ListHeaderComponent={()=> (<CategoryCreation navigation={navigation}/>)}
              ListFooterComponent={() => (
              <View style={{marginBottom: 150}}></View>
            )}
              // numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index})=>(
                <Category index={index} navigation={navigation} item={item}/>
              )}
            />
          </View>
            {/* <Text style={style.root}>ProductCategories</Text> */}
        </View>
      </View>
    </>
  )
}

export default ProductCategories