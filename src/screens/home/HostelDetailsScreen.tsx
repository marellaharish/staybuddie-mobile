import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Colors } from 'constants/Colors';
import * as Location from 'expo-location';
import { useNavigation } from 'expo-router';
import { Bed, Cable, CookingPot, WashingMachine, Wifi } from 'lucide-react-native';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Button from 'src/components/common/Button';
import HostelFoodTabs from 'src/components/specific/HostelFoodTabs';
import HostelReviews from 'src/components/specific/HostelReviews';
import ParallaxCarousel from 'src/components/specific/ParallaxCarousel';
import { colors, FontSizes, Layouts, Metrics } from 'src/constants';
import { HomeStackParamList } from 'src/navigation/types';
const screenWidth = Dimensions.get('window').width;


const HostelDetailsScreen = ({ route }: { route: any }) => {

    const { item } = route.params;
    console.log(item)
    const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

    const handleSearchClick = () => {
        // Optional: Navigate to search screen or open a modal
        console.log('Search input clicked');
    };

    const handleBlur = (text: string) => {
        // Trigger search/filter logic when user leaves the input
        console.log('User typed:', text);
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Details',
            headerTitleAlign: 'center', // This centers the title
            headerShadowVisible: false,
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 15 }}>
                    <Ionicons name="arrow-back" size={24} color={Colors.light.text} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const images = [
        { id: '1', image: { uri: 'https://images.adsttc.com/media/images/5d5d/f6a8/284d/d166/2000/08ff/slideshow/A28.jpg?1566439029' } },
        { id: '2', image: { uri: 'https://images.adsttc.com/media/images/5d5d/e466/284d/d166/2000/08d5/slideshow/A15.jpg?1566434374' } },
        { id: '3', image: { uri: 'https://images.adsttc.com/media/images/5d5a/6940/284d/d103/2300/02f1/slideshow/co-existence_of_the_old_and_the_new.jpg?1566206264' } },
    ];


    const Facility = ({ icon, label }: { icon: any, label: string }) => (
        <View style={styles.facilityItem}>
            {icon}
            <Text style={styles.facilityText}>{label}</Text>
        </View>
    );


    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    useEffect(() => {
        // Function to request location permission and fetch current location
        const getLocation = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied' as any);
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location.coords as any);
        };

        getLocation();
    }, []);

    if (errorMsg) {
        return <Text>{errorMsg}</Text>;
    }


    return (
        <SafeAreaView style={[styles.container, { backgroundColor: Colors.light.background }]}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <ParallaxCarousel data={images} height={220} />

                <View style={styles.metaContainer}>
                    <Text style={styles.type}>{item.type}</Text>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text numberOfLines={1} style={styles.address}>{item.address}</Text>
                    <Text style={styles.location}>{item.location}</Text>

                    <Text style={[styles.title, { marginTop: 16 }]}>Rent Details</Text>

                    <View style={styles.row}>
                        <Text style={styles.label}>1-Sharing</Text>
                        <Text style={styles.value}>₹15,000 /-</Text>
                    </View>


                    <View style={styles.row}>
                        <Text style={styles.label}>2-Sharing</Text>
                        <Text style={styles.value}>₹10,000 /-</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label}>3-Sharing</Text>
                        <Text style={styles.value}>₹8,000 /-</Text>
                    </View>

                    <Text style={[styles.title, { marginTop: 16, marginBottom: 8 }]}>About Hostel</Text>
                    <Text style={styles.location}>
                        Sunidhi Executive PG, located in Chhota Anjaiah Nagar, Gachibowli, Hyderabad, provides modern living spaces designed for comfort and convenience. With options for 2, 3, or 4 occupants per room, the PG features essential amenities such as attached bathrooms, 24/7 hot water, high-speed Wi-Fi, and safety lockers. Both AC and non-AC rooms are available, along with daily housekeeping and secure premises to ensure a hassle-free stay.
                    </Text>

                    <Text style={[styles.title, { marginTop: 16, marginBottom: 8 }]}>Food Menu</Text>


                    <HostelFoodTabs />

                    <Text style={[styles.title, { marginTop: 16, marginBottom: 8 }]}>Facilities</Text>

                    <View style={styles.facilitiesRow}>
                        {item.facilities.includes('Wifi') && (
                            <Facility icon={<Wifi size={20} color={colors.gray500} />} label="Wi-Fi" />
                        )}
                        {item.facilities.includes('Cooking') && (
                            <Facility icon={<CookingPot size={20} color={colors.gray500} />} label="Cooking" />
                        )}
                        {item.facilities.includes('Laundry') && (
                            <Facility icon={<WashingMachine size={20} color={colors.gray500} />} label="Laundry" />
                        )}
                        {item.facilities.includes('Power') && (
                            <Facility icon={<Cable size={20} color={colors.gray500} />} label="24/7 Power" />
                        )}
                        {item.facilities.includes('Bed') && (
                            <Facility icon={<Bed size={20} color={colors.gray500} />} label="Bed" />
                        )}
                    </View>

                    <Text style={[styles.title, { marginTop: 16 }]}>location</Text>



                    <View style={{ height: 200, width: '100%', borderRadius: 12, overflow: 'hidden', marginBottom: 16, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, backgroundColor: 'white' }}>
                        <MapView
                            style={{ flex: 1 }}
                            region={{
                                latitude: 12.9716,
                                longitude: 77.5946,
                                latitudeDelta: 0.01,
                                longitudeDelta: 0.01,
                            }}
                        >
                            <Marker coordinate={{ latitude: 12.9716, longitude: 77.5946 }} />
                        </MapView>
                    </View>

                    <Text style={[styles.title, { marginTop: 16, marginBottom: 8 }]}>Reviews</Text>


                    <HostelReviews
                        ratingSummary={{
                            average: 4.4,
                            total: 120,
                            breakdown: [
                                { stars: 5, percent: 40 },
                                { stars: 4, percent: 30 },
                                { stars: 3, percent: 15 },
                                { stars: 2, percent: 10 },
                                { stars: 1, percent: 5 },
                            ],
                        }}
                        reviews={[
                            {
                                id: '1',
                                name: 'Anya Sharma',
                                avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
                                timeAgo: '2 months ago',
                                rating: 5,
                                comment: 'Great place to stay! The rooms are clean and the staff is very friendly.',
                                likes: 15,
                                dislikes: 2,
                            },
                            {
                                id: '2',
                                name: 'Rohan Verma',
                                avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
                                timeAgo: '3 months ago',
                                rating: 4,
                                comment: 'Good location and decent facilities. Food could be better.',
                                likes: 8,
                                dislikes: 1,
                            },
                        ]}
                    />





                    <Button
                        title="Book Appointment"
                        onPress={() => { console.log("pressed") }}
                        variant="primary"
                        loading={false}
                        style={styles.button}
                    />

                </View>
            </ScrollView>

        </SafeAreaView>
    )
}
export default HostelDetailsScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        padding: 16,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    locationText: {
        marginLeft: 4,
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.light.text,
    },
    subtitle: {
        fontSize: 14,
        color: Colors.light.text,
    },
    bodyContainer: {
        padding: 16,
    },
    title: {
        fontSize: FontSizes.large,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    metaContainer: {
        ...Layouts.column,
        paddingHorizontal: Metrics.paddingMedium,
    },
    type: {
        fontSize: FontSizes.small,
        color: colors.gray400,
    },
    name: {
        fontSize: FontSizes.xLarge,
        fontWeight: '600',
        color: colors.black,
    },
    address: {
        fontSize: FontSizes.small,
        color: colors.gray600,
        maxWidth: screenWidth * 0.8,
        marginTop: Metrics.marginSmall,
    },
    location: {
        fontSize: FontSizes.small,
        color: colors.gray600,
    },
    facilitiesRow: {
        ...Layouts.row,
        ...Layouts.spaceBetween,
        flexWrap: 'wrap',
        marginTop: Metrics.marginMedium,

    },
    facilityItem: {
        ...Layouts.row,
        alignItems: 'center',
        marginBottom: Metrics.marginMedium,
        padding: Metrics.paddingMedium,
        width: '48%',
        borderWidth: 1,
        borderColor: colors.gray200,
        borderRadius: Metrics.radiusMedium,
    },
    facilityText: {
        fontSize: FontSizes.medium,
        color: colors.black,
        marginLeft: Metrics.marginMedium,
        fontWeight: '500',
    },
    row: {
        ...Layouts.spaceBetween,
        ...Layouts.row,
        marginBottom: Metrics.marginSmall,
    },
    label: {
        fontSize: FontSizes.medium,
        color: colors.gray600,
    },
    value: {
        fontSize: FontSizes.medium,
        color: colors.gray700,
    },
    button: {
        marginTop: Metrics.marginMedium,
        borderRadius: Metrics.radiusMedium,
        marginBottom: Metrics.marginXXLarge,
    },
    image: {
        height: 100,
        width: 150,
        borderRadius: Metrics.radiusMedium
    }
})