import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserSignIn from "../Screens/CustomerScreens/UserRegister";
import Signin from "../Screens/SignInScreens/Signin";
import Signup from "../Screens/SignInScreens/Signup";
import Navigator from "../Screens/SignInScreens/Navigator";
const Stack = createStackNavigator();
export default function SigninStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <UserStack.Screen name="UserSignIn1" component={UserSignIn} />
        <Stack.Screen name="Navigator" component={Navigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
