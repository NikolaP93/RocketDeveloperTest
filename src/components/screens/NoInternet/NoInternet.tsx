import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('screen');

const NoInternet = () => (
    <SafeAreaView style={styles.container}>
        <MaterialIcon name="wifi-off" size={width / 4} style={styles.marginBottom} />
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: padding.big * 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    marginBottom: {
        // marginBottom: margin.big,
    },
});

export default NoInternet;
