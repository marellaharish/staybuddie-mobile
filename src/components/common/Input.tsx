import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    TextStyle,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { FontSizes } from '../../constants';

interface InputProps extends TextInputProps {
    error?: string;
    containerStyle?: object;
    inputStyle?: object;
    labelStyle?: TextStyle;
    rightElement?: React.ReactNode;
    leftElement?: React.ReactNode;
    isPassword?: boolean;
}

const Input: React.FC<InputProps> = ({
    error,
    containerStyle,
    inputStyle,
    labelStyle,
    rightElement,
    leftElement,
    onFocus,
    onBlur,
    isPassword = false,
    ...rest
}) => {
    const [secureText, setSecureText] = useState<boolean>(isPassword);

    const togglePasswordVisibility = () => {
        console.log("Toggling password visibility", secureText);
        setSecureText(prevState => !prevState);
    };

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = (e: any) => {
        setIsFocused(true);
        onFocus?.(e);
    };

    const handleBlur = (e: any) => {
        setIsFocused(false);
        onBlur?.(e);
    };

    return (
        <View style={[styles.container, containerStyle]}>
            <View style={[styles.inputWrapper, isFocused && styles.inputWrapperFocused, containerStyle]}>
                {leftElement && <View style={styles.sideElement}>{leftElement}</View>}

                <TextInput
                    placeholderTextColor="#888"
                    secureTextEntry={secureText}
                    style={[styles.input, inputStyle]}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...rest}

                />

                {rightElement && isPassword && (
                    <TouchableWithoutFeedback onPress={togglePasswordVisibility}>
                        <Ionicons name={secureText ? "eye" : "eye-off"} size={20} color="#555" />
                    </TouchableWithoutFeedback>
                )}
            </View>

            {!!error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: verticalScale(16),
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: scale(12),
        paddingHorizontal: scale(14),
        backgroundColor: '#fff',
    },
    inputWrapperFocused: {
        borderColor: '#007AFF', // iOS blue (can customize)
    },
    input: {
        flex: 1,
        fontSize: FontSizes.regular,
        paddingVertical: verticalScale(10),
        color: '#000',
        paddingHorizontal: scale(10),
    },
    error: {
        marginTop: scale(4),
        color: 'red',
        fontSize: FontSizes.tiny,
    },
    sideElement: {
        marginHorizontal: scale(4),
    },
});

export default Input;
