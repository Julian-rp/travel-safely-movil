import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import LoginScreen from "./screen/LoginScreen"; // 👈 ruta correcta según tu carpeta

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
  },
});
