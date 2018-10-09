import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

type Props = {};
export default class Navigation extends Component<Props> {
    constructor(props: Object) {
        super(props);
        this.state = {
            tabs: [
                {
                    icon: require('../../images/about.png'),
                    activeIcon: require('../../images/about-active.png'),
                    title: 'О приложении',
                    pageName: 'About',
                }, {
                    icon: require('../../images/quotes.png'),
                    activeIcon: require('../../images/quotes-active.png'),
                    title: 'Котировки',
                    pageName: 'Quotes',
                }
            ]
        };
    }

    render() {
        let navigations = this.state.tabs.map(function (el, i) {
            let icon = this.props.activePage === el.pageName ? el.activeIcon : el.icon;
            return (
                <TouchableOpacity
                    activeOpacity={0.9}
                    key={i}
                    style={[styles.navigationItem]}
                    onPress={e => this.props.changePage(el.pageName)}
                >
                    <Image
                        style={styles.itemImage}
                        source={icon}
                    />
                    <Text style={[styles.itemTitle, this.props.activePage === el.pageName ? styles.itemTitleActive : styles.itemTitleDefault]}>
                        {el.title}
                    </Text>
                </TouchableOpacity>
            )
        }, this);

        return (
            <View style={styles.container}>
                {navigations}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        flex: 1,
        borderTopColor: '#e8ebee',
        borderTopWidth: 2,
        backgroundColor: '#006971',
    },
    navigationItem: {
        width: '50%',
        height: 60,
        flex: 1,
        flexDirection: 'column',
        maxHeight: 60,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#ffffff',
    },
    itemImage: {
        width: 25,
        height: 25
    },
    itemTitle: {
        textAlign: 'center',
        position: 'relative',
        bottom: 2,
        fontSize: 12
    },
    itemTitleActive: {
        color: '#ee8415'
    },
    itemTitleDefault: {
        color: '#000000'
    }
});
