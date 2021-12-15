import React from "react";
import { Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IonicIcon from "react-native-vector-icons/Ionicons";
import Home from "../Screens/AdminScreens/HomeScreen";
// import Profile from "../Screens/AdminScreens/Profile";

import Signin from "../Screens/CustomerScreens/Signin";
const fullScreenWidth = Dimensions.get("window").width;
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { height: 55 },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({
          focused,
          color,
          size,
          padding,
          bottom,
          backgroundColor,
          borderRadius,
          width,
          paddingBottom,
          paddingLeft,
          borderBottomColor,
          borderBottomWidth,
        }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
            size = 28;
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
            size = 28;
          }
          return (
            <IonicIcon
              name={iconName}
              size={size}
              color={color}
              style={{
                paddingBottom: padding,
                bottom: bottom,
              }}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "#F1C40F",
        inactiveTintColor: "#8C8C8C",
        style: { width: fullScreenWidth },
      }}
    >
      <Tab.Screen
        name="Signin"
        component={Signin}
        // options={{ title: "My profile" }}
      />
      {/* <Tab.Screen name="Profile" component={Profile} /> */}
    </Tab.Navigator>
  );
};
export default TabNavigator;
