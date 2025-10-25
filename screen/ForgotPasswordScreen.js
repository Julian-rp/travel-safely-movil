import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import CustomButton from '../components/CustomButton';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    alert(`Se ha enviado un enlace de recuperación a ${email} (mock).`);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>Recuperar Contraseña</Text>

      <TextInput label="Correo electrónico" value={email} onChangeText={setEmail} style={styles.input} />
      <CustomButton title="Enviar Enlace" onPress={handleReset} />
      <CustomButton title="Volver" mode="outlined" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { textAlign: 'center', marginBottom: 20 },
  input: { marginVertical: 5 },
});
