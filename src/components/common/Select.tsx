// Select.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { colors, FontSizes, Metrics } from 'src/constants';

interface SelectProps {
    label?: string;
    data: { label: string; value: string }[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const Select: React.FC<SelectProps> = ({ label, data, value, onChange, placeholder }) => {
    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <Dropdown
                style={styles.dropdown}
                data={data}
                labelField="label"
                valueField="value"
                placeholder={placeholder ?? 'Select an option'}
                value={value}
                onChange={item => onChange(item.value)}
            />
        </View>
    );
};

export default Select;

const styles = StyleSheet.create({
    container: {
        marginBottom: Metrics.marginMedium,
    },
    label: {
        fontSize: FontSizes.medium,
        color: colors.gray800,
    },
    dropdown: {
        height: 50,
        borderColor: colors.gray300,
        borderWidth: 1,
        borderRadius: Metrics.radiusMedium,
        paddingHorizontal: Metrics.paddingSmall,
        backgroundColor: colors.white,
    },
});
