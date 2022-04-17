import { View, Text,Modal,ActivityIndicator,StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export const Loader = ({isLoading}) => {
    return (
       <Modal visible={true} transparent={true}>
           <View style={styleSheet.LoadingSpinner}>
            <ActivityIndicator 
            animating={isLoading}
            size={"large"}
            color={"#FFFFFF"}
            />
           </View>
       </Modal>
    );
}

const styleSheet = StyleSheet.create({
    LoadingSpinner: {
        alignItems: "center",
        backgroundColor: "#33333366",
        flex: 1,
        justifyContent: "center",
    }
})

