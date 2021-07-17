import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Props {}

const Rocket = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Rocket Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Rocket;
