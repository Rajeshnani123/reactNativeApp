import {View, Text} from 'native-base';
import React from 'react';
import {FONTS} from '../../constants';

export const Title = ({name, ...rest}) => {
  return (
    <View {...rest}>
      <Text color={'black'} style={FONTS.h2}>
        {name}
      </Text>
    </View>
  );
};
