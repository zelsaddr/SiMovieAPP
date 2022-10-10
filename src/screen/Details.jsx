import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, ImageBackground } from "react-native";
import { getMovieDetails } from "../services/Movie";
// import { StatusBar } from "expo-status-bar";
import { colors, styles } from "../styles/detailStyles";

export default function DetailScreen({ route, navigation }) {
  const { movieId } = route.params;
  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    getMovieDetails(movieId)
      .then((res) => {
        let data = res.data;
        data["year"] = data.release_date.split("-")[0];
        data["one_genre"] = data["genres"][0]["name"];
        setMovieInfo(data);
      })
      .catch((err) => console.log(err));
  }, [setMovieInfo]);

  return (
    <>
      {/* <StatusBar style="light" translucent={false} backgroundColor={colors.primary} /> */}
      <View style={{ flex: 1 }}>
        <ImageBackground source={{ uri: `https://image.tmdb.org/t/p/original${movieInfo?.poster_path}` }} style={styles.headerImage} />
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("HomeScreen")}>
          <Image source={require("../assets/back.png")} style={{ width: 15, height: 25 }} />
        </TouchableOpacity>
        <View style={{ flex: 1, backgroundColor: "rgba(78, 17, 17, 0.1)" }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ backgroundColor: "white", width: "100%", height: 80, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, justifyContent: "center", flexDirection: "column" }}>
              <Text style={{ color: colors.primary, fontWeight: "700", fontSize: 20, textAlign: "center" }}>{movieInfo?.title}</Text>
              <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 5, margin: 15 }}>
                <Text>{movieInfo?.year}</Text>
                <Text>-</Text>
                <Text>{movieInfo?.one_genre}</Text>
                <Text>-</Text>
                <Text>{movieInfo?.vote_average}</Text>
              </View>
            </View>
            <Text style={{ color: colors.primary, fontWeight: "700", fontSize: 20, marginTop: 15, textAlign: "center" }}>Synopsis</Text>
            <Text style={{ color: colors.primary, fontWeight: "300", fontSize: 15, marginTop: 15, textAlign: "justify", margin: 15 }}>{movieInfo?.overview}</Text>
            <Text style={{ color: colors.primary, fontWeight: "700", fontSize: 20, marginTop: 15, textAlign: "center" }}>Production Companies</Text>
            <View style={{ flexDirection: "column", margin: 15 }}>
              {movieInfo?.production_companies
                ? movieInfo.production_companies.map((prod, i) => (
                    <Text key={i} style={{ color: colors.primary, textAlign: "center" }}>
                      {prod.name}
                    </Text>
                  ))
                : ""}
            </View>
            <Text style={{ color: colors.primary, fontWeight: "700", fontSize: 20, marginTop: 15, textAlign: "center" }}>Spoken Languages</Text>
            <View style={{ flexDirection: "column", margin: 10 }}>
              {movieInfo?.spoken_languages
                ? movieInfo.spoken_languages.map((prod, i) => (
                    <Text key={i} style={{ color: colors.primary, textAlign: "center" }}>
                      {prod.name}
                    </Text>
                  ))
                : ""}
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}
