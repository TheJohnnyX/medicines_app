import database from "../../config/firebase.js";
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./style";

export default function Medicine({ navigation }) {
  const [medicine, setMedicine] = useState([]);

  function deleteMedicine(id) {
    database.collection("Medicines").doc(id).delete();
  }

  useEffect(() => {
    database.collection("Medicines").onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setMedicine(list);
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={medicine}
        renderItem={({ item }) => {
          return (
            <View style={styles.Medicines}>
              <TouchableOpacity
                style={styles.deleteMedicine}
                onPress={() => {
                  deleteMedicine(item.id)
                }}
              >
                <FontAwesome
                  name="trash"
                  size={23}
                  color="#F92e6A"
                >
                </FontAwesome>
              </TouchableOpacity>
              <Text
                style={styles.DescriptionMedicine}
                onPress={() =>
                  navigation.navigate("Details", {
                    id: item.id,
                    description: item.description,
                    quantity: item.quantity,
                  })
                }
              >
                {item.description}
              </Text>
              <Text
                style={styles.quantytyMedicine}
                onPress={() =>
                  navigation.navigate("Details", {
                    id: item.id,
                    description: item.description,
                    quantity: item.quantity,
                  })
                }
              >
                {item.quantity}
              </Text>
            </View>
          )
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("New medicine")}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  )
}