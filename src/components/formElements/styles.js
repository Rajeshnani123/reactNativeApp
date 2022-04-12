import {StyleSheet} from 'react-native';
import {COLORS, SIZES, HP} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: SIZES.padding,
  },
  // BUTTONS

  buttonContainer: {
    borderRadius: 10,
    paddingHorizontal: '5%',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 20,
    shadowOpacity: 0.6,
    marginTop: 10,
    backgroundColor: COLORS.primary,
    height: 50,
    elevation: 8,
    position: 'relative',
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brBtnContainer:{
    height:30,
    width:40,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 20,
    shadowOpacity: 0.6,
    
    backgroundColor: COLORS.primary,
   
    elevation: 8,
    position: 'relative',
    
  }
});
