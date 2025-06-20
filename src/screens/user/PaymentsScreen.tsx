import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Colors } from 'constants/Colors';
import { useNavigation } from 'expo-router';
import { ArrowLeft, Download } from 'lucide-react-native';
import { useLayoutEffect } from 'react';
import { FlatList, LogBox, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from 'src/components/common/Button';
import Input from 'src/components/common/Input';
import { colors, FontSizes, Layouts, Metrics } from 'src/constants';
import { HomeStackParamList } from 'src/navigation/types';
LogBox.ignoreLogs([
    'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation',
]);
const paymentData = [
    { month: 'October 2023', status: 'Accepted', date: '2023-10-15', amount: '₹1,200' },
    { month: 'September 2023', status: 'Pending', date: '2023-09-15', amount: '₹1,200' },
    { month: 'August 2023', status: 'Complete', date: '2023-08-15', amount: '₹1,200' },
    { month: 'July 2023', status: 'Accepted', date: '2023-07-15', amount: '₹1,200' },
    { month: 'June 2023', status: 'Complete', date: '2023-06-15', amount: '₹1,200' },
    { month: 'May 2023', status: 'Complete', date: '2023-05-15', amount: '₹1,200' },
    { month: 'April 2023', status: 'Accepted', date: '2023-04-15', amount: '₹1,200' },
    { month: 'March 2023', status: 'Accepted', date: '2023-03-15', amount: '₹1,200' },
];


const PaymentsScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: `Payment's History`,
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
                <Text style={styles.month}>{item.month}</Text>
                <Text style={styles.text}>Status: {item.status} | Payment Date: {item.date}</Text>
                <Text style={styles.text}>Amount Paid: {item.amount}</Text>
            </View>
            <TouchableOpacity onPress={() => console.log('Download')}>
                <Download size={20} color={colors.gray600} />
            </TouchableOpacity>
        </View>
    );
    return (
        <ScrollView style={[styles.container]}>

            <View style={[Layouts.row, Layouts.spaceBetween]}>
                <View style={[{ width: "48%" }]}>
                    <Text style={[styles.inputlabel]}>Month</Text>
                    <Input
                        placeholder="Enter Month"
                        autoCapitalize="none"
                        containerStyle={{ borderRadius: Metrics.radiusMedium, }}

                    // error="Invalid email address"
                    />
                </View>
                <View style={[{ width: "48%" }]}>
                    <Text style={[styles.inputlabel]}>Year</Text>
                    <Input
                        placeholder="Enter Year"
                        autoCapitalize="none"
                        containerStyle={{ borderRadius: Metrics.radiusMedium, }}

                    // error="Invalid email address"
                    />
                </View>
            </View>

            <View>
                <Text style={[styles.inputlabel]}>Rent Amount</Text>
                <Input
                    placeholder="Enter Year"
                    autoCapitalize="none"
                    containerStyle={{ borderRadius: Metrics.radiusMedium, }}
                />
            </View>

            <Button
                title="Pay Now"
                onPress={() => console.log("Button Clicked")}
                variant="primary"
                loading={false}
                style={styles.button}
            />


            <View>
                <Text style={[styles.name, { fontSize: FontSizes.xLarge }]}>Payment History</Text>

                <FlatList
                    data={paymentData}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: Metrics.marginLarge }}
                />
            </View>
        </ScrollView>
    )
}
export default PaymentsScreen
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
})