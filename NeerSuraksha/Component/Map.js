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
  const [selectedMarkerId, setSelectedMarkerId] = useState(null); // Track the selected marker's id
  const [selectedMarkerImages, setSelectedMarkerImages] = useState({}); // Store images for selected marker
  const mapRef = useRef(null);
  const [yourLocation, setYourLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.06,
    longitudeDelta: 0.03,
  });

  const getDet = () => {
    return fetch("https://sih-d8bz.vercel.app/")
      .then((response) => response.json())
      .then((json) => {
        setPoints(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getDet();
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === "granted") {
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

  const fetchImagesForMarker = async (markerId) => {
    try {
      const response = await fetch(
        `https://sih-d8bz.vercel.app/id/${markerId}`
      );
      const data = await response.json();
      setSelectedMarkerImages(data.image_url); // Assuming 'images' is the key containing image URLs in the response
    } catch (error) {
      console.error("Error fetching images for marker:", error);
    }
  };

  const handleMarkerPress = (markerId) => {
    setSelectedMarkerId(markerId); // Store the id of the selected marker
    fetchImagesForMarker(markerId); // Fetch images for the selected marker
    changeImageModalVisibility(true); // Show the image modal
  };

  const goLocation = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion(yourLocation, 0.7 * 1000);
    }
  };

  return (
    <View style={styles.container}>
      <ImagesModal
        modalVisible={imageModalVisibility}
        handleCloseButton={() => changeImageModalVisibility(false)}
        images={selectedMarkerImages} // Pass the images to the modal
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
              key={point._id} // Assuming '_id' is unique for each marker
              coordinate={{
                latitude: point.latitude,
                longitude: point.longitude,
              }}
              title={point.predicted_class}
              description={point.predicted_class}
              opacity={0.75}
              onPress={() => handleMarkerPress(point._id)} // Pass the '_id' when marker is pressed
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
      <YourLocation onPress={goLocation} text="YourLocation" />
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
