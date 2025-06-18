// src/navigation/AppNavigator.tsx
import React from 'react';
import AuthNavigator from './AuthNavigator'; // Your login/signup stack
import HomeNavigator from './HomeNavigator';
import UserMainTabNavigator from './UserMainTabNavigator';

const AppNavigator = () => {
    // For now, we'll assume the user is authenticated.
    // Later, this will come from your AuthContext or Redux store.
    const isAuthenticated = true;

    // Simulate current route or app state
    const currentRoute: 'home' | 'login' | 'default' = 'home'; // Add 'login' here

    let content;

    if (isAuthenticated) {
        switch (currentRoute) {
            case 'home':
                content = <UserMainTabNavigator />;
                break;
            // case 'login':
            //     content = <AuthNavigator />;
            //     break;
            default:
                content = <HomeNavigator />;
                break;
        }
    } else {
        content = <AuthNavigator />;
    }

    return <>{content}</>;
};

export default AppNavigator;
