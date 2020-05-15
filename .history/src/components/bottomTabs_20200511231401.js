import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/_bottomTabs.js';

export function BottomTabs() {
   return (
      <View style={styles.bottomBar}>
         <View style={styles.tab_CO2}>
            <Text>O2</Text>
         </View>
         <View style={styles.tab_O2}>
            <Text>CO2</Text>
         </View>
      </View>
   );
}

