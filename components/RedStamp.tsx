import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

// Ensure you have linked the font correctly in your project
const RedStamp = () => {
  return (
    <View style={styles.stampContainer}>
      <View style={styles.horizontalLineTopOuter} />
      <View style={styles.horizontalLineTopInner} />
      <Text style={styles.stampText}>CADET</Text>
      <View style={styles.horizontalLineBottomInner} />
      <View style={styles.horizontalLineBottomOuter} />
    </View>
  );
};

const styles = StyleSheet.create({
  stampContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotate: '-10deg'}],
    position: 'relative',
    marginTop: 300,
    marginLeft: 50, // Adjust this value to move the stamp to the right
  },
  stampText: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Stamp', // Ensure this matches the font name in your project
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  horizontalLineTopOuter: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: 'red',
  },
  horizontalLineTopInner: {
    position: 'absolute',
    top: 5,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: 'red',
  },
  horizontalLineBottomInner: {
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: 'red',
  },
  horizontalLineBottomOuter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: 'red',
  },
});

export default RedStamp;
