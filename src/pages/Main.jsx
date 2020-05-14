import React from "react";
import { View } from "react-native";
import { styles } from "../styles/_main.js";
import { BottomTabs } from "../components/BottomTabs";
import Carbon from "../components/Carbon";

export default function Main() {
  return (
    <View style={styles.mainContainer}>
      <Carbon />
      <BottomTabs />
    </View>
  );
}
