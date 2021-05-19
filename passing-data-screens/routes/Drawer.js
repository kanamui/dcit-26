import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome } from "@expo/vector-icons";

import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          options={{
            drawerIcon: () => (
              <FontAwesome name="home" size={24} color="#333" />
            ),
          }}
          name="Home"
          component={HomeStack}
        />
        <Drawer.Screen
          options={{
            drawerIcon: () => (
              <FontAwesome name="book" size={24} color="#333" />
            ),
          }}
          name="About"
          component={AboutStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
