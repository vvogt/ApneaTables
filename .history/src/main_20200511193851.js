import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { useState } from 'react';
import { styles } from './styles.js';

export default function Main() {
   const [minutes, setMinutes] = useState('1');
   const [seconds, setSeconds] = useState('0');

   const generatePickerItems = (maxValue) => {
     let valuesArray = [];

     for (let i = 0; i < maxValue + 1; i++) {
       valuesArray.push(i);
     }

     let pickerItemsArray = valuesArray.map((value, index) => (
       <Picker.Item
         label={value.toString()}
         value={value.toString()}
         key={index}
       />
     ));

     return pickerItemsArray;
   };

   const addZero = (num) => {
     let newNum = num < 10 ? '0' + num : num;
     return newNum;
   };

   const secToMin = (secondsIn) => {
     const min = Math.floor(secondsIn / 60);
     const sec = secondsIn - min * 60;
     const minSec = [min, sec];
     return minSec;
   };

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
            <Text key={index}>
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
            <Text key={i}>
               {holdMins}:{holdSecs}
            </Text>
         );
      }

      return holdTimeArray;
   };

   return (
      <View style={styles.mainContainer}>
         <Text>Enter your current maximum breathhold time:</Text>
         <View style={styles.timeContainer}>
            <Picker
              selectedValue={minutes}
              style={{ height: 50, width: 100 }}
              onValueChange={(itemValue, itemIndex) => setMinutes(itemValue)}
            >
              {generatePickerItems(20)}
            </Picker>
            <Text>min</Text>
            <Picker
              selectedValue={seconds}
              style={{ height: 50, width: 100 }}
              onValueChange={(itemValue, itemIndex) => setSeconds(itemValue)}
            >
              {generatePickerItems(59)}
            </Picker>
            <Text>s</Text>
         </View>

         <View style={styles.tableContainer}>
            <View style={styles.tableLeft}>
               <Text>Breathe</Text>
               {generateBreatheTable()}
            </View>
            <View style={styles.tableRight}>
               <Text>Hold</Text>
               {generateHoldTable()}
            </View>
            <View>
               <Text>Start</Text>
            </View>
         </View>

         <View style={styles.bottomBar}>
            <Text>O2</Text>
            <Text>CO2</Text>
         </View>
      </View>
   );
}