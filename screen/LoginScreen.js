import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 🔹 Base de datos simple (local)
  const users = [
    { email: 'admin@travel.com', password: '12345', role: 'admin' },
    { email: 'empleado@travel.com', password: 'abcde', role: 'empleado' },
  ];

  const handleLogin = () => {
    const foundUser = users.find(
      user => user.email === email.trim() && user.password === password.trim()
    );

    if (foundUser) {
      if (foundUser.role === 'admin') {
        navigation.navigate('AdminPanel');
      } else {
        Alert.alert('Acceso Denegado', 'Solo el administrador puede acceder al panel.');
      }
    } else {
      Alert.alert('Error', 'Correo o contraseña incorrectos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MJV</Text>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#888"
        onChangeText={setEmail}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#888"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
  <Text style={styles.registerLink}>¿Eres nuevo? Regístrate aquí</Text>
</TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0e0eff',
    padding: 30,
    justifyContent: 'center',
  },
  logo: {
    color: '#ffffffff',
    fontSize: 42,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  title: {
    color: '#ffffffff',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 25,
  },
  input: {
    backgroundColor: '#F4F4F4',
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    color: '#1E1E1E',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    color: '#555',
    textAlign: 'center',
    marginTop: 15,
  },
  registerLink: {
  color: "#aaa",
  textAlign: "center",
  marginTop: 20,
},
});
