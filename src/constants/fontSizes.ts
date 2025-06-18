import { moderateScale, scale } from 'react-native-size-matters';

export const FontSizes = {
    tiny: scale(10),
    small: scale(12),
    medium: scale(14),
    regular: moderateScale(16),
    large: moderateScale(18),
    xLarge: moderateScale(22),
    xxLarge: moderateScale(28),
    xxxLarge: moderateScale(30),
};
