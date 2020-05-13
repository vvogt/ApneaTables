import React from "react";
import { View } from "react-native";
import { styles } from "../styles/_main.js";
import { BottomTabs } from "../components/BottomTabs";
import Oxygen from "../components/Oxygen";
import Circle from "../components/Circle";

export default function Main() {
  return (
    <View style={styles.mainContainer}>
      <Oxygen />
      <Circle />
      <BottomTabs />
    </View>
  );
}
