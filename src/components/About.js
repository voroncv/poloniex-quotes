import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

type Props = {};
export default class About extends Component<Props> {
    constructor(props: Object) {
        super(props);
        this.state = {};
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: 'О приложении',
            headerStyle: {
                backgroundColor: '#b2d5d6',
                borderBottomWidth: 0,
            },
        };
    };

    openQuotesPage() {
        this.props.navigation.navigate('Quotes');
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{width: '80%', height: 200}}
                    source={require('../images/logo.png')}
                    resizeMode='contain'
                />
                <Text style={styles.about}>
                    PoloniexQuotes - котировки с криптовалютной биржи Poloniex
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.openQuotesPage.bind(this)}
                >
                    <Text style={styles.button_text}>
                        Перейти к котировкам
                    </Text>
                </TouchableOpacity>
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
    about: {
        fontSize: 18,
        textAlign: 'center',
        color: '#91abac',
        width: '80%'
    },
    button: {
        backgroundColor: '#ee8415',
        width: '80%',
        padding: 10,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    button_text: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 18
    }
});
