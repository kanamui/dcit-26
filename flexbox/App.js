// main axes (justifyContent)
// row - left to right
// row-reverse - right to left
// column - top to bottom
// column-reverse - bottom to top

// cross axis (opposite of main axes, alignItems)
// row - top to bottom
// row-reverse - bottom to top
// column - left to right
// column-reverse - right to left

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.boxA}>
        <Text>1</Text>
      </View>
      <View style={styles.boxB}>
        <Text>2</Text>
      </View>
      <View style={styles.boxC}>
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    height: 300,
  },
  boxA: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  boxB: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  boxC: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  }
});