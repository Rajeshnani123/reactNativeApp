import {StyleSheet} from 'react-native';
import {normalize, FONTS} from '../../../utils/Platform';

const style = StyleSheet.create({
    compareContainer:{
        width: 428,
        marginVertical: 24,
      },
      similarText:{
        marginLeft:20,
        marginBottom:22,
        width: 223,
        height: 23,
        fontFamily: "Poppins",
        fontSize: 15,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0.3,
        textAlign: "left",
        color: "#000000"
      },

      compareParameter:{
        height: 101,
        marginTop:189,
        paddingLeft:8,
        backgroundColor: "rgba(255, 180, 58, 0.3)"
      },
      imgContainer:{
        width: 166,
        height: 189,
      },
      first:{
        width:102,
      },
      second:{
        width:166,
        height:290,
        marginRight:6,
      },
      productDetails:{
        width:166,
        height:101,
        alignItems:"center",
        backgroundColor: "#ffb43a"
      },
      productNameText:{
        marginTop:12,
        width: 86,
        height: 18,
        fontFamily: "Poppins",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: "#000000"
      },
      productQtyText:{
        marginTop:9,
        width: 21,
        height: 18,
        fontFamily: "Poppins",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: "#000000"
      },
      productPriceText:{
        marginTop:9,
        width: 30,
        height: 18,
        fontFamily: "Poppins",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: "#000000"
      },
      fortune:{
        marginTop:12,
        width: 73,
        height: 21,
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: "#000000"
      },
      qty:{
        marginTop:5,
        width: 14,
        height: 21,
        fontFamily: "Poppins",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: "#000000"
      },
      price:{
        marginTop:7,
        width: 41,
        height: 21,
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