// App.tsx
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/contexts/AuthContext';
import AppNavigator from './src/navigation/AppNavigator';
import { navigationRef } from './src/navigation/navigationService';

export default function App() {
    useEffect(() => {
        const interval = setInterval(() => {
            console.log('🧭 navigationRef.isReady():', navigationRef.isReady());
        }, 500);

        return () => clearInterval(interval);
    }, []);


    return (
        <SafeAreaProvider>
            <AuthProvider>
                <NavigationContainer ref={navigationRef}>
                    <AppNavigator />
                </NavigationContainer>
            </AuthProvider>
        </SafeAreaProvider>
    );
}
