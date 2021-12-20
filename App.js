import React from 'react';
import TabNavigatorAdmin from './Components/TabNavigatorAdmin';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OrderHandle from './Screens/AdminScreens/OrderHandle';
import OrderHistory from './Screens/AdminScreens/OrderHistory';
import Technician from './Screens/AdminScreens/Technician';
import DataForm from './Components/DataForm';
import AddTechnician from './Screens/AdminScreens/AddTechnician';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer >
    //   <Stack.Navigator screenOptions={{headerShown:false}}>
    //     <Stack.Screen name="HomeScreen" component={TabNavigatorAdmin} />
    //     <Stack.Screen name="OrderHistory" component={OrderHistory}/>
    //     <Stack.Screen name="OrderHandle" component={OrderHandle}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <Technician/>
    // <DataForm/>
    <AddTechnician/>
  );
}