import { Keyboard, StyleSheet, Text, TextInput, View } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { TouchableOpacity } from "react-native";
import Task from "./components/Task";
import React, { useState } from "react";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
    console.log(taskItems);
  };
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <View style={styles.container}>
      {/* today's task */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's task</Text>
        <View style={styles.items}>
          {/* <Task text={"Go to Ibrazz's house "} />
          <Task text={"Go to Ibrazz's house"} />
          <Task text={"Go to Ibrazz's house"} /> */}
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* write a task and showing keyboard*/}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task..."}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#e8eaed",
    paddingHorizontal: 10,
    paddingTop: 30,
    paddingBottom: 10,
  },
  tasksWrapper: {
    width: "100%",
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
  },
  items: {
    marginTop: 10,
  },
  input: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#c0c0c0",
    width: 250,
  },
  writeTaskWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
    bottom: "1%",
    position: "absolute",
  },
  addText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#55bcf6",
  },
  addWrapper: {
    width: 50,
    height: 50,
    borderRadius: 60,
    backgroundColor: "#FFFFFF",
    borderColor: "#c0c0c0",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
