import { Star, ThumbsDown, ThumbsUp } from 'lucide-react-native';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { colors, FontSizes, Layouts, Metrics } from 'src/constants';

type Review = {
    id: string;
    name: string;
    avatar: string;
    timeAgo: string;
    rating: number;
    comment: string;
    likes: number;
    dislikes: number;
};

type RatingSummary = {
    average: number;
    total: number;
    breakdown: { stars: number; percent: number }[];
};

type Props = {
    ratingSummary: RatingSummary;
    reviews: Review[];
};

const HostelReviews: React.FC<Props> = ({ ratingSummary, reviews }) => {
    return (
        <View style={styles.container}>
            {/* Summary Section */}
            <View style={[Layouts.row, Layouts.spaceBetween]}>
                <View>
                    <Text style={styles.averageRating}>{ratingSummary.average}</Text>
                    <View style={[Layouts.row, { marginVertical: 4 }]}>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                size={16}
                                fill={i < Math.round(ratingSummary.average) ? colors.primary : colors.gray300}
                                color={i < Math.round(ratingSummary.average) ? colors.primary : colors.gray300}
                            />
                        ))}
                    </View>
                    <Text style={styles.reviewCount}>{ratingSummary.total} reviews</Text>
                </View>

                <View style={{ flex: 1, marginLeft: Metrics.marginLarge }}>
                    {ratingSummary.breakdown.map(item => (
                        <View key={item.stars} style={[Layouts.row, Layouts.spaceBetween, { marginBottom: 6 }]}>
                            <Text style={styles.starLabelfront}>{item.stars}</Text>
                            <View style={styles.progressBar}>
                                <View style={[styles.progressFill, { width: `${item.percent}%` }]} />
                            </View>
                            <Text style={styles.starLabel}>{item.percent}%</Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* Reviews */}
            <FlatList
                data={reviews}
                scrollEnabled={false}
                keyExtractor={item => item.id}
                contentContainerStyle={{ marginTop: Metrics.marginLarge }}
                renderItem={({ item }) => (
                    <View style={styles.reviewCard}>
                        <View style={[Layouts.row, { marginBottom: 6 }]}>
                            <Image source={{ uri: item.avatar }} style={styles.avatar} />
                            <View style={{ marginLeft: Metrics.marginMedium }}>
                                <Text style={styles.reviewerName}>{item.name}</Text>
                                <Text style={styles.timeAgo}>{item.timeAgo}</Text>
                            </View>
                        </View>

                        <View style={[Layouts.row, { marginBottom: 6 }]}>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    size={16}
                                    fill={i < item.rating ? colors.primary : colors.gray300}
                                    color={i < item.rating ? colors.primary : colors.gray300}
                                />
                            ))}
                        </View>

                        <Text style={styles.comment}>{item.comment}</Text>

                        <View style={[Layouts.row, { marginTop: 6 }]}>
                            <View style={[Layouts.row, { marginRight: 16 }]}>
                                <ThumbsUp size={16} color={colors.gray500} />
                                <Text style={styles.feedbackCount}>{item.likes}</Text>
                            </View>
                            <View style={Layouts.row}>
                                <ThumbsDown size={16} color={colors.gray500} />
                                <Text style={styles.feedbackCount}>{item.dislikes}</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default HostelReviews;

const styles = StyleSheet.create({
    container: {
        padding: Metrics.paddingMedium,
        backgroundColor: colors.white,
    },
    averageRating: {
        fontSize: FontSizes.xxxLarge,
        fontWeight: 'bold',
        color: colors.black,
    },
    reviewCount: {
        fontSize: FontSizes.small,
        color: colors.gray500,
    },
    starLabel: {
        fontSize: FontSizes.small,
        color: colors.gray500,
        width: 40,
    },
    starLabelfront: {
        fontSize: FontSizes.small,
        color: colors.gray500,
        width: 10,
    },
    progressBar: {
        flex: 1,
        height: 8,
        backgroundColor: colors.gray200,
        borderRadius: 4,
        marginHorizontal: Metrics.marginSmall,
    },
    progressFill: {
        height: '100%',
        backgroundColor: colors.primary,
        borderRadius: 4,
    },
    reviewCard: {
        borderBottomWidth: 1,
        borderBottomColor: colors.gray100,
        paddingBottom: Metrics.paddingMedium,
        marginBottom: Metrics.marginMedium,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    reviewerName: {
        fontSize: FontSizes.medium,
        fontWeight: '500',
        color: colors.black,
    },
    timeAgo: {
        fontSize: FontSizes.small,
        color: colors.gray400,
    },
    comment: {
        fontSize: FontSizes.medium,
        color: colors.gray700,
        marginTop: 2,
    },
    feedbackCount: {
        marginLeft: 4,
        fontSize: FontSizes.small,
        color: colors.gray500,
    },
});
