

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import CalendarStrip from 'react-native-slideable-calendar-strip';

export default class App extends Component {
  
  render() {
    return (
      
        <View>
          <View style={styles.circle} />
          
      </View>
      
    );
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
  circle : {   
  
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 15,
    borderColor: 'red'
  
  
},

});
