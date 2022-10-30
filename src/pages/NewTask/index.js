import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import database from '../../config/firebase.js'
import { FontAwesome } from "@expo/vector-icons";
import styles from "./style";

export default function NewTask({ navigation }, props) {

  const [description, setDescription] = useState(null);

  function addTask() {
    database.collection('Medicines').add({
      description: description,
      status: false
    })
    navigation.navigate("Task");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: estudar javascript"
        onChangeText={setDescription}
        value={description}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          addTask()
        }}
      >
        <Text style={styles.iconButton}>
          <FontAwesome
            name="save"
            size={23}
            color="#FFFFFF"
          >
          </FontAwesome>
        </Text>
      </TouchableOpacity>
    </View>
  )
}