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
    alignItems: 'center',
    marginTop: normalize(10),
  },
  button: {
    height: normalize(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(10),
    paddingHorizontal: '5%',
  },

  modalContainer: {
    marginHorizontal: SIZES.padding,
  },

  // HEADER COMPONENTS
  headerContainer: {
    marginTop: HP('3%'),
    backgroundColor: COLORS.primary,
    height: HP('8%'),
    paddingHorizontal: SIZES.padding,
    alignItems: 'center',
  },
  leftSideComponent: {
    width: normalize(40),
    height: normalize(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: SIZES.radius,
  },
  rightSideComponent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  stickyFooter: {position: 'absolute', left: 0, right: 0, bottom: 15},

  initialContainer: {
    paddingHorizontal: SIZES.radius,
    height: normalize(50),
    paddingHorizontal: SIZES.padding,
    marginTop: '10%',
    alignItems: 'center',
  },
  space: {marginTop: '2%', marginBottom: '2%'},
  headerMarginRight: {marginRight: '10%'},

  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  overlay: {
    opacity: 0.6,
  },
  logo: {
    width: normalize(65),
    height: normalize(60),
  },
  spaceBottom: {
    paddingBottom: '30%',
  },
});
