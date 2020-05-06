import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { useState } from 'react';

export default function App() {
  const [minutes, setMinutes] = useState("1");
  const [seconds, setSeconds] = useState("0");

  function generatePickerItems(maxValue) {
    let valuesArray = [];
    
    for (let i = 0; i < maxValue+1; i++) {
      valuesArray.push(i);
    }

    let pickerItemsArray = valuesArray.map((value, index) => (
      <Picker.Item label={value.toString()} value={value.toString()} key={index}/>
    ));

    return pickerItemsArray;
  }
  
  
  return (
    <View style={styles.mainContainer}>
      <Text>Enter your current maximum breathhold time:</Text>
      <View style={styles.timeContainer}>
        <Picker
          selectedValue={minutes}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) => setMinutes(itemValue)}
        >
          {generatePickerItems(20)}
        </Picker>
        <Text>min</Text>
        <Picker
          selectedValue={seconds}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) => setSeconds(itemValue)}
        >
          {generatePickerItems(59)}
        </Picker>
        <Text>s</Text>
      </View>
      <View style={styles.tableContainer}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%"
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tableContainer: {
    flexDirection: 'column'
  }
});
