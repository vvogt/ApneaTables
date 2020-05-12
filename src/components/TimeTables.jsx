import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../styles/_main.js";

export default function TimeTables(props) {
  return (
    <View style={styles.bottomContainer}>
      <View style={styles.tableContainer}>
        <View style={styles.tableLeft}>
          <Text style={styles.tableHeader}>{props.headerLeft}</Text>
          {props.generateLeftTable()}
        </View>
        <View style={styles.tableRight}>
          <Text style={styles.tableHeader}>{props.headerRight}</Text>
          {props.generateRightTable()}
        </View>
      </View>
    </View>
  );
}
