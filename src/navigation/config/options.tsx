import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import * as RootNavigation from '../RootNavigation';

const { height, width } = Dimensions.get('screen');

const headerLeft = (): JSX.Element => (
    <TouchableOpacity onPress={() => RootNavigation.goBack()}>
        <MaterialIcon name="arrow-back" size={width >= 600 ? 32 : 26} />
    </TouchableOpacity>
);

export const options = {
    headerStyle: {
        height: height / 10,
        elevation: 0,
        shadowOpacity: 0,
    },
    headerLeft,
};
