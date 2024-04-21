import { Camera } from "expo-camera";
import { useState, useRef } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
export default function Add() {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef(null);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const { uri } = await cameraRef.current.takePictureAsync();
        console.log("Photo captured:", uri);
        // Handle the captured photo here
      } catch (error) {
        console.error("Error taking photo:", error);
      }
    }
  };

  const browseImages = () => {
    // Logic to browse images
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <FontAwesome name="camera" size={24} color="white" />
            {/* Camera icon */}
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "transparent",
    marginBottom: 20,
  },
  bottomButtonContainer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007AFF",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
  },
  bottomButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007AFF",
    borderRadius: 10,
    padding: 10,
  },
  text: {
    fontSize: 18,
    color: "#FFF",
  },
});
