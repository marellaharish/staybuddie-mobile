
import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { colors, FontSizes } from 'src/constants';
import { Stacked } from '../../assets/images/images';

const OpeningSoonPoster = () => {
    return (
        <ImageBackground
            source={Stacked} // Replace with your actual image
            style={styles.background}
            imageStyle={styles.imageStyle}
        >
            <View style={styles.overlay}>
                <Text style={styles.title}>Opening Soon</Text>
                <Text style={styles.subtitle}>
                    Get ready to explore India’s best hostels with StayBuddie. We’re launching soon! Sign up for updates.
                </Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Notify Me</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default OpeningSoonPoster;

const styles = StyleSheet.create({
    background: {
        height: verticalScale(250),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        resizeMode: 'cover',
    },
    overlay: {
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
        paddingVertical: verticalScale(24),
        paddingHorizontal: moderateScale(20),
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    title: {
        color: colors.white,
        fontSize: FontSizes.xLarge,
        fontWeight: 'bold',
        marginBottom: verticalScale(10),
    },
    subtitle: {
        color: colors.white,
        fontSize: FontSizes.medium,
        textAlign: 'center',
        marginBottom: verticalScale(20),
    },
    button: {
        backgroundColor: colors.primary,
        paddingVertical: verticalScale(10),
        paddingHorizontal: moderateScale(22),
        borderRadius: moderateScale(25),
    },
    buttonText: {
        color: colors.black,
        fontSize: FontSizes.medium,
    },
});
