import {View, Text} from 'react-native';
import React, {useState} from 'react';
import style from '../style';
import Icon from 'react-native-vector-icons';
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
  CustomModal,
  constants
} from '../../components';
import { COLORS, FONTS, SIZES } from '../../constants';
import styles from '../../components/basics/styles';

const HeaderContent = ({navigation}) => {
  return (
    <Header
      leftComponent={<BackHeader navigation={navigation} />}
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
const names = {
  lname:"Reviews",
  rname:"Compare"
}
let {lname,rname}=names

const ProductDetails = ({navigation}) => {
  const [search, setSearch] = useState();
  const [isModelOpen, setIsModelOpen] = useState(false);
 
  return (
    <View>
      <HeaderContent navigation={navigation} />
      <View style={{flexDirection:'row',padding:20}}>
       <Text style={{fontSize:16,marginHorizontal:35}}>{lname}</Text>
       <Text style={{fontSize:16,marginHorizontal:50}}>{rname}</Text>
    </View>
    <Text >Product Details</Text>
    </View>
    
  );
};

export default ProductDetails;
