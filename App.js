

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import { StackedBarChart } from './custom_modules/react-native-chart-kit'

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>
          Stack Bar Chart
      </Text>
        <StackedBarChart
          data={{
            labels: ['Test1', 'Test2', 'Test3'],
            legend: ['L1', 'L2', 'L3', 'L4'],
            data: [
              [{ v: 5, c: '#0000' }, { v: 30, c: '#9932cc' }, { v: 3, c: 'red' }, { v: 60, c: '#a4b0be' }, { v: 3, c: 'green' }, { v: 5, c: '#9932cc' }, { v: 3, c: 'orange' }, { v: 60, c: '#a4b0be' }],
            ],
            barColors: ['#dfe4ea', '#ced6e0', '#a4b0be', "#9932cc"],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={350}
          yAxisLabel={'$'}
          chartConfig={{
            //backgroundColor: '#000f',
            //backgroundGradientFrom: '#fb8c00',
            //backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

          }}

        />
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
});
