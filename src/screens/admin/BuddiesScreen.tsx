import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from 'expo-router';
import { ArrowLeft, Filter, Phone, Plus } from 'lucide-react-native';
import React, { useLayoutEffect, useState } from 'react';
import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SearchInput from 'src/components/common/SearchInput';
import { colors, FontSizes, Metrics } from 'src/constants';
import { AdminTabParamList } from 'src/navigation/types';

const initialBuddiesData = [
  {
    id: '1',
    name: 'Aarav Sharma',
    phone: '+919876543210',
    room: '101',
    joined: '2023-08-15',
    lastPayment: '2024-05-20',
    status: 'Paid',
    image: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: '2',
    name: 'Ishaan Verma',
    phone: '+918765432109',
    room: '102',
    joined: '2023-09-22',
    lastPayment: '2024-04-18',
    status: 'Pending',
    image: 'https://i.pravatar.cc/150?img=2'
  },
  // ... others
];

const BuddiesScreen = () => {
  const [buddies, setBuddies] = useState(initialBuddiesData);
  const navigation = useNavigation<NativeStackNavigationProp<AdminTabParamList>>();


  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `Edit Profile`,
      headerTitleAlign: 'center', // This centers the title
      headerShadowVisible: false,
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 15 }}>
          <ArrowLeft size={24} color={colors.black} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={[styles.filterButton, { marginRight: 15 }]}>
            <Filter size={22} color={colors.black} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.addButton, { marginRight: 15 }]} onPress={() => navigation.navigate('AddBuddy')}>
            <Plus size={22} color={colors.white} />
          </TouchableOpacity>
        </View>
      ),

    });
  }, [navigation]);




  const handleDelete = (item: typeof initialBuddiesData[0]) => {
    Alert.alert(
      'Confirm Delete',
      `Are you sure you want to delete ${item.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => doDelete(item.id) }
      ]
    );
  };




  const renderItem = ({ item }: { item: typeof initialBuddiesData[0] }) => (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Image source={{ uri: item.image }} style={styles.avatar} />
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.phoneRow}>
            <Text style={styles.phoneText}>{item.phone}</Text>
            <TouchableOpacity style={styles.phoneIcon}>
              <Phone size={16} color={colors.primary800} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.chipRow}>
        <View style={styles.chip}>
          <Text style={styles.chipLabel}>Room:</Text>
          <Text style={styles.chipValue}>{item.room}</Text>
        </View>
        <View style={styles.chip}>
          <Text style={styles.chipLabel}>Joined:</Text>
          <Text style={styles.chipValue}>{item.joined}</Text>
        </View>
      </View>

      <View style={styles.chipRow}>
        <View style={styles.chip}>
          <Text style={styles.chipLabel}>Last Payment:</Text>
          <Text style={styles.chipValue}>{item.lastPayment}</Text>
        </View>
        <View style={[styles.chip, item.status === 'Paid' ? styles.paidChip : styles.pendingChip]}>
          <Text style={styles.chipLabel}>Status:</Text>
          <Text style={styles.chipValue}>{item.status}</Text>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item)}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditBuddy', { buddy: item })}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );


  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        <View style={{ marginBottom: Metrics.marginSmall }}>
          <SearchInput
            onSearchPress={() => console.log('Search clicked')}
            onBlur={(text) => console.log('User typed:', text)}
            placeholder="Search by name"
          />
        </View>

        <FlatList
          style={styles.container}
          contentContainerStyle={styles.content}
          data={buddies}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />

      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default BuddiesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10
  },
  content: {
    paddingBottom: 80,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: Metrics.radiusMedium,
    padding: Metrics.paddingMedium,
    marginBottom: Metrics.marginSmall,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: colors.gray200,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Metrics.marginSmall,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: Metrics.marginSmall,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: FontSizes.large,
    fontWeight: '600',
    color: colors.black,
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    marginTop: 2,
  },
  phoneText: {
    fontSize: FontSizes.medium,
    color: colors.gray700,
  },
  phoneIcon: {
    marginLeft: Metrics.marginSmall,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  detailLabel: {
    fontSize: FontSizes.small,
    color: colors.gray600,
  },
  detailValue: {
    fontSize: FontSizes.small,
    fontWeight: '600',
    color: colors.gray800,
  },
  paid: {
    color: colors.success800,
  },
  pending: {
    color: colors.danger800,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Metrics.marginSmall,
  },
  editButton: {
    backgroundColor: colors.primary100,
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: Metrics.radiusSmall,
    borderColor: colors.primary600,
    borderWidth: 2,
  },
  deleteButton: {
    backgroundColor: colors.danger100,
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: Metrics.radiusSmall,
    marginRight: Metrics.marginSmall,
    borderColor: colors.danger600,
    borderWidth: 2,
  },
  buttonText: {
    fontSize: FontSizes.small,
    color: colors.black,
    fontWeight: '500',
  },
  sheetContent: {
    flex: 1,
    padding: 20,
  },
  sheetTitle: {
    fontSize: FontSizes.large,
    fontWeight: '700',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray300,
    borderRadius: Metrics.radiusSmall,
    padding: 10,
    marginBottom: 10,
    fontSize: FontSizes.medium,
  },
  sheetButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveButton: {
    backgroundColor: colors.success100,
    padding: 10,
    borderRadius: Metrics.radiusSmall,
  },
  cancelButton: {
    backgroundColor: colors.danger100,
    padding: 10,
    borderRadius: Metrics.radiusSmall,
  },
  chipRow: {
    flexDirection: 'row',
    marginTop: 8,
  },

  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: Metrics.paddingSmall,
    paddingHorizontal: Metrics.paddingSmall,
    borderRadius: Metrics.radiusMedium,
    marginRight: Metrics.marginSmall,
    borderWidth: 1,
    borderColor: colors.gray300,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },

  chipLabel: {
    fontSize: FontSizes.small,
    color: colors.gray600,
    marginRight: 4,
  },

  chipValue: {
    fontSize: FontSizes.small,
    fontWeight: '600',
    color: colors.gray800,
  },

  paidChip: {
    backgroundColor: colors.success100,
    borderColor: colors.success300,
    borderWidth: 1,
  },

  pendingChip: {
    backgroundColor: colors.danger100,
    borderColor: colors.danger300,
    borderWidth: 1,
  },
  addButton: {
    backgroundColor: colors.primary,
    padding: 5,
    borderRadius: 100,
  }
});
function doDelete(id: string): void {
  throw new Error('Function not implemented.');
}

