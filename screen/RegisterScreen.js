import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import CustomButton from '../components/CustomButton';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    alert(`Usuario ${name} registrado exitosamente (mock).`);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>Registro</Text>

      <TextInput label="Nombre completo" value={name} onChangeText={setName} style={styles.input} />
      <TextInput label="Correo electrónico" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput label="Contraseña" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />

      <CustomButton title="Registrarse" onPress={handleRegister} />
      <CustomButton title="Volver" mode="outlined" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { textAlign: 'center', marginBottom: 20 },
  input: { marginVertical: 5 },
});
