import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HostelDetailsScreen from 'src/screens/home/HostelDetailsScreen';
import HostelsListScreen from 'src/screens/home/HostelsListScreen';
import LandingScreen from 'src/screens/home/LandingScreen';
import { HomeStackParamList } from './types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Landing"
                component={LandingScreen}
                options={{ headerShadowVisible: false }}
            />
            <Stack.Screen
                name="HostelsList"
                component={HostelsListScreen}
                options={{ headerShadowVisible: false }}
            />
            <Stack.Screen
                name="HostelDetails"
                component={HostelDetailsScreen}
                options={{ headerShadowVisible: false }}
            />
        </Stack.Navigator>
    );
};

export default HomeNavigator;
