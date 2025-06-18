import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { colors, FontSizes, Layouts, Metrics } from 'src/constants';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const DayContent = ({ data }: { data: any[] }) => {
    // console.log('DayContent Data:', data); // Debugging step
    return (
        <View style={{ padding: Metrics.paddingMedium, flex: 1 }}>
            {data.map((item, idx) => (
                <View style={[styles.row, { marginTop: idx > 0 ? Metrics.marginMedium : 0 }]} key={idx}>
                    <View>
                        <Text style={styles.type}>{item.type}</Text>
                        <Text style={[styles.title, { fontWeight: '500', marginBottom: 2 }]}>{item.menu}</Text>
                        <Text style={[styles.label, { marginTop: 2 }]}>{item.time}</Text>
                    </View>
                    <Image style={styles.image} source={{ uri: item.image }} />
                </View>
            ))}
        </View>
    );
};

const dummyFoodData = [
    {
        type: 'Break Fast',
        menu: 'Dosa, Tea',
        time: '07:00 AM - 10:00 AM',
        image: 'https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa.jpg',
    },
    {
        type: 'Lunch',
        menu: 'Rice, Roti, Dhal',
        time: '12:00 PM - 02:00 PM',
        image: 'https://www.tastingtable.com/img/gallery/rice-recipes/l-intro-1652564810.jpg',
    },
    {
        type: 'Dinner',
        menu: 'Rice, Roti, Chicken',
        time: '07:00 PM - 10:00 PM',
        image: 'https://www.tastingtable.com/img/gallery/rice-recipes/l-intro-1652564810.jpg',
    },
];

const HostelFoodTabs = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'mon', title: 'Mon' },
        { key: 'tue', title: 'Tue' },
        { key: 'wed', title: 'Wed' },
        { key: 'thu', title: 'Thu' },
        { key: 'fri', title: 'Fri' },
        { key: 'sat', title: 'Sat' },
        { key: 'sun', title: 'Sun' },
    ]);

    const renderScene = SceneMap({
        mon: () => <DayContent data={dummyFoodData} />,
        tue: () => <DayContent data={dummyFoodData} />,
        wed: () => <DayContent data={dummyFoodData} />,
        thu: () => <DayContent data={dummyFoodData} />,
        fri: () => <DayContent data={dummyFoodData} />,
        sat: () => <DayContent data={dummyFoodData} />,
        sun: () => <DayContent data={dummyFoodData} />,
    });

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={(newIndex) => {
                console.log('Tab Changed:', newIndex); // Debugging step
                setIndex(newIndex);
            }}
            initialLayout={{ width: screenWidth }}
            style={{ flex: 1, height: screenHeight / 2 }}
            renderTabBar={props => (
                <TabBar
                    {...props}
                    tabStyle={{ width: 65, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 16 }}
                    indicatorStyle={{
                        backgroundColor: colors.primary900,  // Change the active border color here
                        height: 3,  // You can also adjust the thickness of the underline
                    }}
                    style={{ backgroundColor: colors.white, elevation: 0 }}
                    activeColor={colors.primary900}
                    inactiveColor={colors.black}
                />
            )}
        />
    );
};

export default HostelFoodTabs;

const styles = StyleSheet.create({
    row: {
        ...Layouts.row,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    type: {
        fontSize: FontSizes.small,
        color: colors.gray400,
        marginBottom: 4,
    },
    title: {
        fontSize: FontSizes.medium,
        color: colors.black,
    },
    label: {
        fontSize: FontSizes.small,
        color: colors.gray500,
    },
    image: {
        width: 100,
        height: 80,
        borderRadius: Metrics.radiusMedium,
        marginLeft: Metrics.marginMedium,
    },
});
