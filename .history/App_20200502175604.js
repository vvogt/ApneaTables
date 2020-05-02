import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { useState } from 'react';

export default function App() {
  const [minutes, setMinutes] = useState("1");
  const [seconds, setSeconds] = useState("0");
/* 
  const valuesArray = []
  for (let i = 0; i < 20; i++) {
    valuesArray.push(i);
  }

  const pickerItemsArray = valuesArray.map((value) => (
    <Picker.Item label={value.toString()} value={value.toString()} />
  )); */

  function generatePickerItems(maxValue) {
    let valuesArray = [];
    
    for (let i = 0; i < maxValue+1; i++) {
      valuesArray.push(i);
    }

    let pickerItemsArray = valuesArray.map((value) => (
      <Picker.Item label={value.toString()} value={value.toString()} />
    ));

    return pickerItemsArray;
  }
  
  return (
    <View style={styles.mainContainer}>
      <Text>Enter your current maximum breathhold time:</Text>
      <View style={styles.container}>
        <Picker
          selectedValue={minutes}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) => setMinutes(itemValue)}
        >
          {generatePickerItems(20)}
        </Picker>
        <Picker
          selectedValue={seconds}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) => setSeconds(itemValue)}
        >
          {generatePickerItems(59)}
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100%
  },
});
