import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { useState } from 'react';
import { styles } from './styles/_main.js';
import { BottomTabs } from './components/bottomTabs';

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

      console.log('check');

      for (let i = 0; i < 8; i++) {
         holdTimeArray.push(
           <Text key={i} style={styles.tableText}>
             {holdMins}:{holdSecs}
           </Text>
         );
      }

      return holdTimeArray;
   };

   const startTimer = () => {
      console.log('wat')
   }

   return (
     <View style={styles.mainContainer}>
       <View style={styles.topContainer}>
         <Text styles={styles.topText}>
           Enter your current maximum breathhold time:
         </Text>
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
       </View>

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

         <TouchableOpacity
           style={styles.startButton}
           onPress={setInterval(() => console.log('wat'), 1000)}
         >
           ><Text style={styles.buttonText}>saabas</Text>
         </TouchableOpacity>
       </View>
       <BottomTabs />
     </View>
   );
}