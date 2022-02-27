import {StyleSheet} from 'react-native';
import {Fonts, Colors} from '../../constants/theme';
import {normalize, dimension, isIos} from '../../utils/Platform';

const {width, height} = dimension();

export const styles = StyleSheet.create({
  notificationBox: {
    position: 'relative',
    bottom: 160,
  },
  gradientBox: {
    marginHorizontal: normalize(12),
    borderRadius: normalize(10),
  },
  gradientWrap: {
    flexDirection: 'row',
    paddingVertical: normalize(14),
    paddingHorizontal: normalize(15),
  },
  textContainer: {
    flex: 1,
    marginLeft: normalize(10),
  },
  gradientText: {
    color: Colors.white,
    fontSize: isIos() ? normalize(14) : normalize(16),
    fontFamily: Fonts.inter600,
    lineHeight: normalize(18),
  },
  bold: {
    fontFamily: Fonts.inter600,
    marginLeft: 3,
  },
});
