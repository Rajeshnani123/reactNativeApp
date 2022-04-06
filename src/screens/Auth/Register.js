import React from 'react';
import { View, Text, Button } from 'react-native';

const Register = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Register</Text>
            <Button title="Register now" onPress={() => alert('Register')} />
        </View>
    );
};

export default Register;
