import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigatorAdmin from './Components/TabNavigatorAdmin';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OrderHandle from './Screens/AdminScreens/OrderHandle';
import OrderHistory from './Screens/AdminScreens/OrderHistory';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="HomeScreen" component={TabNavigatorAdmin} />
        <Stack.Screen name="OrderHistory" component={OrderHistory}/>
        <Stack.Screen name="OrderHandle" component={OrderHandle}/>
      </Stack.Navigator>
  </NavigationContainer>

  // <OrderHistory/>
    // <OrderHandle/>
  );
}

