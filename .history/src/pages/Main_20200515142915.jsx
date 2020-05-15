import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "../styles/_main.js";
import { BottomTabs } from "../components/BottomTabs";
import Circle from "../components/Circle";
import Carbon from "../components/Carbon";
import Oxygen from "../components/Oxygen";

export default function Main() {
  const [tab, setTab] = useState(0);
  const [timerType, setTimerType] = useState("O2");

  return (
    <View style={styles.mainContainer}>
      {tab == 0 && <Oxygen startOnPress={() => setTab(2)} timerType="O2" />}
      {tab == 1 && <Carbon startOnPress={() => setTab(2)} timerType="CO2" />}
      {tab == 2 && <Timer type={timerType} />}
      {tab != 2 && <BottomTabs leftOnPress={() => setTab(0)} rightOnPress={() => setTab(1)} activeTab={tab} />}
    </View>
  );
}
