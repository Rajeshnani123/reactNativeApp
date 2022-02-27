import React, {useEffect} from 'react';
import {View, Text, ToichableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors, Fonts} from '../../constants/theme';
import {normalize, dimension, isIos} from '../../utils/Platform';
import Icon from '../../components/icons';
import {styles} from './style';

const {width, height} = dimension();

const CustomSnackBar = ({
  setSuccessMsg,
  leftIcon,
  rightIcon,
  msg,
  msgType,
  linearColors,
  snackBarBoxStyle,
  gradientWrapStyle,
  textContainerStyle,
  gradientTextStyle,
}) => {
  useEffect(() => {
    setTimeout(() => {
      setSuccessMsg && setSuccessMsg(false);
    }, 5000);
  }, []);
  return (
    <View style={[styles.notificationBox, snackBarBoxStyle]}>
      <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={'red'}>
        <View style={(styles.gradientWrap, gradientWrapStyle)}>
          <Icon
            type="Ionicons"
            name={
              leftIcon
                ? leftIcon
                : msgType && msgType == 'error'
                ? 'warning-outline'
                : 'checkmark-circle-sharp'
            }
            size={normalize(25)}
            color="red"
          />
          <View style={(styles.textContainer, textContainerStyle)}>
            <Text style={[styles.gradientText, gradientTextStyle]}>{msg}</Text>
          </View>
          <ToichableOpacity
            onPress={() => {
              setSuccessMsg(false);
            }}>
            <Icon
              type="Ionicons"
              name={
                rightIcon
                  ? rightIcon
                  : msgType && msgType == 'error'
                  ? 'close'
                  : 'close'
              }
              size={normalize(25)}
              color="red"
            />
          </ToichableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default CustomSnackBar;
