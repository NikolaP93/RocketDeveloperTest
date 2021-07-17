import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Rocket from '../components/screens/Rockets';
import CrewMembersStack from './CrewMembersStack';

import {TabRoutes} from './config/Routes';

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={TabRoutes.rocket} component={Rocket} />
      <Tab.Screen name={TabRoutes.crewMembers} component={CrewMembersStack} />
    </Tab.Navigator>
  );
};

export default Router;
