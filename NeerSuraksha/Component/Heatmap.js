import React, { useState } from "react";
import { StyleSheet, View, Platform } from "react-native";
import MapView, { Heatmap, PROVIDER_GOOGLE } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import FloatingButton from "./FloatingMap";
import { useEffect } from "react";

const HeatMap = () => {
  const navigation = useNavigation();
  const [points, setPoints] = useState([]);

  useEffect(() => {
    fetchPoints();
  }, []);

  const fetchPoints = async () => {
    try {
      const response = await fetch("https://sih-d8bz.vercel.app/");
      const data = await response.json();
      setPoints(data);
    } catch (error) {
      console.error("Error fetching points:", error);
    }
  };

  const initialPosition = {
    latitude: 10.9385,
    longitude: 76.9558,
    latitudeDelta: 0.05,
    longitudeDelta: 0.02,
  };
  if (points.length > 0) {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={initialPosition}
        >
          <Heatmap
            points={points}
            radius={50}
            opacity={0.55}
            gradient={{
              colors: ["cyan", "green", "orange", "red"],
              startPoints:
                Platform.OS === "ios"
                  ? [0.01, 0.04, 0.45, 0.5]
                  : [0.25, 0.5, 0.75, 1],
              colorMapSize: 4096,
            }}
          />
        </MapView>
        <FloatingButton
          onPress={() => {
            navigation.navigate("Map");
          }}
          text="Navigate"
        />
      </View>
    );
  }
};

export default HeatMap;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
