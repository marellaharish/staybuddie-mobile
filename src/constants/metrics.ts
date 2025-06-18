import { moderateScale, scale } from 'react-native-size-matters';

export const Metrics = {
    screenPadding: scale(16),
    marginSmall: scale(8),
    marginMedium: scale(16),
    marginLarge: scale(24),
    marginXLarge: scale(32),
    marginXXLarge: scale(48),

    paddingSmall: scale(8),
    paddingMedium: scale(16),
    paddingLarge: scale(24),

    radiusSmall: scale(4),
    radiusMedium: scale(8),
    radiusLarge: scale(16),

    iconSize: moderateScale(24),
    imageSize: scale(100),
};
