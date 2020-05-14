import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "../styles/_main.js";
import { BottomTabs } from "../components/BottomTabs";
import Carbon from "../components/Carbon";
import Oxygen from "../components/Oxygen";

export default function Main() {
  const [tab, setTab] = useState(0);

  return (
    <View style={styles.mainContainer}>
      {tab == 0 && <Oxygen />}
      {tab == 1 && <Carbon />}
      <BottomTabs leftOnPress={() => setTab(0)} rightOnPress={() => setTab(1)} activeTab={tab} />
    </View>
  );
}
