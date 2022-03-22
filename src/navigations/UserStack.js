import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './../screens';


const UserStk = createNativeStackNavigator();

export default function UserStack({ route, navigation }) {
    return (
        <UserStk.Navigator initialRouteName='Home'>
            <UserStk.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
        </UserStk.Navigator>
    );
}
