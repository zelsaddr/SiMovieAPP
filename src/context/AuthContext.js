import { createContext, useState } from "react";
import { Alert } from "react-native";
import { auth } from "../services/Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userCred, setUserCred] = useState({ cred: "", error: false });

  const signIn = ({ email, password, navigation }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUserCred({ cred: userCredential.user });
        navigation.navigate("HomeScreen");
      })
      .catch((err) => {
        Alert.alert("Failed to Sign in", "Check ur credential", [{ text: "OK" }]);
        setUserCred({ cred: "", error: err });
      });
  };

  const signUp = ({ email, password, fullname }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, { displayName: fullname })
          .then((res) => {
            Alert.alert("Success Register", "Thank u for choosing this app!", [{ text: "OK" }]);
            setUserCred({ cred: userCredential.user });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        setUserCred({ cred: "", error: err });
      });
  };

  const signOuts = ({ navigation }) => {
    signOut(auth)
      .then(() => {
        console.log("ok");
        setUserCred({ cred: "", error: false });
        navigation.navigate("LoginScreen");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <AuthContext.Provider value={{ signIn, signUp, signOuts, userCred }}>{children}</AuthContext.Provider>
    </>
  );
};
