import React, { useState, useContext } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { colors, styles } from "../styles/loginStyles";
import { AuthContext } from "../context/AuthContext";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useContext(AuthContext);

  return (
    <>
      <StatusBar style="light" translucent={false} backgroundColor={colors.primary} />
      <View style={styles.container}>
        <Image style={{ width: 142, height: 150, resizeMode: "contain" }} source={require("../assets/images/simovie.png")} />
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontWeight: "700", fontSize: 20, marginTop: 7, alignSelf: "center", marginBottom: 25, color: colors.primary }}>Register</Text>
          <TextInput style={styles.form} onChangeText={setEmail} value={email} placeholder="Email" />
          <TextInput style={styles.form} onChangeText={setFullname} value={fullname} placeholder="Full Name" />
          <TextInput style={styles.form} onChangeText={setPassword} value={password} placeholder="Password" />
          <TouchableOpacity style={styles.button} onPress={() => signUp({ email, password, fullname })}>
            <Text style={styles.titleButton}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.titleButtonRegister}>Already have account? Sign in here.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
