import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import ImagesModal from "./ImagesModal";

const LeafletMap = () => {
	const [location, setLocation] = useState(null);
	const [imageModalVisibility, changeImageModalVisibility]=useState(false);
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
			<ImagesModal modalVisible={imageModalVisibility} handleCloseButton={()=>changeImageModalVisibility(false)}/>
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
						onPress={()=>changeImageModalVisibility(true)}
						coordinate={{
							latitude: location.coords.latitude,
							longitude: location.coords.longitude,
						}}
						title="My Location"
						description="Current Location"
					/>
					<Marker
						onPress={()=>changeImageModalVisibility(true)}
						coordinate={{
							latitude: location.coords.latitude+0.001,
							longitude: location.coords.longitude+0.001,
						}}
						title="Temp Location"
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
		height:"100%",
		width:"100%"
	},
	map: {
		flex: 1,
	},
});

export default LeafletMap;
