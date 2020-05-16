import React from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Timer(props) {
   return (
      <View>
         <Icon name="close" size={20} color="#000000" onPress={props.closeTimer}/>
         <Text>{props.type}</Text>
      </View>
   )
}