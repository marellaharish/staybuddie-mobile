import React, { useState } from 'react';
import { LayoutAnimation, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, UIManager, View } from 'react-native';
import { colors, FontSizes, Layouts, Metrics } from 'src/constants';

import { ChevronDown, ChevronUp } from 'lucide-react-native';
import SearchInput from 'src/components/common/SearchInput';

if (Platform.OS === 'android' && typeof UIManager.setLayoutAnimationEnabledExperimental === 'function') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const faqsData = [
  {
    title: 'Bookings',
    items: [
      { question: 'How do I book a hostel?', answer: 'You can book through the StayBuddie app by selecting a hostel and tapping "Book Now".' },
      { question: 'Can I cancel my booking?', answer: 'Yes, cancellations are allowed up to 24 hours before check-in.' },
      { question: 'What is the check-in process?', answer: 'Check-in requires valid ID proof and booking confirmation at the hostel.' },
    ],
  },
  {
    title: 'Payments',
    items: [
      { question: 'What payment methods are accepted?', answer: 'We accept UPI, credit/debit cards, and net banking.' },
      { question: 'How do refunds work?', answer: 'Refunds are processed within 5-7 business days after cancellation.' },
    ],
  },
  {
    title: 'Account',
    items: [
      { question: 'How do I update my profile?', answer: 'Go to Profile > Edit Profile to update your details.' },
      { question: 'How can I reset my password?', answer: 'Use the Forgot Password option on the login screen to reset it.' },
    ],
  },
];

const FAQScreen = () => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (question: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedItems((prev) => ({ ...prev, [question]: !prev[question] }));
  };

  const handleSearchClick = () => { console.log('Search input clicked'); };
  const handleBlur = (text: string) => { console.log('User typed:', text); };

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <SearchInput
        onSearchPress={handleSearchClick}
        onBlur={handleBlur}
        placeholder="Search FAQs"
      />

      {faqsData.map((section, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          {section.items.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              onPress={() => toggleItem(item.question)}
              style={styles.accordionItem}
              activeOpacity={0.8}
            >
              <View style={Layouts.row}>
                <Text style={styles.question}>{item.question}</Text>
                {expandedItems[item.question] ? (
                  <ChevronUp size={18} color={colors.gray600} />
                ) : (
                  <ChevronDown size={18} color={colors.gray600} />
                )}
              </View>
              {expandedItems[item.question] && (
                <Text style={styles.answer}>{item.answer}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

export default FAQScreen;

const styles = StyleSheet.create({
  container: {
    padding: Metrics.marginMedium,
    backgroundColor: colors.white,
    ...Layouts.flex,
    marginBottom: 40
  },
  section: {
    marginTop: Metrics.marginLarge,
  },
  sectionTitle: {
    fontSize: FontSizes.medium,
    fontWeight: '600',
    color: colors.black,
    marginBottom: Metrics.marginSmall,
  },
  accordionItem: {
    backgroundColor: colors.gray100,
    borderRadius: Metrics.radiusMedium,
    padding: Metrics.paddingMedium,
    marginBottom: Metrics.marginSmall,
  },
  question: {
    fontSize: FontSizes.medium,
    color: colors.gray800,
    flex: 1,
  },
  answer: {
    fontSize: FontSizes.small,
    color: colors.gray600,
    marginTop: Metrics.marginSmall,
  },
});
