import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import QuotesList from './layouts/QuotesList';

type Props = {};
export default class Quotes extends Component<Props> {
    constructor(props: Object) {
        super(props);
        this.state = {};
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Котировки',
            headerTitleStyle: {
                color: '#FFFFFF'
            },
            headerStyle: {
                backgroundColor: '#006971',
                borderBottomWidth: 0,
            },
        };
    };

    render() {
        return (
            <ScrollView
                contentContainerStyle={styles.container}
            >
                <QuotesList />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#02272a',
    },
});
