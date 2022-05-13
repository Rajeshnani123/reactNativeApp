import {View, HStack, Text, Image, Center, Box, FlatList} from 'native-base';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {ICON, ICONS, FONTS, IMAGES, WP, HP, COLORS} from '../../../constants';
import {
  Header,
  BackHeader,
  NotificationHeader,
  CartHeader,
  SearchBox,
  Title,
  Btn,
  HorizontalCard,
  ActionBtn,
} from '../../../components';
import style from '../../style';
import {DATA} from '../../../constants/DUMMYJSON';
import { useSelector } from 'react-redux';

const HeaderContent = ({navigation}) => {
  return (
    <Header
      leftComponent={<BackHeader navigation={navigation} />}
      title="Add Products"
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

const rightComponent = ({isDelete = false, isAdd = true}) => {
  return (
    <View mt="30%">
      {isDelete === true && (
        <ActionBtn
          iconType={ICONS.minusType}
          iconName={ICONS.minus}
          onPress={() => alert('minus')}
        />
      )}

      {isAdd === true && (
        <ActionBtn
          iconType={ICONS.plusType}
          iconName={ICONS.plus}
          onPress={() => alert('plus')}
        />
      )}
    </View>
  );
};

const SelectFromStore = ({navigation}) => {
  const [search, setSearch] = useState();
  const {storeData} = useSelector((state) => state.getMdmReducers);

  const HeaderComponent = () => {
    return (
      <>
        <Title mb={2} name="Add Products" />
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
          data={storeData.content}
          renderItem={({item}) => (
            <HorizontalCard
              containerStyle={{borderRadius: 10, marginBottom: 10}}
              customWidth={'100%'}
              leftCardWidth={'80%'}
              rightCardWidth={'20%'}
              cardColor={'white'}
              leftComponent={leftComponent(item.title, item.title, 3)}
              rightComponent={rightComponent({isDelete: false, isAdd: true})}
              rightWidth={100}
              leftWidth={100}
            />
          )}
          // ListHeaderComponent={HeaderComponent()}
          ListFooterComponent={() => (
            <View style={{marginBottom: HP('50%')}}></View>
          )}
        />
      </View>
    </View>
  );
};

export default SelectFromStore;
