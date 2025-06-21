import { Bell, CheckCircle, PercentCircle, Star, Wallet } from 'lucide-react-native';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { colors, FontSizes, Layouts, Metrics } from 'src/constants';

const notifications = [
  {
    id: '1',
    title: 'Booking Confirmation',
    message: 'Your booking at Zostel Jaipur is confirmed.',
    time: '2h',
    icon: <CheckCircle size={25} color={colors.gray800} />,
  },
  {
    id: '2',
    title: 'Payment Reminder',
    message: 'Payment for your upcoming stay at The Hosteller Delhi is due.',
    time: '1d',
    icon: <Wallet size={25} color={colors.gray800} />,
  },
  {
    id: '3',
    title: 'New Hostel Alert',
    message: 'New hostel added in Goa: Wanderlust Hostel.',
    time: '3d',
    icon: <Bell size={25} color={colors.gray800} />,
  },
  {
    id: '4',
    title: 'Review Published',
    message: 'Your review for Backpacker\'s Villa Mumbai has been published.',
    time: '5d',
    icon: <Star size={25} color={colors.gray800} />,
  },
  {
    id: '5',
    title: 'Special Offer',
    message: 'Special offer: 20% off on stays at The Madpackers Pushkar.',
    time: '1w',
    icon: <PercentCircle size={25} color={colors.gray800} />,
  },
];

const NotificationsScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        {item.icon}
      </View>
      <View style={Layouts.flex}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingVertical: Metrics.marginMedium }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  card: {
    ...Layouts.row,
    alignItems: 'flex-start',
    borderRadius: Metrics.radiusMedium,
    padding: Metrics.paddingMedium,
  },
  iconContainer: {
    backgroundColor: colors.gray200,
    borderRadius: Metrics.radiusMedium,
    padding: Metrics.paddingSmall,
    marginRight: Metrics.marginMedium,
  },
  title: {
    fontSize: FontSizes.medium,
    fontWeight: '600',
    color: colors.black,
    marginBottom: 2,
  },
  message: {
    fontSize: FontSizes.small,
    color: colors.gray600,
  },
  time: {
    fontSize: FontSizes.small,
    color: colors.gray500,
    marginLeft: Metrics.marginSmall,
  },
});
