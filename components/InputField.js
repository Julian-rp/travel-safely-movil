import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function InputField({ icon, placeholder, secureTextEntry, value, onChangeText }) {
  return (
    <View style={styles.inputContainer}>
      <Ionicons name={icon} size={20} color="#ccc" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eeeeeeff",
    borderRadius: 10,
    marginVertical: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    color: "#ffffffff",
    flex: 1,
    fontSize: 16,
  },
});
