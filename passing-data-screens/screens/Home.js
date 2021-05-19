import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://reactnative.dev/movies.json")
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={globalStyles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={globalStyles.movieBtn}
              onPress={() => navigation.navigate("Movie", item)}
            >
              <Text style={globalStyles.movieText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default Home;
