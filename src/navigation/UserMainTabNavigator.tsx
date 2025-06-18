import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import ProfileScreen from '../screens/main/ProfileScreen';
import SearchScreen from '../screens/main/SearchScreen';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeScreen from 'src/screens/user/HomeScreen';
import { MainTabParamList } from './types'; // We will define this in the next step

const Tab = createBottomTabNavigator<MainTabParamList>();

const UserMainTabNavigator = () => {
    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: keyof typeof Ionicons.glyphMap = 'home';

                    switch (route.name) {
                        case 'Home':
                            iconName = focused ? 'home' : 'home-outline';
                            break;
                        case 'Payments':
                            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
                            break;
                        case 'Complaints':
                            iconName = focused ? 'bag' : 'bag-outline';
                            break;
                        case 'Profile':
                            iconName = focused ? 'person' : 'person-outline';
                            break;
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '500',
                },
                tabBarActiveTintColor: '#1E3A1A', // dark green
                tabBarInactiveTintColor: '#9CA3AF', // muted gray 
                tabBarStyle: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    height: 60 + insets.bottom, // Add safe area padding
                    paddingBottom: insets.bottom > 0 ? insets.bottom : 10,
                    paddingTop: 5,
                    backgroundColor: '#fff',
                    position: 'absolute',
                },
            })}
        >

            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Payments" component={ProfileScreen} />
            <Tab.Screen name="Complaints" component={SearchScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
};

export default UserMainTabNavigator;