import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import useSpaceXContext from '../../../modules/hooks/useSpaceXData';
import { StackRoutes } from '../../../navigation/config/Routes';
import * as RootNavigation from '../../../navigation/RootNavigation';
import Card, { KindState } from '../../card/Card';
import { styles } from './index.styles';

const CrewMembers = (): JSX.Element => {
    const ctx = useSpaceXContext();

    const onPressHandler = (id: string) => {
        ctx.fetchMember(id);
        RootNavigation.navigate(StackRoutes.crewMember);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                {ctx?.state?.members.map((item, index) => (
                    <Card key={index} onPress={onPressHandler} kind={KindState.Members} {...item} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default CrewMembers;
