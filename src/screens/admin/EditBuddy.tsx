import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from 'expo-router';
import React, { useLayoutEffect, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { ArrowLeft, Bike, Calendar, Check, Mail, Pencil, Phone, Upload, User, Warehouse } from 'lucide-react-native';
import Button from 'src/components/common/Button';
import DatePickerInput from 'src/components/common/DatePickerInput';
import Input from 'src/components/common/Input';
import Select from 'src/components/common/Select';
import ToggleSwitch from 'src/components/common/ToggleSwitch';
import { colors, FontSizes, Layouts, Metrics } from 'src/constants';
import { HomeStackParamList } from 'src/navigation/types';


const EditBuddy = () => {
    const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [dob, setDob] = useState<Date | undefined>(undefined);
    const [idProofImage, setIdProofImage] = useState<string | null>(null);


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
        Alert.alert(
            'Upload Photo',
            'Choose an option',
            [
                {
                    text: 'Take Photo',
                    onPress: async () => {
                        const { status: cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
                        if (cameraStatus !== 'granted') {
                            Alert.alert('Permission Denied', 'Camera access is required to take a photo.');
                            return;
                        }

                        const result = await ImagePicker.launchCameraAsync({
                            mediaTypes: ImagePicker.MediaTypeOptions.Images,
                            quality: 1,
                        });

                        if (!result.canceled && result.assets.length > 0) {
                            setProfileImage(result.assets[0].uri);
                        }
                    },
                },
                {
                    text: 'Choose from Gallery',
                    onPress: async () => {
                        const { status: libraryStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                        if (libraryStatus !== 'granted') {
                            Alert.alert('Permission Denied', 'Media library access is required.');
                            return;
                        }

                        const result = await ImagePicker.launchImageLibraryAsync({
                            mediaTypes: ImagePicker.MediaTypeOptions.Images,
                            quality: 1,
                        });

                        if (!result.canceled && result.assets.length > 0) {
                            setProfileImage(result.assets[0].uri);
                        }
                    },
                },
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
            ],
            { cancelable: true }
        );
    };
    const [loading, setLoading] = useState(false);

    const handlePress = async () => {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log("Button action done");
        setLoading(false);
    };

    const [selected, setSelected] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);

    const data = [
        { label: 'Option A', value: 'a' },
        { label: 'Option B', value: 'b' },
    ];


    const pickIdProofImage = async () => {
        Alert.alert(
            'Upload ID Proof',
            'Choose an option',
            [
                {
                    text: 'Take Photo',
                    onPress: async () => {
                        const { status: cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
                        if (cameraStatus !== 'granted') {
                            Alert.alert('Permission Denied', 'Camera access is required to take a photo.');
                            return;
                        }

                        const result = await ImagePicker.launchCameraAsync({
                            mediaTypes: ImagePicker.MediaTypeOptions.Images,
                            quality: 1,
                        });

                        if (!result.canceled && result.assets.length > 0) {
                            setIdProofImage(result.assets[0].uri);
                        }
                    },
                },
                {
                    text: 'Choose from Gallery',
                    onPress: async () => {
                        const { status: libraryStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                        if (libraryStatus !== 'granted') {
                            Alert.alert('Permission Denied', 'Media library access is required.');
                            return;
                        }

                        const result = await ImagePicker.launchImageLibraryAsync({
                            mediaTypes: ImagePicker.MediaTypeOptions.Images,
                            quality: 1,
                        });

                        if (!result.canceled && result.assets.length > 0) {
                            setIdProofImage(result.assets[0].uri);
                        }
                    },
                },
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
            ],
            { cancelable: true }
        );
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
                <Text style={styles.username}>Buddy ID: 12345</Text>
            </View>

            <View style={styles.form}>
                <Text style={styles.inputLabel}>Full Name</Text>
                <Input placeholder="Enter your name" containerStyle={styles.input}
                    leftElement={<User size={20} color="#555" />}
                />

                <Text style={styles.inputLabel}>Phone Number</Text>
                <Input placeholder="Enter phone number" containerStyle={styles.input} value='123456789'
                    leftElement={<Phone size={20} color="#555" />}
                />

                <Text style={styles.inputLabel}>Email Address</Text>
                <Input placeholder="Enter email" containerStyle={styles.input}
                    leftElement={<Mail size={20} color="#555" />}
                />

                <Text style={styles.inputLabel}>Date of Join</Text>
                <DatePickerInput
                    placeholder="DD/MM/YYYY"
                    onChange={(date) => setDob(date as unknown as Date)}
                    leftElement={<Calendar size={20} color="#555" />}
                />

                <Text style={styles.inputLabel}>Room Number</Text>
                <Input placeholder="Enter Room Number" containerStyle={styles.input}
                    leftElement={<Warehouse size={20} color="#555" />}
                />

                <Text style={styles.inputLabel}>Profession</Text>
                <Select
                    label=""
                    data={data}
                    value={selected}
                    onChange={setSelected}
                    placeholder="Pick one"
                />


                <Text style={styles.inputLabel}>Vehicle Number (Optional)</Text>
                <Input placeholder="Enter vehicle number" containerStyle={styles.input}
                    leftElement={<Bike size={20} color="#555" />}
                />


                <Text style={styles.inputLabel}>Emergency Contact</Text>
                <Input placeholder="Enter emergency contact Number" containerStyle={[styles.input]}
                    leftElement={<Phone size={20} color="#555" />}
                />

                <Text style={styles.inputLabel}>ID Proof</Text>

                <View style={{ marginVertical: Metrics.marginSmall }}>
                    {idProofImage ? (
                        <View style={styles.idProofContainer}>
                            <Image source={{ uri: idProofImage }} style={styles.idProofImage} />
                            <View style={styles.verifiedBadge}>
                                <Check size={16} color={colors.white} />
                                <Text style={styles.verifiedText}>Verified</Text>
                            </View>
                        </View>
                    ) : (
                        <Button
                            title="Upload ID Proof"
                            onPress={pickIdProofImage}
                            variant="outline"
                            icon={<Upload size={18} color={colors.primary} />}
                            style={[styles.button, { marginBottom: 0 }]}
                        />
                    )}
                </View>






                <View style={{ ...Layouts.row, justifyContent: 'space-between', alignItems: 'center', marginTop: Metrics.marginMedium }}>

                    <Text style={styles.inputLabel}>Fee Status</Text>

                    <ToggleSwitch
                        label=""
                        value={isEnabled}
                        onValueChange={setIsEnabled}
                    />
                </View>
            </View>

            <Button
                title="Save Changes"
                onPress={handlePress}
                variant="primary"
                style={styles.button}
                loading={loading}
                disabled={loading} // Optional; already handled in Button
            />
        </ScrollView>
    );
};

export default EditBuddy;

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
    idProofContainer: {
        position: 'relative',
        width: '100%',
        height: 200,
        borderRadius: Metrics.radiusMedium,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: colors.gray300,
        marginBottom: Metrics.marginSmall,

    },
    idProofImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    verifiedBadge: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: colors.success500,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    verifiedText: {
        color: colors.white,
        fontSize: FontSizes.small,
        fontWeight: '600',
        marginLeft: Metrics.marginSmall,
    },

});

