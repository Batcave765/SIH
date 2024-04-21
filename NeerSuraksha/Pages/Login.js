import React, { useState } from "react";
import { View, TextInput, Button, Alert, Text } from "react-native";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		// Handle login logic here
		Alert.alert("Credentials", `${username} + ${password}`);
	};

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				marginTop: -100,
			}}
		>
			<Text
				style={{
					marginBottom: 20,
					textAlign: "center",
					fontSize: 24,
					fontWeight: "bold",
				}}
			>
				NeerSuraksha
			</Text>
			<View style={{ alignItems: "center", width: "80%" }}>
				<TextInput
					value={username}
					onChangeText={(username) => setUsername(username)}
					placeholder={"Username"}
					style={{
						width: "100%",
						height: 48,
						padding: 8,
						marginVertical: 10,
						textAlign: "center",
						borderBottomWidth: 1,
						borderColor: "grey",
						fontSize: 20,
					}}
				/>
				<TextInput
					value={password}
					onChangeText={(password) => setPassword(password)}
					placeholder={"Password"}
					secureTextEntry={true}
					style={{
						width: "100%",
						height: 48,
						padding: 8,
						marginVertical: 10,
						textAlign: "center",
						borderBottomWidth: 1,
						borderColor: "grey",
						fontSize: 20,
					}}
				/>
				<View style={{ width: "40%", margin: 20 }}>
					<Button title={"Login"} onPress={handleLogin} />
				</View>
			</View>
		</View>
	);
};

export default Login;
