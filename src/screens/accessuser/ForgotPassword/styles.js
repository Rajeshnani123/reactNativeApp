import {StyleSheet} from 'react-native';
import {normalize, FONTS} from '../../../utils/Platform';

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ffffff',
    marginLeft: normalize(30),
    height: normalize(55),
    marginTop:normalize(40),
    marginLeft: normalize(36),
    marginRight: normalize(36),
    padding: normalize(20),
    marginTop: normalize(40),
  },
  button: {
    height: normalize(60),
    borderRadius: 5,
    backgroundColor: '#ffb43a',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ffb43a',
    marginLeft: normalize(36),
    marginRight: normalize(36),
    marginTop: normalize(31),
  },
  reset:{
    marginLeft:normalize(85),
    fontFamily: "Poppins",
    fontSize: normalize(18),
    fontWeight: "normal",
    fontStyle: "normal",
    marginTop:normalize(16),
    textAlign: "left",
    color: "#000000"
  }
});

export default styles;
