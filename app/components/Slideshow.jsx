import React, { useState, useEffect, useRef } from 'react';
import { View, Dimensions, Animated } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const Slideshow = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselItems = children;

  const backgroundImages = [
    require('../../assets/images/feature-bg-1.png'), 
    require('../../assets/images/feature-bg-2.png'), 
    require('../../assets/images/feature-bg-3.png')
  ];

  const fadeAnim = useRef(backgroundImages.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim[activeIndex], {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim[(activeIndex + 1) % backgroundImages.length], {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, [activeIndex]);

  const _renderItem = ({ item, index }) => {
    return (
      <Animated.View style={{ marginTop: 120, opacity: fadeAnim[index] }}>
        {item}
      </Animated.View>
    );
  };
  

  const pagination = (
    <Pagination
      dotsLength={carouselItems.length}
      activeDotIndex={activeIndex}
      dotStyle={{
        width: 8,
        height: 8,
        borderRadius: 8,
        backgroundColor: 'black'
      }}
      inactiveDotStyle={{
        backgroundColor: 'white'
      }}
      inactiveDotScale={1}
      inactiveDotOpacity={1}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      {backgroundImages.map((image, index) => (
        <Animated.Image 
          source={image}
          resizeMode='cover'
          style={{ 
            position: 'absolute',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            opacity: fadeAnim[index],
          }} 
          key={index}
        />
      ))}
      <Carousel
        layout={"default"}
        data={carouselItems}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width - 32}
        renderItem={_renderItem}
        onSnapToItem={setActiveIndex} />
      { pagination }
    </View>
  );
};

export default Slideshow;
