import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { useState } from 'react';

export default function App() {
  const [minutes, seconds] = useState(0);

  /* createValues = (to) => {
    let values = [];
    for (let i = 0; i < to+1; i++) {
      let currentItem = { label: i, value: i };
      values.push(currentItem);
      console.log(currentItem)
    }
    return values;
  }; */
  
  return (
    <View style={styles.container}>
      <Text>Enter your current maximum breathhold time:</Text>
      <Picker
        selectedValue={minutes}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({ language: itemValue })
        }
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
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
