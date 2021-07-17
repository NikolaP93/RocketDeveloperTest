import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StackRoutes} from './config/Routes';
import CrewMembers from '../components/screens/CrewMembers';
import CrewMember from '../components/screens/CrewMember';
import {options} from './config/options';
import {Text} from 'react-native';
import useSpaceXContext from '../modules/hooks/useSpaceXData';

const Stack = createStackNavigator();

const CrewMembersStack = () => {
  const ctx = useSpaceXContext();

  return (
    <Stack.Navigator initialRouteName={StackRoutes.crewMembers}>
      <Stack.Screen name={StackRoutes.crewMembers} component={CrewMembers} />
      <Stack.Screen
        options={{
          ...options,
          headerTitle: () => <Text>{ctx.state.member.name}</Text>,
        }}
        name={StackRoutes.crewMember}
        component={CrewMember}
      />
    </Stack.Navigator>
  );
};

export default CrewMembersStack;
