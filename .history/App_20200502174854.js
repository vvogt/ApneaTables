import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { useState } from 'react';

export default function App() {
  const [minutes, setMinutes] = useState("3");
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
    <View style={styles.container}>
      <Text>Enter your current maximum breathhold time:</Text>
      <Picker
        selectedValue={minutes}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) =>
          setMinutes(itemValue)
        }
      >
        {pickerItemsArray}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
