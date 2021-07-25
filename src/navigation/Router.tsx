import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RNSplash from 'react-native-bootsplash';
import Rocket from '../components/screens/Rockets';
import CrewMembersStack from './CrewMembersStack';

import { TabRoutes } from './config/Routes';

const Tab = createBottomTabNavigator();

const Router = () => {
    RNSplash.hide();

    return (
        <Tab.Navigator>
            <Tab.Screen name={TabRoutes.rocket} component={Rocket} />
            <Tab.Screen name={TabRoutes.crewMembers} component={CrewMembersStack} />
        </Tab.Navigator>
    );
};

export default Router;
