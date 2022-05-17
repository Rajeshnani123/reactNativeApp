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
    fontSize: normalize(20),
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
    width: normalize(40),
    height: normalize(30),
    alignItems: 'center',
    justifyContent:'space-around'
  },
  num: {
    color: '#000',
    marginLeft: normalize(10),
    fontSize: normalize(16),
  },
  prevprice: {
    fontFamily: 'Poppins',
    fontSize: normalize(16),
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
    fontSize: normalize(18),
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    marginLeft: normalize(15),
    marginTop: normalize(3),
    color: '#000000',
  },
  qtybox: {
    width: normalize(90),
    height: normalize(35),
    borderRadius: 5,
    marginLeft: normalize(18),
    borderColor: '#ffb43a',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems:'center'
  },
  qtytext: {
    fontSize:normalize(16),
    marginLeft:normalize(30),
    color: '#000',
  },
  arrowdown: {
    marginLeft: normalize(24),
    backgroundColor: '#ffb43a',
    height: normalize(32),
    width: normalize(32),
    marginTop: normalize(3),
    borderRadius: 5,
    alignItems:'center'
  },
  delivery: {
    fontSize: normalize(12),
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
    fontSize: normalize(18),
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',marginLeft:normalize(12)
  },
  names: {
    marginVertical: normalize(18),
flexDirection:'row',
    
    marginHorizontal:normalize(15)
  },
  txtcolor:{
    color:'#000'
  },
  ftr:{
    width: normalize(330),
  height: normalize(74),
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
    marginTop:normalize(16),borderRadius:normalize(5)
  }
});
export default styles;
