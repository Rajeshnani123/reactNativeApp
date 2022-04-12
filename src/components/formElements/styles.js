import {StyleSheet} from 'react-native';
import {COLORS, SIZES, HP} from '../../constants';
import {normalize} from '../../utils/Platform';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: SIZES.padding,
  },
  // BUTTONS

  buttonContainer: {
    borderRadius: normalize(10),
    paddingHorizontal: '5%',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: normalize(10),
      height: normalize(10),
    },
    shadowRadius: normalize(20),
    shadowOpacity: 0.6,
    marginTop: normalize(10),
    backgroundColor: COLORS.primary,
    height: 50,
    elevation: normalize(8),
    position: 'relative',
  },
  button: {
    height: normalize(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
