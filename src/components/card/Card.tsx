import * as React from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';

import { styles } from './Card.styles';
import constants from '../../constants/constants';

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

export default Card;
