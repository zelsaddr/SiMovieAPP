import { StyleSheet } from "react-native";

const colors = {
  primary: "#4E1111",
};

const styles = StyleSheet.create({
  headerImage: {
    // justifyContent: "center",
    // alignSelf: "center",
    height: 350,
    width: "100%",
  },
  backButton: {
    // flexDirection: "row",
    height: 60,
    width: 80,
    // backgroundColor: colors.primary,
    backgroundColor: "rgba(78, 17, 17, 0.5)",
    position: "absolute",
    // marginTop: 10,
    // borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export { colors, styles };
