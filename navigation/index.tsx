import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import ChatScreen from "../screens/ChatScreen";
import FavouritesScreen from "../screens/FavouritesScreen";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={ChatScreen}></Stack.Screen>
      <Stack.Screen
        name="Favourites"
        component={FavouritesScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
