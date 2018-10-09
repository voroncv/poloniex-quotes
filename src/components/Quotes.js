import React, { Component } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import { observer, inject } from "mobx-react";

import QuotesList from './layouts/QuotesList';
import Spinner from './layouts/Spinner';
import Navigation from './layouts/Navigation';
import ErrorData from './layouts/ErrorData';

type Props = {};
export default @inject("quotesStore") @observer class Quotes extends Component<Props> {
    constructor(props: Object) {
        super(props);
        this.state = {};
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Котировки',
            headerLeft: null,
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
        this.props.quotesStore.getQuotes(true);
    }

    changePage(e) {
        this.props.navigation.navigate(e);
    }

    render() {
        if (this.props.quotesStore.isLoader) {
            return (
                <View
                    style={styles.container}
                >
                    <StatusBar
                        barStyle='light-content'
                    />
                    <Spinner />
                </View>
            );
        }
        return (
            <View
                style={styles.container}
            >
                <StatusBar
                    barStyle='light-content'
                />
                { this.props.quotesStore.isError && <ErrorData /> }
                <QuotesList
                    data={this.props.quotesStore.quotesList}
                />
                <Navigation
                    changePage={this.changePage.bind(this)}
                    activePage="Quotes"
                />
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
