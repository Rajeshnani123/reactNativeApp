import {StyleSheet} from 'react-native';
// import {COLORS, SIZES, HP} from './../constants';
import {normalize} from '../../../utils/Platform';

const styles= StyleSheet.create({
  root: {
    backgroundColor: '#FFF7EA',
  },
  container: {
    marginHorizontal: normalize(15),
    marginVertical: normalize(5),
  },
  title:{
    fontFamily: "Poppins",
  fontSize: normalize(18),
  fontWeight: "500",
  fontStyle: "normal",
  color:'#000'
  },
  subtitle:{
    fontFamily: "Poppins",
    fontSize: normalize(14),
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#878787",
    marginTop:normalize(9)
  },
  orders:{
    fontFamily: "Poppins",
  fontSize: normalize(14),
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "left",
  color: "#000000",
  marginTop:normalize(9)
  },icon:{
    marginTop:normalize(12),flexDirection:'row'
  }

  
  
  
  
  
  
});
export default styles