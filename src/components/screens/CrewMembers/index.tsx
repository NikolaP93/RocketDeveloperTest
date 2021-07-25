import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import useSpaceXContext from '../../../modules/hooks/useSpaceXData';
import {StackRoutes} from '../../../navigation/config/Routes';
import * as RootNavigation from '../../../navigation/RootNavigation';
import Card, {KindState} from '../../card/Card';

interface Props {}

const CrewMembers = (props: Props) => {
  const ctx = useSpaceXContext();

  const onPressHandler = id => {
    ctx.fetchMember(id);
    RootNavigation.navigate(StackRoutes.crewMember);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {ctx?.state?.members.map((item, index) => (
          <Card
            key={index}
            onPress={onPressHandler}
            kind={KindState.Member}
            {...item}
          />
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

export default CrewMembers;
