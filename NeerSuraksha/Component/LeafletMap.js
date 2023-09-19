import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const LeafletMap = () => {
	return (
		<View style={styles.container}>
			<WebView
				source={{ uri: "https://leafletjs.com/examples/quick-start/" }} // You can use any Leaflet map URL here
				style={styles.map}
			/>
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
