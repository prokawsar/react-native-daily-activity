
Github style daily activity charts for React Native

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
```jsx
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


### `specificMonth`

Number of month data you are given. If you want to render specific any month rather than current.
At this situation, year will be current year if there is no any given value to `specificYear`.
Example:
```jsx
<DailyActivityChart data={data} specificMonth={3}/>

```


| Type     | Required |
| -------- | -------- |
| Number | No       |

---

### `specificYear`

Specific year of data you are given. If you want to render specific any year rather than current.
At this situation, month will be current month if there is no any given value to `specificMonth`.
Example:
```jsx
<DailyActivityChart data={data} specificYear={2017} />

```


| Type     | Required |
| -------- | -------- |
| Number | No       |

---


### `color`

Specific color can be set. For setting color, it has to be a HEX color code and most darkest version of choosen color.

Example:
```jsx
<DailyActivityChart data={data} color={'#0821F3'} />

```


| Type     | Required |
| -------- | -------- |
| HEX color code | No       |

---