import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';

export const ICONTYPE = {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Feather,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Entypo,
  SimpleLineIcons,
  Octicons,
  Foundation,
};

const ICON = ({type, name, color, size = 24, style}) => {
  const fontSize = 24;
  const Tag = type;
  return (
    <>
      {type && name && (
        <Tag name={name} size={size || fontSize} color={color} style={style} />
      )}
    </>
  );
};

export const ICONS = {
  testType: ICONTYPE.AntDesign,
  test: 'isv',
  rightType: ICONTYPE.AntDesign,
  right:'right',
  filterType: ICONTYPE.Feather,
  filter:'filter',
  exclamationType: ICONTYPE.FontAwesome,
  exclamation:'exclamation-circle',
  notificationType: ICONTYPE.Feather,
  notification: 'bell',
  cartType: ICONTYPE.Feather,
  cart: 'shopping-cart',
  briefcaseType: ICONTYPE.Feather,
  briefcase: 'briefcase',
  searchType: ICONTYPE.Feather,
  search: 'search',
  noteType: ICONTYPE.MaterialIcons,
  note: 'notes',
  deleteType: ICONTYPE.MaterialIcons,
  delete: 'delete',
  deleteO: 'delete-outline',
  minusType: ICONTYPE.MaterialCommunityIcons,
  minus: 'minus',
  plusType: ICONTYPE.MaterialCommunityIcons,
  plus: 'plus',
  arrowLeftType: ICONTYPE.Feather,
  arrowLeft: 'arrow-left',
  arrowRightType: ICONTYPE.Feather,
  arrowRight: 'arrow-right',
  starType:ICONTYPE.Feather,
  star:'star',
  downType:ICONTYPE.Feather,
  down:'arrow-down-circle',
  chevronType:ICONTYPE.Feather,
  chevronright:'chevron-right'
};

export default ICON;
