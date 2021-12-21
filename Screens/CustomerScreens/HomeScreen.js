import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import Header from "../../Components/UserHeader";
import Images from "../../Components/Image";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DATA = [
  {
    IMAGE: require("../../Images/bulb.png"),
    height: 50,
    width: 50,
    Imgtext: "Electrician",
    navigateto: "ElectricianScreen"
  },
  {
    IMAGE: require("../../Images/tap.png"),
    height: 50,
    width: 50,
    Imgtext: "plumber",
    navigateto: "ElectricianScreen"
  },
  {
    IMAGE: require("../../Images/tractor.png"),
    height: 50,
    width: 70,
    Imgtext: "Agro equipment",
    navigateto: "ElectricianScreen",
    right: 10,
    imgright: 10
  },
  {
    IMAGE: require("../../Images/more.png"),
    height: 50,
    width: 50,
    Imgtext: "more",
    navigateto: "ElectricianScreen",
    imgright: 30,
    right: 20
  }
];

const HomeScreen = () => {
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <View
        style={{
          height: "10%",
          backgroundColor: "#D3D3D3",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <View style={{ flexDirection: "row" }}>
          {/* <Ionicons name="menu" size={28} color="black" style={{top:2}}/> */}
          {/* <Header
            text="HANDYMAN"
            fontSize={24}
            fontWeight="bold"
            color="grey"
          /> */}
        </View>
        <View style={{ flexDirection: "row" }}>
          <Header
            text="Sambalpur"
            fontSize={20}
            color="grey"
            fontWeight="bold"
          />
          <AntDesign
            name="enviromento"
            size={24}
            color="black"
            style={{ top: 3 }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: "4%",
          justifyContent: "space-around",
          top: 5
        }}
      >
        <MaterialCommunityIcons name="bell-ring-outline" size={22} />
        <Text
          style={{
            fontSize: 13
          }}
        >
          Please expect delays in services due to COVID-19 restrictions
        </Text>
      </View>
      <View style={{ borderBottomWidth: 0.3 }} />
      <View style={{ height: "3%" }}>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}>
          Most used services in odisha
        </Text>
      </View>
      <View style={{ height: "2%" }} />
      <View style={{ height: "30%" }}>
        <FlatList
          data={DATA}
          numColumns="2"
          keyExtractor={item => item.Imgtext}
          renderItem={({ item }) => <Images item={item} />}
        />
      </View>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold", left: 10 }}>
          what do you need to find?
        </Text>
      </View>
      <View style={{}}>
        <Image
          source={require("../../Images/taps.jpg")}
          style={{ height: "100%", width: "95%", alignSelf: "center" }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
