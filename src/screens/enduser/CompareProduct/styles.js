import {StyleSheet} from 'react-native';
import {normalize, FONTS} from '../../../utils/Platform';

const style = StyleSheet.create({
    compareContainer:{
        width: normalize(428),
        marginVertical: normalize(24),
      },
      similarText:{
        marginLeft:normalize(20),
        marginBottom:normalize(22),
        width: normalize(223),
        height: normalize(23),
        fontFamily: "Poppins",
        fontSize: normalize(15),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0.3,
        textAlign: "left",
        color: "#000000"
      },

      compareParameter:{
        height: normalize(101),
        marginTop:normalize(189),
        paddingLeft:normalize(8),
        backgroundColor: "rgba(255, 180, 58, 0.3)"
      },
      imgContainer:{
        width: normalize(166),
        height: normalize(189),
      },
      first:{
        width:normalize(102),
      },
      second:{
        width:normalize(166),
        height:normalize(290),
        marginRight:normalize(6),
      },
      productDetails:{
        width:normalize(166),
        height:normalize(101),
        alignItems:"center",
        backgroundColor: "#ffb43a"
      },
      productNameText:{
        marginTop:normalize(12),
        width: normalize(86),
        height: normalize(18),
        fontFamily: "Poppins",
        fontSize: normalize(12),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: "#000000"
      },
      productQtyText:{
        marginTop:normalize(9),
        width: normalize(21),
        height: normalize(18),
        fontFamily: "Poppins",
        fontSize: normalize(12),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: "#000000"
      },
      productPriceText:{
        marginTop:normalize(9),
        width: normalize(30),
        height: normalize(18),
        fontFamily: "Poppins",
        fontSize: normalize(12),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: "#000000"
      },
      fortune:{
        marginTop:normalize(12),
        width: normalize(73),
        height: normalize(21),
        fontFamily: "Poppins",
        fontSize: normalize(14),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: "#000000"
      },
      qty:{
        marginTop:5,
        width: normalize(14),
        height: normalize(21),
        fontFamily: "Poppins",
        fontSize: normalize(14),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: "#000000"
      },
      price:{
        marginTop:normalize(7),
        width: normalize(41),
        height: normalize(21),
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: "#000000"
      }

})
export default style;