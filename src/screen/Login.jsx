import React, { useContext, useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { colors, styles } from "../styles/loginStyles";
import { AuthContext } from "../context/AuthContext";

export default function SiMovieLogin({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);

  return (
    <>
      <StatusBar style="light" translucent={false} backgroundColor={colors.primary} />
      <View style={styles.container}>
        <Image style={{ width: 142, height: 150, resizeMode: "contain" }} source={require("../assets/images/simovie.png")} />
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontWeight: "700", fontSize: 20, marginTop: 7, alignSelf: "center", marginBottom: 25, color: colors.primary }}>Welcome</Text>
          <TextInput style={styles.form} onChangeText={setEmail} value={email} placeholder="Email" />
          <TextInput style={styles.form} onChangeText={setPassword} value={password} placeholder="Password" />
          <TouchableOpacity style={styles.button} onPress={() => signIn({ email, password, navigation })}>
            <Text style={styles.titleButton}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate("RegisterScreen")}>
            <Text style={styles.titleButtonRegister}>Don't have account? Sign up here.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
