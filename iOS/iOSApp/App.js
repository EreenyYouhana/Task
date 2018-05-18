/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import Module from 'react-native-i-os-library';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.welcome} onPress={() => this.getMethod()}>
        <Text style={styles.welcome}>
          GET Method!
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
  getMethod(){
    Module.GET('https://api.androidhive.info/contacts/',(error, res) => {
      if (error) {
        alert(error);
      } else {
        alert(JSON.stringify(res));
      }
    });


  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
