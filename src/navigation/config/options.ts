import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import * as RootNavigation from '../RootNavigation';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const {height, width} = Dimensions.get('screen');

export const options = {
  headerStyle: {
    height: height / 10,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerLeft: () => (
    <TouchableOpacity onPress={() => RootNavigation.goBack()}>
      <MaterialIcon name="arrow-back" size={width >= 600 ? 32 : 26} />
    </TouchableOpacity>
  ),
};
