// components/GradientTextTest.js
import React from 'react';
import {View, StyleSheet} from 'react-native';
import GradientText from './GradientText';

const GradientTextTest = () => {
  return (
    <View style={styles.container}>
      <GradientText text="Hello, Gradient!" style={styles.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF', // Set a background color for better visibility
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default GradientTextTest;
