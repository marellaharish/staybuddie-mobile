import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Colors } from 'constants/Colors';
import { LogIn } from 'lucide-react-native';
import { useLayoutEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { Blurry, Stacked } from 'src/assets/images/images';
import BottomSheetWrapper, { BottomSheetRef } from 'src/components/common/BottomSheetWrapper';
import Button from 'src/components/common/Button';
import InfoCard from 'src/components/common/InfoCard';
import { colors, FontSizes, Metrics } from 'src/constants';
import { useNavigationFlow } from 'src/navigation/NavigationContext';
import { HomeStackParamList } from 'src/navigation/types';

const LandingScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
    const screenWidth = Dimensions.get('window').width;
    const sheetRef = useRef<BottomSheetRef>(null);

    const cityImages = {
        Hyderabad: 'https://t4.ftcdn.net/jpg/02/39/79/99/240_F_239799986_PJLW37VwkhoSqvjA5QzWQlbvVVK8bnmr.jpg', // Explicitly define the type of cityImages
        Chennai: 'https://www.swantour.com/blogs/wp-content/uploads/2018/03/Chennai-Tourist-Places.jpg',
        Mumbai: 'https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg',
    };

    const [cities, setCities] = useState<string[]>(['Hyderabad', 'Chennai', 'Mumbai']); // fallback


    const handleCityPress = (city: string): void => {
        navigation.navigate('HostelsList', { city: city });
    };
    const { goToAuth } = useNavigationFlow();

    const handleLogin = () => {
        // validate inputs...
        goToAuth(); // Switch to authenticated tab navigator
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View>
                    <TouchableOpacity style={styles.locationContainer} onPress={() => console.log('Select City')}>
                        <Ionicons name="location-sharp" size={18} color={Colors.light.primary} />
                        <Text style={styles.locationText}>Hyderabad</Text>
                        <Ionicons name="chevron-down-sharp" size={18} color={Colors.light.text} style={{ marginLeft: 4 }} />
                    </TouchableOpacity>
                    <Text
                        style={[styles.subtitle, { maxWidth: screenWidth * 0.5 }]}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        Survey no. 91, Technical Block, Madhava Reddy Colony, Gachibowli, Hyderabad, Telangana 500032
                    </Text>
                </View>
            ),
            headerTitle: '',
            headerRight: () => (
                <TouchableOpacity onPress={handleLogin}>
                    {/* <Image source={{ uri: 'https://lh3.googleusercontent.com/-cU6G9HYrUFQ/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfklCgnNYx1TBn8-2QVuuFWWmArXqSg/photo.jpg?sz=46' }} style={{ width: 40, height: 40, borderRadius: 20, }} /> */}
                    <LogIn size={24} color={Colors.light.text} />
                </TouchableOpacity>
            )
        });
    }, [navigation]);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ImageBackground source={Blurry} style={styles.container} resizeMode="cover">
                <ScrollView style={styles.container}>
                    {/* <ParallaxCarousel /> */}
                    <ImageBackground
                        source={Stacked} // Replace with your actual image
                        style={styles.background}
                        imageStyle={styles.imageStyle}
                    >
                        <View style={styles.overlay}>
                            <Text style={styles.title2}>Opening Soon</Text>
                            <Text style={styles.subtitle2}>
                                Get ready to explore India’s best hostels with StayBuddie. We’re launching soon! Sign up for updates.
                            </Text>

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Notify Me</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                    <View style={styles.citycontainer}>
                        <Text style={styles.title}>Explore Our <Text style={styles.highlight}>Cities</Text></Text>
                        <FlatList
                            data={cities}
                            keyExtractor={(item) => item}
                            horizontal
                            renderItem={({ item }) => (
                                <Pressable style={styles.card} onPress={() => handleCityPress(item)}>
                                    <Image
                                        source={{ uri: cityImages[item as keyof typeof cityImages] || 'https://i.imgur.com/V3zjFHH.png' }}
                                        style={styles.image}
                                    />
                                    <Text style={[styles.city, { maxWidth: 100 }]}
                                        numberOfLines={1}
                                        ellipsizeMode="tail">{item}</Text>
                                </Pressable>
                            )}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={styles.infocardcontainer}>
                        <InfoCard
                            iconName="pricetag-outline"
                            title="Lowest Price Guarantee"
                            subtitle="Only on App"
                        />

                        <InfoCard
                            iconName="briefcase-outline"
                            title="Fabulous, or Free"
                            subtitle="Hassle-free stay, else we pay"
                            showButton
                            onPress={() => sheetRef.current?.open()}
                        />
                    </View>

                    <BottomSheetWrapper
                        ref={sheetRef}
                        snapPoints={['25%', '50%']}
                        context={
                            <View>
                                <Button title="Close Sheet" onPress={() => sheetRef.current?.close()} />
                            </View>
                        }
                    />



                </ScrollView>
            </ImageBackground>
        </GestureHandlerRootView>
    );
};

export default LandingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4eaea",
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {
        marginLeft: Metrics.marginSmall,
        fontWeight: '700',
        fontSize: FontSizes.large,
        color: Colors.light.text,
    },
    subtitle: {
        fontSize: FontSizes.small,
        color: Colors.light.gray,
    },
    citycontainer: {
        padding: Metrics.paddingMedium,
    },
    title: {
        fontSize: FontSizes.xLarge,
        fontWeight: '600',
        marginBottom: Metrics.marginMedium
    },
    highlight: {
        color: '#FF6B00'
    },
    card: {
        alignItems: 'center',
        marginRight: Metrics.marginMedium
    },
    image: {
        width: Metrics.imageSize / 1.2,
        height: Metrics.imageSize / 1.2,
        borderRadius: 150,
        marginBottom: 6,
        borderWidth: 3,
        borderColor: "#FF6B00",
        shadowColor: colors.black,
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    city: {
        fontSize: FontSizes.regular,
        fontWeight: '600',
        textAlign: 'center'
    },
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
    title2: {
        color: colors.white,
        fontSize: FontSizes.xLarge,
        fontWeight: 'bold',
        marginBottom: verticalScale(10),
    },
    subtitle2: {
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
    infocardcontainer: {
        paddingHorizontal: Metrics.paddingMedium,
        paddingBottom: Metrics.paddingLarge
    }
});
