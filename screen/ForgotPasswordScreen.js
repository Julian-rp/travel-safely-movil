import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import InputField from "../components/InputField";

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MJV</Text>
      <Text style={styles.title}>Recuperar Contraseña</Text>
      <Text style={styles.subtitle}>Ingresa tu correo y te enviaremos un enlace de recuperación</Text>

      <InputField icon="mail-outline" placeholder="Correo electrónico" value={email} onChangeText={setEmail} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Enviar enlace</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>Volver al inicio de sesión</Text>
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
    marginBottom: 5,
  },
  subtitle: {
    color: "#aaa",
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
