// screens/LandingPage.tsx
import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import SimpleText from '../components/SimpleText'; // Import the SimpleText component
import AnimatedBackground from '../components/AnimatedBackground';
import GradientText from '../components/GradientText';
// import ImageSequence from 'react-native-image-sequence';

import AlienAnimation from '../components/AlienAnimation';

const images = [
  require('../assets/images/alien_icon.png'),
  require('../assets/images/alien_icon_smaller.png'),
];

const centerIndex = Math.round(images.length / 2);

const LandingPage = () => {
  console.log('Rendering LandingPage');
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <AnimatedBackground />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <GradientText style={styles.cadeText}>'CADE</GradientText>
      </View>
      {/* <ImageSequence
        images={images}
        startFrameIndex={centerIndex}
        style={{width: 50, height: 50}}
      /> */}
      <AlienAnimation />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonBox}>
          <Text style={styles.playButton}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBox}>
          <Text style={styles.signUpButton}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a', // Off-black background color
    justifyContent: 'center', // Center everything vertically
    alignItems: 'center', // Center everything horizontally
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject, // Fill the parent container
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: '33%',
    alignItems: 'center',
    zIndex: 1, // Ensure text is rendered above the background
  },
  welcomeText: {
    color: 'yellow',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'PressStart2P-Regular',
  },
  cadeText: {
    marginTop: 40,
    fontSize: 60,
    fontFamily: 'PressStart2P-Regular',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1}, // Horizontal and vertical offset
    textShadowRadius: 1, // Radius of the shadow blur
    // zIndex: 2,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: '20%',
    alignItems: 'center',
    zIndex: 1,
  },
  buttonBox: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  playButton: {
    color: '#FF00FF',
    fontSize: 26,
    fontFamily: 'PressStart2P-Regular',
  },
  signUpButton: {
    color: '#FF00FF',
    fontSize: 26,
    fontFamily: 'PressStart2P-Regular',
    marginTop: 30,
  },
});

export default LandingPage;
