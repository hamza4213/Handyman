import React from 'react';
import TabNavigatorAdmin from './Components/TabNavigatorAdmin';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OrderHandle from './Screens/AdminScreens/OrderHandle';
import OrderHistory from './Screens/AdminScreens/OrderHistory';
import Technician from './Screens/AdminScreens/Technician';
import AddTechnician from './Screens/AdminScreens/AddTechnician';
import EditDetails from './Screens/AdminScreens/EditDetails';
import Services from './Screens/AdminScreens/Services';
import AddService from './Screens/AdminScreens/AddService';
import EditService from './Screens/AdminScreens/EditService';
import AboutUs from './Screens/AdminScreens/AboutUs';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="HomeScreen" component={TabNavigatorAdmin} />
        <Stack.Screen name="OrderHistory" component={OrderHistory}/>
        <Stack.Screen name="OrderHandle" component={OrderHandle}/>
        <Stack.Screen name="Technician" component={Technician}/>
        <Stack.Screen name="EditDetails" component={EditDetails}/>
        <Stack.Screen name="AddTechnician" component={AddTechnician}/>
        <Stack.Screen name="Services" component={Services}/>
        <Stack.Screen name="AddService" component={AddService}/>
        <Stack.Screen name="EditService" component={EditService}/>
        <Stack.Screen name="AboutUs" component={AboutUs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}