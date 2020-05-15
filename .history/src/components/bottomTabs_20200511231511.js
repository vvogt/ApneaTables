import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/_bottomTabs.js';

export function BottomTabs() {
   return (
      <View style={styles.bottomBar}>
         <View style={styles.tab_left}>
            <Text>O2</Text>
         </View>
         <View style={styles.tab_right}>
            <Text>CO2</Text>
         </View>
      </View>
   );
}

