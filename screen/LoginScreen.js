import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import CustomButton from '../components/CustomButton';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === "admin@demo.com" && password === "123456") {
      navigation.navigate('AdminPanel');
    } else {
      alert('Credenciales incorrectas. Usa admin@demo.com / 123456');
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>Inicio de Sesión</Text>

      <TextInput
        label="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        label="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <CustomButton title="Ingresar" onPress={handleLogin} />
      <CustomButton title="Registrarse" mode="outlined" onPress={() => navigation.navigate('Register')} />
      <Text style={styles.link} onPress={() => navigation.navigate('ForgotPassword')}>
        ¿Olvidaste tu contraseña?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { textAlign: 'center', marginBottom: 20 },
  input: { marginVertical: 5 },
  link: { textAlign: 'center', color: '#007bff', marginTop: 15 },
});
