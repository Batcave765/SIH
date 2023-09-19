import React from "react";
import { StyleSheet, View } from "react-native";
import LeafletMap from "./Component/LeafletMap";

const App = () => {
	return (
		<View style={styles.container}>
			{/* Use the LeafletMap component */}
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
