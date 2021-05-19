import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";

import Home from "../screens/Home";
import Movie from "../screens/Movie";

const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <FontAwesome
              onPress={() => navigation.toggleDrawer()}
              name="navicon"
              size={24}
              color="#333"
              style={{ paddingLeft: 20 }}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="Movie" component={Movie} />
    </Stack.Navigator>
  );
};

export default HomeStack;
