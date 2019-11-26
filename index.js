import React from 'react';
import App from './src/App';

export default function DailyActivityChart(props){
  let {data, specificMonth, specificYear, color} = props

  return (
    <App data={data} specificMonth={specificMonth} specificYear={specificYear} color={color} />
  )

}