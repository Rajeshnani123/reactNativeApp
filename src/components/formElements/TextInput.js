import React from 'react';
import {Input, View} from 'native-base';

import {ICON, ICONS, COLORS, FONTS} from './../../constants';
import {TouchableOpacity} from 'react-native';

export const TextInput = ({
  placeHolder,
  width = '75%',
  height = '50',
  size = 'lg',
  mt = '3',
  mb = '3',
  rightElement,
  leftElement,
  onChangeText,
  type = 'default',
  containerStyle,
  ...rest
}) => {
  return (
    <Input
      height={height}
      style={{...FONTS.h3, ...containerStyle}}
      mt={mt}
      mb={mb}
      size={size}
      onChangeText = {(text) => onChangeText(text)}
      placeholder={placeHolder}
      w={width}
      {...rest}
      keyboardType={type}
      InputLeftElement={leftElement}
      InputRightElement={rightElement}
    />
  );
};

export const SearchBox = ({onSearch, value, onChangeText,width='100%', ...rest}) => {
  return (
    <TextInput
      {...rest}
      returnKeyType="search"
      onSubmitEditing={onSearch}
      value={value}
      onChangeText={onChangeText}
      bg={'white'}
      borderColor={COLORS.primary}
      borderRadius="lg"
      size="lg"
      placeHolder="Search products"
      width={width}
      height="50"
      leftElement={
        <TouchableOpacity>
          <View ml={4}>
            <ICON
              style={{marginRight: 10}}
              type={ICONS.searchType}
              name={ICONS.search}
              color={COLORS.primary}
            />
          </View>
        </TouchableOpacity>
      }
    />
  );
};
