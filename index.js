import React from 'react';
import App from './src/App';

export default function DailyActivityChart(props){
  return (
    <App data={props.data} specificMonth={props.specificMonth} specificYear={props.specificYear}/>
  )

}