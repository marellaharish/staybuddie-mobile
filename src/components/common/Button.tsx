import { Colors } from 'constants/Colors';
import React from 'react';
import {
    ActivityIndicator,
    GestureResponderEvent,
    Pressable,
    Text,
    View
} from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../constants/colors';

type Variant = 'primary' | 'secondary' | 'outline';

interface ButtonProps {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    loading?: boolean;
    disabled?: boolean;
    variant?: Variant;
    icon?: React.ReactNode;
    style?: object;
    textStyle?: object;
}

const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    loading = false,
    disabled = false,
    variant = 'primary',
    icon,
    style,
    textStyle,
}) => {
    const getVariantStyle = () => {
        switch (variant) {
            case 'primary':
                return {
                    container: styles.primary,
                    text: styles.primaryText,
                };
            case 'secondary':
                return {
                    container: styles.secondary,
                    text: styles.secondaryText,
                };
            case 'outline':
                return {
                    container: styles.outline,
                    text: styles.outlineText,
                };
            default:
                return {
                    container: styles.primary,
                    text: styles.primaryText,
                };
        }
    };

    const { container, text } = getVariantStyle();

    return (
        <Pressable
            style={[
                styles.button,
                container,
                disabled && styles.disabled,
                style,
            ]}
            onPress={onPress}
            disabled={disabled || loading}
        >
            {loading ? (
                <ActivityIndicator color={colors.white} />
            ) : (
                <View style={styles.content}>
                    {icon && <View style={styles.icon}>{icon}</View>}
                    <Text style={[styles.text, text, textStyle]}>{title}</Text>
                </View>
            )}
        </Pressable>
    );
};

const styles = ScaledSheet.create({
    button: {
        borderRadius: scale(12),
        paddingVertical: '12@ms',
        paddingHorizontal: '16@ms',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: '8@ms',
    },
    text: {
        fontSize: '16@ms',
        fontWeight: '600',
    },
    primary: {
        backgroundColor: Colors.light.primary,
    },
    primaryText: {
        color: colors.white,
    },
    secondary: {
        backgroundColor: Colors.light.secondary,
    },
    secondaryText: {
        color: colors.white,
    },
    outline: {
        borderWidth: 1,
        borderColor: colors.primary,
        backgroundColor: 'transparent',
    },
    outlineText: {
        color: colors.primary,
    },
    disabled: {
        opacity: 0.5,
    },
});

export default Button;
