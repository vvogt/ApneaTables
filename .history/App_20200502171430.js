import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { useState } from 'react';

export default function App() {
  const [minutes, seconds] = useState(0);

/*   createValues = (to) => {
    for (let i = 0; i < to+1; i++) {
      return(
        <Picker.Item label=i.toString()
      )
    }
  }; */
  
  return (
    <View style={styles.container}>
      <Text>Enter your current maximum breathhold time:</Text>
      <Picker
        selectedValue={minutes}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) =>
          minutes({ minutes: itemValue });
          console.log(minutes);
        }
      >
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="2" value="2" />
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