import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Medicine from "./src/pages/Medicine";
import NewMedicine from "./src/pages/NewMedicine";
import Details from "./src/pages/Details/";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MedicineRoute() {
  return (
    <Stack.Navigator initialRouteName="Medicines">
      <Stack.Screen
        name="Medicines"
        component={Medicine}
        options={{
          headerTintColor: "#F92E6A",
        }}
      />
      <Stack.Screen
        name="New medicine"
        component={NewMedicine}
        options={{
          headerTintColor: "#F92E6A",
        }}

      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerTintColor: "#F92E6A",
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation
        initialRouteName="Medicines"
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name="Medicines" component={MedicineRoute} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}