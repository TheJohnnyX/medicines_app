import database from '../../config/firebase.js'
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./style";

export default function NewMedicine({ navigation }, props) {

  const [description, setDescription] = useState(null);
  const [quantity, setQuantity] = useState(null);

  function addMedicine() {
    database.collection('Medicines').add({
      description: description,
      status: false,
      quantity: quantity
    })
    navigation.navigate("Medicines");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Paracetamol"
        onChangeText={setDescription}
        value={description}
      />
      <Text style={styles.label}>Quantity</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder="Ex: 100"
        onChangeText={setQuantity}
        value={quantity}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          addMedicine()
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