import React, { Component } from 'react';
import { StyleSheet, StatusBar, View, Alert } from 'react-native';
import TimerMixin from 'react-timer-mixin';

import QuotesList from './layouts/QuotesList';
import Spinner from './layouts/Spinner';

type Props = {};
export default class Quotes extends Component<Props> {
    constructor(props: Object) {
        super(props);
        this.state = {
            quotes: [],
            isLoader: false,
        };
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
            headerTintColor: '#FFFFFF',
        };
    };

    componentDidMount() {
        this.getQuotesList();
    }

    async getQuotesList() {
        this.setState({
            isLoader: true,
        });

        const params = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }

        const response = await fetch(`https://poloniex.com/public?command=returnTicker`, params);

        if (!response) {
            throw response
        }

        const responseJson = await response.json();

        let quotesList = Object.entries(responseJson);

        this.setState({
            isLoader: false,
            quotes: quotesList
        });
    }

    render() {
        if (this.state.isLoader) {
            return (
                <View style={styles.container}>
                    <StatusBar barStyle='light-content' />
                    <Spinner />
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content' />
                <QuotesList data={this.state.quotes} />
            </View>
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
