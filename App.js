import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import About from './src/components/About';
import Quotes from './src/components/Quotes';

const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 0
        }
    }
}

const RootStack = createStackNavigator({
    About: { screen: About },
    Quotes: { screen: Quotes },
}, {
    initialRouteName: 'About',
    transitionConfig,
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <RootStack />
        );
    }
}