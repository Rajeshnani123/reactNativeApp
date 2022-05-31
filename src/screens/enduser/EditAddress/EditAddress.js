import {View, Text} from 'react-native';
import React from 'react';
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
import ICON from 'react-native-vector-icons/Feather';
import {IMAGES, FONTS, COLORS, ICONS, WP,HP, SIZES} from '../../../constants';
import styles from '../../../components/basics/styles';
import style from './styles';
import DropDown from '../../../components/DropDown';
import DropDown2 from '../../../components/DropDown2';
import {StyleSheet} from 'react-native';
import { normalize } from '../../../utils/Platform';
import { useDispatch } from 'react-redux';
import { LOCAL_ADDRESS_MANAGEMENT } from '../../../redux/cartManagement/ActionType';


const HeaderContent = ({navigation}) => {
  return <Header leftComponent={<BackHeader navigation={navigation} />} />;
};



const EditAddress = ({navigation}) => {
  const [primaryName,setPrimaryName] = React.useState("");
  const [primaryLandMark,setPrimaryLandMark]= React.useState("");
  const [primaryMobileNumber,setPrimaryMobileNumber]= React.useState("");
  const [primaryCity,setPrimaryCity]= React.useState("");
  const [primaryAddress,setPrimaryAddress] = React.useState("");
  const [primaryPincode,setPrimaryPincode]= React.useState("");
  const [secondaryName,setSecondaryName] = React.useState("");
  const [secondaryLandMark,setSecondaryLandMark]= React.useState("");
  const [secondaryMobileNumber,setSecondaryMobileNumber]= React.useState("");
  const [secondaryCity,setSecondaryCity]= React.useState("");
  const [secondaryAddress,setSecondaryAddress] = React.useState("");
  const [secondaryPincode,setSecondaryPincode]= React.useState("");
  const dispatch = useDispatch();
  const AddressHandler = () => {
    const primary = {
      primaryName,
      primaryLandMark,
      primaryMobileNumber,
      primaryCity,
      primaryAddress,
      primaryPincode
    }
    const secondary = {
      secondaryName,
      secondaryLandMark,
      secondaryMobileNumber,
      secondaryCity,secondaryAddress,
      secondaryPincode,
    }
    dispatch({type: LOCAL_ADDRESS_MANAGEMENT, primary,secondary});
    navigation.goBack();
  }
  return (
    <View  >
      <HeaderContent navigation={navigation} />
      <View style={style.container}>
        <Text style={style.txt}>Select Address</Text>
        
        <DropDown content ={"Primary Address"} setName={setPrimaryName} setLandmark={setPrimaryLandMark} setMobile={setPrimaryMobileNumber} setCity={setPrimaryCity} setAddress={setPrimaryAddress} setPincode={setPrimaryPincode}/>
        <DropDown content={"Secondary Address"} setName={setSecondaryName} setLandmark={setSecondaryLandMark} setMobile={setSecondaryMobileNumber} setCity={setSecondaryCity} setAddress={setSecondaryAddress} setPincode={setSecondaryPincode}/> 
        <View style={{marginTop:normalize(40),alignItems:'center'}}>
        <Btn
            height={normalize(50)}
            width={WP('43%')}
            colorScheme={'primary'}
            value={'SAVE'}
            onPress={AddressHandler}
            
          />
          </View>
      </View>
    </View>
  );
};

export default EditAddress;
