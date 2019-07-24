

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import { StackedBarChart } from './custom_modules/react-native-chart-kit'
import moment from "moment";


const daysInMonth = moment().daysInMonth();
export default class App extends Component {
  render() {
    console.log('No of Days in Month' +daysInMonth)
    return (
      <View>

        <Text>
          Stack Bar Chart
      </Text>
        <StackedBarChart
          data={{
            labels: ['5', '10', '15', '20', '25', '30'],
            legend: ['In Bed', 'Asleep',],
            data: [
              [{ v: 20, c: '#F19949' }],
              [{ v: 40, c: '#F19949' }],
              [{ v: 10, c: '#F19949' }],
              [{ v: 50, c: '#F19949' }],
              
              [{ v: 20, c: '#F19949' }],
              [{ v: 40, c: '#F19949' }],
              [{ v: 10, c: '#F19949' }],
              [{ v: 50, c: '#F19949' }],

              [{ v: 20, c: '#F19949' }],
              [{ v: 40, c: '#F19949' }],
              [{ v: 10, c: '#F19949' }],
              [{ v: 50, c: '#F19949' }],
            ],  
            barColors: ['#EC5D40', '#F19949',],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={350}
          yAxisLabel={''}
          noOfDaysInMonth= {daysInMonth+1}
          chartConfig={{
            
            //backgroundColor: 'white',
            backgroundGradientFrom: 'white',
             backgroundGradientTo: 'white',
            decimalPlaces: 0, // optional, defaults to 2dp
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
