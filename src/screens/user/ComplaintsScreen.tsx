import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Colors } from 'constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { useLayoutEffect, useState } from 'react';
import { FlatList, Image, LogBox, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from 'src/components/common/Button';
import Input from 'src/components/common/Input';
import SearchInput from 'src/components/common/SearchInput';
import { colors, FontSizes, Layouts, Metrics } from 'src/constants';
import { HomeStackParamList } from 'src/navigation/types';

LogBox.ignoreLogs([
    'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation',
]);
const paymentData = [
    {
        month: 'Water Leakage',
        date: '2023-10-15',
        roomNo: '101',
        status: 'Accepted',
        description: 'Leakage in bathroom pipe causing water flow.',
    },
    {
        month: 'Electricity Fluctuation',
        date: '2023-11-02',
        roomNo: '102',
        status: 'Pending',
        description: 'Frequent power cuts during night hours.',
    },
    {
        month: 'Wi-Fi Not Working',
        date: '2023-12-05',
        roomNo: '103',
        status: 'Rejected',
        description: 'Wi-Fi not connecting to devices in the room.',
    },
    {
        month: 'Room Cleaning Request',
        date: '2024-01-10',
        roomNo: '104',
        status: 'Accepted',
        description: 'Need deep cleaning before inspection.',
    },
    {
        month: 'AC Not Cooling',
        date: '2024-02-22',
        roomNo: '105',
        status: 'Pending',
        description: 'AC is running but not cooling properly.',
    },
    {
        month: 'Pest Control',
        date: '2024-03-14',
        roomNo: '106',
        status: 'Accepted',
        description: 'Cockroaches and insects in the kitchen area.',
    },
    {
        month: 'Furniture Repair',
        date: '2024-04-01',
        roomNo: '107',
        status: 'Pending',
        description: 'Table leg is broken and needs fixing.',
    },
    {
        month: 'Light Bulb Replacement',
        date: '2024-05-18',
        roomNo: '108',
        status: 'Accepted',
        description: 'Ceiling light not working in study area.',
    },
];


const ComplaintsScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: `Complaint's`,
            headerTitleAlign: 'center', // This centers the title
            headerShadowVisible: false,
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 15 }}>
                    <ArrowLeft size={24} color={Colors.light.text} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const renderItem = ({ item }: { item: typeof paymentData[0] }) => (
        <View style={styles.card}>
            <View style={Layouts.flex}>
                <View style={[Layouts.flex, Layouts.row, Layouts.spaceBetween]}>
                    <Text style={[styles.month, { width: '50%' }]}>{item.month}</Text>
                    <Text style={styles.month}>Submitted: 2023-10-15</Text>
                </View>
                <View style={[Layouts.flex, Layouts.row, Layouts.spaceBetween]}>
                    <Text style={styles.text}>Room No: {item.roomNo}</Text>
                    <Text style={styles.text}>Status : {item.status}</Text>
                </View>
                <Text style={styles.text}>Description: {item.description}</Text>
            </View>
        </View>
    );


    const [images, setImages] = useState<string[]>([]);

    const pickImage = async () => {
        // Ask for permission
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            alert("Permission to access gallery is required!");
            return;
        }

        // Launch image picker
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const uris = result.assets.map(asset => asset.uri);
            setImages(uris);
        }

    };


    const handleSearchClick = () => {
        // Optional: Navigate to search screen or open a modal
        console.log('Search input clicked');
    };

    const handleBlur = (text: string) => {
        // Trigger search/filter logic when user leaves the input
        console.log('User typed:', text);
    };

    return (
        <ScrollView style={[styles.container]}>
            <View >
                <Text style={[styles.inputlabel]}>Title</Text>
                <Input
                    placeholder="Enter Complaint Title"
                    autoCapitalize="none"
                    containerStyle={{ borderRadius: Metrics.radiusMedium, }}
                />
            </View>
            <View >
                <Text style={[styles.inputlabel]}>Complaint Type</Text>
                <Input
                    placeholder="Complaint Type"
                    autoCapitalize="none"
                    containerStyle={{ borderRadius: Metrics.radiusMedium, }}
                />
            </View>
            <View >
                <Text style={[styles.inputlabel]}>Description</Text>
                <Input
                    placeholder="Describe your complaint"
                    autoCapitalize="none"
                    multiline={true}
                    numberOfLines={4}
                    inputStyle={{ paddingVertical: Metrics.paddingMedium }}
                    containerStyle={{ borderRadius: Metrics.radiusMedium, }}

                />
            </View>

            <View>
                <Text style={[styles.inputlabel]}>Room Number</Text>
                <Input
                    placeholder="Enter Your Room Number"
                    autoCapitalize="none"
                    containerStyle={{ borderRadius: Metrics.radiusMedium, }}
                />
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20, width: '100%' }}>
                {images.length === 0 ? <>
                    <Button title="Upload Image(Optional)" onPress={pickImage} variant='outline' style={{ width: '100%' }} />
                </> : <>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 10 }}>
                        {images.map((uri, index) => (
                            <Image
                                key={index}
                                source={{ uri }}
                                style={{ width: 100, height: 100, marginRight: 10, marginBottom: 10, borderRadius: 10 }}
                            />
                        ))}
                    </View>
                </>}

            </View>

            <Button
                title="Submit"
                onPress={() => console.log("Button Clicked")}
                variant="primary"
                loading={false}
                style={styles.button}
            />


            <View>
                <Text style={[styles.name, { fontSize: FontSizes.xLarge }]}>Complaints History</Text>


                <SearchInput
                    onSearchPress={handleSearchClick}
                    onBlur={handleBlur}
                    placeholder="Search Complaints"
                />

                <View style={[Layouts.row, { marginTop: Metrics.marginSmall }]}>
                    <View style={[styles.chip, styles.chipActive]}><Text style={[styles.chipText, styles.chipActiveText]}>All</Text></View>
                    <View style={[styles.chip]}><Text style={[styles.chipText]}>Pending</Text></View>
                    <View style={[styles.chip]}><Text style={[styles.chipText]}>Resolved</Text></View>
                </View>



                <FlatList
                    data={paymentData}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: Metrics.marginLarge, marginTop: Metrics.marginSmall, paddingHorizontal: Metrics.paddingSmall }}
                />
            </View>
        </ScrollView>
    )
}
export default ComplaintsScreen
const styles = StyleSheet.create({
    container: {
        ...Layouts.flex,
        backgroundColor: colors.white,
        padding: Metrics.paddingMedium,
        marginBottom: 85,
    },
    inputlabel: {
        fontSize: FontSizes.medium,
        color: colors.black,
        paddingBottom: Metrics.marginSmall,
        fontWeight: '500'
    },
    button: {
        borderRadius: Metrics.radiusMedium,
    },
    name: {
        fontSize: FontSizes.large,
        fontWeight: '600',
        color: colors.black,
        paddingVertical: Metrics.paddingLarge
    },
    card: {
        ...Layouts.row,
        justifyContent: 'space-between',
        marginBottom: Metrics.marginMedium,
        paddingBottom: Metrics.paddingSmall,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    month: {
        fontSize: FontSizes.medium,
        fontWeight: '500',
        color: colors.black,
        marginBottom: 2,
    },
    text: {
        fontSize: FontSizes.small,
        color: colors.gray600,
    },
    chip: {
        backgroundColor: colors.gray200,
        paddingHorizontal: Metrics.paddingMedium,
        paddingVertical: Metrics.paddingSmall,
        borderRadius: Metrics.radiusLarge,
        margin: Metrics.marginSmall,
    },
    chipText: {
        color: colors.black,
        fontSize: FontSizes.small,
    },
    chipActive: {
        backgroundColor: colors.primary
    },
    chipActiveText: {
        color: colors.white
    }
})
