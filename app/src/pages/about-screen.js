import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'Sobre',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Página Sobre</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
