import React from 'react';
import TabBarNavigator3 from './Components/TabBarNavigator3';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OrderDetailScreen from './Screens/TechnicianScreens/OrderDetailScreen';
const Stack=createStackNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>

        <Stack.Screen name="TabBarNavigator3" component={TabBarNavigator3} />
        
        {/* <Stack.Screen name="OrderDetailScreen" component={OrderDetailScreen} /> */}

      </Stack.Navigator>
  </NavigationContainer>
  );
};
