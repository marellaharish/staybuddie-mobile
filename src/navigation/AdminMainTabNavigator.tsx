import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import AddRoomScreen from 'src/screens/admin/AddRoomScreen';
import AdminSettingsScreen from 'src/screens/admin/AdminSettingsScreen';
import BuddiesScreen from 'src/screens/admin/BuddiesScreen';
import DashboardScreen from 'src/screens/admin/DashboardScreen';

import AddBuddy from 'src/screens/admin/AddBuddy';
import EditBuddy from 'src/screens/admin/EditBuddy';
import { AdminTabParamList } from './types';

const Tab = createBottomTabNavigator<AdminTabParamList>();
const Stack = createNativeStackNavigator();

const AdminTabNavigator = () => {
    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: keyof typeof Ionicons.glyphMap = 'grid';

                    switch (route.name) {
                        case 'Dashboard':
                            iconName = focused ? 'grid' : 'grid-outline';
                            break;
                        case 'Buddies':
                            iconName = focused ? 'people' : 'people-outline';
                            break;
                        case 'AddRoom':
                            iconName = focused ? 'add-circle' : 'add-circle-outline';
                            break;
                        case 'Settings':
                            iconName = focused ? 'settings' : 'settings-outline';
                            break;
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '500',
                },
                tabBarActiveTintColor: '#1E3A1A',
                tabBarInactiveTintColor: '#9CA3AF',
                tabBarStyle: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    height: 60 + insets.bottom,
                    paddingBottom: insets.bottom > 0 ? insets.bottom : 10,
                    paddingTop: 5,
                    backgroundColor: '#fff',
                    position: 'absolute',
                },
            })}
        >
            <Tab.Screen name="Dashboard" component={DashboardScreen} />
            <Tab.Screen name="Buddies" component={BuddiesScreen} />
            <Tab.Screen name="AddRoom" component={AddRoomScreen} />
            <Tab.Screen name="Settings" component={AdminSettingsScreen} />
        </Tab.Navigator>
    );
};

const AdminMainTabNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AdminMainTabs" component={AdminTabNavigator} />
            <Stack.Screen
                name="EditBuddy"
                component={EditBuddy}
                options={{
                    presentation: 'modal',
                    animation: 'slide_from_bottom',
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="AddBuddy"
                component={AddBuddy}
                options={{
                    presentation: 'modal',
                    animation: 'slide_from_bottom',
                    headerShown: true,
                }}
            />
        </Stack.Navigator>
    );
};

export default AdminMainTabNavigator;
