import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from "../styles/_timer.js"
import { StyleSheet, StatusBar, TouchableOpacity, Dimensions } from 'react-native';


const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return { mins: formatNumber(mins), secs: formatNumber(secs) };
}
export default function Timer(props) {

  const [remainingSecs, setRemainingSecs] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const [switch] = useState(false);
  const { mins, secs } = getRemaining(remainingSecs);

  toggle = () => {
      setIsActive(!isActive);
    }

    reset1 = () => {
      setRemainingSecs(10);
      setIsActive(false);
      switch(1)
    }
    reset2 = () => {
          setRemainingSecs(5);
          setIsActive(false);
          switch(2)
        }

    useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setRemainingSecs(remainingSecs => remainingSecs - 1);
        }, 1000);
        if(remainingSecs === 0 && switch === 1) {
        reset2();
        toggle();
        }
        if(remainingSecs === 0 && switch === 2) {
        reset2();
        toggle();
        }
      } else if (!isActive && remainingSecs !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, remainingSecs], switch);

   return (
      <View style={ styles.timerContainer }>
         <View style={ styles.top }>
            <Icon name="close" size={20} color="#000000" onPress={props.closeTimer}/>
         </View>
         <StatusBar barStyle="light-content" />
               <Text>{`${mins}:${secs}`}</Text>
               <TouchableOpacity onPress={this.toggle}>
                   <Text >{isActive ? 'Pause' : 'Start'}</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={this.reset}>
                   <Text>Reset</Text>
               </TouchableOpacity>
         <Text>{ props.type === 0 ? "O2" : "CO2"}</Text>
      </View>
   )
}