import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Enter your current maximum breathhold time:</Text>
      <DropDownPicker
        items={[
          { label: 'Item 1', value: 1 },
          { label: 'Item 2', value: 2 },
        ]}
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

function dropdownValues(to) {
  return(
    for(let i = 0; i < 21; i++)
  )
}