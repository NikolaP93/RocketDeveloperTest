import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {}

const CrewMembers = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>CrewMembers Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CrewMembers;
