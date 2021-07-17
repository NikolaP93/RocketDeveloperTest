import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {}

const Rocket = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Rocket Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Rocket;
