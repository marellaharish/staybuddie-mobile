import React from 'react';
import { SectionList, StyleSheet, Text } from 'react-native';
import { colors, FontSizes, Metrics } from 'src/constants';

const sections = [
  {
    title: '',
    data: [
      `Welcome to Hostel Finder! By using our app, you agree to these terms. This agreement outlines your rights and responsibilities while using our services. Please read carefully.`,
    ],
  },
  {
    title: 'Acceptance of Terms',
    data: [
      `By accessing or using Hostel Finder, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the app.`,
    ],
  },
  {
    title: 'User Responsibilities',
    data: [
      `You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to provide accurate and complete information when using the app.`,
    ],
  },
  {
    title: 'Service Usage',
    data: [
      `Hostel Finder allows you to search for and book hostels. You agree to use the app only for lawful purposes and in accordance with these terms. We reserve the right to modify or discontinue any part of the service at any time.`,
    ],
  },
  {
    title: 'Intellectual Property',
    data: [
      `All content and materials available on Hostel Finder, including but not limited to text, graphics, logos, and software, are the property of Hostel Finder or its licensors and are protected by copyright and other intellectual property laws.`,
    ],
  },
  {
    title: 'Disclaimers',
    data: [
      `Hostel Finder provides the app on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the app's operation or the information, content, or materials included.`,
    ],
  },
  {
    title: 'Limitations of Liability',
    data: [
      `In no event shall Hostel Finder be liable for any damages arising out of or in connection with your use of the app, including but not limited to direct, indirect, incidental, or consequential damages.`,
    ],
  },
  {
    title: 'Governing Law',
    data: [
      `These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in India.`,
    ],
  },
  {
    title: 'Contact Information',
    data: [
      `If you have any questions about these Terms and Conditions, please contact us at support@hostelfinder.in.`,
    ],
  },
];

const TermsScreen = () => {
  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => item + index}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      renderSectionHeader={({ section: { title } }) =>
        title ? <Text style={styles.heading}>{title}</Text> : null
      }
      renderItem={({ item }) => <Text style={styles.paragraph}>{item}</Text>}
      ListFooterComponent={
        <Text style={styles.updated}>Last Updated: July 26, 2024</Text>
      }
    />
  );
};

export default TermsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: Metrics.marginMedium,
    paddingBottom: Metrics.marginLarge,
  },
  heading: {
    fontSize: FontSizes.large,
    fontWeight: '600',
    color: colors.black,
    marginTop: Metrics.marginMedium,
    marginBottom: Metrics.marginSmall,
  },
  paragraph: {
    fontSize: FontSizes.medium,
    color: colors.gray800,
    lineHeight: 22,
    marginBottom: Metrics.marginMedium,
  },
  updated: {
    fontSize: FontSizes.small,
    color: colors.gray500,
    textAlign: 'left',
    marginTop: Metrics.marginMedium,
  },
});
