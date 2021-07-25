import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';

import constants from '../../constants/constants';

const { height, width } = Dimensions.get('screen');

export enum KindState {
    Rocket = 'rocket',
    Members = 'members',
    Member = 'member',
}

interface Mass {
    kg: number;
    lbs: number;
}

interface Props {
    id?: string;
    mass?: Mass;
    type?: string;
    name?: string;
    agency?: string;
    kind: KindState;
    onPress?(id: string): void;
    image?: string;
}

const Card = (props: Props): JSX.Element => {
    const { id, mass, type, onPress, kind, name, agency, image } = props;

    return (
        <TouchableOpacity
            disabled={kind === KindState.Rocket}
            onPress={() => onPress && onPress(id)}
            key={id}
            style={styles.container}
        >
            {kind === KindState.Rocket && (
                <>
                    <Text>{constants.rockets.id + id}</Text>
                    <Text>{constants.rockets.type + type}</Text>
                    <Text>{constants.rockets.mass + mass.kg}</Text>
                </>
            )}
            {kind === KindState.Members && (
                <>
                    <Text>{constants.members.name + name}</Text>
                    <Text>{constants.members.agency + agency}</Text>
                </>
            )}
            {kind === KindState.Member && (
                <>
                    <Text>{constants.members.name + name}</Text>
                    <Text>{constants.members.agency + agency}</Text>
                    <Image style={styles.image} source={{ uri: image }} />
                </>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: 'purple',

        borderRadius: 25,
        borderWidth: 1,
        elevation: 5,
        justifyContent: 'center',
        margin: 10,
        minHeight: height / 8,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,

        shadowRadius: 3.84,
        width: width / 1.25,
    },
    image: {
        height: height / 4,
        width: width / 4,
    },
});

export default Card;
