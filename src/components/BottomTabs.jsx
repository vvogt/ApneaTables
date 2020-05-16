import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../styles/_bottomTabs.js";

export function BottomTabs(props) {
  let textStyles = [styles.tab_text, styles.tab_text];
  
  const changeActiveTab = (index) => {
    if(props.activeTab == index) {
      if(index == 0) {
        textStyles = [styles.tab_text_active, styles.tab_text];
        return ([styles.tab_left, styles.tab_active]);
      } else {
        textStyles = [styles.tab_text, styles.tab_text_active];
        return ([styles.tab_right, styles.tab_active]);
      }
    } else {
      if(index == 0) {
        return styles.tab_left;
      } else {
        return styles.tab_right;
      }
    }
  };

  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity
        style={changeActiveTab(0)}
        onPress={props.leftOnPress}
      >
        <Text style={textStyles[0]}>O2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={changeActiveTab(1)}
        onPress={props.rightOnPress}
      >
        <Text style={textStyles[1]}>CO2</Text>
      </TouchableOpacity>
    </View>
  );
}
