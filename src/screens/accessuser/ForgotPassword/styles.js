import {StyleSheet} from 'react-native';
import {normalize, FONTS} from '../../../utils/Platform';

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ffffff',
    marginLeft: normalize(30),
    height: normalize(50),
    marginTop:normalize(40),
    marginLeft: normalize(36),
    marginRight: normalize(36),
    padding: normalize(15),
    marginTop: normalize(35),
    borderWidth:normalize(3),
    borderColor:'#ffb43a',
    borderRadius:normalize(5),
  
  },
  button: {
    height: normalize(50),
    borderRadius: 5,
    backgroundColor: '#ffb43a',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ffb43a',
    marginLeft: normalize(36),
    marginRight: normalize(36),
    marginTop: normalize(31),
    alignItems:'center',
    elevation:5
  },
  reset:{
    
    fontFamily: "Poppins",
    fontSize: normalize(16),
    fontWeight: "normal",
    fontStyle: "normal",
    marginTop:normalize(14),
    textAlign: "left",
    color: "#000000"
  }
});

export default styles;
