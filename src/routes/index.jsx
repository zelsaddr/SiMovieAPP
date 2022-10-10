import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Text, Button, Image } from "react-native";
import { AuthContext } from "../context/AuthContext";

// Screens
import SiMovieLogin from "../screen/Login";
import AboutScreen from "../screen/About";
import RegisterScreen from "../screen/Register";
import HomeScreen from "../screen/Home";
import DetailScreen from "../screen/Details";
import { useContext } from "react";

const Stack = createNativeStackNavigator();

export default RootStackNavigator = () => {
  const { userCred } = useContext(AuthContext);
  console.log(userCred);
  return (
    <>
      <Stack.Navigator>
        {userCred["cred"] != "" ? (
          <>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={({ navigation }) => ({
                headerStyle: {
                  backgroundColor: "#4E1111",
                },

                headerTitleStyle: {
                  color: "white",
                },
                headerTintColor: "white",
                headerTransparent: true,
                title: `   Hello, ${userCred["cred"]["displayName"]}`,
                headerRight: () => (
                  <TouchableOpacity style={{ width: 30, height: 30, marginRight: 20 }} onPress={() => navigation.navigate("AboutScreen")}>
                    <Image source={require("../assets/profile.png")} style={{ width: 30, height: 30 }} />
                  </TouchableOpacity>
                ),
              })}
            />
            <Stack.Screen
              name="AboutScreen"
              component={AboutScreen}
              options={{
                headerStyle: {
                  backgroundColor: "#4E1111",
                },
                headerTitleStyle: {
                  color: "white",
                },
                headerTintColor: "white",
                title: "About Me",
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen
              name="DetailScreen"
              component={DetailScreen}
              options={{
                headerShown: false,
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="LoginScreen"
              component={SiMovieLogin}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </>
  );
};
