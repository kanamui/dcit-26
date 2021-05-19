import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";

import About from "../screens/About";

const Stack = createStackNavigator();

const AboutStack = ({ navigation }) => {
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
        name="About"
        component={About}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;
