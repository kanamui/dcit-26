import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  View,
  Image,
  Button,
  Text,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function fetchRandomData() {
    setLoading(true);
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((json) => {setData(json.results[0]);console.log(json.results[0]);})
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchRandomData();
  }, []);

  return (
    <View style={globalStyles.containerCenter}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={globalStyles.containerCenter}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile", data)}>
            <Image
              style={globalStyles.avatar}
              source={{
                uri: data.picture.large,
              }}
            />
          </TouchableOpacity>
          <Text style={globalStyles.userName}>{data.name.first} {data.name.last}</Text>
          <Button title="Random User" onPress={fetchRandomData}/>
        </View>
      )}
    </View>
  );
};

export default Home;
