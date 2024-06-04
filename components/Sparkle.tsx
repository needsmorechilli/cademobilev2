// components/Sparkle.tsx
import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View, Easing} from 'react-native';

const Sparkle = ({style}) => {
  const sparkleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(sparkleAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false, // useNativeDriver: false to support color interpolation
        }),
        Animated.timing(sparkleAnim, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false, // useNativeDriver: false to support color interpolation
        }),
      ]),
    ).start();
  }, [sparkleAnim]);

  const colors = ['purple', 'yellow', 'white'];
  const startColor = colors[Math.floor(Math.random() * colors.length)];
  const endColor = colors.filter(color => color !== startColor)[0];

  const sparkleStyle = {
    opacity: sparkleAnim,
    transform: [
      {
        scale: sparkleAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0.5, 1.5],
        }),
      },
    ],
    backgroundColor: sparkleAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [startColor, endColor],
    }),
  };

  return <Animated.View style={[styles.sparkle, sparkleStyle, style]} />;
};

const styles = StyleSheet.create({
  sparkle: {
    position: 'absolute',
    width: 8, // Tiny squares
    height: 8, // Tiny squares
  },
});

export default Sparkle;
