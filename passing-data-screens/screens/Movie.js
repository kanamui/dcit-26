import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

const Movie = ({ route }) => {
  const data = route.params;

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.movieText}>{ data.title }</Text>
      <Text style={globalStyles.movieText}>{ data.releaseYear }</Text>
    </View>
  );
};

export default Movie;
