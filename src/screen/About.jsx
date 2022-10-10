import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { colors, styles } from "../styles/aboutStyles";
import { AuthContext } from "../context/AuthContext";

export default function AboutScreen({ navigation }) {
  const { userCred, signOuts } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center", fontWeight: "700", fontSize: 30, color: "white" }}>{userCred["cred"]["displayName"]}</Text>
      <Text style={{ textAlign: "center", fontWeight: "300", fontSize: 15, color: "white" }}>{userCred["cred"]["email"]}</Text>
      <TouchableOpacity style={{ width: "30%", height: 40, backgroundColor: "white", alignSelf: "center", justifyContent: "center", borderRadius: 15, margin: 15 }} onPress={() => signOuts({ navigation })}>
        <Text style={{ textAlign: "center", fontSize: 15 }}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
