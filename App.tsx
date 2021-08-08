/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import NoInternet from './src/components/screens/NoInternet';
import Router from './src/navigation/Router';
import NetInfo from '@react-native-community/netinfo';
import { navigationRef } from './src/navigation/RootNavigation';
import ContextProvider from './src/modules/context/Context';
import FlashMessage from 'react-native-flash-message';
import Loader from './src/components/loader/Loader';

const App = () => {
    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
        NetInfo.addEventListener((state) => setIsConnected(state.isConnected));
    }, [isConnected]);

    return (
        <NavigationContainer ref={navigationRef}>
            <View style={styles.container}>
                {isConnected ? (
                    <ContextProvider>
                        <Router />
                    </ContextProvider>
                ) : (
                    <NoInternet />
                )}
                <Loader />
                <FlashMessage position="top" />
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
