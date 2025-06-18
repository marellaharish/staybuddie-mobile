import { Bed, Cable, CookingPot, WashingMachine, Wifi } from 'lucide-react-native';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { colors, FontSizes, Layouts, Metrics } from 'src/constants';
import Button from './Button';

const screenWidth = Dimensions.get('window').width;

const HostelCard = ({ item, onPress }: any) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.metaContainer}>
                <Text style={styles.type}>{item.type}</Text>
                <Text style={styles.name}>{item.name}</Text>
                <Text numberOfLines={1} style={styles.address}>{item.address}</Text>
                <Text style={styles.location}>{item.location}</Text>
            </View>

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

            <View style={styles.row}>
                <Text style={styles.label}>Availability</Text>
                <Text style={styles.value}>{item.available ? 'Available' : 'Not Available'}</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Monthly Rent</Text>
                <Text style={styles.value}>₹ {item.rent}/-</Text>
            </View>

            <Button
                title="Know More"
                onPress={onPress}
                variant="primary"
                loading={false}
                style={styles.button}
            />
        </View>
    );
};

const Facility = ({ icon, label }: { icon: any, label: string }) => (
    <View style={styles.facilityItem}>
        {icon}
        <Text style={styles.facilityText}>{label}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: Metrics.marginLarge,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: Metrics.radiusMedium,
    },
    metaContainer: {
        ...Layouts.column,
        marginTop: Metrics.marginMedium,
    },
    type: {
        fontSize: FontSizes.small,
        color: colors.gray400,
    },
    name: {
        fontSize: FontSizes.large,
        fontWeight: '500',
        color: colors.black,
    },
    address: {
        fontSize: FontSizes.small,
        color: colors.gray400,
        maxWidth: screenWidth * 0.8,
    },
    location: {
        fontSize: FontSizes.small,
        color: colors.gray400,
    },
    facilitiesRow: {
        ...Layouts.row,
        flexWrap: 'wrap',
        marginTop: Metrics.marginMedium,
    },
    facilityItem: {
        ...Layouts.row,
        alignItems: 'center',
        marginRight: Metrics.marginLarge,
        marginBottom: Metrics.marginMedium,
    },
    facilityText: {
        fontSize: FontSizes.small,
        color: colors.gray500,
        marginLeft: 5,
        fontWeight: '500',
    },
    row: {
        ...Layouts.spaceBetween,
        ...Layouts.row,
        marginTop: Metrics.marginMedium,
    },
    label: {
        fontSize: FontSizes.medium,
        fontWeight: '500',
        color: colors.black,
    },
    value: {
        fontSize: FontSizes.small,
        color: colors.gray600,
        fontWeight: '500',
    },
    button: {
        marginTop: Metrics.marginMedium,
        borderRadius: Metrics.radiusMedium,
    },
});

export default HostelCard;
