import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Colors } from 'constants/Colors';
import { Bell, Menu } from 'lucide-react-native';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors, FontSizes, Layouts, Metrics } from 'src/constants';
import { HomeStackParamList } from 'src/navigation/types';
const screenWidth = Dimensions.get('window').width;
const HomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

    const getGreeting = () => {
        const hour = new Date().getHours();

        if (hour < 12) {
            return 'Good Morning!';
        } else if (hour < 18) {
            return 'Good Afternoon!';
        } else {
            return 'Good Evening!';
        }
    };


    const [greeting, setGreeting] = useState(getGreeting());

    useEffect(() => {
        const interval = setInterval(() => {
            setGreeting(getGreeting());
        }, 60000); // update every minute

        return () => clearInterval(interval);
    }, []);



    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={[styles.citycontainer, { ...Layouts.row }]}>
                    <View>
                        <Image source={{ uri: 'https://lh3.googleusercontent.com/-cU6G9HYrUFQ/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfklCgnNYx1TBn8-2QVuuFWWmArXqSg/photo.jpg?sz=46' }} style={{ width: 40, height: 40, borderRadius: 20, }} />
                    </View>
                    <View style={{ marginLeft: Metrics.marginMedium }}>
                        <Text style={styles.title}>Hello, <Text style={styles.highlight}>Shannu</Text></Text>
                        <Text style={styles.subtitle}>{greeting}</Text>

                    </View>
                </View>
            ),
            headerTitle: '',
            headerShadowVisible: false,
            headerRight: () => (
                <>
                    <TouchableOpacity onPress={() => console.log('Notifications')} style={{ marginRight: Metrics.paddingMedium }}>
                        <Bell size={24} color={Colors.light.text} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('Notifications')} style={{ marginRight: Metrics.paddingMedium }}>
                        <Menu size={24} color={Colors.light.text} />
                    </TouchableOpacity>
                </>
            )
        });
    }, [navigation]);
    return (
        <>
            <SafeAreaProvider>
                <ScrollView style={[styles.container]}>

                    <Image source={{ uri: 'https://images.adsttc.com/media/images/5d5d/e03f/284d/d166/2000/08c3/slideshow/A10.jpg' }} style={{ width: '100%', height: 150, borderRadius: Metrics.radiusMedium, overflow: 'hidden', marginTop: Metrics.marginMedium }} />
                    <View style={styles.metaContainer}>
                        <Text style={styles.type}>Current Booking.</Text>
                        <Text style={[styles.name]}>Crazy Boys Hostel</Text>
                        <Text numberOfLines={1} style={styles.address}>Survey no. 91, Technical Block, Madhava Reddy Colony</Text>
                        <Text style={styles.type}>Check-in: 15 Aug 2025.</Text>
                    </View>
                    <Text style={[styles.name, { fontSize: FontSizes.xLarge }]}>Payment Reminders</Text>

                    <View style={{ ...Layouts.row, ...Layouts.spaceBetween }}>
                        <View>

                            <Text>Upcoming Payment</Text>
                        </View>
                        <Image source={{ uri: 'https://images.adsttc.com/media/images/5d5d/e03f/284d/d166/2000/08c3/slideshow/A10.jpg' }} style={{ width: 150, height: 100, borderRadius: Metrics.radiusMedium, overflow: 'hidden', marginTop: Metrics.marginMedium }} />

                    </View>


                </ScrollView>
            </SafeAreaProvider >
        </>
    )
}
export default HomeScreen
const styles = StyleSheet.create({
    container: {
        ...Layouts.flex,
        backgroundColor: colors.white,
        paddingHorizontal: Metrics.paddingMedium,

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
    },
    highlight: {
        color: '#FF6B00'
    },
    metaContainer: {
        ...Layouts.column,
        paddingVertical: Metrics.paddingMedium,
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
    },
})