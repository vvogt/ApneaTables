import React from 'react';
import { View } from 'react-native';
import { styles } from '../styles/_main.js';
import { BottomTabs } from '../components/bottomTabs';
import Oxygen from '../components/Oxygen.js';

export default function Main() {

   return (
      <View style={styles.mainContainer}>
         <Oxygen />
         <BottomTabs/>
     </View>
   );
}