import React from 'react';
import { View, Button, StyleSheet } from "react-native";

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
