<<<<<<< HEAD
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabBarNavigator3 from './Components/TabBarNavigator3';
import OrderDetailScreen from './Screens/TechnicianScreens/OrderDetailScreen';
import OrderHistoryScreen from './Screens/TechnicianScreens/OrderHistoryScreen';
import AcceptOrderScreen from './Screens/TechnicianScreens/AcceptOrderScreen';
import PaymentScreen from './Screens/TechnicianScreens/PaymentScreen';
import store from './Redux/store';
import { Provider } from 'react-redux';
const Stack=createStackNavigator();
export default function App() {
  return (
    <Provider  store={store}>

    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>

        <Stack.Screen name="TabBarNavigator3" component={TabBarNavigator3} />
        
        <Stack.Screen name="OrderDetailScreen" component={OrderDetailScreen} />

        <Stack.Screen name="OrderHistoryScreen" component={OrderHistoryScreen} />

        <Stack.Screen name="AcceptOrderScreen" component={AcceptOrderScreen} />

        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />

      </Stack.Navigator>
  </NavigationContainer>
    </Provider>
  );
};
=======
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
>>>>>>> Sheraz
