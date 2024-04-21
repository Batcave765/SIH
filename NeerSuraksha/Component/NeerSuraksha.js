import React from "react";
import { View, StyleSheet } from "react-native";

import { CommonActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, BottomNavigation } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Map from "./Map";
import HeatMap from "./Heatmap"; // Import HeatMap component
import Add from "./Add";
import HomePage from "../Pages/HomePage";
import ProfilePage from "../Pages/ProfilePage";
const Tab = createBottomTabNavigator();

export default function NeerSuraksha({ navigation }) {
  // Pass navigation prop
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Map"
        component={Mapi}
        options={{
          tabBarLabel: "Map",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="map" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Add"
        component={Addi}
        options={{
          tabBarLabel: "Add",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="plus" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="HeatMap"
        component={HeatMap} // Change component to HeatMap
        options={{
          tabBarLabel: "HeatMap",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="map" size={size} color={color} />;
          },
        }}
      />
      {/* <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="cog" size={size} color={color} />;
          },
        }}
      /> */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="face-man-profile" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomePage />
    </View>
  );
}
function Profile() {
  return (
    <View style={styles.container}>
      <ProfilePage />
    </View>
  );
}
function Mapi() {
  return (
    <View style={styles.container}>
      <Map />
    </View>
  );
}
function Addi() {
  return (
    <View style={styles.container}>
      <Add />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Settings!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
