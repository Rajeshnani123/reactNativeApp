import React from 'react';
import {TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import {Box, VStack, Text, Pressable, Image, Center} from 'native-base';
import {COLORS, FONTS, SIZES} from './../../constants';

export const HorizontalCard = ({
  containerStyle,
  leftComponent,
  rightComponent,
  onPress,
  cardColor,
  customWidth,
  customHeight,
  leftCardWidth = '50%',
  rightCardWidth = '50%',
  noOnPress,
  key = 1,
}) => {
  const HCard = () => (
    <View key={key}>
      <Box
        style={{...containerStyle}}
        bg={cardColor}
        py="4"
        px="3"
        rounded="lg"
        alignSelf="center"
        width={customWidth ? customWidth : SIZES.width - SIZES.width * 0.58}
        height={customHeight ? customHeight : 150}
        maxWidth={customWidth ? customWidth : SIZES.width - SIZES.width * 0.58}
        maxHeight={250}>
        <VStack justifyContent="space-between" flexDirection="row">
          <Box justifyContent="space-between" style={{width: leftCardWidth}}>
            {leftComponent}
          </Box>
          <Box justifyContent="space-between" style={{width: rightCardWidth}}>
            {rightComponent}
          </Box>
        </VStack>
      </Box>
    </View>
  );
  return (
    <>
      {noOnPress ? (
        <TouchableWithoutFeedback onPress={onPress}>
          <View>{HCard()}</View>
        </TouchableWithoutFeedback>
      ) : (
        <TouchableOpacity onPress={onPress}>{HCard()}</TouchableOpacity>
      )}
    </>
  );
};
