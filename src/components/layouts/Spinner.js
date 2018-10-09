import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, ActivityIndicator } from 'react-native';

const width = Dimensions.get('window').width;

type Props = {};
export default class Spinner extends Component<Props> {
    constructor(props: Object) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    size="large"
                    color="#FFFFFF"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#02272a',
        width: width,
        justifyContent: 'center',
    },
});
