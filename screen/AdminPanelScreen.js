import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card } from 'react-native-paper';
import CustomButton from '../components/CustomButton';

export default function AdminPanelScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>Panel de Administración</Text>

      <Card style={styles.card}>
        <Card.Title title="Gestión de Usuarios" />
        <Card.Content><Text>Ver, editar y eliminar usuarios registrados.</Text></Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Reportes" />
        <Card.Content><Text>Visualiza estadísticas del sistema Travel Safely.</Text></Card.Content>
      </Card>

      <CustomButton title="Cerrar Sesión" onPress={() => navigation.navigate('Login')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', padding: 20 },
  title: { textAlign: 'center', marginBottom: 20 },
  card: { marginVertical: 10, borderRadius: 10 },
});
