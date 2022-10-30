import database from "../../config/firebase"
import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { FontAwesome } from "@expo/vector-icons";
import styles from "./style"

export default function Details({ navigation, route }) {
  const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
  const idTask = route.params.id

  function editTask(description, id) {
    database.collection("Medicines").doc(id).update({
      description: description,
    })
    navigation.navigate("Medicines")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: estudar javascript"
        onChangeText={setDescriptionEdit}
        value={descriptionEdit}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          editTask(descriptionEdit, idTask)
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