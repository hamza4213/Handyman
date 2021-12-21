<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/CustomerScreens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator2 from './Components/TabBarNavigator';
import ElectricianScreen from './Screens/CustomerScreens/ElectricianScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';  
import UserSignIn from './Screens/CustomerScreens/UserSignIn';


const UserStack = createNativeStackNavigator() 
export default function App() {
  return (
    <NavigationContainer>
      <UserStack.Navigator screenOptions={{headerShown:false}}>
        <UserStack.Screen name='TabNavigator2' component={TabNavigator2} />
        <UserStack.Screen
          name='ElectricianScreen'
          component={ElectricianScreen}
        />
        <UserStack.Screen name='HomeScreen' component={HomeScreen} />
        <UserStack.Screen
          name='UserSignIn'
          component={UserSignIn}
        />
      </UserStack.Navigator>
    </NavigationContainer>
  );
}

=======
// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "./Screens/CustomerScreens/Signin";
import TabBarNavigator from "./Components/TabBarNavigator";
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
>>>>>>> origin/Sheraz
