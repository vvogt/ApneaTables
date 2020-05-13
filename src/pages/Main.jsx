import React from "react";
import { View } from "react-native";
import { styles } from "../styles/_main.js";
import { BottomTabs } from "../components/BottomTabs";
import Oxygen from "../components/Oxygen";

export default function Main() {
  return (
    <View style={styles.mainContainer}>
      <Oxygen />
      <BottomTabs />
    </View>
  );
}
