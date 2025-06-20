 
import { useNavigation } from '@react-navigation/native';
import {
  HelpCircle,
  Mail, Phone,
  ScrollText,
  ShieldCheck
} from 'lucide-react-native';
import { GestureResponderEvent, Linking, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from 'src/components/common/Button';
import { colors, FontSizes, Layouts, Metrics } from 'src/constants';

const HelpScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Us</Text>

      <Pressable style={styles.card} onPress={() => Linking.openURL('tel:+919876543210')}>
        <Phone color={colors.black} size={20} />
        <View style={Layouts.column}>
          <Text style={styles.label}>Phone</Text>
          <Text style={styles.value}>
            +91 9876543210
          </Text>
        </View>
      </Pressable>

      <View style={styles.card}>
        <Mail color={colors.black} size={20} />
        <View style={Layouts.column}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value} onPress={() => Linking.openURL('mailto:support@hostel.in')}>
            support@hostel.in
          </Text>
        </View>
      </View>

      <Button
        title="Live Chat"
        variant="primary"
        style={styles.chatButton} onPress={function (event: GestureResponderEvent): void {
          throw new Error('Function not implemented.');
        } }        // onPress={() => navigation.navigate('LiveChat')}
      />

      <Text style={[styles.heading, { marginTop: Metrics.marginLarge }]}>Help Center</Text>

      <TouchableOpacity style={styles.helpItem} onPress={() => navigation.navigate('FAQ')}>
        <HelpCircle size={20} color={colors.black} />
        <Text style={styles.itemLabel}>FAQs</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.helpItem} onPress={() => navigation.navigate('Terms')}>
        <ScrollText size={20} color={colors.black} />
        <Text style={styles.itemLabel}>Terms of Service</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.helpItem} onPress={() => navigation.navigate('PrivacyPolicy')}>
        <ShieldCheck size={20} color={colors.black} />
        <Text style={styles.itemLabel}>Privacy Policy</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray50,
    padding: Metrics.marginMedium,
  },
  heading: {
    fontSize: FontSizes.large,
    fontWeight: '600',
    color: colors.black,
    marginBottom: Metrics.marginMedium,
  },
  card: {
    ...Layouts.row,
    backgroundColor: colors.gray100,
    padding: Metrics.paddingMedium,
    borderRadius: Metrics.radiusMedium,
    marginBottom: Metrics.marginSmall,
    alignItems: 'center',
    gap: Metrics.marginMedium,
  },
  label: {
    fontSize: FontSizes.medium,
    color: colors.gray700,
  },
  value: {
    fontSize: FontSizes.medium,
    color: colors.primary600,
    marginTop: 2,
  },
  chatButton: {
    marginTop: Metrics.marginMedium,
    borderRadius: Metrics.radiusLarge,
  },
  helpItem: {
    ...Layouts.row,
    alignItems: 'center',
    backgroundColor: colors.gray100,
    padding: Metrics.paddingMedium,
    borderRadius: Metrics.radiusMedium,
    marginTop: Metrics.marginSmall,
  },
  itemLabel: {
    fontSize: FontSizes.medium,
    color: colors.gray800,
    marginLeft: Metrics.marginMedium,
  },
});
