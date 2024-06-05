import {
  ConnectionProvider,
  RPC_ENDPOINT,
} from './components/providers/ConnectionProvider';
import {clusterApiUrl} from '@solana/web3.js';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {AuthorizationProvider} from './components/providers/AuthorizationProvider';
import {Header} from './components/Header';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import MainScreen from './screens/MainScreen';
import LandingPage from './screens/LandingPage';
import Hub from './screens/Hub';
import CrewQuarters from './screens/CrewQuarters';
import ShipStore from './screens/ShipStore';
import BonkGame from './screens/BonkGame';

const Stack = createStackNavigator();

function MainApp() {
  return (
    <ConnectionProvider
      config={{commitment: 'processed'}}
      endpoint={clusterApiUrl(RPC_ENDPOINT)}>
      <AuthorizationProvider>
        <SafeAreaView style={styles.shell}>
          <Header />
          <MainScreen />
        </SafeAreaView>
      </AuthorizationProvider>
    </ConnectionProvider>
  );
}

export default function App() {
  return (
    <ConnectionProvider
      config={{commitment: 'processed'}}
      endpoint={clusterApiUrl(RPC_ENDPOINT)}>
      <AuthorizationProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LandingPage">
            <Stack.Screen
              name="LandingPage"
              component={LandingPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Hub"
              component={Hub}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CrewQuarters"
              component={CrewQuarters}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ShipStore"
              component={ShipStore}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="BonkGame"
              component={BonkGame}
              options={{headerShown: false}}
            />
            <Stack.Screen name="MainApp" component={MainApp} />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthorizationProvider>
    </ConnectionProvider>
  );
}

const styles = StyleSheet.create({
  shell: {
    height: '100%',
  },
});
