import {StyleSheet} from 'react-native';
import {COLORS, SIZES, HP} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: SIZES.padding,
  },
  // BUTTONS

  buttonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: '5%',
  },

  // HEADER COMPONENTS
  headerContainer: {
    backgroundColor: COLORS.primary,
    height: HP('6%'),
    paddingHorizontal: SIZES.padding,
    alignItems: 'center',
  },
  leftSideComponent: {
    width: 40,
    height: 40,
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
    height: 50,
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
    width: 65,
    height: 60,
  },
  spaceBottom: {
    paddingBottom: '30%',
  },
});
