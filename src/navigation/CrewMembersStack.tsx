import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StackRoutes} from './config/Routes';
import CrewMembers from '../components/screens/CrewMembers';
import CrewMember from '../components/screens/CrewMember';

const Stack = createStackNavigator();

const CrewMembersStack = () => {
  return (
    <Stack.Navigator initialRouteName={StackRoutes.crewMembers}>
      <Stack.Screen name={StackRoutes.crewMembers} component={CrewMembers} />
      <Stack.Screen name={StackRoutes.crewMember} component={CrewMember} />
    </Stack.Navigator>
  );
};

export default CrewMembersStack;
