import { StyleSheet, Text, View } from 'react-native';
import Button from 'src/components/common/Button';
import Input from 'src/components/common/Input';
import HostelReviews from 'src/components/specific/HostelReviews';
import { colors, FontSizes, Layouts, Metrics } from 'src/constants';
const RateUsScreen = () => {

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
      How was your experience?
      </Text>
      <Text style={styles.description}>
        Your feedback helps us improve the app and make it better for everyone.
      </Text>

                          <HostelReviews
        ratingSummary={{
          average: 4.4,
          total: 120,
          breakdown: [
            { stars: 5, percent: 40 },
            { stars: 4, percent: 30 },
            { stars: 3, percent: 15 },
            { stars: 2, percent: 10 },
            { stars: 1, percent: 5 },
          ],
        }} reviews={[]}
      />
      
      <Input
                    placeholder="Write your review here"
                    autoCapitalize="none"
                    multiline={true}
                    numberOfLines={4}
                    inputStyle={{ paddingVertical: Metrics.paddingMedium }}
                    containerStyle={{ borderRadius: Metrics.radiusMedium, }}

      />
                  <Button
                title="Submit"
                onPress={() => console.log("Button Clicked")}
                variant="primary"
                loading={false}
                style={styles.button}
            />

    </View>
  );
};
export default RateUsScreen;
const styles = StyleSheet.create({
  container: {
    ...Layouts.flex,
    backgroundColor: colors.white,
    paddingHorizontal:Metrics.paddingMedium
  },
  title: {
    fontSize: FontSizes.xLarge,
    color: colors.black,
    fontWeight: '600',
    marginBottom: Metrics.marginLarge,  
    textAlign: 'center',
  },
  description: {
    fontSize: FontSizes.medium,
    color: colors.gray500,
    marginBottom: Metrics.marginLarge,
    textAlign: 'center',
    marginHorizontal: Metrics.marginMedium
  },
  button: {
    borderRadius: Metrics.radiusMedium,
},
});
