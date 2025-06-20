import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, FontSizes, Layouts, Metrics } from 'src/constants';

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}> 

      <Image
        source={{ uri: 'https://img.freepik.com/premium-photo/group-friends-strolls-together-enjoying-nature-with-backpacks-amidst-lush-greenery-vibrant-colors_995663-23066.jpg' }}
        style={styles.banner}
        resizeMode="contain"
      />

      <Text style={styles.heading}>Our Mission</Text>
      <Text style={styles.text}>
        At Wanderlust Hostels, our mission is to connect travelers with unique and affordable accommodations in India&apos;s vibrant cities. We strive to create a community where adventurers can share experiences, discover hidden gems, and make lasting memories.
      </Text>

      <Text style={styles.heading}>Our Story</Text>
      <Text style={styles.text}>
        Founded in 2018 by a group of passionate travelers, Wanderlust Hostels was born out of a desire to make exploring India more accessible and enjoyable. We believe that travel should be about authentic experiences, not just sightseeing, and our app is designed to help you find the perfect base for your adventures.
      </Text>

      <Text style={styles.heading}>Our Values</Text>
      <Text style={styles.text}>
        We are committed to:
      </Text>
      <Text style={styles.bullet}>
        - <Text style={styles.bold}>Community:</Text> Fostering a sense of belonging among travelers.{"\n"}
        - <Text style={styles.bold}>Authenticity:</Text> Showcasing the real India, beyond the tourist trail.{"\n"}
        - <Text style={styles.bold}>Affordability:</Text> Making travel accessible to all budgets.{"\n"}
        - <Text style={styles.bold}>Sustainability:</Text> Promoting responsible and eco-friendly travel practices.
      </Text>

      <Text style={styles.heading}>Meet the Team</Text>
      <View style={styles.avatars}>
        <Image style={styles.avatar} source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} />
        <Image style={styles.avatar} source={{ uri: 'https://randomuser.me/api/portraits/men/33.jpg' }} />
        <Image style={styles.avatar} source={{ uri: 'https://randomuser.me/api/portraits/women/34.jpg' }} />
      </View>
      <Text style={styles.text}>
        Our team is a diverse group of travel enthusiasts, tech experts, and hospitality professionals dedicated to providing you with the best possible experience.
      </Text>

      <Text style={styles.heading}>Contact Us</Text>
      <Text style={styles.text}>
        For any inquiries or support, please visit our Help Center or contact us at {" "}
        <Text style={styles.link}>support@wanderlusthostels.com</Text>. We&apos;re always happy to hear from you!
      </Text>
    </ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: Metrics.marginMedium,
  },
  title: {
    fontSize: FontSizes.large,
    fontWeight: '600',
    color: colors.black,
    textAlign: 'center',
    marginBottom: Metrics.marginMedium,
  },
  banner: {
    width: '100%',
    height: 180,
    marginBottom: Metrics.marginLarge,
    borderRadius: Metrics.radiusMedium,
  },
  heading: {
    fontSize: FontSizes.large,
    fontWeight: '600',
    color: colors.black,
    marginTop: Metrics.marginMedium,
    marginBottom: Metrics.marginSmall,
  },
  text: {
    fontSize: FontSizes.medium,
    color: colors.gray800,
    lineHeight: 22,
    marginBottom: Metrics.marginMedium,
  },
  bullet: {
    fontSize: FontSizes.medium,
    color: colors.gray800,
    lineHeight: 24,
    marginBottom: Metrics.marginMedium,
  },
  bold: {
    fontWeight: '600',
    color: colors.black,
  },
  avatars: {
    ...Layouts.row,
    gap: 8,
    marginBottom: Metrics.marginMedium,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  link: {
    color: colors.primary,
    fontWeight: '500',
  },
});
