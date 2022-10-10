import { StyleSheet } from "react-native";

const colors = {
  primary: "#4E1111",
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // backgroundColor: colors.primary,
  },
  container: {
    marginTop: 40,
    margin: 25,
  },
  headerSection: {
    backgroundColor: colors.primary,
    // borderBottomLeftRadius: 25,
    // borderBottomRightRadius: 25,
  },
  bodySection: {
    backgroundColor: "#F2F2F2",
  },
  headerGreeting: {
    flexDirection: "row",
    marginTop: 20,
  },
  headerGreetingLight: {
    fontWeight: "300",
    color: "white",
    fontSize: 15,
  },
  headerGreetingBold: {
    fontWeight: "700",
    color: "white",
    fontSize: 15,
  },
  searchBar: {
    width: "100%",
    height: 40,
    backgroundColor: "white",
    borderRadius: 13,
    marginTop: 15,
    marginBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
  },
  backgroundWhite: {
    backgroundColor: "white",
  },
  headingTextLeft: {
    color: colors.primary,
  },
});

export { colors, styles };
