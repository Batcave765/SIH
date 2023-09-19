import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LeafletMap from "./Component/LeafletMap";
const App = () => {
	return (
		<View style={styles.container}>
			<LeafletMap />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default App;
