import React from 'react';
import {useEffect} from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import useSpaceXContext from '../../../modules/hooks/useSpaceXData';

interface Props {}

const Rockets = (props: Props) => {
  const ctx = useSpaceXContext();

  useEffect(() => {
    ctx.fetchMembers();
    ctx.fetchRockets();
  }, []);

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

export default Rockets;
