import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { styles } from "../styles/_main.js";
import { addZero, secToMin } from "../util";
import TimePicker from "./TimePicker.jsx";

export default function Oxygen() {
  const [minutes, setMinutes] = useState("1");
  const [seconds, setSeconds] = useState("0");

  const generateBreatheTable = () => {
    let breatheTimeConst = 150;
    let breatheTimeArray = [];

    for (let i = 0; i < 8; i++) {
      breatheTimeArray.push(breatheTimeConst - 15 * i);
    }

    return breatheTimeArray.map((time, index) => {
      let breatheMins = secToMin(time)[0];
      let breatheSecs = addZero(secToMin(time)[1]);

      return (
        <Text key={index} style={styles.tableText}>
          {breatheMins}:{breatheSecs}
        </Text>
      );
    });
  };

  const generateHoldTable = () => {
    const maxTime = parseInt(minutes) * 60 + parseInt(seconds);
    const holdTime = Math.round(maxTime / 2);
    const holdMins = secToMin(holdTime)[0];
    const holdSecs = addZero(secToMin(holdTime)[1]);
    const holdTimeArray = [];

    console.log("check");

    for (let i = 0; i < 8; i++) {
      holdTimeArray.push(
        <Text key={i} style={styles.tableText}>
          {holdMins}:{holdSecs}
        </Text>
      );
    }

    return holdTimeArray;
  };

  return (
    <>

      <TimePicker
        minutes={minutes}
        seconds={seconds}
        setMinutes={(itemValue) => setMinutes(itemValue)}
        setSeconds={(itemValue) => setSeconds(itemValue)}
      />

      <View style={styles.bottomContainer}>
        <View style={styles.tableContainer}>
          <View style={styles.tableLeft}>
            <Text style={styles.tableHeader}>Breathe</Text>
            {generateBreatheTable()}
          </View>
          <View style={styles.tableRight}>
            <Text style={styles.tableHeader}>Hold</Text>
            {generateHoldTable()}
          </View>
        </View>

        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.buttonText}>START</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
