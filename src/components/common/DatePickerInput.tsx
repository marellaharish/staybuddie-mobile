import moment from 'moment';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { colors, FontSizes, Metrics } from 'src/constants';
import Input from './Input';

type Props = {
    label?: string;
    value?: string;
    placeholder?: string;
    onChange: (date: string) => void;
    minimumDate?: Date;
    maximumDate?: Date;
    mode?: 'date' | 'time' | 'datetime';
    disabled?: boolean;
    leftElement?: React.ReactNode;
};

const DatePickerInput: React.FC<Props> = ({
    label = '',
    value = '',
    placeholder = 'Select date',
    onChange,
    minimumDate,
    maximumDate = new Date(),
    mode = 'date',
    disabled = false,
    leftElement,
}) => {
    const [visible, setVisible] = useState(false);

    const handleConfirm = (date: Date) => {
        const formatted = moment(date).format('DD/MM/YYYY');
        onChange(formatted);
        setVisible(false);
    };

    return (
        <View style={{ marginBottom: Metrics.marginMedium }}>
            {label !== '' && <Text style={styles.label}>{label}</Text>}

            <TouchableOpacity onPress={() => !disabled && setVisible(true)} activeOpacity={0.9}>
                <Input
                    value={value}
                    placeholder={placeholder}
                    editable={false}
                    pointerEvents="none"
                    containerStyle={styles.input}
                    leftElement={leftElement}
                />
            </TouchableOpacity>

            <DateTimePickerModal
                isVisible={visible}
                mode={mode}
                onConfirm={handleConfirm}
                onCancel={() => setVisible(false)}
                maximumDate={maximumDate}
                minimumDate={minimumDate}
            />
        </View>
    );
};

export default DatePickerInput;

const styles = StyleSheet.create({
    label: {
        fontSize: FontSizes.small,
        color: colors.gray700,
        marginBottom: Metrics.marginSmall,
    },
    input: {
        borderRadius: Metrics.radiusMedium,
        marginBottom: 0,
    },
});
