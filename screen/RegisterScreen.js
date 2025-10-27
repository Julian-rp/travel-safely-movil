import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import InputField from "../components/InputField";
import { Ionicons } from "@expo/vector-icons";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("empleado"); // Por defecto empleado

  const handleRegister = () => {
    // Validar campos
    if (!name.trim() || !email.trim() || !password.trim()) {
      Alert.alert("Error", "Por favor completa todos los campos");
      return;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Por favor ingresa un correo válido");
      return;
    }

    // Validar contraseña
    if (password.length < 5) {
      Alert.alert("Error", "La contraseña debe tener al menos 5 caracteres");
      return;
    }

    // Aquí guardarías el usuario en tu base de datos
    // Por ahora solo mostramos un mensaje de éxito
    Alert.alert(
      "Registro Exitoso",
      `Usuario ${role} registrado correctamente\n\nEmail: ${email}\nRol: ${role === "admin" ? "Administrador" : "Empleado"}`,
      [
        {
          text: "OK",
          onPress: () => navigation.navigate("Login")
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MJV</Text>
      <Text style={styles.title}>Registrar Usuario</Text>

      <InputField 
        icon="person-outline" 
        placeholder="Nombre completo" 
        value={name} 
        onChangeText={setName} 
      />
      
      <InputField 
        icon="mail-outline" 
        placeholder="Correo electrónico" 
        value={email} 
        onChangeText={setEmail} 
      />
      
      <InputField 
        icon="lock-closed-outline" 
        placeholder="Contraseña" 
        secureTextEntry 
        value={password} 
        onChangeText={setPassword} 
      />

      {/* Selector de Rol */}
      <View style={styles.roleContainer}>
        <Text style={styles.roleLabel}>Selecciona el rol:</Text>
        
        <View style={styles.roleButtons}>
          <TouchableOpacity
            style={[
              styles.roleButton,
              role === "empleado" && styles.roleButtonActive
            ]}
            onPress={() => setRole("empleado")}
          >
            <Ionicons 
              name="person-outline" 
              size={24} 
              color={role === "empleado" ? "#fff" : "#3b82f6"} 
            />
            <Text style={[
              styles.roleButtonText,
              role === "empleado" && styles.roleButtonTextActive
            ]}>
              Empleado
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.roleButton,
              role === "admin" && styles.roleButtonActive
            ]}
            onPress={() => setRole("admin")}
          >
            <Ionicons 
              name="shield-checkmark-outline" 
              size={24} 
              color={role === "admin" ? "#fff" : "#3b82f6"} 
            />
            <Text style={[
              styles.roleButtonText,
              role === "admin" && styles.roleButtonTextActive
            ]}>
              Administrador
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
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
  roleContainer: {
    marginVertical: 15,
  },
  roleLabel: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "500",
  },
  roleButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  roleButton: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    borderWidth: 2,
    borderColor: "#3b82f6",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  roleButtonActive: {
    backgroundColor: "#3b82f6",
    borderColor: "#3b82f6",
  },
  roleButtonText: {
    color: "#3b82f6",
    marginTop: 5,
    fontSize: 14,
    fontWeight: "600",
  },
  roleButtonTextActive: {
    color: "#fff",
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
    fontSize: 16,
  },
  link: {
    color: "#3b82f6",
    textAlign: "center",
    marginTop: 20,
  },
});