import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Colors } from 'constants/Colors';
import { useNavigation } from 'expo-router';
import React, { useLayoutEffect } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontSizes, Metrics } from 'src/constants';
import { HomeStackParamList } from 'src/navigation/types';

const DashboardScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  const screenWidth = Dimensions.get('window').width;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View>9
        </View>
      ),
      headerTitle: 'Rent Management System',
      headerRight: () => (
        <TouchableOpacity>
          <Image source={{ uri: 'https://lh3.googleusercontent.com/-cU6G9HYrUFQ/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfklCgnNYx1TBn8-2QVuuFWWmArXqSg/photo.jpg?sz=46' }} style={{ width: 40, height: 40, borderRadius: 20, }} />

        </TouchableOpacity>
      )
    });
  }, [navigation]);
  return (
    <View>
      <Text>DashboardScreen</Text>
    </View>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4eaea",
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
  title: {
    fontSize: FontSizes.xLarge,
    fontWeight: '600',
    marginBottom: Metrics.marginMedium
  },
  highlight: {
    color: '#FF6B00'
  },
})