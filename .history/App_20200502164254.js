import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-community/picker';

export default function App() {
  createValues = (to) => {
    let values = [];
    for (let i = 0; i < to+1; i++) {
      let currentItem = { label: i, value: i };
      values.push(currentItem);
      console.log(currentItem)
    }
    return values;
  };
  
  return (
    <View style={styles.container}>
      <Text>Enter your current maximum breathhold time:</Text>
      
      <DropDownPicker
        items={createValues(20)}
        defaultIndex={0}
        containerStyle={{ height: 40 }}
        onChangeItem={(item) => console.log(item.label, item.value)}
      />
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
