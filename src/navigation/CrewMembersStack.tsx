import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import { StackRoutes } from './config/Routes';
import CrewMembers from '../components/screens/CrewMembers';
import CrewMember from '../components/screens/CrewMember';
import { options } from './config/options';
import useSpaceXContext from '../modules/hooks/useSpaceXData';

const Stack = createStackNavigator();

const CrewMembersStack = (): JSX.Element => {
    const ctx = useSpaceXContext();
    const headerTitle = (): JSX.Element => <Text>{ctx.state.member.name}</Text>;

    return (
        <Stack.Navigator initialRouteName={StackRoutes.crewMembers}>
            <Stack.Screen name={StackRoutes.crewMembers} component={CrewMembers} />
            <Stack.Screen
                options={{
                    ...options,
                    headerTitle,
                }}
                name={StackRoutes.crewMember}
                component={CrewMember}
            />
        </Stack.Navigator>
    );
};

export default CrewMembersStack;
