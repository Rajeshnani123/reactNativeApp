import {View, Text, Select, CheckIcon} from 'native-base';
import React from 'react';
import {COLORS} from './../../constants';

export const FormSelect = ({
  height = 50,
  width = '100%',
  size = 'lg',
  mt = 0,
  mb = 0,
  options = [],
  setValue,
  selectedValue,
  containerStyle,
  placeHolder,
  ...rest
}) => {
  return (
    <Select
      style={{...containerStyle}}
      selectedValue={selectedValue}
      bg={'white'}
      height={height}
      width={width}
      size={size}
      placeholder={placeHolder}
      _selectedItem={{
        bg: 'teal.600',
        endIcon: <CheckIcon size="5" />,
      }}
      mt={mt}
      mb={mb}
      onValueChange={itemValue => setValue(itemValue)}
      {...rest}>
      {options.length > 0 ? (
        options.map((item, index) => (
          <Select.Item key={index} label={item.title} value={item.value} />
        ))
      ) : (
        <Select.Item key="1" label="No data found" value="0" disabled />
      )}
    </Select>
  );
};
