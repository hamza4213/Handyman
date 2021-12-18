// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "./Screens/CustomerScreens/Signin";
import TabBarNavigator from "./Components/TabBarNavigator";
import SetDate from "./Screens/CustomerScreens/SetDate";
import Time from "./Screens/CustomerScreens/Time";
import HomeScreen from "./Screens/CustomerScreens/HomeScreen";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SetDate"
          component={SetDate}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Time"
          component={Time}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
