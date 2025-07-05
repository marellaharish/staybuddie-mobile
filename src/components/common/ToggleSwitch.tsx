// ToggleSwitch.tsx
import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { colors, FontSizes } from 'src/constants';

interface ToggleSwitchProps {
    label: string;
    value: boolean;
    onValueChange: (value: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, value, onValueChange }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Switch
                trackColor={{ false: colors.gray300, true: colors.primary300 }}
                thumbColor={value ? colors.primary800 : colors.gray100}
                ios_backgroundColor={colors.gray300}
                onValueChange={onValueChange}
                value={value}
            />
        </View>
    );
};

export default ToggleSwitch;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        fontSize: FontSizes.medium,
        color: colors.black,
    },
});
