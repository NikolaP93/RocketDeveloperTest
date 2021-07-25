import React from 'react';
import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './index.styles';

const { width } = Dimensions.get('screen');

const NoInternet = () => (
    <SafeAreaView style={styles.container}>
        <MaterialIcon name="wifi-off" size={width / 4} />
    </SafeAreaView>
);

export default NoInternet;
