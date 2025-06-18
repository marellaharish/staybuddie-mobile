import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Pressable, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../constants/colors';

type Props = {
    iconName: keyof typeof Ionicons.glyphMap;
    title: string;
    subtitle: string;
    gradientColors?: string[];
    buttonText?: string;
    onPress?: () => void;
    showButton?: boolean;
    style?: ViewStyle;
};

const InfoCard: React.FC<Props> = ({
    iconName,
    title,
    subtitle,
    gradientColors = [colors.warning500, colors.danger300],
    buttonText = 'Know More',
    onPress,
    showButton = false,
    style = {}
}) => {
    return (
        <>
            <View style={[styles.card, style]}>
                <LinearGradient colors={gradientColors} style={styles.iconWrapper}>
                    <Ionicons name={iconName} size={24} color={colors.white} />
                </LinearGradient>

                <View style={styles.textWrapper}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>

                </View>
            </View>
            {showButton && (
                <Pressable onPress={onPress} style={styles.button}>
                    <Text style={styles.buttonText}>{buttonText}</Text>
                </Pressable>
            )}
        </>
    );
};

export default InfoCard;

const styles = StyleSheet.create<{
    card: ViewStyle;
    iconWrapper: ViewStyle;
    textWrapper: ViewStyle;
    title: TextStyle;
    subtitle: TextStyle;
    button: ViewStyle;
    buttonText: TextStyle;
}>({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        padding: scale(14),
        borderRadius: scale(16),
        marginVertical: verticalScale(8),
        shadowColor: colors.black,
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    iconWrapper: {
        width: scale(48),
        height: scale(48),
        borderRadius: scale(12),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: scale(12),
    },
    textWrapper: {
        flex: 1,
    },
    title: {
        fontSize: scale(14),
        fontWeight: 'bold',
        color: colors.text,
    },
    subtitle: {
        fontSize: scale(12),
        color: colors.textLight,
        marginTop: verticalScale(2),
    },
    button: {
        marginTop: verticalScale(8),
        backgroundColor: colors.warning500,
        paddingVertical: verticalScale(10),
        paddingHorizontal: scale(12),
        borderRadius: scale(8),
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: scale(12),
        fontWeight: 'bold',
        color: colors.white,
    },
});
