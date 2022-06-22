import { StyleSheet } from 'react-native'
import { COLORS } from '../../../constants'
import { normalize } from '../../../utils/Platform'

const style = StyleSheet.create({
    root:{
        backgroundColor: "#fff7ea"
    },
    productName: {
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: 'normal',
        fontStyle: 'normal',
        letterSpacing: 0,

        color: '#000000',
      },
      subName: {
        marginTop: normalize(8),
        fontSize: normalize(14),
      },
      price:{
        fontSize: normalize(20),
        color: '#000',
      },
      discount:{
        marginTop: normalize(8),
        color: '#ffb43a',
        marginLeft: normalize(10),
        fontSize: normalize(14),
      }
})

export default style