import { StyleSheet } from "react-native"
import { COLORS } from "../../../constants"
import { normalize } from "../../../utils/Platform"

const style = StyleSheet.create({
    root: {
        // flex: 1,
    },
    heading: {
        height: normalize(59),
        backgroundColor: "#ffb43a",
        justifyContent: "center",
    },
    headingText: {
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: normalize(16),
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000"
    },
    catContainer:{
        backgroundColor: "#fffaf2",
        // height: normalize(458),
        // marginLeft: normalize(3),
        // marginTop: normalize(4),
        // flex:1,
    },
    ItemContainer:{
        // backgroundColor:"blue",
        width: "50%",
        borderBottomWidth:normalize(3),
        borderRightWidth:normalize(3),
        alignItems:"center",
        borderColor: COLORS.primary,

    },
    Item:{
        marginTop: normalize(31),
        marginBottom:normalize(18),
        // backgroundColor:"pink",
        alignItems:"center",
    },
    textContainer:{
        marginTop: normalize(14),
    },
    text:{
        width: normalize(76),
        height: normalize(21),
        fontFamily: "Poppins",
        fontSize: normalize(14),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000",
        // backgroundColor:"red",
        textAlign:"center"
    },
    img:{
        width:normalize(120),
        height:normalize(149)
    },





    // Create Category Styles
    catInput:{
        height: normalize(50),
        borderRadius: normalize(5),
        backgroundColor: '#ffffff',
        marginLeft: normalize(36),
        marginRight: normalize(31),
        padding: normalize(15),
        borderWidth:normalize(3),
        borderColor:'#ffb43a'
    },
    catButton:{
        borderRadius: normalize(5),
        height: normalize(50),
        backgroundColor: '#ffb43a',
        elevation:2,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {
        width: 10,
        height: 10,
        },
        shadowRadius: 20,
        shadowOpacity: 1,
        borderRadius:5,

        alignItems: 'center',
        marginTop: normalize(20),
        marginLeft: normalize(36),
        marginRight: normalize(31),
    },
    catButtonText: {
        height: normalize(30),
        fontFamily: 'Poppins',
        marginTop: normalize(13),
        fontSize: normalize(20),
        fontWeight: 'bold',
        fontStyle: 'normal',
        color: '#ffffff',
    },

})

export default style