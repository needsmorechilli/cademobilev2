// components/AnimatedBackground.tsx
import React from 'react';
import {View, ImageBackground, StyleSheet, Dimensions} from 'react-native';
import Sparkle from './Sparkle';

const {width, height} = Dimensions.get('window');

const generateSparkles = numSparkles => {
  let sparkles = [];
  for (let i = 0; i < numSparkles; i++) {
    const randomX = Math.random() * width;
    const randomY = Math.random() * height;
    sparkles.push(<Sparkle key={i} style={{left: randomX, top: randomY}} />);
  }
  return sparkles;
};

const AnimatedBackground = () => {
  const sparkles = generateSparkles(10); // Adjust the number of sparkles as needed

  return <View style={styles.container}>{sparkles}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a', // Off-black background color
    justifyContent: 'center',
  },
});

export default AnimatedBackground;
