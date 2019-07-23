

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
            labels: ['25', '20', '15', '10', '5'],
            legend: ['In Bed', 'Asleep',],
            data: [
              [{ v: 5, c: '#0000' }, { v: 30, c: '#9932cc' }, { v: 3, c: 'red' }, { v: 60, c: '#a4b0be' }, { v: 3, c: 'green' }, { v: 5, c: '#9932cc' }, { v: 3, c: 'orange' }, { v: 60, c: '#a4b0be' }],
            ],
            barColors: ['#EC5D40', '#F19949',],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={350}
          yAxisLabel={'$'}
          chartConfig={{
            //backgroundColor: 'white',
            backgroundGradientFrom: 'white',
             backgroundGradientTo: 'white',
            decimalPlaces: 2, // optional, defaults to 2dp
//            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            color: (opacity = 1) => `#9A9A9A`,

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
