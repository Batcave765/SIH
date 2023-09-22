import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Map from "./Component/Map";
import HeatMap from "./Component/Heatmap";
import FloatingButton from "./Component/FloatingMap";
const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Maps">
				<Stack.Screen name="Map" component={Map} />
				<Stack.Screen name="HeatMap" component={HeatMap} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default App;
