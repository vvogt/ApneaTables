import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/_bottomTabs.js';

export function BottomTabs() {
   return (
      <View style={styles.bottomBar}>
         <Text>O2</Text>
         <Text>CO2</Text>
      </View>
   );
}

