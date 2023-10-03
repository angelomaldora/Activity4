import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Animated, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const Collapsible = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [animation] = useState(new Animated.Value(0));

  const toggleCollapsible = () => {
    Animated.timing(animation, {
      toValue: isCollapsed ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsCollapsed(!isCollapsed);
  };

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100], 
  });

  const containerStyle = {
    height: heightInterpolate,
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={toggleCollapsible}>
        <View style={styles.header}>
          <Text style={styles.slide2} >Click to Toggle</Text>
        </View>
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.content, containerStyle]}>
        <Text>Collapsible Content Goes Here</Text>
      </Animated.View>
    </View>
  );
};

const Carousel = () => {
  return (
    <Swiper style={styles.carouselWrapper} showsButtons={true}>
      <View style={styles.slide}>
        <Text style={styles.slide1}>Slide 1</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.slide1}>Slide 2</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.slide1}>Slide 3</Text>
      </View>
    </Swiper>
  );
};

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Collapsible />
      <Carousel />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 10,
  },
  container: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 10,
    overflow: 'hidden',
  },
  header: {
    padding: 10,
    backgroundColor: '#0b093a',
  },
  content: {
    padding: 10,
    backgroundColor: 'white',
  },
  carouselWrapper: {
    height: "100%",
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b093a',
    borderRadius: 10
  },
  slide1:{
    color: 'white',
    fontSize: 100
  },
  slide2:{
    color: 'white',
    fontSize: 15
  }
});

export default App;
