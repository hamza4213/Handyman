import React from 'react';
import { Dimensions} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/CustomerScreens/HomeScreen';
import ElectricianScreen from '../Screens/CustomerScreens/ElectricianScreen';
const fullScreenWidth=Dimensions.get("window").width;
const Tabs=createBottomTabNavigator();
const TabNavigator2=()=>{
    return (
        <Tabs.Navigator
            screenOptions={({route})=>({
                tabBarStyle:{height:55,},
                tabBarShowLabel:false,  
                headerShown:false,
                tabBarHideOnKeyboard:true,
                tabBarIcon: ({focused,color,size,padding,bottom,backgroundColor,borderRadius,width,paddingBottom,paddingLeft,borderBottomColor,borderBottomWidth})=>{
                    let iconName;
                    if (route.name === "HomeScreen") {
                    iconName = focused ? "home" : "home-outline";
                    size = 28;
                    } else if (route.name === "ElectricianScreen") {
                    iconName = focused ? "settings-outline" : "settings-outline";
                    size = 28;
                    }
                    return(
                        <IonicIcon
                            name={iconName}
                            size={size}
                            color={color}
                            style={{
                                paddingBottom:padding,
                                bottom:bottom,
                            }}
                        />
                    );
                },
            })}
            tabBarOptions={{
                activeTintColor:'#F1C40F',
                inactiveTintColor:'#8C8C8C',
                style:{width:fullScreenWidth,},
            }}
        >
            <Tabs.Screen name="HomeScreen" component={HomeScreen} />
            <Tabs.Screen name="ElectricianScreen" component={ElectricianScreen}/>
        </Tabs.Navigator>
    );
};
export default TabNavigator2;