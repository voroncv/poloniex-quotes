import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';

const width = Dimensions.get('window').width;

type Props = {};
export default class ErrorData extends Component<Props> {
    constructor(props: Object) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.text}>
                Ошибка при получении данных
            </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F44336',
        width: width,
        position: 'absolute',
        left: 0,
        top: 0,
        height: 50,
        zIndex: 2,
        display: 'flex',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        color: '#FFFFFF',
    }
});
