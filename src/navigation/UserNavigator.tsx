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
                />
                <Stack.Screen
                    name="Language"
                    component={LanguageScreen}
                />
                <Stack.Screen
                    name="FAQ"
                    component={FAQScreen}
                />
                <Stack.Screen
                    name="ShareApp"
                    component={ShareAppScreen}
                />
                <Stack.Screen
                    name="RateUs"
                    component={RateUsScreen}
                />
                <Stack.Screen
                    name="Help"
                    component={HelpScreen}
                />
                <Stack.Screen
                    name="PrivacyPolicy"
                    component={PrivacyPolicyScreen}
                />
                <Stack.Screen
                    name="Feedback"
                    component={FeedbackScreen}
                />
                <Stack.Screen
                    name="Terms"
                    component={TermsScreen}
                />
                <Stack.Screen
                    name="About"
                    component={AboutScreen}
                />
            </Stack.Navigator>
        </>
    );
};

export default UserNavigator; 
