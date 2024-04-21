import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const YourLocation = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FontAwesome name="map-pin" size={24} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 40,
    left: 20,
    backgroundColor: "blue",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

export default YourLocation;
