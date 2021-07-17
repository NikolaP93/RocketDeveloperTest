import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CrewMembers from '../components/screens/CrewMembers';
import Rocket from '../components/screens/Rockets';

import {TabRoutes} from './config/Routes';

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={TabRoutes.rocket} component={Rocket} />
      <Tab.Screen name={TabRoutes.crewMembers} component={CrewMembers} />
    </Tab.Navigator>
  );
};

export default Router;
