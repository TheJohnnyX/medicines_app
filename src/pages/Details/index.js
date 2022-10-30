import database from "../../config/firebase"
import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { FontAwesome } from "@expo/vector-icons";
import styles from "./style"

export default function Details({ navigation, route }) {
  const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
  const [quantityEdit, setQuantityEdit] = useState(route.params.quantity)
  const idMedicine = route.params.id

  function editMedicine(description, quantity, id) {
    database.collection("Medicines").doc(id).update({
      description: description,
      quantity: quantity
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
      <Text style={styles.label}>Quantity</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder="Ex: 100"
        onChangeText={setQuantityEdit}
        value={quantityEdit}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          editMedicine(descriptionEdit, quantityEdit, idMedicine)
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