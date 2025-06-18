import Icon from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { Pressable, TextInput } from 'react-native';
import { scale } from 'react-native-size-matters';
import { colors, FontSizes, Layouts, Metrics } from 'src/constants';

interface SearchInputProps {
    placeholder?: string;
    onSearchPress?: () => void;
    onBlur?: (text: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
    placeholder = 'Search for hostels',
    onSearchPress,
    onBlur,
}) => {
    const [value, setValue] = useState('');

    return (
        <Pressable
            onPress={onSearchPress}
            style={{
                backgroundColor: colors.gray100,
                borderRadius: Metrics.radiusMedium,
                paddingHorizontal: Metrics.paddingMedium,
                paddingVertical: scale(4),
                ...Layouts.row,
            }}
        >
            <Icon
                name="search-outline"
                size={Metrics.iconSize}
                color={colors.primary600}
                style={{ marginRight: Metrics.marginSmall }}
            />
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={setValue}
                onBlur={() => onBlur?.(value)}
                placeholderTextColor={colors.gray500}
                style={{
                    flex: 1,
                    fontSize: FontSizes.regular,
                    color: colors.text,
                }}
            />
        </Pressable>
    );
};

export default SearchInput;
