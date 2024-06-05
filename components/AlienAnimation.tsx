import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, Image, Animated} from 'react-native';

const AlienAnimation = () => {
  const fadeAnim1 = useRef(new Animated.Value(1)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loopAnimation = () => {
      Animated.sequence([
        Animated.timing(fadeAnim1, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim2, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim1, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim2, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => {
        loopAnimation();
      });
    };

    loopAnimation();
  }, [fadeAnim1, fadeAnim2]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/images/alien_icon.png')}
        style={[styles.image, {opacity: fadeAnim1}]}
        resizeMode="contain"
      />
      <Animated.Image
        source={require('../assets/images/alien_icon_flip.png')}
        style={[styles.image, {opacity: fadeAnim2}]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    position: 'absolute',
  },
});

export default AlienAnimation;
