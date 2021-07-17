/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import NoInternet from './src/components/screens/NoInternet/NoInternet';
import Router from './src/navigation/Router';
import NetInfo from '@react-native-community/netinfo';
import {navigationRef} from './src/navigation/RootNavigation';

const App = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    NetInfo.addEventListener(state => setIsConnected(state.isConnected));
    console.log(isConnected);
  }, [isConnected]);

  return (
    <NavigationContainer ref={navigationRef}>
      <View style={styles.container}>
        {isConnected ? <Router /> : <NoInternet />}
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
