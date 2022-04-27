import {StyleSheet} from 'react-native';
import {normalize, FONTS} from '../../../utils/Platform';

const style = StyleSheet.create({
  container: {
    
      height:normalize(600),
      width:normalize(428),
      backgroundColor: '#FFB43A',
      
    },
    image:{
marginLeft:normalize(130),
marginTop:normalize(80)
    },
  txt:{
      color:'#fff',
    fontWeight:'bold',
      marginLeft:normalize(115),
      fontSize:normalize(22),
      marginTop:normalize(30)
  },
  subtext:{
    color:'#fff',
    fontWeight:'normal',
      marginLeft:normalize(20),
      fontSize:normalize(16),
      marginTop:normalize(30)
  },
  subtextbox:{
    height:normalize(300),
    width:normalize(250),marginLeft:normalize(50),
    
  },
  btn:{
height:normalize(50),
width:normalize(150),
backgroundColor:'#fff',
marginLeft:normalize(55),
marginTop:normalize(30),
borderRadius:5,
alignItems:'center'
  },
  btntxt:{
    marginTop:normalize(15),
    color:'#FFB43A',
    fontSize:normalize(16)
  }
      

})
export default style;