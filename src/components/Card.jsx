import React, { Component } from "react";

import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class Card extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.card} key={this.props.keyz} onPress={this.props.navigator}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Image style={styles.imageCard} source={this.props.imageUrl} />
          <View style={{ position: "absolute", flexDirection: "row", marginLeft: 10, width: 45, height: 40, backgroundColor: "white", borderBottomRightRadius: 5, borderTopRightRadius: 5, justifyContent: "center" }}>
            <Text style={{ fontSize: 20, alignSelf: "center", paddingRight: 5, fontSize: 12, color: "black" }}>⭐</Text>
            <Text style={{ fontSize: 20, alignSelf: "center", paddingRight: 20, fontSize: 12, color: "black" }}>{this.props.rating}</Text>
          </View>
        </View>
        <View style={{ marginLeft: 15, marginRight: 15, flexDirection: "row", flexWrap: "wrap" }}>
          <Text style={styles.textTitleCard}>{this.props.title}</Text>
          <Text style={styles.textTitleCardYear}>{this.props.year}</Text>
        </View>
        <Text style={styles.textSynopsis}>{this.props.synopsis}</Text>
      </TouchableOpacity>
    );
  }
}

export default Card;

const colors = {
  primary: "#4E1111",
};

const styles = StyleSheet.create({
  card: {
    marginTop: 25,
    width: 230,
    height: 316,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    marginRight: 25,
    // flexDirection: "column",
  },
  imageCard: {
    flex: 1,
    borderRadius: 15,
    width: 208,
    height: 155,
    alignSelf: "center",
    margin: 13,
  },
  textTitleCard: {
    fontWeight: "700",
    color: colors.primary,
    fontSize: 11,
    width: "80%",
  },
  textTitleCardYear: {
    fontWeight: "700",
    color: colors.primary,
    fontSize: 11,
    textAlign: "right",
    width: "20%",
  },
  textSynopsis: {
    margin: 15,
    fontWeight: "300",
    color: colors.primary,
    fontSize: 10,
    marginTop: 10,
    textAlign: "justify",
  },
});
