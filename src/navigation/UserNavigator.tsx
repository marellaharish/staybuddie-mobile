import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importing all the screens
import AboutScreen from '../screens/user/AboutScreen';
import EditProfileScreen from '../screens/user/EditProfileScreen';
import FAQScreen from '../screens/user/FAQScreen';
import FeedbackScreen from '../screens/user/FeedbackScreen';
import HelpScreen from '../screens/user/HelpScreen';
import LanguageScreen from '../screens/user/LanguageScreen';
import PrivacyPolicyScreen from '../screens/user/PrivacyPolicyScreen';
import RateUsScreen from '../screens/user/RateUsScreen';
import ShareAppScreen from '../screens/user/ShareAppScreen';
import TermsScreen from '../screens/user/TermsScreen';

import { UserStackParamList } from './types';

const Stack = createNativeStackNavigator<UserStackParamList>();

const UserNavigator = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen
                    name="EditProfile"
                    component={EditProfileScreen}

                    options={{ headerShadowVisible: false, headerTitleAlign: 'center' }}
                />
                <Stack.Screen
                    name="Language"
                    component={LanguageScreen}
                    options={{ headerShadowVisible: false, headerTitleAlign: 'center' }}
                />
                <Stack.Screen
                    name="FAQ"
                    component={FAQScreen}
                    options={{ headerShadowVisible: false, headerTitleAlign: 'center' }}
                />
                <Stack.Screen
                    name="ShareApp"
                    component={ShareAppScreen}
                    options={{ headerShadowVisible: false, headerTitleAlign: 'center' }}
                />
                <Stack.Screen
                    name="RateUs"
                    component={RateUsScreen}
                    options={{ headerShadowVisible: false, headerTitleAlign: 'center' }}
                />
                <Stack.Screen
                    name="Help"
                    component={HelpScreen}
                    options={{ headerShadowVisible: false, headerTitleAlign: 'center' }}
                />
                <Stack.Screen
                    name="PrivacyPolicy"
                    component={PrivacyPolicyScreen}
                    options={{ headerShadowVisible: false, headerTitleAlign: 'center' }}
                />
                <Stack.Screen
                    name="Feedback"
                    component={FeedbackScreen}
                    options={{ headerShadowVisible: false, headerTitleAlign: 'center' }}
                />
                <Stack.Screen
                    name="Terms"
                    component={TermsScreen}
                    options={{ headerShadowVisible: false, headerTitleAlign: 'center' }}
                />
                <Stack.Screen
                    name="About"
                    component={AboutScreen}
                    options={{ headerShadowVisible: false, headerTitleAlign: 'center' }}
                />
            </Stack.Navigator>
        </>
    );
};

export default UserNavigator; 
