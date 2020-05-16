import React from "react";
import { View, Text } from "react-native";

export default function Timer(props) {
   return (
      <View>
         <Text>{props.type}</Text>
      </View>
   )
}