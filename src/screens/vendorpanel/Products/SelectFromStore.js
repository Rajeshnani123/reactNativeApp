import {
  View,
  HStack,
  Text,
  Image,
  Center,
  Box,
  FlatList,
  Button,
} from 'native-base';
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
import {useDispatch, useSelector} from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import {normalize} from '../../../utils/Platform';
import {multiStoreProduct} from '../../../redux/ProductResource/ActionCreators/postProductAction';
import { POST_PRODUCTS_RESET } from '../../../redux/ProductResource/ActionType';

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
          {/* <CartHeader navigation={navigation} onPress={() => alert('Cart')} /> */}
        </View>
      }
    />
  );
};

const LeftComponent = ({
  title,
  subTitle,
  qty,
  item,
  setSelectedProduct,
  selectedProduct,
}) => {
  const [isSelected, setSelection] = useState(false);
  const {allStores} = useSelector(state => state.getStoreReducers);
  const productSelect = v => {
    if (v) {
      setSelectedProduct(selectedProduct => [
        {...item, seller: allStores[0].id},
        ...selectedProduct,
      ]);
    } else {
      console.log('it can be used to remove the object from selected product');
    }
  };
  return (
    <>
      <Box alignItems="flex-start" flexDirection={'row'}>
        <CheckBox
          value={isSelected}
          onValueChange={v => {
            setSelection(v => !v), productSelect(v);
          }}
          style={{marginTop: normalize(50)}}
        />
        <Image
          alt="productImg"
          resizeMode={'stretch'}
          borderRadius={10}
          width={130}
          height={120}
          mx={5}
          my={2}
          source={{uri: IMAGES.dummy}}
        />
        <Box mx={2} my={5}>
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

const checkBox = () => {
  return (
    <View>
      <CheckBox />
    </View>
  );
};

const SelectFromStore = ({navigation}) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState();
  const {storeData} = useSelector(state => state.getMdmReducers);
  const {allStores} = useSelector(state => state.getStoreReducers);
  const {loading,addProduct} = useSelector(state => state.postProductReducers);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const submitHandler = () => {
    const Body = [...selectedProduct];
    dispatch(multiStoreProduct(Body));
  };

  React.useEffect(() => {
    if(!loading && addProduct){
      navigation.navigate("ManageProducts");
      dispatch({type: POST_PRODUCTS_RESET});
    }
  },[loading])

  const HeaderComponent = () => {
    return (
      <>
        <Title mb={2} name="Add Products" />
      </>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFF7EA'}}>
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
          zIndex={-9}
          renderItem={({item}) => (
            <HorizontalCard
              containerStyle={{borderRadius: 10, marginBottom: 10}}
              customWidth={'100%'}
              leftCardWidth={'80%'}
              rightCardWidth={'20%'}
              cardColor={'white'}
              leftComponent={
                <LeftComponent
                  title={item.brand}
                  subTitle={item.brand}
                  qty={3}
                  item={item}
                  setSelectedProduct={setSelectedProduct}
                  selectedProduct={selectedProduct}
                />
              }
              // rightComponent={rightComponent({isDelete: true, isAdd: false})}
              ActionBtn={<ActionBtn />}
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

      <TouchableOpacity
        onPress={submitHandler}
        style={{
          width: '100%',
          height: 50,
          backgroundColor: '#FF9800',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
        }}>
        <Text style={{color: '#fff', fontSize: 22}}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectFromStore;
