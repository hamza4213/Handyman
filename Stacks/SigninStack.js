import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserSignIn from "../Screens/CustomerScreens/UserRegister";

import Navigator from "../Screens/Navigator";
const Stack = createStackNavigator();
export default function SigninStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="UserSignIn1" component={UserSignIn} />
        <Stack.Screen name="Navigator" component={Navigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
