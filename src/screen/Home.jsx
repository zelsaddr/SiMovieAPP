import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { StatusBar } from "expo-status-bar";
import { colors, styles } from "../styles/homeStyles";
import Card from "../components/Card";
import SearchableDropdown from "react-native-searchable-dropdown";
import { getMoviesByPopularity, getMoviesByTopRated, getMoviesUpComing, searchMovieByKeyword } from "../services/Movie";

export default function HomeScreen({ navigation }) {
  const [popularData, setPopularData] = useState([]);
  const [topRatedData, setTopRatedData] = useState([]);
  const [upcomingData, setUpcomingData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const { userCred } = useContext(AuthContext);

  useEffect(() => {
    getMoviesByPopularity()
      .then((res) => {
        setPopularData(res.data.results);
      })
      .catch((err) => console.log(err));

    getMoviesByTopRated()
      .then((res) => {
        setTopRatedData(res.data.results);
      })
      .catch((err) => console.log(err));

    getMoviesUpComing()
      .then((res) => {
        setUpcomingData(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [setPopularData, setTopRatedData, setUpcomingData]);

  return (
    <>
      <StatusBar style="light" translucent={false} backgroundColor={colors.primary} />
      <View style={styles.body}>
        <View style={styles.headerSection}>
          <View style={styles.container}>
            <SearchableDropdown
              onTextChange={(text) => {
                if (text.length >= 1) {
                  searchMovieByKeyword(text)
                    .then((res) => {
                      let searchedData = [];
                      let s = res.data.results;
                      s.map((result, i) => {
                        searchData.push({ id: i + 1, name: result.title, movieId: result.id });
                      });
                    })
                    .catch((err) => console.log(err));
                } else {
                  setSearchData([]);
                }
              }}
              onItemSelect={(item) => {
                setSearchData([]);
                navigation.navigate("DetailScreen", { movieId: item.movieId });
              }}
              containerStyle={{ padding: 5 }}
              textInputStyle={styles.searchBar}
              itemStyle={{
                padding: 10,
                marginTop: 2,
                backgroundColor: "#FAF9F8",
                borderColor: "#bbb",
                borderWidth: 1,
              }}
              itemTextStyle={{
                color: "#222",
              }}
              itemsContainerStyle={{
                height: "50%",
              }}
              items={searchData}
              defaultIndex={0}
              placeholder="Search movie here..."
              resetValue={false}
              underlineColorAndroid="transparent"
            />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.bodySection}>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <Text style={{ alignContent: "flex-start", fontWeight: "700", color: colors.primary, width: "50%" }}>📅 Up Coming Movies</Text>
                <TouchableOpacity style={{ width: "50%" }}>
                  <Text style={{ textAlign: "right", fontWeight: "300", color: colors.primary, fontSize: 12, marginTop: 3 }}>See more</Text>
                </TouchableOpacity>
              </View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {upcomingData ? (
                  upcomingData.map((datas, index) => {
                    let overviewCutter = (string) => {
                      let length = 227;
                      let overview = string.length > length ? string.substring(0, length - 3) + "..." : string;
                      return overview;
                    };
                    return (
                      <Card
                        rating={datas?.vote_average}
                        key={index}
                        imageUrl={{ uri: `https://image.tmdb.org/t/p/w500${datas?.poster_path}` }}
                        title={datas?.title}
                        year={datas?.release_date.split("-")[0]}
                        synopsis={overviewCutter(datas?.overview)}
                        navigator={() => navigation.navigate("DetailScreen", { movieId: datas?.id })}
                      />
                    );
                  })
                ) : (
                  <>
                    <Card
                      key={0}
                      imageUrl={require("../assets/images/topgun.jpg")}
                      title={"Top gun Maverick"}
                      year={"2022"}
                      synopsis={`After more than 30 years of service as one of the Navy's top aviators, Pete "Maverick" Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.... `}
                    />
                  </>
                )}
              </ScrollView>
            </View>
            <View style={styles.bodySection}>
              <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 20 }}>
                <Text style={{ alignContent: "flex-start", fontWeight: "700", color: colors.primary, width: "50%" }}>🔥 Popular Movies</Text>
                <TouchableOpacity style={{ width: "50%" }}>
                  <Text style={{ textAlign: "right", fontWeight: "300", color: colors.primary, fontSize: 12, marginTop: 3 }}>See more</Text>
                </TouchableOpacity>
              </View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {popularData
                  ? popularData.map((datas, index) => {
                      let overviewCutter = (string) => {
                        let length = 227;
                        let overview = string.length > length ? string.substring(0, length - 3) + "..." : string;
                        return overview;
                      };
                      return (
                        <Card
                          key={index}
                          rating={datas?.vote_average}
                          imageUrl={{ uri: `https://image.tmdb.org/t/p/w500${datas?.poster_path}` }}
                          title={datas?.title}
                          year={datas?.release_date.split("-")[0]}
                          synopsis={overviewCutter(datas?.overview)}
                          navigator={() => navigation.navigate("DetailScreen", { movieId: datas?.id })}
                        />
                      );
                    })
                  : ""}
              </ScrollView>
            </View>
            <View style={styles.bodySection}>
              <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 20 }}>
                <Text style={{ alignContent: "flex-start", fontWeight: "700", color: colors.primary, width: "50%" }}>🌟 Top Rated Movies</Text>
                <TouchableOpacity style={{ width: "50%" }}>
                  <Text style={{ textAlign: "right", fontWeight: "300", color: colors.primary, fontSize: 12, marginTop: 3 }}>Lihat semua</Text>
                </TouchableOpacity>
              </View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {topRatedData ? (
                  topRatedData.map((datas, i) => {
                    let overviewCutter = (string) => {
                      let length = 227;
                      let overview = string.length > length ? string.substring(0, length - 3) + "..." : string;
                      return overview;
                    };
                    return (
                      <Card
                        rating={datas?.vote_average}
                        key={i}
                        imageUrl={{ uri: `https://image.tmdb.org/t/p/w500${datas?.poster_path}` }}
                        title={datas?.title}
                        year={datas?.release_date.split("-")[0]}
                        synopsis={overviewCutter(datas?.overview)}
                        navigator={() => navigation.navigate("DetailScreen", { movieId: datas?.id })}
                      />
                    );
                  })
                ) : (
                  <>
                    <Card
                      key={1}
                      imageUrl={require("../assets/images/topgun.jpg")}
                      title={"Top gun Maverick"}
                      year={"2022"}
                      synopsis={`After more than 30 years of service as one of the Navy's top aviators, Pete "Maverick" Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.... `}
                    />
                  </>
                )}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
