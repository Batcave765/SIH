import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import LeafletMap from "./Component/LeafletMap";
import * as Location from "expo-location";

const App = () => {
	const [isLocationPermissionGranted, setLocationPermissionGranted] =
		useState(false);

	useEffect(() => {
		initializeLocation();
	}, []);

	const initializeLocation = async () => {
		const { status } = await Location.requestForegroundPermissionsAsync();
		if (status === "granted") {
			setLocationPermissionGranted(true);
		} else {
			console.log("Location permission denied");
		}
	};

	return (
		<View style={styles.container}>
			{isLocationPermissionGranted ? (
				<LeafletMap />
			) : (
				<View>
					<Text>Loading...</Text>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default App;
