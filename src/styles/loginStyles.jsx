import { StyleSheet } from "react-native";

const colors = {
  primary: "#4E1111",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // marginTop: 90,
    // marginBottom: 150,
    justifyContent: "center",
  },
  form: {
    height: 40,
    width: 270,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.primary,
    textAlign: "center",
    fontSize: 12,
    color: colors.primary,
  },
  button: {
    backgroundColor: colors.primary,
    height: 40,
    width: 270,
    margin: 12,
    borderRadius: 10,
    // justifyContent: "center",
  },
  registerButton: {
    justifyContent: "center",
    background: "transparent",
    flexDirection: "row",
    height: 40,
    width: 270,
    margin: 12,
    marginTop: 1,
    // borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
  },
  titleButton: {
    color: "white",
    textAlign: "center",
    // marginTop: 8,
    fontSize: 12,
    margin: 12,
  },
  titleButtonRegister: {
    color: colors.primary,
    textAlignVertical: "center",
    textAlign: "center",
    marginTop: 8,
    fontSize: 10,
  },
});

export { colors, styles };
