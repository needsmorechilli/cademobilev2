// screens/CrewQuarters.tsx
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Modal,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CrewQuarters = ({route}) => {
  const {walletAddress} = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigation = useNavigation();

  const handlePress = data => {
    console.log('Setting user data:', data); // Debug log
    setUserData(data);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setUserData(null);
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

  console.log('Crew Quarters');

  return (
    <ImageBackground
      source={require('../assets/images/crew_quarters.png')}
      style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.clickableArea, {top: 450, left: 160}]}
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
                    source={require('../assets/images/id_sprite.png')}
                    style={styles.modalImageBackground}>
                    {userData && (
                      <>
                        <Text style={styles.modalText}>
                          ID: {formatWalletAddress(walletAddress)}
                        </Text>
                        <Text style={styles.modalPetsText}>
                          Pets: {userData.Pets}
                        </Text>
                        <Text style={styles.modalPointsText}>
                          Tickets: {userData.Tickets}
                        </Text>
                      </>
                    )}
                  </ImageBackground>
                  <Button title="Close" onPress={handleCloseModal} />
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
    height: 120,
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
    height: 400,
    borderRadius: 10,
    alignItems: 'center',
    overflow: 'hidden', // Ensure the content does not overflow the border radius
  },
  modalImageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    position: 'absolute',
    top: 228,
    left: 58,
    fontSize: 18,
    color: '#1a1a1a', // Ensure the text is readable over the image
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1,
    marginBottom: 10,
    width: 200,
  },
  modalPetsText: {
    position: 'absolute',
    top: 255,
    left: 58,
    fontSize: 18,
    color: '#1a1a1a', // Ensure the text is readable over the image
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1,
    marginBottom: 10,
    width: 200,
  },
  modalPointsText: {
    position: 'absolute',
    top: 340,
    left: 100,
    fontSize: 18,
    color: '#1a1a1a', // Ensure the text is readable over the image
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1,
    marginBottom: 10,
    width: 200,
  },
});
export default CrewQuarters;
