import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ShipStore = ({route}) => {
  const {walletAddress} = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [buyModalVisible, setBuyModalVisible] = useState(false);
  const [prizeModalVisible, setPrizeModalVisible] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigation = useNavigation();

  const handlePress = data => {
    setUserData(data);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setUserData(null);
  };

  const handleGoldCoinPress = () => {
    setBuyModalVisible(true);
  };

  const handlePrizePress = () => {
    setPrizeModalVisible(true);
  };

  const handleCloseBuyModal = () => {
    setBuyModalVisible(false);
  };

  const handleClosePrizeModal = () => {
    setPrizeModalVisible(false);
  };

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
      source={require('../assets/images/shopkeeper.png')}
      style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.clickableArea, {top: 350, left: 160}]}
          onPress={() =>
            handlePress({name: 'User 1', Pets: 'None', Tickets: '112'})
          }
        />
        <TouchableOpacity
          style={[styles.clickableArea, {top: 700, left: 160}]}
          onPress={() => navigateToPage('Hub')}
        />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={handleCloseModal}>
          <TouchableWithoutFeedback onPress={handleCloseModal}>
            <View style={styles.modalOverlay}>
              <TouchableWithoutFeedback>
                <View style={styles.modalContent}>
                  <ImageBackground
                    source={require('../assets/images/ship_store_inventory.png')}
                    style={styles.modalImageBackground}>
                    {userData && (
                      <>
                        <TouchableOpacity
                          style={styles.goldCoinTouchable}
                          onPress={handleGoldCoinPress}>
                          <Image
                            source={require('../assets/images/gold_coin.png')}
                            style={styles.modalCoinImage}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.prizeTouchable}
                          onPress={handlePrizePress}>
                          <Image
                            source={require('../assets/images/madlads.png')}
                            style={styles.modalPrizeImage}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.dogFoodTouchable}
                          onPress={handlePrizePress}>
                          <Image
                            source={require('../assets/images/dog_food.png')}
                            style={styles.modalPrizeImage}
                          />
                        </TouchableOpacity>
                      </>
                    )}
                  </ImageBackground>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={handleCloseModal}>
                    <Text style={styles.closeButtonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={buyModalVisible}
          onRequestClose={handleCloseBuyModal}>
          <TouchableWithoutFeedback onPress={handleCloseBuyModal}>
            <View style={styles.modalOverlay}>
              <TouchableWithoutFeedback>
                <View style={styles.buyModalContent}>
                  <ImageBackground
                    source={require('../assets/images/cade_buy_button.png')}
                    style={styles.cadeBuyButton}
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={prizeModalVisible}
          onRequestClose={handleClosePrizeModal}>
          <TouchableWithoutFeedback onPress={handleClosePrizeModal}>
            <View style={styles.modalOverlay}>
              <TouchableWithoutFeedback>
                <View style={styles.prizeModalContent}>
                  <Image
                    source={require('../assets/images/madlads.png')}
                    style={styles.PrizeImageOverlay}
                  />
                  <TouchableOpacity
                    style={styles.claimPrizeButton}
                    onPress={() => {
                      /* link on chain */
                    }}>
                    <Text style={styles.claimPrizeButtonText}>
                      Claim Prize for 500 Tickets
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ensures the image covers the whole screen
  },
  container: {
    flex: 1,
    position: 'relative', // Ensure the container can position children absolutely
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  walletAddress: {
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
  clickableArea: {
    position: 'absolute',
    width: 120,
    height: 200,
    borderRadius: 25, // Make it a circle
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    height: 450,
    borderRadius: 10,
    alignItems: 'center',
    overflow: 'hidden', // Ensure the content does not overflow the border radius
  },
  modalImageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  modalText: {
    fontSize: 18,
    color: '#1a1a1a', // Ensure the text is readable over the image
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1,
    marginBottom: 10,
    width: 200,
    textAlign: 'center',
  },
  modalCoinImage: {
    width: 50,
    height: 50,
  },
  goldCoinTouchable: {
    position: 'absolute',
    top: 300,
    left: 125,
  },
  prizeTouchable: {
    position: 'absolute',
    top: 20,
    left: 75,
  },
  modalPrizeImage: {
    width: 50,
    height: 50,
  },
  buyModalContent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '80%',
  },
  cadeBuyButton: {
    width: 200, // Adjust the size as needed
    height: 200, // Adjust the size as needed
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  prizeModalContent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '80%',
  },
  PrizeImageOverlay: {
    width: 200, // Bigger size for the prize image
    height: 200, // Bigger size for the prize image
    marginBottom: 20,
  },
  claimPrizeButton: {
    backgroundColor: 'white', // Button background color
    borderColor: 'gold', // Gold outline
    borderWidth: 2, // Width of the outline
    paddingVertical: 10, // Vertical padding
    paddingHorizontal: 20, // Horizontal padding
    borderRadius: 10, // Rounded corners
    alignItems: 'center', // Center the text horizontally
    justifyContent: 'center', // Center the text vertically
    marginVertical: 10, // Vertical margin for spacing
    shadowColor: '#000', // Shadow color
    shadowOffset: {width: 0, height: 2}, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.84, // Shadow radius
    elevation: 5, // Elevation for Android shadow
  },
  claimPrizeButtonText: {
    color: 'black', // Text color
    fontSize: 18, // Font size
    fontWeight: 'bold', // Bold text
  },
  closeButton: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeButtonText: {
    color: 'gray',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dogFoodTouchable: {
    position: 'absolute',
    top: 150,
    left: 150,
  },
});

export default ShipStore;
