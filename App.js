import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./Screens/CustomerScreens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator2 from "./Components/TabBarNavigator";
import ElectricianScreen from "./Screens/CustomerScreens/ElectricianScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserSignIn from "./Screens/CustomerScreens/UserRegister";
import Signin from "./Screens/CustomerScreens/Register";
import Login from "./Screens/CustomerScreens/Login";

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
              <UserStack.Screen name="Login" component={Login} />
              <UserStack.Screen name="UserSignIn1" component={Signin} />
            </UserStack.Group>}
      </UserStack.Navigator>
    </NavigationContainer>
  );
}
