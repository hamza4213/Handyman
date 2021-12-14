import React from 'react';
import TabBarNavigator from './Components/TabBarNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack=createStackNavigator();
export default function App() {
  return (
    <NavigationContainer >
    <Stack.Navigator screenOptions={{headerShown:false}}>

      <Stack.Screen name="TabBarNavigator" component={TabBarNavigator} />

    </Stack.Navigator>
  </NavigationContainer>
  );
};
