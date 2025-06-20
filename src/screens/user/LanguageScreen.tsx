import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from 'expo-router';
import {
  ArrowLeft,
  Check
} from 'lucide-react-native';
import React, { useLayoutEffect } from 'react';
import { FlatList, LogBox, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, FontSizes, Layouts, Metrics } from 'src/constants';

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation',
]);

const userOptions = [
  {
    text: 'A', // "A" remains for English
    label: 'English',
  },
  {
    text: 'ह', // First letter of Hindi in native script
    label: 'Hindi',
  },
  {
    text: 'ব', // First letter of Bengali in native script
    label: 'Bengali',
  },
  {
    text: 'అ', // First letter of Telugu in native script
    label: 'Telugu',
  },
  {
    text: 'म', // First letter of Marathi in native script
    label: 'Marathi',
  },
  {
    text: 'த', // First letter of Tamil in native script
    label: 'Tamil',
  },
  {
    text: 'ગ', // First letter of Gujarati in native script
    label: 'Gujarati',
  },
  {
    text: 'ಕ', // First letter of Kannada in native script
    label: 'Kannada',
  },
  {
    text: 'മ', // First letter of Malayalam in native script
    label: 'Malayalam',
  },
  {
    text: 'ਪ', // First letter of Punjabi in native script
    label: 'Punjabi',
  },
];



const LanguageScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `Chnage Language`,
      headerTitleAlign: 'center', // This centers the title
      headerShadowVisible: false,
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 15 }}>
          <ArrowLeft size={24} color={colors.black} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);


  const renderItem = ({ item }: { item: typeof userOptions[0] }) => (
    <TouchableOpacity style={styles.item} onPress={() => console.log(item.label + '  Selected')}>
      <View style={[styles.icon]}><Text style={styles.text}>{item.text}</Text></View>
      <View style={[Layouts.row, Layouts.spaceBetween, { width: '80%' }]}>
        <Text style={styles.label}>{item.label}</Text>
        {item.label === 'English' &&
          <Check />
        }
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={userOptions}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: Metrics.marginLarge }}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: Metrics.marginMedium,
  },
  item: {
    ...Layouts.row,
    alignItems: 'center',
    marginBottom: Metrics.marginMedium,
    paddingHorizontal: Metrics.paddingSmall,
  },
  label: {
    fontSize: FontSizes.medium,
    color: colors.gray800,
    marginLeft: Metrics.marginMedium,
  },
  labelSmall: {
    fontSize: FontSizes.small,
    color: colors.gray500,
    marginLeft: Metrics.marginMedium,
    maxWidth: '90%',
  },
  icon: {
    backgroundColor: colors.gray100,
    borderRadius: Metrics.radiusMedium,
    width: 45,
    height: 45,
    ...Layouts.center
  },
  text: {
    fontSize: FontSizes.xxLarge,
    fontWeight: '500',
    color: colors.black
  }
});

