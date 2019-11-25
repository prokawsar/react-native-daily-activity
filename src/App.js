import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  days: {
    height: 170,
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'center'
  },
  day: {
    width: 20,
    height: 20,
    margin: 2,
    backgroundColor: '#343'
  },

});

const Month = () => {
  let now = new Date(),
  days = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
  let currentMonth = new Array(days).fill(1).map((v, i) => v + i)

  return currentMonth.map((day, key) => (
    <View style={styles.day} key={key} >

    </View>
  ))

}

export default function App(props) {
  return (
    <View style={styles.days}>
      <Month />
    </View>
  )

}