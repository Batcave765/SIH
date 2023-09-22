import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import ImagesModal from "./ImagesModal";
import FloatingButton from "./FloatingMap";
import YourLocation from "./YourLocation";

const Map = ({ navigation }) => {
	const [location, setLocation] = useState(null);
	const [imageModalVisibility, changeImageModalVisibility] = useState(false);
	const mapRef = useRef(null);
	const [yourLocation, setYourLocation] = useState({
		latitude: 0,
		longitude: 0,
		latitudeDelta: 0.06,
		longitudeDelta: 0.03,
	});
	useEffect(() => {
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

	points = [
		{
			latitude: 10.9644,
			longitude: 76.9584,
			title: "Point A",
			description: "Description for Point A",
		},
		{
			latitude: 10.9652,
			longitude: 76.9581,
			title: "Point B",
			description: "Description for Point B",
		},
		{
			latitude: 10.9651,
			longitude: 76.9579,
			title: "Point C",
			description: "Description for Point C",
		},
		{
			latitude: 10.9648,
			longitude: 76.9576,
			title: "Point D",
			description: "Description for Point D",
		},
		{
			latitude: 10.9648,
			longitude: 76.9589,
			title: "Point E",
			description: "Description for Point E",
		},
		{
			latitude: 10.9648,
			longitude: 76.9476,
			title: "Point F",
			description: "Description for Point F",
		},
		{
			latitude: 10.9985,
			longitude: 76.9782,
			title: "Point G",
			description: "Description for Point G",
		},
		{
			latitude: 10.9385,
			longitude: 76.9582,
			title: "Point H",
			description: "Description for Point H",
		},
		{
			latitude: 10.9382,
			longitude: 76.9581,
			title: "Point I",
			description: "Description for Point I",
		},
		{
			latitude: 10.9349,
			longitude: 76.9571,
			title: "Point J",
			description: "Description for Point J",
		},
		{
			latitude: 10.9372,
			longitude: 76.9281,
			title: "Point K",
			description: "Description for Point K",
		},
	];

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
							title={point.title}
							description={point.description}
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
