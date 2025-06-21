import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ComolaintsScreen from 'src/screens/user/ComolaintsScreen';
import HomeScreen from 'src/screens/user/HomeScreen';
import NotificationsScreen from 'src/screens/user/NotificationsScreen';
import PaymentsScreen from 'src/screens/user/PaymentsScreen';
import UserProfileScreen from 'src/screens/user/UserProfileScreen';
import { MainTabParamList, UserTabParamList } from './types'; // We will define this in the next step
import UserNavigator from './UserNavigator';

const Tab = createBottomTabNavigator<MainTabParamList>();
const Stack = createNativeStackNavigator<UserTabParamList>();


const UserTabNavigator = () => {
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
                            iconName = focused ? 'card' : 'card-outline';
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
            <Tab.Screen name="Payments" component={PaymentsScreen} />
            <Tab.Screen name="Complaints" component={ComolaintsScreen} />
            <Tab.Screen name="Profile" component={UserProfileScreen} />
        </Tab.Navigator>
    );

}



const UserMainTabNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="UserMainTabs"
                component={UserTabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="UserNavigator"
                component={UserNavigator}
                options={{ headerShown: false }}
            />
                            <Stack.Screen
                    name="Notifications"
                    component={NotificationsScreen}
                    options={{ headerShadowVisible: false, headerTitleAlign: 'center' }}
                />
        </Stack.Navigator>
    );
};

export default UserMainTabNavigator;