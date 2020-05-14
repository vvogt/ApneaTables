import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../styles/_bottomTabs.js";

export function BottomTabs(props) {
  
  const changeActiveTab = (index) => {
    if(props.activeTab == index) {
      if(index == 1) {
        return ([styles.tab_right, styles.tab_active]);
      } else {
        return ([styles.tab_left, styles.tab_active]);
      }
    } else {
      if(index == 1) {
        return styles.tab_right;
      } else {
        return styles.tab_left;
      }
    }
  };

  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity
        style={changeActiveTab(0)}
        onPress={props.leftOnPress}
      >
        <Text style={styles.tab_text}>O2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={changeActiveTab(1)}
        onPress={props.rightOnPress}
      >
        <Text style={styles.tab_text}>CO2</Text>
      </TouchableOpacity>
    </View>
  );
}
