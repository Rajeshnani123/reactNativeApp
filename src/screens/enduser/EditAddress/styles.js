import {StyleSheet} from 'react-native';
import {normalize, FONTS} from '../../../utils/Platform';
import {COLORS, SIZES, HP} from '../../../constants';

const style = StyleSheet.create({
    container: {
        marginHorizontal: SIZES.padding,
        backgroundColor: '#FFF7EA',
      },
    txt:{
        color:'#000',
        marginLeft:normalize(100),
        fontSize:normalize(18),
        marginTop:normalize(30)
    },
        

})

export default style;