import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { VendorHome } from './../screens';


const VendorStk = createNativeStackNavigator();

export default function VendorStack({ route, navigation }) {
    return (
        <VendorStk.Navigator>
            <VendorStk.Screen
                name="VendorHome"
                component={VendorHome}
                options={{
                    headerShown: false,
                }}
            />
        </VendorStk.Navigator>
    );
}
