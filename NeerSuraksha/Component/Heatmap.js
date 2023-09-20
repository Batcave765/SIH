import React, { Component } from "react";
import { StyleSheet, View, Platform, Button } from "react-native";
import MapView, { Heatmap, PROVIDER_GOOGLE } from "react-native-maps";
import { withNavigation } from "react-navigation";
import FloatingButton from "./FloatingMap";

class HeatMap extends Component {
	static navigationOptions = {
		title: "Coimbatore",
	};

	state = {
		initialPosition: {
			latitude: 10.9385,
			longitude: 76.9558,
			latitudeDelta: 0.06,
			longitudeDelta: 0.03,
		},
	};

	points = [
		{ latitude: 10.9648, longitude: 76.9589, weight: 1 },
		{ latitude: 10.9644, longitude: 76.9584, weight: 1 },
		{ latitude: 10.9652, longitude: 76.9581, weight: 1 },
		{ latitude: 10.9651, longitude: 76.9579, weight: 1 },
		{ latitude: 10.9648, longitude: 76.9576, weight: 1 },
		{ latitude: 10.9648, longitude: 76.9476, weight: 1 },
		{ latitude: 10.9985, longitude: 76.9782, weight: 1 },
		{ latitude: 10.9385, longitude: 76.9582, weight: 1 },
		{ latitude: 10.9382, longitude: 76.9581, weight: 1 },
		{ latitude: 10.9349, longitude: 76.9571, weight: 1 },
		{ latitude: 10.9372, longitude: 76.9281, weight: 1 },
	];

	render() {
		return (
			<View style={styles.container}>
				<MapView
					provider={PROVIDER_GOOGLE}
					ref={(map) => (this._map = map)}
					style={styles.map}
					initialRegion={this.state.initialPosition}
				>
					<Heatmap
						points={this.points}
						radius={50}
						opacity={0.55}
						gradient={{
							colors: ["cyan", "green", "orange", "red"],
							startPoints:
								Platform.OS === "ios"
									? [0.01, 0.04, 0.45, 0.5]
									: [0.25, 0.5, 0.75, 1],
							colorMapSize: 4096,
						}}
					></Heatmap>
				</MapView>
				<FloatingButton
					onPress={() => {
						this.props.navigation.navigate("Map");
					}}
					text="Navigate"
				/>
			</View>
		);
	}
}

export default withNavigation(HeatMap);

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
});
