import React from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from "../styles/_timer.js"

export default function Timer(props) {
   return (
      <View>
         <View style={ styles.top }>
            <Icon name="close" size={20} color="#000000" onPress={props.closeTimer}/>
         </View>
         <Text>{ props.type === 0 ? "O2" : "CO2"}</Text>
      </View>
   )
}