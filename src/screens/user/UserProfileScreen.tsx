import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from 'expo-router';
import {
    Headset,
    Info,
    Languages,
    LogOut,
    MessageCircleQuestion, MessageSquare,
    Pencil,
    ScrollText,
    Share2,
    ShieldCheck,
    Star
} from 'lucide-react-native';
import React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, FontSizes, Layouts, Metrics } from 'src/constants';

const userOptions = [
    {
        icon: <Pencil size={20} color={colors.gray700} />,
        label: 'Edit Profile',
        route: 'EditProfile',
        description: 'Edit your personal information and profile details.'
    },
    {
        icon: <Languages size={20} color={colors.gray700} />,
        label: 'Change Language',
        route: 'Language',
        description: 'Switch between different language options for the app.'
    },
    {
        icon: <MessageCircleQuestion size={20} color={colors.gray700} />,
        label: 'FAQ',
        route: 'FAQ',
        description: 'Get answers to frequently asked questions.'
    },
    {
        icon: <Share2 size={20} color={colors.gray700} />,
        label: 'Share App',
        route: 'Share',
        description: 'Share the app with your friends and family.'
    },
    {
        icon: <Star size={20} color={colors.gray700} />,
        label: 'Rate Us',
        route: 'RateUs',
        description: 'Rate the app on the app store and leave your feedback.'
    },
    {
        icon: <Headset size={20} color={colors.gray700} />,
        label: 'Customer Support',
        route: 'Help',
        description: 'Contact customer support for assistance with issues.'
    },
    {
        icon: <ShieldCheck size={20} color={colors.gray700} />,
        label: 'Privacy Policy',
        route: 'PrivacyPolicy',
        description: 'Review the app’s privacy policy and data handling practices.'
    },
    {
        icon: <MessageSquare size={20} color={colors.gray700} />,
        label: 'Feedback',
        route: 'Feedback',
        description: 'Provide your feedback to help improve the app.'
    },
    {
        icon: <ScrollText size={20} color={colors.gray700} />,
        label: 'Terms and Conditions',
        route: 'Terms',
        description: 'Review the terms and conditions for using the app.'
    },
    {
        icon: <Info size={20} color={colors.gray700} />,
        label: 'About',
        route: 'About',
        description: 'Learn more about the app and its creators.'
    },
    {
        icon: <LogOut size={20} color={colors.gray700} />,
        label: 'Logout',
        route: 'Logout',
        description: 'Log out of your account to end your session.'
    },
];


const UserProfileScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const renderItem = ({ item }: { item: typeof userOptions[0] }) => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(item.route)}>
            <View style={[Layouts.row, styles.icon]}>{item.icon}</View>
            <View>
                <Text style={styles.label}>{item.label}</Text>
                <Text style={styles.labelSmall} numberOfLines={1} ellipsizeMode="tail" >{item.description}</Text>
            </View>

        </TouchableOpacity>
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.profileHeader}>
                <Image
                    source={{ uri: 'https://randomuser.me/api/portraits/women/1.jpg' }}
                    style={styles.avatar}
                />
                <View>
                    <Text style={styles.name}>Ananya Sharma</Text>
                    <Text style={styles.phone}>+91 9876543210</Text>
                </View>
            </View>

            <FlatList
                data={userOptions}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ paddingBottom: Metrics.marginLarge }}
                showsVerticalScrollIndicator={false}
            />
        </ScrollView>
    );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: Metrics.marginMedium,
        marginBottom: 70,

    },
    profileHeader: {
        ...Layouts.row,
        alignItems: 'center',
        marginBottom: Metrics.marginLarge,
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        marginRight: Metrics.marginMedium,
    },
    name: {
        fontSize: FontSizes.large,
        fontWeight: '600',
        color: colors.black,
    },
    phone: {
        fontSize: FontSizes.small,
        color: colors.gray500,
        marginTop: 2,
    },
    item: {
        ...Layouts.row,
        alignItems: 'center',
        borderRadius: Metrics.radiusMedium,
        marginBottom: Metrics.marginMedium,
        paddingBottom: Metrics.paddingSmall,
        paddingHorizontal: Metrics.paddingSmall,
    },
    label: {
        fontSize: FontSizes.medium,
        color: colors.gray800,
        marginLeft: Metrics.marginMedium,
    },
    labelSmall: {
        fontSize: FontSizes.small,
        color: colors.gray500,
        marginLeft: Metrics.marginMedium,
        maxWidth: '90%',
    },
    icon: {
        backgroundColor: colors.gray100,
        borderRadius: Metrics.radiusMedium,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
