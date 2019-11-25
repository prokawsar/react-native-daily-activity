
Github style daily activity charts for React Native

N.B: Currently works only for current months data.

Renders the native daily charts component on iOS and Android. Example:

```jsx
import React from 'react';
import { View } from 'react-native';
import DailyActivityChart from 'react-native-daily-activity';

export default function App()
  const data = {
   '2019/11/1': 3,
    '2019/11/2': 3,
    '2019/11/3': 4,
    '2019/11/4': 5,
    '2019/11/5': 13,
    '2019/11/6': 8,
    '2019/11/7': 12,
    '2019/11/8': 8,
    '2019/11/9': 11,
    '2019/11/10': 13
  }

  render() {
    return (
      <View>
        <DailyActivityChart data={data}/>
      </View>
    );
  }
}

```

---
# How its look like
![react-native-daily-activity](https://i.ibb.co/hVH98HQ/demo.png)
# Reference

## Props


### `data`

Object of data, that holds the one current month reports. Data structure given below.
```
{
  '2019/11/1': 3,
  '2019/11/2': 3,
  '2019/11/3': 4,
  '2019/11/4': 5,
  '2019/11/5': 13,
  '2019/11/6': 8,
  '2019/11/7': 12,
  '2019/11/8': 8,
  '2019/11/9': 11,
  '2019/11/10': 13
}

```


| Type     | Required |
| -------- | -------- |
| Object | Yes       |

---

