import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from './style'
import {
    Header,
    NotificationHeader,
    MenuHeader,
    CustomModal,
  } from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getProductCategories } from '../../../redux/ProductResource/ActionCreators/getProductAction';
import { deleteProductCategoryById } from '../../../redux/ProductResource/ActionCreators/getProductAction';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, ICON, ICONS } from '../../../constants';
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
const DeleteCategory = ({categoryId,setIsModelOpen, dispatch, getAllCategories}) => {
  const deleteCategory = (categoryId) => {
    dispatch(deleteProductCategoryById(categoryId))
    getAllCategories()
  }
  return(
    <View style={{backgroundColor:COLORS.primaryLight,borderRadius:5,padding:20}}>
      <Text>Are you sure you want to Delete this Category ?</Text>
      <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:10 }}>
        <TouchableOpacity style={{backgroundColor:COLORS.primary,padding:10,borderRadius:5,}} onPress={() => setIsModelOpen(false)}>
          <Text>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderRadius:5,backgroundColor:COLORS.primary,padding:10}} onPress={() => deleteCategory(categoryId)}>
          <Text>Yes</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Category = ({navigation, item, index, dispatch, getAllCategories}) => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  return (
    <View key={index}>
      <View  style={{marginHorizontal:20,height:60,margin:10,padding:20,backgroundColor:"#FFF7EA",borderRadius:5,alignItems:"center",justifyContent:"space-between",borderWidth:1,borderColor:COLORS.primary,flexDirection:"row"}}>
        <View>
          <Text>
            {item.categoryName}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => setIsModelOpen(true)}
          style={{backgroundColor:COLORS.primaryLight,height:30,width:50,justifyContent:"center",alignItems:"center",borderRadius:2,}}>
            <ICON
              type={ICONS.deleteType}
              name={ICONS.delete}
              // style={{backgroundColor:"blue"}}
            />
        </TouchableOpacity>
      </View>
      {/* <View style={style.ItemContainer}>
        <View style={style.Item}>
          <Image style={style.img} alt="catImage" source={{uri: IMAGES.dummy2}}/>
          <View style={style.textContainer}>
            <Text style={style.text}>{item.categoryName}</Text>
          </View>
        </View>
      </View> */}
      <CustomModal
        isOpen={isModelOpen}
        renderData={<DeleteCategory categoryId={item.categoryId} dispatch={dispatch} getAllCategories={getAllCategories} setIsModelOpen={setIsModelOpen} />}
      />
    </View>
  )
}

const CategoryCreation = ({navigation}) => {
  return (
    <View style={style.headContainer}>
      <View style={{alignItems:"flex-end",marginVertical:15,marginRight:15}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('CreateCategories')}
          style={{backgroundColor:COLORS.primary,padding:15,borderRadius:3}}
        >
          <Text style={{color:"#fff"}}>Create Categories</Text>
        </TouchableOpacity>
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
  const getAllCategories = () => {
    dispatch(getProductCategories())
  }
  useEffect(()=>{
    getAllCategories()
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
                <Category
                  dispatch={dispatch}
                  index={index}
                  navigation={navigation}
                  item={item}
                  getAllCategories={getAllCategories}
                  />
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