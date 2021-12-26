import React from 'react';
import { Dimensions} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/AdminScreens/HomeScreen';
import Profile from '../Screens/AdminScreens/Profile';
import Services from '../Screens/AdminScreens/Services';
import AboutUs from '../Screens/AdminScreens/AboutUs';
const fullScreenWidth=Dimensions.get("window").width;
const Tab=createBottomTabNavigator();
const TabNavigatorAdmin=()=>{
    return (
        <Tab.Navigator
            screenOptions={({route})=>({
                tabBarStyle:{height:55},
                tabBarShowLabel:false,  
                headerShown:false,
                tabBarHideOnKeyboard:true,
                tabBarIcon: ({focused,color,size,padding,bottom,backgroundColor,borderRadius,width,paddingBottom,paddingLeft,borderBottomColor,borderBottomWidth})=>{
                    let iconName;
                    if(route.name === "HomeScreen"){
                        iconName = focused ? 'home' : 'home-outline'
                        size=28
                    }
                    else if(route.name === "Services"){
                        iconName = focused ? 'settings' : 'settings-outline'
                        size=28
                    }
                    else if(route.name === "AboutUs"){
                        iconName = focused ? 'information-circle' : 'information-circle-outline'
                        size=28
                    }
                    else if(route.name === "Profile"){
                        iconName = focused ? 'person' : 'person-outline'
                        size=28
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
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="Services" component={Services}/>
            <Tab.Screen name="AboutUs" component={AboutUs}/>
            <Tab.Screen name="Profile" component={Profile}/>
            
        </Tab.Navigator>
    );
};
export default TabNavigatorAdmin;