import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from "react-native";
import InputField from "../components/InputField";
import { Ionicons } from "@expo/vector-icons";

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // Base de datos de usuarios (en producción esto vendría de tu backend)
  const users = [
    { email: 'admin@travel.com', name: 'Administrador' },
    { email: 'empleado@travel.com', name: 'Empleado' },
  ];

  const handleSendRecoveryEmail = async () => {
    // Validar que el email no esté vacío
    if (!email.trim()) {
      Alert.alert("Error", "Por favor ingresa tu correo electrónico");
      return;
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Por favor ingresa un correo válido");
      return;
    }

    // Verificar si el email existe en la base de datos
    const userExists = users.find(user => user.email.toLowerCase() === email.toLowerCase().trim());

    setLoading(true);

    // Simular el tiempo de envío del email (2 segundos)
    setTimeout(() => {
      setLoading(false);

      if (userExists) {
        // ✅ Usuario encontrado - Simular envío exitoso
        Alert.alert(
          "✅ Correo Enviado",
          `Se ha enviado un enlace de recuperación a:\n\n${email}\n\nPor favor revisa tu bandeja de entrada y spam. El enlace expirará en 24 horas.`,
          [
            {
              text: "Entendido",
              onPress: () => {
                setEmail("");
                navigation.navigate("Login");
              }
            }
          ]
        );

        // 📧 AQUÍ INTEGRARÍAS TU SERVICIO DE EMAIL
        // Ejemplo con diferentes servicios:
        
        /* 
        // Opción 1: Firebase Auth
        import auth from '@react-native-firebase/auth';
        await auth().sendPasswordResetEmail(email);
        
        // Opción 2: Tu propio backend
        await fetch('https://tu-api.com/send-recovery-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });
        
        // Opción 3: SendGrid
        await sendEmailWithSendGrid(email);
        */

      } else {
        // ❌ Usuario no encontrado
        // Por seguridad, también mostramos mensaje de éxito para no revelar si el email existe
        Alert.alert(
          "✅ Solicitud Procesada",
          "Si el correo existe en nuestro sistema, recibirás un enlace de recuperación.\n\nRevisa tu bandeja de entrada y spam.",
          [
            {
              text: "OK",
              onPress: () => {
                setEmail("");
              }
            }
          ]
        );
      }
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <Ionicons name="lock-closed-outline" size={80} color="#3b82f6" />
      </View>

      <Text style={styles.logo}>MJV</Text>
      <Text style={styles.title}>Recuperar Contraseña</Text>
      <Text style={styles.subtitle}>
        Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña
      </Text>

      <InputField 
        icon="mail-outline" 
        placeholder="Correo electrónico" 
        value={email} 
        onChangeText={setEmail}
      />

      <TouchableOpacity 
        style={[styles.button, loading && styles.buttonDisabled]} 
        onPress={handleSendRecoveryEmail}
        disabled={loading}
      >
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator color="#fff" />
            <Text style={styles.buttonText}>  Enviando...</Text>
          </View>
        ) : (
          <Text style={styles.buttonText}>Enviar enlace de recuperación</Text>
        )}
      </TouchableOpacity>

      <View style={styles.infoBox}>
        <Ionicons name="information-circle-outline" size={20} color="#3b82f6" />
        <Text style={styles.infoText}>
          El enlace de recuperación expirará en 24 horas por seguridad
        </Text>
      </View>

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
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    padding: 10,
    zIndex: 10,
  },
  iconContainer: {
    alignItems: "center",
    marginBottom: 20,
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
    marginBottom: 10,
    fontWeight: "600",
  },
  subtitle: {
    color: "#aaa",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#3b82f6",
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  buttonDisabled: {
    backgroundColor: "#5a8fd9",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  loadingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  infoBox: {
    flexDirection: "row",
    backgroundColor: "#1e1e1e",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    borderLeftWidth: 3,
    borderLeftColor: "#3b82f6",
  },
  infoText: {
    color: "#aaa",
    marginLeft: 10,
    flex: 1,
    fontSize: 13,
  },
  link: {
    color: "#3b82f6",
    textAlign: "center",
    marginTop: 25,
    fontSize: 15,
  },
});