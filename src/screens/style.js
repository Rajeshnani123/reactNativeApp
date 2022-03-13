import {StyleSheet} from 'react-native';
import {COLORS, SIZES, HP} from './../constants';

export default StyleSheet.create({
  container: {
    marginHorizontal: SIZES.padding,
  },
  // CARDS

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

  spaceBottom: {
    paddingBottom: '30%',
  },
});
