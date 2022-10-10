import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/context/AuthContext";
import RootStackNavigator from "./src/routes";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
