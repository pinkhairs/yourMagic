import React, { useState, useEffect, useRef } from 'react';
import {
  View, Dimensions, Animated, StyleSheet,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  carouselItem: {
    marginTop: 120,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: 'black',
  },
  paginationDotContainer: {
    marginHorizontal: 4,
  },
  inactivePaginationDot: {
    backgroundColor: 'white',
    position: 'relative',
    top: -1.5,
  },
});

function Slideshow({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);
  const carouselItems = children;

  const backgroundImages = [
    require('../../assets/images/feature-bg-1.png'),
    require('../../assets/images/feature-bg-3.png'),
    require('../../assets/images/feature-bg-2.png'),
  ];

  const { width } = Dimensions.get('window');

  const fadeAnim = useRef(
    new Array(backgroundImages.length).fill(null).map(() => new Animated.Value(1)),
  ).current;

  useEffect(() => {
    const nextIndex = Math.round(scrollOffset / width); // Calculate index based on scroll position

    Animated.parallel([
      Animated.timing(fadeAnim[nextIndex], {
        toValue: 1,
        duration: 22, // Short duration for quick response
        useNativeDriver: true,
      }),
      ...fadeAnim.map((anim, i) => {
        if (i !== nextIndex) {
          return Animated.timing(anim, {
            toValue: 0,
            duration: 22, // Short duration for quick response
            useNativeDriver: true,
          });
        }
        return null;
      }).filter(Boolean),
    ]).start(() => setActiveIndex(nextIndex)); // Update the activeIndex here
  }, [scrollOffset]);

  const handleScroll = (event) => {
    const newOffset = event.nativeEvent.contentOffset.x;
    setScrollOffset(newOffset);
  };

  const renderItem = ({ item, index }) => (
    <Animated.View style={{ ...styles.carouselItem, opacity: fadeAnim[index] }}>
      {item}
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      {backgroundImages.map((image, index) => (
        <Animated.Image
          source={image}
          resizeMode="cover"
          style={{ ...styles.imageBackground, opacity: fadeAnim[index] }}
          key={index}
        />
      ))}
      <Carousel
        enableSnap
        layout="default"
        decelerationRate="fast"
        data={carouselItems}
        sliderWidth={width}
        itemWidth={width - 32}
        renderItem={renderItem}
        onScroll={handleScroll}
        scrollEventThrottle={64} // Control the scroll event frequency
      />
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        dotStyle={styles.paginationDot}
        dotContainerStyle={styles.paginationDotContainer}
        inactiveDotStyle={styles.inactivePaginationDot}
        inactiveDotScale={1}
        inactiveDotOpacity={1}
      />
    </View>
  );
}

export default Slideshow;
