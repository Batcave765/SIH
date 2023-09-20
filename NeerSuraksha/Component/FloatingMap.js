import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const FloatingButton = ({ onPress, text }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		bottom: 30,
		left: 20,
		backgroundColor: "blue",
		borderRadius: 50,
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
	text: {
		color: "white",
		fontWeight: "bold",
	},
});

export default FloatingButton;
