import React from "react";
import { styles } from "../styles/_main.js";
import { Text, View } from "react-native";
import { Picker } from "@react-native-community/picker";

export default function TimePicker(props) {
  
  const generatePickerItems = (maxValue) => {
    let valuesArray = [];

    for (let i = 0; i < maxValue + 1; i++) {
      valuesArray.push(i);
    }

    let pickerItemsArray = valuesArray.map((value, index) => (
      <Picker.Item label={value.toString()} value={value.toString()} key={index} />
    ));

    return pickerItemsArray;
  };
  return (
    <View style={styles.topContainer}>
      <Text styles={styles.topText}>Enter your current maximum breathhold time:</Text>
      <View style={styles.timeContainer}>
        <Picker
          selectedValue={props.minutes}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) => props.setMinutes(itemValue)}
        >
          {generatePickerItems(20)}
        </Picker>
        <Text>min</Text>
        <Picker
          selectedValue={props.seconds}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) => props.setSeconds(itemValue)}
        >
          {generatePickerItems(59)}
        </Picker>
        <Text>s</Text>
      </View>
    </View>
  );
}
