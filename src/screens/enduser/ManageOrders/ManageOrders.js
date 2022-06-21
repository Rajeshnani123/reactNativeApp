import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import { BackHeader, NotificationHeader, Header, CartHeader } from '../../../components';

const HeaderContent = ({navigation}) => {
    // console.log("|||||||",navigation.getParent())
    return (
      <Header
        leftComponent={<BackHeader navigation={navigation} />}
        title="Manage Orders"
        rightComponent={
          <View flexDirection={'row'}>
            <NotificationHeader
              navigation={navigation}
              active={true}
              onPress={() => alert('Notification')}
            />
            {/* <CartHeader navigation={navigation} onPress={() => alert('Cart')} /> */}
          </View>
        }
      />
    );
  };

const ManageOrders = ({navigation}) => {
  const [orderType, setorderType] = useState('rec')
  return (
      <>
        <HeaderContent navigation={navigation} />
        <View style={style.root}>
            <Text>ManageOrders</Text>
        </View>

      </>
  )
}

export default ManageOrders