import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, ActivityIndicator, ScrollView } from 'react-native';
import isIphoneX from '../../config/isIphoneX';

const width = Dimensions.get('window').width;

function wp (percentage) {
    const value = (percentage * width) / 100;
    return Math.round(value);
}

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
                    <Text style={[styles.tableCell, styles.tableBodyText]}>{el[0]}</Text>
                    <Text style={[styles.tableCell, styles.tableBodyText]}>{el[1].last}</Text>
                    <Text style={[styles.tableCell, styles.tableBodyText]}>{el[1].highestBid}</Text>
                    <Text style={[styles.tableCell, percentColor, styles.tableBodyText]}>{isPlusPercent}{percent}%</Text>
                </View>
            )
        }, this);

        return (
            <View>
                <View style={styles.tableHeader}>
                    <Text style={[styles.tableCell, styles.textCenter]}>Pair</Text>
                    <Text style={[styles.tableCell, styles.textCenter]}>Last</Text>
                    <Text style={[styles.tableCell, styles.textCenter]}>Highest Bid</Text>
                    <Text style={[styles.tableCell, styles.textCenter]}>Change</Text>
                </View>
                <ScrollView
                    contentInset={{bottom: isIphoneX === true ? 94 : 60}}
                >
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
    textCenter: {
        textAlign: 'center',
    },
    tableBodyText: {
        fontSize: wp(3.5)
    }
});
