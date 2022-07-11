import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>

      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  square: {
    backgroundColor: "#ed3214",
    width: 24,
    height: 24,
    backgroundColor: "#55bcf6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 10,
  },
  itemText: {
    maxWidth: "88%",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  circular: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    opacity: 0.4,
    borderWidth: 3,
    borderColor: "#55bcf6",
  },
});

export default Task;
