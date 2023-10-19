import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import ImagesModal from "./ImagesModal";
import FloatingButton from "./FloatingMap";
import YourLocation from "./YourLocation";

const Map = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [points, setPoints] = useState([]);
  const [imageModalVisibility, changeImageModalVisibility] = useState(false);
  const mapRef = useRef(null);
  const [yourLocation, setYourLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.06,
    longitudeDelta: 0.03,
  });
  const getDet = () => {
    return fetch("https://sih-d8bz-git-master-sabari004s-projects.vercel.app/")
      .then((response) => response.json())
      .then((json) => {
        setPoints(json);
        // console.log(points);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getDet();
    (async () => {
      // Request permission to access location
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === "granted") {
        // Get the current location
        const locationData = await Location.getCurrentPositionAsync({});

        try {
          const updateLocation = {
            latitude: locationData.coords.latitude,
            longitude: locationData.coords.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.02,
          };
          setYourLocation(updateLocation);
        } catch (error) {
          console.log(error);
        }

        setLocation(locationData);
      } else {
        console.log("Location permission denied");
      }
    })();
  }, []);

  const goLocation = () => {
    mapRef.current.animateToRegion(yourLocation, 0.7 * 1000);
  };

  return (
    <View style={styles.container}>
      <ImagesModal
        modalVisible={imageModalVisibility}
        handleCloseButton={() => changeImageModalVisibility(false)}
      />
      {location && (
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.02,
          }}
        >
          <Marker
            onPress={() => changeImageModalVisibility(true)}
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Your Location"
            description="Current Location"
            pinColor="lightblue"
          />

          {points.map((point, index) => (
            <Marker
              onPress={() => changeImageModalVisibility(true)}
              key={index}
              coordinate={{
                latitude: point.latitude,
                longitude: point.longitude,
              }}
              title={point.predicted_class}
              description={point.predicted_class}
              opacity={0.75}
            />
          ))}
        </MapView>
      )}

      <FloatingButton
        onPress={() => {
          navigation.navigate("HeatMap");
        }}
        text="HeatMap"
      />
      <YourLocation onPress={() => goLocation()} text="YourLocation" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  map: {
    flex: 1,
  },
});

export default Map;
