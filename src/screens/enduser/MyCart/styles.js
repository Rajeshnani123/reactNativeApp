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
  img: {
    height: normalize(160),
    width: normalize(160),
    borderRadius: 160 / 2,
    marginHorizontal: normalize(90),
    marginVertical: normalize(25),
  },

  cartitems: {
    width: normalize(121),
    height: normalize(30),
    fontFamily: 'Poppins',
    fontSize: normalize(20),

    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
  },
  cartitemview: {
    flexDirection: 'row',
    marginTop: normalize(10),
    marginLeft: normalize(7),
  },
  pincode: {
    marginTop: normalize(7),
    marginLeft: normalize(85),
  },

  changetext: {
    fontFamily: 'Poppins',
    fontSize: normalize(14),
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,

    color: '#000000',
    marginLeft: normalize(18),
    marginTop: normalize(12),
  },
  hcard: {
    height: normalize(277),
  },
  title: {
    height: normalize(25),

    marginTop: normalize(5),
    fontFamily: 'Poppins',
    fontSize: normalize(18),
    fontWeight: 'normal',
    fontStyle: 'normal',
    
    fontWeight:'500',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
  },
  packs: {
    width: normalize(51),
    marginLeft: normalize(10),
    height: normalize(18),
    marginTop: normalize(9),
    fontFamily: 'Poppins',
    fontSize: normalize(14),
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: 'rgba(0, 0, 0, 0.5)',
  },
  company: {
    width: normalize(82),
    height: normalize(18),
    fontFamily: 'Poppins',
marginTop:normalize(4),
    fontSize: normalize(16),
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: 'rgba(0, 0, 0, 0.5)',
  },
  prevprice:{
    width: normalize(31),
  height: normalize(21),
  marginTop:normalize(16),
  fontFamily: "Poppins",
  fontSize: normalize(14),
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "left",
  color: "rgba(0, 0, 0, 0.6)"
  },
  currentprice:{
    width: normalize(65),
  height: normalize(30),
  marginLeft:normalize(11),
  marginTop:normalize(10),
  fontFamily: "Poppins",
  fontSize: normalize(20),
  fontWeight: "500",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "left",
  color: "#000000"
  },
  
  discount:{
    width: normalize(70),
  height: normalize(22),
  backgroundColor: "#4dc860",width: 53,
  marginTop:normalize(13),
  marginLeft:normalize(9),
  fontFamily: "Poppins",
  fontSize: normalize(14),
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "left",
  color: "#ffffff"
  },
  Btn:{
    width:normalize(125),
    backgroundColor:'#ffb43a',
    height: normalize(45),
    borderRadius: 5,
    backgroundColor: "#ffb43a",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowRadius: 20,
    shadowOpacity: 1,
    marginLeft:normalize(37)
  },
  minus:{
    backgroundColor:'#ffb43a',
    width: normalize(45),
    height: normalize(45),
    borderRadius: 5,
  },
  plus:{
    backgroundColor:'#ffb43a',
    width: normalize(45),
    height: normalize(45),
    borderRadius: 5,
    marginLeft: normalize(15)
  },
  remove:{
    width: normalize(103),
    height: normalize(45),
    borderRadius: 5,
    backgroundColor: "#f8e4c4",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowRadius: 20,
    shadowOpacity: 1,
  
  textAlignVertical:10
,    marginLeft:normalize(20)
  },
  rmtext:{
    marginLeft:normalize(30),
  marginTop:normalize(14)  },
  DO:{
    color:'#000',
    marginLeft:normalize(15),
    marginTop:normalize(12)
  },
  layer:{
    width: normalize(60),
    height: normalize(40),
    marginLeft:normalize(20),
    borderRadius: 5,
    backgroundColor: "#ffb43a",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowRadius: 20,
    shadowOpacity: 1
  }
});

export default styles;
