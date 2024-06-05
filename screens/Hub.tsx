import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Hub = ({route}) => {
  const {walletAddress} = route.params;
  const navigation = useNavigation();

  // Initialize state for tickets and coins
  const [tickets, setTickets] = useState(10); // Example initial value
  const [coins, setCoins] = useState(100); // Example initial value

  const navigateToPage = pageName => {
    navigation.navigate(pageName, {walletAddress});
  };

  console.log('Running Hub');

  return (
    <ImageBackground
      source={require('../assets/images/background_main.png')}
      style={styles.background}>
      <View style={styles.container}>
        {/* Resource Bar */}
        <View style={styles.resourceContainer}>
          <View style={styles.resourceBar}>
            <Image
              source={require('../assets/images/gold_coin.png')}
              style={styles.resourceIcon}
            />
            <Text style={styles.resourceText}>{coins}</Text>
          </View>
          <View style={styles.resourceBar}>
            <Image
              source={require('../assets/images/ticket_icon.png')}
              style={styles.resourceIcon}
            />
            <Text style={styles.resourceText}>{tickets}</Text>
          </View>
        </View>

        {/* Clickable Area 1 */}
        <TouchableOpacity
          style={[styles.clickableArea, {top: 350, left: 160}]}
          onPress={() => navigateToPage('CrewQuarters')}
        />

        {/* Ship Store */}
        <View style={styles.shipStoreContainer}>
          <TouchableOpacity onPress={() => navigateToPage('ShipStore')}>
            <Image
              source={require('../assets/images/ship_store.png')}
              style={styles.shipStoreImage}
            />
          </TouchableOpacity>
        </View>

        {/* Bonk Game */}
        <View style={styles.bonkGameContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigateToPage('BonkGame')}>
            <Image
              source={require('../assets/images/bonk_space_cell.png')}
              style={styles.bonkGameIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clickableArea: {
    position: 'absolute',
    width: 100,
    height: 50,
    borderRadius: 25, // Make it a circle
  },
  shipStoreContainer: {
    position: 'absolute',
    top: 200,
    right: 20,
    zIndex: 2,
  },
  shipStoreImage: {
    width: 120,
    height: 100,
    resizeMode: 'contain',
  },
  bonkGameContainer: {
    position: 'absolute',
    top: 600,
    left: 90,
    zIndex: 2,
  },
  bonkGameIcon: {
    width: 130,
    height: 150,
    resizeMode: 'contain',
  },
  resourceContainer: {
    position: 'absolute',
    top: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
  },
  resourceBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  resourceIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 5,
  },
  resourceText: {
    fontSize: 18,
    color: 'white',
  },
});

export default Hub;
