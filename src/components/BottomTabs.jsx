import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../styles/_bottomTabs.js";

export function BottomTabs(props) {
  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity
        style={styles.tab_left}
        onPress={props.leftOnPress}
      >
        <Text style={styles.tab_text}>O2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab_right}
        onPress={props.rightOnPress}
      >
        <Text style={styles.tab_text}>CO2</Text>
      </TouchableOpacity>
    </View>
  );
}
