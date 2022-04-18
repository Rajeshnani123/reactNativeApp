import {View, HStack, Text, Image, Center, Box, FlatList} from 'native-base';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {ICON, ICONS, FONTS, IMAGES, WP, HP, COLORS} from '../../../constants';
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
} from '../../../components';
import style from '../../style';
import {DATA} from '../../../constants/DUMMYJSON';
import {AddProduct} from './AddProduct';
import {normalize,font} from '../../../utils/Platform';

// const HeaderContent = ({navigation}) => {
//   return (
//     <Header
//       leftComponent={<BackHeader navigation={navigation} />}
//       rightComponent={
//         <View flexDirection={'row'}>
//           <StoreHeader
//             navigation={navigation}
//             active={true}
//             onPress={() => alert('Store module is coming soon..')}
//           />
//           <NotificationHeader
//             navigation={navigation}
//             active={true}
//             onPress={() => alert('Notification')}
//           />
//           <CartHeader navigation={navigation} onPress={() => alert('Cart')} />
//         </View>
//       }
//     />
//   );
// };

const HeaderContent = ({navigation}) => {
  return (
    <Header
      leftComponent={<MenuHeader navigation={navigation} />}
      title="Manage store"
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

const leftComponent = (title, subTitle, qty) => {
  return (
    <>
      <Box alignItems="flex-start" flexDirection={'row'}>
        <Image
          alt="productImg"
          resizeMode={'stretch'}
          borderRadius={10}
          width={100}
          height={120}
          source={{uri: IMAGES.dummy}}
        />
        <Box mx={5}>
          <Text style={FONTS.h3}>{title}</Text>
          <Text style={{color: COLORS.gray, ...FONTS.h4}}>{subTitle}</Text>
          <Text style={{color: COLORS.gray, ...FONTS.h4}}>Qty {qty}</Text>
        </Box>
      </Box>
    </>
  );
};

const rightComponent = () => {
  return (
    <View mt={-2}>
      <ActionBtn
        iconType={ICONS.noteType}
        iconName={ICONS.note}
        onPress={() => alert('btn')}
      />
      <ActionBtn
        iconType={ICONS.deleteType}
        iconName={ICONS.delete}
        onPress={() => alert('btn')}
      />
    </View>
  );
};

const ManageProducts = ({navigation}) => {
  const [search, setSearch] = useState();
  const [isModelOpen, setIsModelOpen] = useState(false);

  const HeaderComponent = () => {
    return (
      <>
        {/* <Title mb={2} name="Manage store" />
        <TouchableOpacity onPress={() => navigation.navigate('UserDetail')}>
          <Title mb={2} name="Profile" />
        </TouchableOpacity> */}

        <HStack
          mb={4}
          space={3}
          justifyContent="space-between"
          alignContent={'center'}>
          <Btn
            height={normalize(50)}
            width={WP('43%')}
            colorScheme={'primary'}
            value={'Select from store'}
            onPress={() => navigation.navigate('SelectFromStore')}
          />
          <Btn
            height={normalize(50)}
            width={WP('43%')}
            colorScheme={'primary'}
            value={'Add product'}
            onPress={() => setIsModelOpen(true)}
          />
        </HStack>
      </>
    );
  };

  return (
    <View>
      <HeaderContent navigation={navigation} />
      <View style={style.container}>
        <SearchBox
          value={search}
          onChangeText={val => setSearch(val)}
          onSearch={() => alert('Searchnow')}
        />

        <FlatList
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
          numColumns={1}
          keyExtractor={item => `${item.id}`}
          data={DATA}
          renderItem={({item}) => (
            <HorizontalCard
              containerStyle={{borderRadius: 10, marginBottom: normalize(10)}}
              customWidth={'100%'}
              leftCardWidth={'75%'}
              rightCardWidth={'25%'}
              cardColor={'white'}
              leftComponent={leftComponent(item.title, item.title, 3)}
              rightComponent={rightComponent()}
              rightWidth={100}
              leftWidth={100}
            />
          )}
          ListHeaderComponent={HeaderComponent()}
          ListFooterComponent={() => (
            <View style={{marginBottom: HP('50%')}}></View>
          )}
        />
      </View>
      <CustomModal
        isOpen={isModelOpen}
        renderData={<AddProduct setIsModelOpen={setIsModelOpen} />}
      />
    </View>
  );
};

export default ManageProducts;
