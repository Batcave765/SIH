import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome from @expo/vector-icons

const ProfilePage = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSavePassword = () => {
    // Add validation logic here
    if (newPassword !== confirmPassword) {
      setErrorMessage("New password and confirm password do not match");
    } else {
      // Save password logic goes here
      setErrorMessage("");
      // Reset password fields
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <View style={styles.container}>
      <FontAwesome
        name="user-circle"
        size={100}
        color="#333"
        style={styles.profileIcon}
      />
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text style={styles.label}>Edit Password</Text>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Current Password"
        secureTextEntry={true}
        value={currentPassword}
        onChangeText={(text) => setCurrentPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="New Password"
        secureTextEntry={true}
        value={newPassword}
        onChangeText={(text) => setNewPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm New Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSavePassword}>
        <Text style={styles.buttonText}>Save Password</Text>
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
    width: "100%",
  },
  profileIcon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "600",
    alignSelf: "flex-start",
    color: "#000000",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
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
  error: {
    color: "red",
    marginBottom: 10,
  },
});

export default ProfilePage;
