import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#73c2f8'
  },
  text: {
    fontSize: 32,
    fontFamily: 'Cursive',
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'white'
  }
});