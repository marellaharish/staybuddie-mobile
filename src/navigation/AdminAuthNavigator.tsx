import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AdminLoginScreen from 'src/screens/auth/AdminLogin';
import SignupScreen from '../screens/auth/SignupScreen';
import { AuthStackParamList } from './types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AdminAuthNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="Login"
                component={AdminLoginScreen}
                options={{ title: 'Sign In' }}
            />
            <Stack.Screen
                name="Signup"
                component={SignupScreen}
                options={{ title: 'Create Account' }}
            />
        </Stack.Navigator>
    );
};

export default AdminAuthNavigator;