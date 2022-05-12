import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {MyCartJSON} from './MyCartJSON';
import {IMAGES, FONTS, COLORS, ICONS, HP, SIZES} from '../../../constants';
import {Box, Button, Image} from 'native-base';
import styles from './styles';
import CheckBox from '@react-native-community/checkbox';

// import ProductDetails from '../ProductDetails';
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
  BrBtn,
  CustomModal,
  MenuHeader,
} from '../../../components';
import {normalize} from '../../../utils/Platform';
import {background} from 'native-base/lib/typescript/theme/styled-system';
import {Circle} from 'react-native-svg';

const HeaderContent = ({navigation}) => {
  return (
    <Header
      leftComponent={<MenuHeader navigation={navigation} />}
      rightComponent={
        <View flexDirection={'row'}>
          <NotificationHeader
            navigation={navigation}
            active={true}
            onPress={() => alert('Notification')}
          />
          <CartHeader navigation={navigation} onPress={() => alert('Cart')} />
        </View>
      }
    />
  );
};

// const leftComponent = (title, subtitle, price, discount, barganing) => {
//   const [isSelected, setSelection] = useState(false);

//   return (
//     <>
//       <Box alignItems="flex-start" flexDirection={'row'}>
//         <CheckBox value={isSelected} onValueChange={setSelection} />

//         <Image
//           alt="productImg"
//           resizeMode={'stretch'}
//           borderRadius={10}
//           width={100}
//           height={120}
//           source={{uri: IMAGES.dummy1}}
//         />

//         <Box mx={5}>
//           <Text style={{color: COLORS.black, ...FONTS.h3}}>{title}</Text>
//           <Text style={{color: COLORS.gray, ...FONTS.h4}}>{subtitle}</Text>
//           <Box
//             width={110}
//             flexDirection={'row'}
//             justifyContent={'space-between'}>
//             <Text style={{color: COLORS.gray, ...FONTS.h4}}>{price}</Text>
//             <Text style={{color: COLORS.primary, ...FONTS.h4}}>{discount}</Text>
//           </Box>
//           <View flexDirection={'row'}>
//             <BrBtn
//               iconType={ICONS.exclamationType}
//               iconName={ICONS.exclamation}
//               onPress={() => alert('btn')}
//             />
//             <Text style={{color: COLORS.green, ...FONTS.h4}}>{barganing}</Text>
//           </View>
//           <View flexDirection={'row'}>
//             <TouchableOpacity
//               style={{
//                 backgroundColor: COLORS.primary,
//                 width: 80,
//                 borderRadius: 10,
//                 alignItems: 'center',
//                 marginTop: 12,
//               }}
//               onPress={() => alert('btn')}>
//               <Text style={{color: COLORS.black, ...FONTS.h3, marginTop: 12}}>
//                 Buy
//               </Text>
//             </TouchableOpacity>
//             <ActionBtn
//               ml={5}
//               iconType={ICONS.cartType}
//               iconName={ICONS.cart}
//               onPress={() => alert('btn')}
//               height={'50%'}
//             />
//           </View>
//         </Box>
//       </Box>
//     </>
//   );
// };

const MyCart = ({navigation}) => {
  const [search, setSearch] = useState();
  const [isSelected, setSelection] = useState(false);
  const leftComponent = (
    title,
    packs,
    company,
    prevprice,
    currentprice,
    discount,
  ) => {
    return (
      <>
        <Box alignItems="flex-start" flexDirection={'row'}>
        <CheckBox  value={isSelected}
          onValueChange={(v)=>setSelection(v=>!v)}/>

          <Image
            alt="productImg"
            resizeMode={'stretch'}
            borderRadius={10}
            width={62}
            height={84}
            source={{uri: IMAGES.dummy1}}
          />
          <Box mx={5}>
            <Box flexDirection={'row'}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.packs}>{packs}</Text>
            </Box>

            <Text style={styles.company}>{company}</Text>
            <Box flexDirection={'row'}>
              <Text style={styles.prevprice}>{prevprice}</Text>
              <Text style={styles.currentprice}>{currentprice}</Text>
              <View style={styles.discountview}>
                <Text style={styles.discount}>{discount}</Text>
              </View>
            </Box>
          </Box>
        </Box>
        <Box flexDirection={'row'} mx={10} my={5}>
          <TouchableOpacity style={styles.minus}>
            <Image
              source={require('../../../assets/Images/minus.png')}
              mx={4}
              my={3}
              
            />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: normalize(15),
              marginTop: normalize(15),
              color: '#000',
            }}>
            2
          </Text>
          <TouchableOpacity mx={3} style={styles.plus}>
            <Image
              source={require('../../../assets/Images/plus.png')}
              mx={4}
              my={3}
            />
          </TouchableOpacity>
          <TouchableOpacity mx={3} style={styles.remove}>
            <Text style={styles.rmtext}>Remove</Text>
          </TouchableOpacity>
        </Box>
        <View flexDirection={'row'}>
          <TouchableOpacity style={styles.Btn}>
            <Text style={styles.DO}>Discount & Offers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.layer}>
            <Image
              source={require('../../../assets/Images/layer.png')}
              mx={4}
              my={2}
            />
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return (
    <>
      <HeaderContent navigation={navigation} />

      <ScrollView style={styles.root}>
        {/* <View style={styles.head}>
        <Icon
          name="arrow-left"
          size={22}
          style={{marginHorizontal: 15, marginVertical: 12, color: '#000'}}
        />
        <Icon
          name="bell"
          size={20}
          style={{marginLeft: 230, marginVertical: 15, color: '#000'}}
        />
        <Icon
          name="shopping-cart"
          size={20}
          style={{marginLeft: 20, marginVertical: 15, color: '#000'}}
        />
      </View> */}
        <View style={styles.container}>
          
            <SearchBox
              value={search}
              onChangeText={val => setSearch(val)}
              onSearch={() => alert('Searchnow')}
              marginTop={normalize(8)}
              ml={0}
              
            />
        
          <View style={styles.cartitemview}>
            <Text style={styles.cartitems}>Cart items</Text>
            <Text style={styles.pincode}>Pincode - 560010</Text>
           
          </View>

          <FlatList
            overScrollMode="never"
            showsVerticalScrollIndicator={false}
            numColumns={1}
            data={MyCartJSON}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => (
              <HorizontalCard
                containerStyle={{
                  borderRadius: normalize(10),
                  marginTop: normalize(15),
                  height: normalize(230),
                  // marginHorizontal: normalize(1),
                }}
                customWidth={'100%'}
                leftCardWidth={'75%'}
                rightCardWidth={'25%'}
                cardColor={'white'}
                rightWidth={100}
                leftWidth={100}
                leftComponent={leftComponent(
                  item.title,
                  item.packs,
                  item.company,
                  item.prevprice,
                  item.currentprice,
                  item.discount,
                )}
                onPress={
                  () => console.log('check')
                  // navigation.navigate('ProductDetails')
                }></HorizontalCard>
            )}
            ListFooterComponent={() => (
              <View style={{marginBottom: HP('50%')}}></View>
            )}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default MyCart;
