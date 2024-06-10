import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BonkGame = ({route}) => {
  const {walletAddress} = route.params;
  const navigation = useNavigation();

  const navigateToPage = pageName => {
    navigation.navigate(pageName, {walletAddress});
  };

  const formatWalletAddress = address => {
    if (address.length <= 8) return address;
    const firstFour = address.substring(0, 4);
    const lastFour = address.substring(address.length - 4);
    const asterisks = '***';
    return `${firstFour}${asterisks}${lastFour}`;
  };

  return (
    <ImageBackground
      source={require('../assets/images/crew_quarters.png')}
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.comingSoonText}>Coming Soon</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigateToPage('Hub')}>
          <Text style={styles.backButtonText}>Back to Hub</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ensures the image covers the whole screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  comingSoonText: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  backButton: {
    marginTop: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BonkGame;
