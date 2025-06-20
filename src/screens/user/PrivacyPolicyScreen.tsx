import React from 'react';
import {
  SectionList,
  StyleSheet,
  Text
} from 'react-native';
import { colors, FontSizes, Metrics } from 'src/constants';

const sections = [
  {
    title: 'Introduction',
    data: [
      `Welcome to our Privacy Policy. This document outlines how we collect, use, and protect your personal information when you use our app. We are committed to safeguarding your privacy and ensuring your data is handled responsibly.`,
    ],
  },
  {
    title: 'Data Collection',
    data: [
      `We collect information you provide directly, such as your name, email, and payment details when you book a hostel. We also gather data automatically, including your device information and app usage patterns, to improve our services.`,
    ],
  },
  {
    title: 'Data Usage',
    data: [
      `Your data is used to facilitate bookings, personalize your experience, and communicate with you about your reservations and updates. We may also use your information for analytical purposes to enhance our app's functionality.`,
    ],
  },
  {
    title: 'Data Sharing',
    data: [
      `We may share your information with hostels to complete your bookings and with service providers who assist us in app operations. We do not sell your personal data to third parties.`,
    ],
  },
  {
    title: 'Data Security',
    data: [
      `We employ robust security measures to protect your data from unauthorized access, alteration, or disclosure. These measures include encryption and secure server environments.`,
    ],
  },
  {
    title: 'User Rights',
    data: [
      `You have the right to access, correct, or delete your personal information. You can manage your data through your account settings or contact us directly for assistance.`,
    ],
  },
  {
    title: 'Contact Information',
    data: [
      `If you have any questions or concerns about our Privacy Policy, please contact us at privacy@hostelapp.com or call us at +91–9876543210.`,
    ],
  },
];

const PrivacyPolicyScreen = () => {
  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => item + index}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <Text style={styles.updated}>Last Updated: July 26, 2024</Text>
      }
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.heading}>{title}</Text>
      )}
      renderItem={({ item }) => <Text style={styles.paragraph}>{item}</Text>}
    />
  );
};

export default PrivacyPolicyScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: Metrics.marginMedium,
    paddingBottom: Metrics.marginLarge,
  },
  updated: {
    fontSize: FontSizes.small,
    color: colors.gray600,
    marginBottom: Metrics.marginMedium,
  },
  heading: {
    fontSize: FontSizes.large,
    fontWeight: '600',
    color: colors.black,
    marginTop: Metrics.marginMedium,
    marginBottom: Metrics.marginSmall,
    backgroundColor: colors.white,
  },
  paragraph: {
    fontSize: FontSizes.medium,
    color: colors.gray800,
    lineHeight: 22,
    marginBottom: Metrics.marginMedium,
  },
});
