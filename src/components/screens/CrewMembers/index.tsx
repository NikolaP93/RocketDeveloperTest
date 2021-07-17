import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackRoutes} from '../../../navigation/config/Routes';
import * as RootNavigation from '../../../navigation/RootNavigation';

interface Props {}

const CrewMembers = (props: Props) => {
  const onPressHandler = () => {
    RootNavigation.navigate(StackRoutes.crewMember);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onPressHandler}>
        <Text>Go to CrewMember</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CrewMembers;
