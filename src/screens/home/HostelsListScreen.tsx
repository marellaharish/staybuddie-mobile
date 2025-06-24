import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Colors } from 'constants/Colors';
import { useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import HostelCard from 'src/components/common/HostelCard';
import SearchInput from 'src/components/common/SearchInput';
import { Layouts, Metrics } from 'src/constants';
import { HomeStackParamList } from 'src/navigation/types';
const HostelsListScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
    const screenWidth = Dimensions.get('window').width;

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
            headerTitle: 'Hostels',
            headerTitleAlign: 'center', // This centers the title
            headerShadowVisible: false,
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 15 }}>
                    <Ionicons name="arrow-back" size={24} color={Colors.light.text} />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity onPress={() => console.log('Open Filters')} style={{ marginRight: 15 }}>
                    <Ionicons name="filter-outline" size={24} color={Colors.light.text} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const dummyData = [
        {
            id: 1,
            image: 'https://images.adsttc.com/media/images/5d5d/e03f/284d/d166/2000/08c3/slideshow/A10.jpg',
            type: 'Boys Hostel',
            name: 'Crazy Boys Hostel',
            address: 'Survey no. 91, Technical Block, Madhava Reddy Colony',
            location: 'Gachibowli, Hyderabad',
            facilities: ['Wifi', 'Cooking', 'Laundry', 'Power', 'Bed'],
            available: true,
            rent: 5000,
        },
        {
            id: 2,
            image: 'https://images.adsttc.com/media/images/5d5d/f6a8/284d/d166/2000/08ff/slideshow/A28.jpg?1566439029',
            type: 'Girls Hostel',
            name: 'Serene Stay Hostel',
            address: 'Plot 45, Indira Nagar, Hitech City',
            location: 'Hyderabad, Telangana',
            facilities: ['Wifi', 'Laundry', 'Power', 'Bed'],
            available: false,
            rent: 6000,
        },
    ];

    const handleHostelPress = (item: any): void => {
        navigation.navigate('HostelDetails', { item: item });
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: Colors.light.background }]}>
            <View style={{ paddingHorizontal: Metrics.paddingMedium, paddingVertical: Metrics.paddingSmall }}>
                <SearchInput
                    onSearchPress={handleSearchClick}
                    onBlur={handleBlur}
                    placeholder="Search for hostels"
                />

                <ScrollView showsVerticalScrollIndicator={false}>
                    {dummyData.map((item) => (
                        <HostelCard
                            key={item.id}
                            item={item}
                            onPress={() => handleHostelPress(item)}
                        />
                    ))}
                </ScrollView>





            </View>


        </SafeAreaView >
    )
}
export default HostelsListScreen
const styles = StyleSheet.create({
    container: {
        ...Layouts.flex,

    },

})