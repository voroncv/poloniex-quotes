import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, ActivityIndicator, ScrollView } from 'react-native';

const width = Dimensions.get('window').width;

type Props = {};
export default class QuotesList extends Component<Props> {
    constructor(props: Object) {
        super(props);
        this.state = {};
    }

    render() {
        let quotes = this.props.data.map(function (el, i) {
            let percentColor = el[1].percentChange < 0 ? { color: 'red' } : { color: 'green' };
            let percent = Number(el[1].percentChange).toFixed(4);
            let isPlusPercent = Number(el[1].percentChange) > 0 ? '+' : null;
            return (
                <View style={styles.tableBody} key={i}>
                    <Text style={styles.tableCell}>{el[0]}</Text>
                    <Text style={styles.tableCell}>{el[1].last}</Text>
                    <Text style={styles.tableCell}>{el[1].highestBid}</Text>
                    <Text style={[styles.tableCell, percentColor]}>{isPlusPercent}{percent}%</Text>
                </View>
            )
        }, this);

        return (
            <View>
                <View style={styles.tableHeader}>
                    <Text style={styles.tableCell}>Pair</Text>
                    <Text style={styles.tableCell}>Last</Text>
                    <Text style={styles.tableCell}>Highest Bid</Text>
                    <Text style={styles.tableCell}>Change</Text>
                </View>
                <ScrollView>
                    {quotes}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tableHeader: {
        width: width,
        backgroundColor: '#b3d5d6',
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
    },
    tableBody: {
        width: width,
        backgroundColor: '#FAFAFA',
        display: 'flex',
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between',
        borderBottomColor: '#e7e7e7',
        borderBottomWidth: 2,
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
    },
    tableCell: {
        width: width/4
    },
});
