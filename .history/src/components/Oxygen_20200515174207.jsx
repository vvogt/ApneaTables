import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/_main.js";
import { addZero, secToMin } from "../util";
import TimePicker from "./TimePicker";
import TimeTables from "./TimeTables";

export default function Carbon(props) {
  const [minutes, setMinutes] = useState("1");
  const [seconds, setSeconds] = useState("0");

  const generateBreatheTable = () => {
    let breatheTimeConst = 120;
    let breatheTimeArray = [];

    for (let i = 0; i < 8; i++) {
      breatheTimeArray.push(breatheTimeConst);
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
    const holdTimeThreshold = Math.round(maxTime * 0.8);
    const holdTimeArray = [];

    let holdTime = Math.round(maxTime / 3) - 15;

    for (let i = 0; i < 8; i++) {
      if(holdTime + 15 <= holdTimeThreshold) {
        holdTime += 15;
      } 
      const holdMins = secToMin(holdTime)[0];
      const holdSecs = addZero(secToMin(holdTime)[1]);

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
      <TouchableOpacity style={styles.startButton} onPress={props.startOnPress(0, minutes * 60 + seconds)}>
        <Text style={styles.buttonText}>START</Text>
      </TouchableOpacity>
    </>
  );
}
