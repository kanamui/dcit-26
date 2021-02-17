import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Touchable
// TouchableOpacity
// TouchableHighlight
// TouchableNativeFeedback (only on android)
// TouchableWithoutFeedback
// props -> activeOpacity

const GoalItem = props => {
  return (
    <TouchableOpacity onLongPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});

export default GoalItem;