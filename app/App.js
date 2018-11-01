import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/pages/home-screen'
import AboutScreen from './src/pages/about-screen'

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    About: {
      screen: AboutScreen
    }
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}
