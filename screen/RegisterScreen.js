import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import InputField from "../components/InputField";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MJV</Text>
      <Text style={styles.title}>Registrar Empleado</Text>

      <InputField icon="person-outline" placeholder="Nombre completo" value={name} onChangeText={setName} />
      <InputField icon="mail-outline" placeholder="Correo electrónico" value={email} onChangeText={setEmail} />
      <InputField icon="lock-closed-outline" placeholder="Contraseña" secureTextEntry value={password} onChangeText={setPassword} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>¿Ya tienes cuenta? Inicia sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 30,
    justifyContent: "center",
  },
  logo: {
    color: "#fff",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 25,
  },
  button: {
    backgroundColor: "#3b82f6",
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  link: {
    color: "#3b82f6",
    textAlign: "center",
    marginTop: 20,
  },
});
