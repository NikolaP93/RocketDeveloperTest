import React from 'react';
import {useEffect} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import useSpaceXContext from '../../../modules/hooks/useSpaceXData';
import Card from '../../card/Card';

interface Props {}

const Rockets = (props: Props) => {
  const ctx = useSpaceXContext();

  useEffect(() => {
    ctx.fetchMembers();
    ctx.fetchRockets();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {ctx?.state?.rockets.map((item, index) => (
          <Card kind="rocket" key={index} {...item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scrollView: {
    flexGrow: 1,
  },
});

export default Rockets;
