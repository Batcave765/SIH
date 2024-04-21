import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Map from "./Component/Map";
import HeatMap from "./Component/Heatmap";
import Login from "./Pages/Login";
import FloatingButton from "./Component/FloatingMap";
import NeerSuraksha from "./Component/NeerSuraksha";
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="HeatMap" component={HeatMap} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="NeerSuraksha" component={NeerSuraksha} />
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
