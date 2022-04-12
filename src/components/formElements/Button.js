import {TouchableOpacity, ActivityIndicator} from 'react-native';
import {Text, View, Button, Center} from 'native-base';
import React from 'react';
import styles from './styles';
import {FONTS, ICON, ICONS, COLORS} from '../../constants';

export const Btn = ({
  buttonStyle,
  width,
  height,
  value,
  colorScheme,
  isLoading = false,
  leftIcon,
  rightIcon,
  ...rest
}) => {
  return (
    <View>
      <Button
        {...rest}
        style={{...styles.buttonContainer, ...buttonStyle}}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        width={width}
        height={height}
        colorScheme={colorScheme}
        _text={{
          textAlign: 'center',
          alignContent: 'center',
          color: 'black',
          ...FONTS.h3,
        }}>
        {isLoading ? <ActivityIndicator size="large" color="#ffff" /> : value}
      </Button>
    </View>
  );
};

export const ActionBtn = ({iconType, iconName, size = 27, ...rest}) => {
  return (
    <Button
      height={50}
      width={50}
      colorScheme="primary"
      style={styles.buttonContainer}
      {...rest}>
      <ICON size={size} type={iconType} name={iconName} color={COLORS.black} />
    </Button>
  );
};

export const BrBtn = ({iconType, iconName, size = 15, ...rest}) => {
  return (
    <Button colorScheme="primary" style={styles.brBtnContainer} {...rest}>
      <ICON size={size} type={iconType} name={iconName} color={COLORS.black} />
    </Button>
  );
};
