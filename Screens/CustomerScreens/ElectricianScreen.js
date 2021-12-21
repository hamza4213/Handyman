import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Header from "../../Components/UserHeader";
import { AntDesign } from "@expo/vector-icons";
import Textinput from "../../Components/Textinputcomponent";
import Listicon from "../../Components/Listicon";

const ARRAY = [
  { iconName: "down", text: "rate chart", description: "^100Rs" },
  {
    iconName: "down",
    text: "Terms and conditions",
    description: "^Term &conditions"
  },
  { iconName: "down", text: "how it works", description: "^It is working" }
];

const ElectricianScreen = ({ navigation }) => {
  const [address, setAddress] = useState("");
  const [datetime, setDatetime] = useState("");
  const [adinfo, setAdinfo] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 70,
          backgroundColor: "#D3D3D3",
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Header text="ELECTRICIAN" fontSize={24} color="black" left={20} />
      </View>
      <View>
        <Text style={{ left: 10, fontSize: 16 }}>Service required at</Text>
      </View>
      <View style={{ width: "95%", alignSelf: "center" }}>
        <Textinput
          labelValue={address}
          placeholderText={"Enter Address"}
          onChangeText={val => setAddress(val)}
        />
      </View>
      <View style={{ height: 15, backgroundColor: "#D3D3D3" }} />
      <View>
        <Text style={{ left: 10, fontSize: 16 }}>Service required on</Text>
      </View>
      <View style={{ width: "95%", alignSelf: "center" }}>
        <Textinput
          labelValue={datetime}
          placeholderText={"Enter date & time"}
          onChangeText={val => setDatetime(val)}
        />
      </View>
      <View style={{ height: 15, backgroundColor: "#D3D3D3" }} />
      <View>
        <Text style={{ left: 20, fontSize: 20, fontWeight: "bold" }}>
          SERVICE INFORMATION
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ left: 20, fontSize: 18 }}>Additional </Text>
          <Text
            style={{
              left: 20,
              fontSize: 20,
              fontWeight: "bold",
              color: "grey"
            }}
          >
            Information{" "}
          </Text>
        </View>
      </View>
      <View style={{ width: "95%", alignSelf: "center" }}>
        <Textinput
          labelValue={adinfo}
          placeholderText={"Enter here"}
          onChangeText={val => setAdinfo(val)}
        />
      </View>
      <View style={{ height: 15, backgroundColor: "#D3D3D3" }} />
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            height: 5,
            width: 5,
            backgroundColor: "black",
            top: 7,
            borderRadius: 5,
            left: 5
          }}
        />
        <Text style={{ left: 10, fontSize: 16 }}>Material charges extra</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            height: 5,
            width: 5,
            backgroundColor: "black",
            top: 7,
            borderRadius: 5,
            left: 5
          }}
        />
        <Text style={{ left: 10, fontSize: 16 }}>
          An inspection charge of RS.100 may be charged if the{" "}
        </Text>
      </View>
      <View>
        <Text style={{ left: 15, fontSize: 16 }}>
          costumer decides not to continue with the service after inspection.
        </Text>
      </View>

      <FlatList
        data={ARRAY}
        keyExtractor={item => item.text}
        renderItem={({ item }) => <Listicon item={item} />}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate("UserSignIn")}
        style={{
          backgroundColor: "grey",
          height: 50,
          width: 350,
          alignSelf: "center",
          borderRadius: 10,
          position: "absolute",
          top: "85%"
        }}
      >
        <Text
          style={{
            textAlign: "center",
            top: 12,
            fontSize: 18,
            color: "#fff",
            fontWeight: "bold"
          }}
        >
          CONTINUE BOOKING
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ElectricianScreen;
