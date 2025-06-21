// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationProvider } from './NavigationContext';
import RootNavigator from './RootNavigator';

const AppNavigator = () => {
    return (
        <NavigationProvider>
            <RootNavigator />
        </NavigationProvider>
    );
};

export default AppNavigator;
