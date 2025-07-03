import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Colors } from 'constants/Colors';
import { useNavigation } from 'expo-router';
import { Bell, Download, Plus, Send } from 'lucide-react-native';
import React, { useLayoutEffect, useState } from 'react';
import { Dimensions, FlatList, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from 'src/components/common/Button';
import { colors, FontSizes, Metrics } from 'src/constants';
import { HomeStackParamList } from 'src/navigation/types';
const screenWidth = Dimensions.get('window').width;
const samplePayments = [
  {
    id: '1',
    name: 'Rahul Sharma',
    room: 'Room 101',
    dueDate: 'Jan 5',
    status: 'Unpaid',
    amount: '₹8,500',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: '2',
    name: 'Priya Patel',
    room: 'Room 205',
    dueDate: 'Jan 2',
    status: 'Paid',
    amount: '₹8,500',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    id: '3',
    name: 'Amit Kumar',
    room: 'Room 303',
    dueDate: 'Jan 8',
    status: 'Partial',
    amount: '₹8,500',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
];

const DashboardScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerStyle does not support 'height', only backgroundColor and similar properties
      headerTitle: 'Rent Management',
      headerRight: () => (
        <>
          <TouchableOpacity style={{ marginRight: Metrics.marginSmall }}>
            <Bell />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: Metrics.marginSmall }}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/-cU6G9HYrUFQ/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfklCgnNYx1TBn8-2QVuuFWWmArXqSg/photo.jpg?sz=46' }}
              style={{ width: 40, height: 40, borderRadius: 20 }}
            />
          </TouchableOpacity>
        </>
      )
    });
  }, [navigation]);

  const renderPaymentItem = ({ item }: any) => (
    <View style={styles.paymentItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.paymentInfo}>
        <Text style={styles.paymentName}>{item.name}</Text>
        <Text style={styles.paymentDetails}>{item.room} • Due: {item.dueDate}</Text>
      </View>
      <View style={styles.paymentStatusContainer}>
        <Text style={[styles.paymentStatus, getStatusStyle(item.status)]}>{item.status}</Text>
        <Text style={styles.paymentAmount}>{item.amount}</Text>
      </View>
    </View>
  );

  const getStatusStyle = (status: any) => {
    switch (status) {
      case 'Paid': return { backgroundColor: colors.success100, color: colors.success800 };
      case 'Unpaid': return { backgroundColor: colors.danger100, color: colors.danger800 };
      case 'Partial': return { backgroundColor: colors.warning100, color: colors.warning800 };
      default: return {};
    }
  };

  type RoomType = 'Single' | 'Double' | 'Triple' | 'Dormitory';
  const [selectedRoomType, setSelectedRoomType] = useState<RoomType>('Single');

  const roomAvailability: Record<RoomType, number> = {
    Single: 5,
    Double: 3,
    Triple: 2,
    Dormitory: 12,
  };


  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: Metrics.marginMedium }}>
      <View style={{ marginBottom: Metrics.marginMedium }}>
        <ImageBackground
          source={{ uri: 'https://images.adsttc.com/media/images/5d5d/e03f/284d/d166/2000/08c3/slideshow/A10.jpg' }}
          style={{
            width: screenWidth - Metrics.marginMedium * 2,
            height: 150,
            borderRadius: 10,
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
            }}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: FontSizes.xLarge,
              fontWeight: '700',
              paddingHorizontal: Metrics.marginSmall,
            }}
          >
            Crazy Boys Mens Hostel
          </Text>

          <View style={{ alignItems: 'center', marginTop: Metrics.marginSmall }}>
            <TouchableOpacity style={styles.locationContainer} onPress={() => console.log('Select City')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons name="location-sharp" size={18} color={colors.white} />
                <Text style={styles.locationText}>Hyderabad</Text>
              </View>
            </TouchableOpacity>
            <Text
              style={[styles.subtitle, { maxWidth: screenWidth * 0.5 }]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Survey no. 91, Technical Block, Madhava Reddy Colony, Gachibowli, Hyderabad, Telangana 500032
            </Text>
          </View>
        </ImageBackground>
      </View>
      {/* Paid / Unpaid / Total Counters */}
      <View style={styles.locationContainer}>
        <View style={[styles.paymentContainer, styles.paid]}>
          <Text style={[styles.counterText, styles.paidText]}>127</Text>
          <Text style={styles.paidText}>Paid</Text>
        </View>
        <View style={[styles.paymentContainer, styles.unpaid]}>
          <Text style={[styles.counterText, styles.unpaidText]}>23</Text>
          <Text style={styles.unpaidText}>Unpaid</Text>
        </View>
        <View style={[styles.paymentContainer, styles.total]}>
          <Text style={[styles.counterText, styles.totalText]}>150</Text>
          <Text style={styles.totalText}>Total</Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity style={styles.tabActive}><Text style={styles.tabTextActive}>All</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tab}><Text style={styles.tabText}>Paid</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tab}><Text style={styles.tabText}>Unpaid</Text></TouchableOpacity>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionsContainer}>
        <Button title="Add Payment" variant="primary" icon={<Plus size={16} color={colors.white} />} onPress={() => { }} style={{ borderRadius: 10 }} />
        <Button title="Send Reminders" variant="success" icon={<Send size={16} color={colors.white} />} onPress={() => { }} style={{ borderRadius: 10 }} />
      </View>

      {/* QR Code Card */}
      <Text style={styles.sectionTitle}>Payment QR Code</Text>
      <View style={styles.qrCard}>
        <View style={styles.qrLeft}>
          <Image
            source={{ uri: 'https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=upi://pay?pa=hostel@paytm' }}
            style={styles.qrImage}
          />
          <View>
            <Text style={styles.qrTitle}>Scan to pay rent directly</Text>
            <Text style={styles.qrSubtitle}>UPI ID: hostel@paytm</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Download color={colors.primary800} />
        </TouchableOpacity>
      </View>

      {/* Recent Activities */}
      <FlatList
        data={samplePayments}
        keyExtractor={item => item.id}
        renderItem={renderPaymentItem}
        scrollEnabled={false}
      />


      <View style={styles.roomAvailabilityContainer}>
        <Text style={styles.sectionTitle}>Room Availability</Text>

        <View style={styles.roomTabs}>
          {['Single', 'Double', 'Triple', 'Dormitory'].map(type => (
            <Pressable
              key={type}
              style={[
                styles.roomTab,
                selectedRoomType === type && styles.roomTabActive
              ]}
              onPress={() => setSelectedRoomType(type as RoomType)}
            >
              <Text
                style={[
                  styles.roomTabText,
                  selectedRoomType === type && styles.roomTabTextActive
                ]}
              >
                {type}
              </Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.roomCard}>
          <Text style={styles.roomCardLabel}>Available</Text>
          <Text style={styles.roomCardCount}>{roomAvailability[selectedRoomType]}</Text>
        </View>
      </View>

    </ScrollView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    marginBottom: 80,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Metrics.marginMedium,
  },
  paymentContainer: {
    width: '30%',
    height: 80,
    borderRadius: 10,
    padding: Metrics.paddingSmall,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    marginHorizontal: 2,
  },
  paid: {
    backgroundColor: colors.success100,
    borderColor: colors.success300,
    borderWidth: 1,
  },
  unpaid: {
    backgroundColor: colors.danger100,
    borderColor: colors.danger300,
    borderWidth: 1,
  },
  total: {
    backgroundColor: colors.primary100,
    borderColor: colors.primary300,
    borderWidth: 1,
  },
  counterText: {
    fontSize: FontSizes.xLarge,
    fontWeight: '700',
  },
  paidText: { color: colors.success800 },
  unpaidText: { color: colors.danger800 },
  totalText: { color: colors.primary800 },

  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tab: {
    flex: 1,
    paddingVertical: Metrics.paddingSmall,
    marginHorizontal: 4,
    borderRadius: Metrics.radiusMedium,
    backgroundColor: colors.gray100,
    alignItems: 'center',
  },
  tabActive: {
    flex: 1,
    paddingVertical: Metrics.paddingSmall,
    marginHorizontal: 4,
    borderRadius: Metrics.radiusMedium,
    backgroundColor: colors.primary300,
    alignItems: 'center',
  },
  tabText: {
    color: colors.gray700,
    fontWeight: '500',
  },
  tabTextActive: {
    color: colors.primary900,
    fontWeight: '600',
  },

  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: Metrics.marginMedium,
  },

  qrCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.gray50,
    borderRadius: Metrics.radiusMedium,
    padding: Metrics.paddingMedium,
    marginBottom: Metrics.marginMedium,
  },
  qrLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qrImage: {
    width: 60,
    height: 60,
    marginRight: Metrics.marginSmall,
  },
  qrTitle: {
    fontSize: FontSizes.medium,
    fontWeight: '600',
    color: colors.black,
  },
  qrSubtitle: {
    fontSize: FontSizes.small,
    color: colors.gray600,
  },

  paymentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray50,
    borderRadius: Metrics.radiusMedium,
    padding: Metrics.paddingSmall,
    marginBottom: Metrics.marginSmall,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: Metrics.marginSmall,
  },
  paymentInfo: {
    flex: 1,
  },
  paymentName: {
    fontWeight: '600',
    fontSize: FontSizes.medium,
  },
  paymentDetails: {
    fontSize: FontSizes.small,
    color: colors.gray600,
  },
  paymentStatusContainer: {
    alignItems: 'flex-end',
  },
  paymentStatus: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    fontSize: FontSizes.small,
    fontWeight: '500',
    overflow: 'hidden',
    textAlign: 'center',
  },
  paymentAmount: {
    fontWeight: '700',
    fontSize: FontSizes.medium,
    marginTop: 4,
  },
  roomAvailabilityContainer: {
    backgroundColor: colors.white,
    borderRadius: Metrics.radiusMedium,
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },

  sectionTitle: {
    fontSize: FontSizes.large,
    fontWeight: '700',
    marginBottom: Metrics.marginSmall,
    color: Colors.light.text,
  },

  roomTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Metrics.marginMedium,
    backgroundColor: colors.gray100,
    borderRadius: Metrics.radiusMedium,
    padding: 2,
  },

  roomTab: {
    flex: 1,
    paddingVertical: Metrics.paddingSmall,
    alignItems: 'center',
    borderRadius: Metrics.radiusSmall,
  },

  roomTabActive: {
    backgroundColor: colors.white,
    borderRadius: Metrics.radiusSmall,
    elevation: 1,
  },

  roomTabText: {
    color: colors.gray500,
    fontWeight: '500',
  },

  roomTabTextActive: {
    color: colors.primary800,
    fontWeight: '700',
  },

  roomCard: {
    borderWidth: 1,
    borderColor: colors.gray200,
    borderRadius: Metrics.radiusMedium,
    padding: Metrics.paddingLarge,
    alignItems: 'center',
    backgroundColor: colors.gray50,
  },

  roomCardLabel: {
    fontSize: FontSizes.small,
    color: colors.gray600,
    marginBottom: Metrics.marginSmall,
  },

  roomCardCount: {
    fontSize: FontSizes.xLarge,
    fontWeight: '700',
    color: Colors.light.text,
  },
  locationText: {
    marginLeft: Metrics.marginSmall,
    fontWeight: '700',
    fontSize: FontSizes.large,
    color: colors.white,
  },
  subtitle: {
    fontSize: FontSizes.small,
    color: colors.white,
  },

});
