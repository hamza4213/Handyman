import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserSignIn from "../Screens/CustomerScreens/UserRegister";
import Register from "../Screens/CustomerScreens/Register";
import Navigator from "../Screens/Navigator";
import store from "../Redux/store";
import { Provider } from "react-redux";
const Stack = createStackNavigator();
export default function SigninStack() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="UserSignIn1" component={UserSignIn} />
          <Stack.Screen name="Register" component={Register} />

          <Stack.Screen name="Navigator" component={Navigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
