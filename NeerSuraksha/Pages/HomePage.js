import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NeerSuraksha</Text>
      <Text style={styles.subtitle}>Your Disaster Management Companion</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
    textAlign: "center",
    color: "#666",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomePage;
