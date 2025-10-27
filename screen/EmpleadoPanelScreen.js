import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function EmpleadoPanelScreen({ navigation }) {
  const handleLogout = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>MJV</Text>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Panel de Empleado</Text>
      <Text style={styles.subtitle}>Bienvenido a Travel Safely 🚐</Text>

      <ScrollView style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="bus-outline" size={30} color="#3b82f6" />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Mis Viajes</Text>
            <Text style={styles.menuSubtitle}>Ver viajes asignados</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="calendar-outline" size={30} color="#3b82f6" />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Horarios</Text>
            <Text style={styles.menuSubtitle}>Consultar horarios</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="document-text-outline" size={30} color="#3b82f6" />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Reportes</Text>
            <Text style={styles.menuSubtitle}>Enviar reportes de viaje</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="person-outline" size={30} color="#3b82f6" />
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Mi Perfil</Text>
            <Text style={styles.menuSubtitle}>Ver y editar perfil</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  logo: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  logoutButton: {
    padding: 8,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    color: "#aaa",
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },
  menuContainer: {
    flex: 1,
  },
  menuItem: {
    flexDirection: "row",
    backgroundColor: "#1e1e1e",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: "center",
  },
  menuTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  menuTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  menuSubtitle: {
    color: "#aaa",
    fontSize: 14,
    marginTop: 4,
  },
});