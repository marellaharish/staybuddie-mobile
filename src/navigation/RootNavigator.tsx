// src/navigation/RootNavigator.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AdminAuthNavigator from './AdminAuthNavigator';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import { useNavigationFlow } from './NavigationContext';
import UserMainTabNavigator from './UserMainTabNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    const { flow } = useNavigationFlow();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {flow === 'home' && (
                <Stack.Screen name="HomeFlow" component={HomeNavigator} />
            )}
            {flow === 'auth' && (
                <Stack.Screen name="AuthFlow" component={AuthNavigator} />
            )}
            {flow === 'adminAuth' && (
                <Stack.Screen name="AuthFlow" component={AdminAuthNavigator} />
            )}
            {flow === 'main' && (
                <Stack.Screen name="MainApp" component={UserMainTabNavigator} />
            )}
        </Stack.Navigator>
    );
};

export default RootNavigator;
