import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from 'expo-router';
import React, { useLayoutEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { ArrowLeft, Bike, Calendar, IdCardLanyard, Pencil, PersonStanding, Phone, Shield, User } from 'lucide-react-native';
import Button from 'src/components/common/Button';
import DatePickerInput from 'src/components/common/DatePickerInput';
import Input from 'src/components/common/Input';
import { colors, FontSizes, Layouts, Metrics } from 'src/constants';
import { HomeStackParamList } from 'src/navigation/types';

const EditProfileScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [dob, setDob] = useState<Date | undefined>(undefined);

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
    });
  }, [navigation]);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const [loading, setLoading] = useState(false);

  const handlePress = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000)); 
    console.log("Button action done");
    setLoading(false);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileWrapper}>
        <TouchableOpacity onPress={pickImage}>
          <Image
            source={{ uri: profileImage || 'https://randomuser.me/api/portraits/women/5.jpg' }}
            style={styles.avatar}
          />
          <View style={styles.editIcon}>
            <Pencil size={16} color={colors.white} />
          </View>
        </TouchableOpacity>
        <Text style={styles.name}>Harish Marella</Text>
        <Text style={styles.username}>@marellaharish9</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.inputLabel}>Name</Text>
        <Input placeholder="Enter your name" containerStyle={styles.input}
          leftElement={<User size={20} color="#555" />}
        />

        <Text style={styles.inputLabel}>Date of Birth</Text>
        <DatePickerInput
          placeholder="DD/MM/YYYY"
          onChange={(date) => setDob(date as unknown as Date)}
          leftElement={<Calendar size={20} color="#555" />}
        />
        {/* <Input placeholder="DD/MM/YYYY" containerStyle={styles.input} /> */}

        <Text style={styles.inputLabel}>Gender</Text>
        <Input placeholder="Male / Female / Other" containerStyle={styles.input}
          leftElement={<PersonStanding size={20} color="#555" />}
        />

        <Text style={styles.inputLabel}>Phone Number</Text>
        <Input disabled placeholder="Enter phone number" containerStyle={styles.input} value='123456789'
          leftElement={<Phone size={20} color="#555" />}
          />

        <Text style={styles.inputLabel}>Designation</Text>
        <Input placeholder="Enter designation" containerStyle={styles.input}
          leftElement={<IdCardLanyard size={20} color="#555" />}
          />

        <Text style={styles.inputLabel}>Vehicle Number (Optional)</Text>
        <Input placeholder="Enter vehicle number" containerStyle={styles.input}
          leftElement={<Bike size={20} color="#555" />}
        />

        <Text style={styles.inputLabel}>Guardian Name</Text>
        <Input placeholder="Enter guardian name" containerStyle={styles.input}
          leftElement={<Shield  size={20} color="#555" />}
        />

        <Text style={styles.inputLabel}>Guardian Phone Number</Text>
        <Input placeholder="Enter guardian's phone number" containerStyle={[styles.input, { marginBottom: 0 }]}
          leftElement={<Phone size={20} color="#555" />}
          value='9876543210'
        
        />
      </View>

      <Button
        title="Save"
        onPress={handlePress}
        variant="primary"
        style={styles.button}
        loading={loading}
        disabled={loading} // Optional; already handled in Button
      />
    </ScrollView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    ...Layouts.flex,
    backgroundColor: colors.white,
    padding: Metrics.marginMedium,
  },
  heading: {
    fontSize: FontSizes.large,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: Metrics.marginLarge,
    color: colors.black,
  },
  profileWrapper: {
    ...Layouts.center,
    marginBottom: Metrics.marginLarge,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  editIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 6,
  },
  name: {
    fontSize: FontSizes.regular,
    fontWeight: '600',
    marginTop: 10,
    color: colors.black,
  },
  username: {
    fontSize: FontSizes.small,
    color: colors.primary500,
  },
  form: {
    marginBottom: Metrics.marginLarge,
  },
  inputLabel: {
    fontSize: FontSizes.medium,
    color: colors.gray600,
    fontWeight: '500',
    marginBottom: 4,
  },
  input: {
    borderRadius: Metrics.radiusMedium,
  },
  button: {
    borderRadius: Metrics.radiusMedium,
    marginBottom: 60,
    marginTop: 0,
  },
});
