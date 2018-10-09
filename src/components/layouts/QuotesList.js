import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

type Props = {};
export default class QuotesList extends Component<Props> {
    constructor(props: Object) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View>
                <View style={styles.tableHeader}>
                    <Text>Name</Text>
                    <Text>Last</Text>
                    <Text>Highest Bid</Text>
                    <Text>Change</Text>
                </View>
                <View style={styles.tableBody}>
                    <Text>ETH</Text>
                    <Text>0.1</Text>
                    <Text>542.34</Text>
                    <Text style={styles.greenChange}>+1.67%</Text>
                </View>
                <View style={styles.tableBody}>
                    <Text>ADA</Text>
                    <Text>0.0021</Text>
                    <Text>2542.34</Text>
                    <Text style={styles.redChange}>-10.47%</Text>
                </View>
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
    greenChange: {
        color: 'green',
    },
    redChange: {
        color: 'red',
    }
});
