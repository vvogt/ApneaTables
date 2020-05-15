import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { styles } from "../styles/_main.js";
import { addZero, secToMin } from "../util";
import TimePicker from "./TimePicker";
import TimeTables from "./TimeTables";

export default function Carbon(props) {
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
      <TimeTables
        generateLeftTable={generateBreatheTable}
        generateRightTable={generateHoldTable}
        headerLeft="Breath"
        headerRight="Hold"
      />
      <TouchableOpacity style={styles.startButton} onPress={props.startOnPress(1)}>
        <Text style={styles.buttonText}>START</Text>
      </TouchableOpacity>
    </>
  );
}
