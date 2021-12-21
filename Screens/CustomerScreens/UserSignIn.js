import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import CountryPicker from "react-native-country-picker-modal";
import { AntDesign } from "@expo/vector-icons";
import Textinput from "../../Components/Textinputcomponent";

const UserSignIn = ({ navigation }) => {
  const [IMageSource, setIMageSource] = useState("");
  const [Country, setCountry] = useState({
    callingCode: ["92"],
    cca2: "PK",
    currency: ["PKR"],
    flag: "flag-pk",
    name: "Pakistan",
    region: "Asia",
    subregion: "Southern Asia"
  });
  const [CheckIMage, setCheckIMage] = useState(true);
  const [phoneNo, setPhoneNo] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });
    if (!result.cancelled) {
      // setUpload(result.uri);
      // IMage = result.uri;
      setIMageSource(result.uri);
      setCheckIMage(false);
    }
  };
  return (
    <View style={{ height: "100%", width: "100%", backgroundColor: "#fff" }}>
      <View style={{ height: "10%", justifyContent: "flex-end" }}>
        <Text style={{ fontSize: 28, left: 20, fontWeight: "bold" }}>
          Sign in
        </Text>
      </View>
      <View style={{ height: "20%" }}>
        {CheckIMage
          ? <TouchableOpacity onPress={() => pickImage()}>
              <View style={{ alignSelf: "center" }}>
                <Ionicons name="person-outline" size={34} color="black" />
              </View>
            </TouchableOpacity>
          : <TouchableOpacity onPress={() => pickImage()}>
              <View
                style={{
                  alignSelf: "center",
                  height: 50,
                  width: 50,
                  right: 20,
                  marginTop: 30
                }}
              >
                <Image
                  style={{ height: 100, width: 100, borderRadius: 100 }}
                  source={{ uri: IMageSource }}
                />
              </View>
            </TouchableOpacity>}
      </View>
      <View
        style={{
          height: 60,
          flexDirection: "row",
          borderWidth: 1,
          borderRadius: 10,
          margin: 10
        }}
      >
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            top: 18,
            left: 10
          }}
        >
          <CountryPicker
            placeholder={Country.callingCode}
            // placeholderTextColor="#fff"
            // image={require("../../Images/flag.png")}
            onSelect={country => setCountry(country)}
            // ios={true}
            withFlag={true}
            withCallingCode={true}
            withFilter={true}
            withAlphaFilter={true}
            withEmoji={true}
            country={true}
            // visible={false}
            // countryCode={true}
          />
          <AntDesign name="down" size={20} color="black" />
        </View>
        <View style={{ justifyContent: "center" }}>
          <TextInput
            onChangeText={setPhoneNo}
            value={phoneNo}
            style={{ marginLeft: 20 }}
            placeholder="Enter phone no."
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#FFEB2A",
          height: 50,
          width: 350,
          alignSelf: "center",
          borderRadius: 10,
          top: "2%"
        }}
        onPress={() => {
          navigation.navigate("UserSignIn1");
        }}
      >
        <Text
          style={{
            textAlign: "center",
            top: 12,
            fontSize: 18,
            color: "black",
            fontWeight: "bold"
          }}
        >
          CONTINUE
        </Text>
      </TouchableOpacity>
      <View style={{ height: "52%", top: "3%", alignSelf: "center" }}>
        <Image source={require("../../images/map.png")} />
      </View>
    </View>
  );
};
export default UserSignIn;
