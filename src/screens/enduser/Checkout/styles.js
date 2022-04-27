import {border} from 'native-base/lib/typescript/theme/styled-system';
import {StyleSheet} from 'react-native';
import {normalize, FONTS} from '../../../utils/Platform';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: normalize(15),
  },
  root: {
    backgroundColor: '#FFF7EA',
  },
  head: {
    height: normalize(50),
    backgroundColor: '#FFB43A',
    flexDirection: 'row',
  },
  Btnview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  login: {
    backgroundColor: '#FFB43A',
    width: normalize(140),
    height: normalize(45),
    backgroundColor: '#ffb43a',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
  },

  Email: {
    width: 140,
    height: 45,
    backgroundColor: '#ffb43a',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  logintext: {
    height: normalize(24),
    marginLeft: normalize(41),
    marginTop: normalize(10),
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
  },
  emailtext: {
    height: 24,
    marginLeft: normalize(26),
    marginTop: normalize(11),
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
  },
  card1: {
    backgroundColor: '#ffffff',
    height: normalize(190),
    width: normalize(327),
    marginTop: normalize(16),
    flexDirection: 'row',
  },
  productname: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
  },
  sub: {
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: 'rgba(0, 0, 0, 0.48)',
    marginTop: normalize(10),
  },
  rating: {
    backgroundColor: '#ffb43a',
    width: normalize(50),
    height: normalize(30),
    alignItems: 'center',
  },
  num: {
    color: '#000',
    marginLeft: normalize(10),
    fontSize: 14,
  },
  prevprice: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: 'rgba(0, 0, 0, 0.41)',
    marginLeft: normalize(15),
    marginTop: normalize(5),
  },
  currentprice: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    marginLeft: normalize(15),
    marginTop: normalize(3),
    color: '#000000',
  },
  qtybox: {
    width: normalize(103),
    height: normalize(35),
    borderRadius: 5,
    marginLeft: normalize(15),
    borderColor: '#ffb43a',
    borderWidth: 1,
    flexDirection: 'row',
  },
  qtytext: {
    marginLeft: normalize(20),
    marginTop: normalize(7),
    color: '#000',
  },
  arrowdown: {
    marginLeft: normalize(20),
    backgroundColor: '#ffb43a',
    height: normalize(30),
    width: normalize(30),
    marginTop: normalize(3),
    borderRadius: 5,
  },
  delivery: {
    fontSize: 10,
    marginTop: normalize(50),
    marginLeft: normalize(15),
    color: '#000',
  },
  card2: {
    backgroundColor: '#ffffff',
    height: normalize(190),
    width: normalize(327),
    marginTop: normalize(12),
  },
  pricedetails: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',marginLeft:normalize(15)
  },
  names: {
    marginVertical: 5,
flexDirection:'row',
    
    marginHorizontal:normalize(15)
  },
  txtcolor:{
    color:'#000'
  },
  ftr:{
    width: 335,
  height: 74,
  backgroundColor: "rgba(255, 180, 58, 0.26)",
  flexDirection:'row',
  marginTop:normalize(10)
  },
  pricebox:{
fontSize:18,
marginLeft:normalize(20),
marginTop:normalize(20)
  },
  btn:{
    height:normalize(50),
    width:normalize(120),
    backgroundColor:'#ffb43a',
    marginLeft:normalize(70),
    marginTop:normalize(20)
  }
});
export default styles;
