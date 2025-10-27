import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AdminPanelScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Panel de Administrador</Text>
      <Text style={styles.subtitle}>Bienvenido a Travel Safely 🚐</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#aaa",
    marginTop: 10,
    fontSize: 16,
  },
});
