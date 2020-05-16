import React from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from "../styles/_timer.js"



export default function Timer(props) {

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

   return (
      <View style={ styles.timerContainer }>
         <View style={ styles.top }>
            <Icon name="close" size={20} color="#000000" onPress={props.closeTimer}/>
         </View>
         <Text>{ props.type === 0 ? "O2" : "CO2"}</Text>
      </View>
   )
}