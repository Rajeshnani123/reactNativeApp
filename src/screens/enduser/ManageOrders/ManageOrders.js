import { View, Text } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import { BackHeader, NotificationHeader, Header, CartHeader, HorizontalCard } from '../../../components';
import { Box, FlatList, Image } from 'native-base';
import { normalize } from '../../../utils/Platform';
import { COLORS, HP, IMAGES } from '../../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HeaderContent = ({navigation}) => {
    // console.log("|||||||",navigation.getParent())
    return (
      <Header
        leftComponent={<BackHeader navigation={navigation} />}
        title="Manage Orders"
        rightComponent={
          <View flexDirection={'row'}>
            <NotificationHeader
              navigation={navigation}
              active={true}
              onPress={() => alert('Notification')}
            />
            {/* <CartHeader navigation={navigation} onPress={() => alert('Cart')} /> */}
          </View>
        }
      />
    );
  };

const leftComponent = (item) => {
  // console.log("jjjjjj",item)

  return (
    <>
      <Box alignItems="flex-start" flexDirection={'row'} >
        <Image
          alt='productImage'
          source={{uri: IMAGES.dummy1}}
          width={120}
          height={150}
          />
          <View style={{marginHorizontal:30,height:"90%"}}>
            <View>
              <Text style={{fontFamily: "Poppins",fontSize: 18,}}>Product Name</Text>
            </View>
            <View style={{maxHeight:100}}>
              <Text style={{fontFamily: "Poppins",fontSize: 14,}}>Product Details</Text>
            </View>
            <Box
              width={110}
              flexDirection={'row'}
              justifyContent={'space-between'}
              my={2}>
              <Text style={style.price}>Rs 999/-</Text>
              <Text style={style.discount}>30 % OFF</Text>
            </Box>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            {
              item.type === "approval" ?
               (<>
                      <TouchableOpacity
                    style={{
                      backgroundColor: COLORS.primary,
                      width: normalize(70),
                      height: normalize(45),
                      borderRadius: normalize(5),
                      alignItems: 'center',
                    }}
                    // onPress={() => buyHandler()}
                    >
                    <Text
                      style={{
                        fontSize: normalize(18),
                        color: '#000',
                        marginTop: normalize(10),
                      }}>
                      Reject
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: COLORS.primary,
                      width: normalize(70),
                      height: normalize(45),
                      borderRadius: normalize(5),
                      alignItems: 'center',
                      marginLeft: normalize(15),
                    }}
                    // onPress={addCartHandler}
                    >
                      <Text
                      style={{
                        fontSize: normalize(18),
                        color: '#000',
                        marginTop: normalize(10),
                      }}>
                      Accept
                    </Text>
                    </TouchableOpacity>
               </>) :
               item.type === "closure" ?
               (<>
                      <TouchableOpacity
                    style={{
                      backgroundColor: COLORS.primary,
                      width: normalize(70),
                      height: normalize(45),
                      borderRadius: normalize(5),
                      alignItems: 'center',
                    }}
                    // onPress={() => buyHandler()}
                    >
                    <Text
                      style={{
                        fontSize: normalize(18),
                        color: '#000',
                        marginTop: normalize(10),
                      }}>
                      Close
                    </Text>
                  </TouchableOpacity>
               </>)
               : (<></>)
            }
          </View>
          </View>
      </Box>
    </>
  )
}

const ManageOrders = ({navigation}) => {
  const [orderType, setorderType] = useState('received')
  const data = [
    {id:"0",productName:"Wafers",details:"Product details",price:"999",discount:"30%",pack:"10",type:"approval"},
    {id:"1",productName:"Wafers",details:"Product details",price:"999",discount:"30%",pack:"10",type:"closure"},
    {id:"2",productName:"Wafers",details:"Product details",price:"999",discount:"30%",pack:"10",type:"accepted"},
    {id:"3",productName:"Wafers",details:"Product details",price:"999",discount:"30%",pack:"10",type:"approval"},
    {id:"4",productName:"Wafers",details:"Product details",price:"999",discount:"30%",pack:"10",type:"closure"},
    {id:"6",productName:"Wafers",details:"Product details",price:"999",discount:"30%",pack:"10",type:"accepted"},
  ]
  return (
      <View style={style.root}>
        <HeaderContent navigation={navigation} />
        <FlatList
          data={data}
          // ListHeaderComponent={() => (
          //     <View style={{marginVertical: 20,flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
          //         <Text style={{borderWidth:1,borderRadius:5,padding:10,borderColor:COLORS.primary,backgroundColor:COLORS.primary}}>All</Text>
          //         <Text style={{borderWidth:1,borderRadius:5,padding:10,borderColor:COLORS.primary,backgroundColor:COLORS.white}}>Order Received</Text>
          //         <Text style={{borderWidth:1,borderRadius:5,padding:10,borderColor:COLORS.primary,backgroundColor:"#fff"}}>Order Accepted</Text>
          //     </View>
          //   )}
            ListFooterComponent={() => (
              <View style={{marginBottom: HP('30%')}}></View>
            )}
          renderItem={({item,index}) => (

            <View>
              <HorizontalCard
                leftCardWidth={'100%'}
                // rightCardWidth={'25%'}
                containerStyle={{
                  backgroundColor: item.type === "approval" ? "rgba(5, 255, 0, 0.34)" : item.type ==="closure" ? "rgba(250, 241, 26, 0.5)" : "rgba(183, 174, 174, 0.5)",
                  borderRadius: normalize(10),

                  // borderRadius: normalize(10),
                  margin: normalize(10),
                  paddingLeft: normalize(20),
                  paddingBottom: normalize(20),
                }}
                cardColor={'white'}
                customWidth={'90%'}
                // rightWidth={100}
                leftComponent={leftComponent(
                  item,
                  )}
              />
            </View>
            )}
        />
      </View>
  )
}

export default ManageOrders