import React, { useState } from "react";
import { View, TextInput, Button, Alert, Text } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import { StackActions } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation(); // Get navigation object using useNavigation hook
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const url = `https://sih-d8bz.vercel.app/user/${username}/${password}`;

    try {
      const response = await fetch(url);

      if (response.ok) {
        const userDetails = await response.json();
        // Assuming userDetails contains user details if login is successful
        console.log("Logged in:", userDetails);

        // Navigate to the Map component
        navigation.dispatch(StackActions.replace('Map'));
      } else {
        Alert.alert("Invalid login");
        // Display invalid login message or perform further actions
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Display error message or perform further actions
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -100,
      }}
    >
      <Text
        style={{
          marginBottom: 20,
          textAlign: "center",
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        NeerSuraksha
      </Text>
      <View style={{ alignItems: "center", width: "80%" }}>
        <TextInput
          value={username}
          onChangeText={(username) => setUsername(username)}
          placeholder={"Username"}
          style={{
            width: "100%",
            height: 48,
            padding: 8,
            marginVertical: 10,
            textAlign: "center",
            borderBottomWidth: 1,
            borderColor: "grey",
            fontSize: 20,
          }}
        />
        <TextInput
          value={password}
          onChangeText={(password) => setPassword(password)}
          placeholder={"Password"}
          secureTextEntry={true}
          style={{
            width: "100%",
            height: 48,
            padding: 8,
            marginVertical: 10,
            textAlign: "center",
            borderBottomWidth: 1,
            borderColor: "grey",
            fontSize: 20,
          }}
        />
        <View style={{ width: "40%", margin: 20 }}>
          <Button title={"Login"} onPress={handleLogin} />
        </View>
      </View>
    </View>
  );
};

export default Login;