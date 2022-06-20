import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { Header, NotificationHeader, MenuHeader } from '../../../components';
import style from './style';
import { useDispatch } from 'react-redux';
import { createCategory } from '../../../redux/ProductResource/ActionCreators/postProductAction';

const HeaderContent = ({navigation}) => {
    return (
      <Header
        leftComponent={<MenuHeader navigation={navigation} />}
        title="Create Categories"
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

const CreateCategories = ({navigation}) => {
    const [categoryName, setCategoryName] = useState('')
    const dispatch = useDispatch();
    const createNewCategory = () => {
        if(categoryName === ''){
            Alert.alert('Category Name cannot be empty');
        }else{
            const Body = {
                categoryName: categoryName,
            }
            dispatch(createCategory(Body))
            navigation.navigate('Product Categories')
        }
    }
  return (
    <>
        <HeaderContent navigation={navigation} />
        <View>
            <View style={{marginVertical:15}}>
                <TextInput
                style={style.catInput}
                placeholder="Enter Category Name"
                placeholderTextColor={'#c4c4c4'}
                onChangeText={value => setCategoryName(value)} />
                <TouchableOpacity
                style={style.catButton}
                onPress={() => createNewCategory()}
                >
                    <Text style={style.catButtonText}>CREATE CATEGORY</Text>
                </TouchableOpacity>
            </View>
        </View>
      </>
  )
}

export default CreateCategories