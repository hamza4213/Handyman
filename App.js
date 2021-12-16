import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabBarNavigator3 from './Components/TabBarNavigator3';
import OrderDetailScreen from './Screens/TechnicianScreens/OrderDetailScreen';
import OrderHistoryScreen from './Screens/TechnicianScreens/OrderHistoryScreen';
const Stack=createStackNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>

        <Stack.Screen name="TabBarNavigator3" component={TabBarNavigator3} />
        
        <Stack.Screen name="OrderDetailScreen" component={OrderDetailScreen} />

        <Stack.Screen name="OrderHistoryScreen" component={OrderHistoryScreen} />

      </Stack.Navigator>
  </NavigationContainer>
  );
};
