import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/_bottomTabs.js';

export function BottomTabs() {
   return (
     <View style={styles.bottomBar}>
       <View style={styles.tab_left}>
         <Text style={styles.tab_text}>O2</Text>
       </View>
       <View style={styles.tab_right}>
         <Text style={styles.tab_text}>CO2</Text>
       </View>
     </View>
   );
}

