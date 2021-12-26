import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../Screens/SignInScreens/Signin";
import Signup from "../Screens/SignInScreens/Signup";
import Navigator from "../Screens/SignInScreens/Navigator";
const Stack = createStackNavigator();
export default function Technicianstack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Navigator" component={Navigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
