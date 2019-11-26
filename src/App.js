import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {hexToRGB, RGBToHSL} from './ColorConverter';

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

const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

/*
  level as int
  color as hex color
  return the color according to level
*/
const activityLevelColor = (level, color) => {
    color = color ? color : '#884EA0'
    let theme = RGBToHSL(hexToRGB(color)),
        {h, s, l} = theme;

    if(level == 0 || level == null) return '#E4E6F3'
    if(level < 5) return `hsl(${h},${s}%,${l+25}%)`
    if(level < 10) return `hsl(${h},${s}%,${l+10}%)`
    return `hsl(${h},${s}%,${l}%)`

}

/*
  Render a month charts with given level and if color so.
*/
const Month = (props) => {
  let now = new Date(),
      { frequency, specificMonth, specificYear, color } = props,
      days = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate(),
      monthChart = new Array(specificMonth ? daysInMonth[specificMonth] : days).fill(1).map((v, i) => `${specificYear ? specificYear : now.getFullYear()}/${specificMonth ? specificMonth : now.getMonth() + 1}/${v + i}` )

  return monthChart.map((day, key) => (
    <View style={[styles.day, {backgroundColor: activityLevelColor(frequency[day], color)}]} key={key} />
  ))

}

export default function App(props) {
  let {data, specificMonth, specificYear, color} = props
  return (
    <View>
      <View style={styles.days}>
        <Month frequency={data} specificMonth={specificMonth} specificYear={specificYear} color={color} />
      </View>
    </View>
  )

}