import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./Screens/CustomerScreens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator2 from "./Components/TabBarNavigator";
import ElectricianScreen from "./Screens/CustomerScreens/ElectricianScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserSignIn from "./Screens/CustomerScreens/UserSignIn";
import Signin from "./Screens/CustomerScreens/Signin";

const UserStack = createNativeStackNavigator();
export default function App() {
  const loggedIn = false;
  return (
    <NavigationContainer>
      <UserStack.Navigator screenOptions={{ headerShown: false }}>
        {loggedIn
          ? <UserStack.Group>
              <UserStack.Screen
                name="TabNavigator2"
                component={TabNavigator2}
              />
              <UserStack.Screen
                name="ElectricianScreen"
                component={ElectricianScreen}
              />
              <UserStack.Screen name="HomeScreen" component={HomeScreen} />
            </UserStack.Group>
          : <UserStack.Group>
              <UserStack.Screen name="UserSignIn" component={UserSignIn} />
              <UserStack.Screen name="UserSignIn1" component={Signin} />
            </UserStack.Group>}
      </UserStack.Navigator>
    </NavigationContainer>
  );
}
