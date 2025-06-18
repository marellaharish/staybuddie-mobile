import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import { Metrics } from 'src/constants';

const { width } = Dimensions.get('window');

type CarouselItem = {
    id: string;
    image: { uri: string };
};

type ParallaxCarouselProps = {
    data: CarouselItem[];
    height?: number;
};

const ParallaxCarousel: React.FC<ParallaxCarouselProps> = ({ data, height = 350 }) => {
    return (
        <Carousel
            loop
            width={width}
            height={height}
            autoPlay={true}
            data={data}
            scrollAnimationDuration={2000}
            renderItem={({ item, animationValue }) => {
                const animStyle = useAnimatedStyle(() => {
                    const scale = interpolate(
                        animationValue.value,
                        [-1, 0, 1],
                        [0.85, 1, 0.85],
                        Extrapolate.CLAMP
                    );
                    return {
                        transform: [{ scale }],
                    };
                });

                return (
                    <Animated.View style={[styles.card, animStyle]}>
                        <Image source={item.image} style={[styles.image, { height }]} />
                    </Animated.View>
                );
            }}
            pagingEnabled
            mode="parallax"
            modeConfig={{
                parallaxScrollingScale: 0.9,
                parallaxScrollingOffset: 60,
            }}
        />
    );
};

export default ParallaxCarousel;

const styles = StyleSheet.create({
    card: {
        borderRadius: Metrics.radiusMedium,
        overflow: 'hidden',
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        resizeMode: 'cover',
    },
});
