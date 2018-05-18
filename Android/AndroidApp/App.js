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
  TouchableHighlight,
  Image
} from 'react-native';

import AndroidModule from 'react-native-android-library';

export default class App extends Component {
  constructor(){
    super();
    this.state ={
      image : null,
      error: null
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight  onPress={() => this.screenShot()}>
          <Text style={styles.welcome}>
            Take a ScreenShot!
        </Text>
        </TouchableHighlight>
        {this.showScreenShot()}
      </View>
    );
  }
  screenShot() {
    AndroidModule.screenShot(
      (image) => {
        this.setState({ image });
      },
      (error) => {
        this.setState({ error });
      }
    )
  }
  showScreenShot() {
    if(this.state.error !== null){
      return  <Text style={styles.welcome}>{this.state.error}</Text>
    }else if(this.state.image !== null){
    var base64Icon = `data:image/png;base64,${this.state.image}`;
    return <Image style={{ width: 200, height: 150, resizeMode: Image.resizeMode.contain, borderWidth: 1, borderColor: 'red' }} 
    source={{ uri: base64Icon }} />
    }
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
