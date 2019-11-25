import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  days: {
    height: 155,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'

  },
  day: {
    width: 35,
    height: 35,
    margin: 2
  },
});

const activityLevelColor = (level) => {
  if(level == 0 || level == null) return '#E7DAEC'
  if(level < 5) return '#AF7AC5'
  if(level < 10) return '#9B59B6'
  return '#884EA0'

}

const Month = (props) => {
  let now = new Date(),
      days = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate(),
      currentMonth = new Array(days+1).fill(1).map((v, i) => `${now.getFullYear()}/${now.getMonth() + 1}/${v + i}` ),
      { frequency } = props

  return currentMonth.map((day, key) => (
    <View style={[styles.day, {backgroundColor: activityLevelColor(frequency[day])}]} key={key} />
  ))

}

export default function App(props) {
  return (
    <View>
      <View style={styles.days}>
        <Month frequency={props.data}/>
      </View>
    </View>
  )

}