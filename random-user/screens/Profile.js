import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";

const Profile = ({ route }) => {
  const data = route.params;

  return (
    <View style={globalStyles.containerCenterTop}>
      <Image
        style={globalStyles.avatarMedium}
        source={{
          uri: data.picture.large,
        }}
      />
      <Text style={globalStyles.userName}>
        {data.name.title} {data.name.first} {data.name.last}
      </Text>
      <ScrollView style={{ marginTop: 20 }}>
        <Text style={globalStyles.profileSection}>
          <FontAwesome name="user" size={20} color="#777" />  About
        </Text>
        <View
          style={{
            borderBottomColor: "#ddd",
            borderBottomWidth: 1,
            marginBottom: 5
          }}
        />
        <Text style={globalStyles.profileText}>Age: {data.dob.age}</Text>
        <Text style={globalStyles.profileText}>Birthday: {data.dob.date}</Text>
        <Text style={globalStyles.profileText}>Gender: {data.gender}</Text>
        <Text style={globalStyles.profileText}>
          Address: {data.location.street.number} {data.location.street.name},{" "}
          {data.location.city}, {data.location.country}
        </Text>
        <View style={{ margin: 10 }}></View>

        <Text style={globalStyles.profileSection}>
          <FontAwesome name="envelope" size={20} color="#777" />  Contact
        </Text>
        <View
          style={{
            borderBottomColor: "#ddd",
            borderBottomWidth: 1,
            marginBottom: 5
          }}
        />
        <Text style={globalStyles.profileText}>Email: {data.email}</Text>
        <Text style={globalStyles.profileText}>Phone: {data.phone}</Text>
        <View style={{ margin: 10 }}></View>

        <Text style={globalStyles.profileSection}>
          <FontAwesome name="ellipsis-h" size={20} color="#777" />  Other
        </Text>
        <View
          style={{
            borderBottomColor: "#ddd",
            borderBottomWidth: 1,
            marginBottom: 5
          }}
        />
        <Text style={globalStyles.profileText}>
          Date registered: {data.registered.date}
        </Text>
      </ScrollView>
    </View>
  );
};

export default Profile;
