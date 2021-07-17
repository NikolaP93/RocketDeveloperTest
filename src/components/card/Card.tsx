import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text, Dimensions} from 'react-native';

import constants from '../../constants/constants';

const {height, width} = Dimensions.get('screen');

interface Props {
  id: string;
  mass: object;
  type: string;
  name: string;
  agency: string;
  kind: string;
  onPress(id: string): void;
  image: string;
}

const Card = (props: Props) => {
  const {id, mass, type, onPress, kind, name, agency, image} = props;

  return (
    <TouchableOpacity
      disabled={kind === 'rocket'}
      onPress={() => onPress && onPress(id)}
      key={id}
      style={styles.container}>
      {kind === 'rocket' && (
        <>
          <Text>{constants.rockets.id + id}</Text>
          <Text>{constants.rockets.type + type}</Text>
          <Text>{constants.rockets.mass + mass.kg}</Text>
        </>
      )}
      {kind === 'members' && (
        <>
          <Text>{constants.members.name + name}</Text>
          <Text>{constants.members.agency + agency}</Text>
        </>
      )}
      {kind === 'member' && (
        <>
          <Text>{constants.members.name + name}</Text>
          <Text>{constants.members.agency + agency}</Text>
          <Image style={styles.image} source={{uri: image}} />
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: height / 8,
    width: width / 1.25,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'purple',
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: '#fff',
  },
  image: {
    height: height / 4,
    width: width / 4,
  },
});

export default Card;
