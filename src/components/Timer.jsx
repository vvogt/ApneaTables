import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from "../styles/_timer.js"
import { StyleSheet, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import { generateCO2BreatheArray } from "../util.js"


const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return { mins: formatNumber(mins), secs: formatNumber(secs) };
}
export default function Timer(props) {
   let timeType = 0
   if(props.type === 1) {
   timeType = 150
   } else {
   timeType = 120
}
  let [remainingSecs, setRemainingSecs] = useState(timeType);
  let [isActive, setIsActive] = useState(true);
  let [timeSwitch, setTimeSwitch] = useState(1);
  let [arrayPlace, setArrayPlace] = useState(0);
  let { mins, secs } = getRemaining(remainingSecs);

 const generateO2HoldArray = (maxTimeSecs) => {
      const holdTimeThreshold = Math.round(maxTimeSecs * 0.8);
      const holdSecsArray = [];
      let holdTime = Math.round(maxTimeSecs / 3) - 15;

      for (let i = 0; i < 8; i++) {
         if(holdTime + 15 <= holdTimeThreshold) {
            holdTime += 15;
         }

         holdSecsArray.push(holdTime);
      }

      return holdSecsArray;
   }


  toggle = () => {
      setIsActive(!isActive);
    }


    reset2 = () => {
          setRemainingSecs(5);
          setIsActive(false);
        }

    changeTime = () => {
    if(props.type === 0) {
    const secsArray = generateO2HoldArray(props.maxTime)

          console.log(arrayPlace)
          if (remainingSecs === 0 && timeSwitch === 1) {
            setRemainingSecs(secsArray[arrayPlace]);
            setTimeSwitch(2)
          }
          if (remainingSecs === 0 && timeSwitch === 2) {
            setRemainingSecs(120);
            setIsActive(true);
            setTimeSwitch(1)
             }
    } else {
        const secsArray = generateCO2BreatheArray()
                  console.log(arrayPlace)
                  if (remainingSecs === 0 && timeSwitch === 2) {
                    setRemainingSecs(secsArray[arrayPlace]);
                    setTimeSwitch(1)
                  }
                  if (remainingSecs === 0 && timeSwitch === 1) {
                    setRemainingSecs(props.maxTime / 2);
                    setIsActive(true);
                    setTimeSwitch(2)
                     }
    }
}
    useEffect(() => {
      let interval = null;
      if (isActive) {
       interval = setInterval(() => {
                setRemainingSecs(remainingSecs => remainingSecs - 1);
              }, 1000);
      if(remainingSecs === 0 && timeSwitch === 1) {
         setArrayPlace(arrayPlace => arrayPlace + 1)
         changeTime();
       }
       if(remainingSecs === 0 && timeSwitch === 2) {
        changeTime();
        }
       if(remainingSecs === 0 && timeSwitch === 2 && arrayPlace === 7)
         props.closeTimer()
       }
 return () => clearInterval(interval);
    }, [isActive, remainingSecs])
   return (
      <View style={ styles.timerContainer }>
         <View style={ styles.top }>
            <Icon name="close" size={20} color="#000000" onPress={props.closeTimer}/>
         </View>
         <StatusBar barStyle="light-content" />
               <Text>{`${mins}:${secs}`}</Text>
         <Text>{ props.type === 0 ? "O2" : "CO2"}</Text>
      </View>
   )
}