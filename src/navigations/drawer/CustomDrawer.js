import React from 'react';
import { View,StyleSheet,Text,TouchableOpacity,FlatList , Button,  Image} from 'react-native';
import {  createDrawerNavigator,  DrawerContentScrollView,  DrawerItem,  DrawerItemList,} from '@react-navigation/drawer';
import {COLORS, FONTS, ICON, ICONS} from '../../constants';
import { normalize } from '../../utils/Platform';
import {DATA} from './DummyData';
import { useSelector } from 'react-redux';


const Profile = (props) => {
    const routes = props.props.state.routeNames;
    const currentIndex = props.props.state.index;
    const focused = routes[currentIndex] === "Profile";
    const currentRouteName = routes[currentIndex];
    return (
        <View style={styles.profileContainer}>
            <Image
              source={require('../../assets/Images/profileimage.jpeg')}
              style={styles.img}
            />
            <TouchableOpacity
                style={[
                    styles.profileTextContainer,
                     currentRouteName === "Profile" && {backgroundColor:COLORS.primary,color:'#fff',paddingLeft:normalize(7),paddingRight:normalize(52),borderRadius:2}
                ]}
                // style={styles.profileTextContainer}
                onPress={() => props.props.navigation.navigate('Profile')}>
                <Text style={styles.profileText}>Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

const UniversalPrime = () => {
    const universalPrime = "UNIVERSAL PRIME";
    return (
        <View style={{backgroundColor:"#ffb43a",height:normalize(57),flexDirection:'row'}}>
            <ICON
                type={ICONS.crownType}
                name={ICONS.crown}
                size={normalize(24)}
                style={{
                  marginLeft:normalize(34),
                  marginTop:normalize(13)
                }}
              />
            <Text style={styles.universalPrime}>
                  {universalPrime}
            </Text>
        </View>
    )
}

const Category = (props) => {
    const {nav, data} = props;
    const routes = nav.state.routeNames;
    const currentIndex = nav.state.index;
    const currentRouteName = routes[currentIndex]
    const {userType} =useSelector(state => state.getUserReducers.data);
    return (
        <>
            {
                data.map((currentItem, index, array)=>{

                   if((currentItem.name === "superAdmin" &&  userType && !userType.includes("VENDOR")) || (currentItem.name === "admin" &&  userType && !userType.includes("VENDOR"))){
                    return null
                   }else{
                    return(
                    <View key={index}>

                        <View style={styles.categoryContainer}>
                            <ICON
                                type={ICONS[`${currentItem.icon.type}`]}
                                name={ICONS[`${currentItem.icon.name}`]}
                                size={normalize(24)}
                                style={{
                                    marginLeft:normalize(33),
                                    marginTop:normalize(18)
                                }}
                            />
                            <Text style={styles.categoryText}>{currentItem.title}</Text>
                        </View>

                        {
                            currentItem.subCategory.map((Item, index, array)=>(

                                <View key={index}>
                                    <View style={styles.menuItemsContainer}>
                                        <TouchableOpacity
                                            style={[
                                                styles.menuItems,
                                                Item.name === currentRouteName && styles.selectedMenuItem
                                            ]}
                                            onPress={() => nav.navigation.navigate(Item.name)}
                                        >
                                            <ICON style={styles.icon} color={Item.name === currentRouteName ? 'white': 'black'} type={ICONS[`${Item.icon.type}`]} name={ICONS[`${Item.icon.name}`]} size={20} />
                                            <Text
                                                style={[
                                                    styles.itemText,
                                                    Item.name === currentRouteName && styles.selectedTextItem
                                                ]}
                                            >{Item.name}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                    )
                   }
})
            }
        </>
    )
}

const CustomDrawer = (props) => {
    const {state} = props
    const {routes, index} = state;
    const currentRoute = routes[index];
    // console.log(currentRoute.name)


  return (
    <DrawerContentScrollView {...props} >
      <View style={styles.container}>
        <View style={styles.top} />
        <Profile props={props}/>
        <UniversalPrime/>
        <Category data={DATA} nav={props}/>
      </View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:-4,
    },
    top:{
        backgroundColor:COLORS.primary,
        height:normalize(57)
    },
    profileContainer:{
        height:normalize(154),
        backgroundColor:'#fff7ea',
    },
    img: {
        height: normalize(96),
        width: normalize(96),
        borderRadius: 160 / 2,
        marginLeft: normalize(75),
        marginTop: normalize(11),
        marginRight:normalize(83),
      },
      profileTextContainer:{
        marginTop:normalize(11),
        marginLeft:normalize(96),
        marginRight:normalize(103),
        width: normalize(55),
      },
      profileText:{
        width: normalize(55),
        height: normalize(27),
        fontFamily: "Poppins",
        fontSize: normalize(18),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: "#000000",
      },
      universalPrime:{
        marginLeft: normalize(18),
        marginTop: normalize(15),
        width: normalize(115),
        height: normalize(21),
        fontFamily: "Poppins",
        fontSize: normalize(14),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: "#000000"
      },
      categoryText:{
        marginLeft:normalize(18),
        marginTop: normalize(15),
        width: normalize(130),
        height: normalize(27),
        fontFamily: "Poppins",
        fontSize: normalize(18),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: "#000000"
      },
      categoryContainer:{
        height:normalize(56),
        backgroundColor:'#fff7ea',
        flexDirection:'row',
        borderBottomColor:'#ffb43a',
        borderBottomWidth:1
      },
      menuItemsContainer:{
        backgroundColor:'#fff7ea',
        borderBottomColor:'#ffb43a',
        borderBottomWidth:1
      },
      menuItems:{
        flexDirection:'row',
        height:normalize(41),
      },
      selectedMenuItem:{
          backgroundColor:COLORS.primary,
          borderRadius:4,
      },
      icon:{
          marginLeft:normalize(48),
          marginTop:normalize(13),
      },
      itemText:{
          marginTop:normalize(9),
          marginLeft:normalize(17),
      },
      selectedTextItem:{
        color:'#fff'
      },
})

export default CustomDrawer