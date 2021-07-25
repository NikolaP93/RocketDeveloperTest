import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
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
