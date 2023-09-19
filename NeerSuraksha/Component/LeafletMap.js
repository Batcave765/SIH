import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const LeafletMap = () => {
	const [location, setLocation] = useState(null);

	useEffect(() => {
		(async () => {
			// Request permission to access location
			const { status } = await Location.requestForegroundPermissionsAsync();

			if (status === "granted") {
				// Get the current location
				const locationData = await Location.getCurrentPositionAsync({});
				setLocation(locationData);
			} else {
				// Handle permission denial
				console.log("Location permission denied");
			}
		})();
	}, []);

	return (
		<View style={styles.container}>
			{location && (
				<MapView
					style={styles.map}
					initialRegion={{
						latitude: location.coords.latitude,
						longitude: location.coords.longitude,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
				>
					<Marker
						coordinate={{
							latitude: location.coords.latitude,
							longitude: location.coords.longitude,
						}}
						title="My Location"
						description="Current Location"
					/>
				</MapView>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	map: {
		flex: 1,
	},
});

export default LeafletMap;
