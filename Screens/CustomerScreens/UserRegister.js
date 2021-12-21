import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import CountryPicker from "react-native-country-picker-modal";
import { AntDesign } from "@expo/vector-icons";
// import Textinput from "../../Components/Textinputcomponent";
import FormInput from "../../Components/Forminput";

const UserSignIn = ({ navigation }) => {
  const [IMageSource, setIMageSource] = useState("");
  const [signin, setSignIn] = useState(false);
  const [Country, setCountry] = useState({
    callingCode: ["92"],
    cca2: "PK",
    currency: ["PKR"],
    flag: "flag-pk",
    name: "Pakistan",
    region: "Asia",
    subregion: "Southern Asia",
  });
  const [CheckIMage, setCheckIMage] = useState(true);
  const [phoneNo, setPhoneNo] = useState("");
  const [passwd, setPasswd] = useState("");

  return (
    <SafeAreaView>
      <View
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#fff",
          padding: 20,
        }}
      >
        <View style={{ height: "10%", justifyContent: "flex-end" }}>
          <Text
            style={{
              fontSize: 28,
              left: 20,

              fontWeight: "bold",
            }}
          >
            {signin ? "Sign In" : " Register"}
          </Text>
        </View>
        <View style={{ height: "20%" }}>
          <View style={{ alignSelf: "center" }}>
            <Ionicons name="person-outline" size={34} color="black" />
          </View>
        </View>
        <View
          style={{
            height: 60,
            flexDirection: "row",
            borderWidth: 1,
            borderRadius: 10,
            margin: 10,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              top: 18,
              left: 10,
            }}
          >
            <CountryPicker
              placeholder={Country.callingCode}
              onSelect={country => setCountry(country)}
              withFlag={true}
              withCallingCode={true}
              withFilter={true}
              withAlphaFilter={true}
              withEmoji={true}
              country={true}
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
        {signin ? (
          <View
            style={{
              padding: 10,
            }}
          >
            <FormInput
              labelValue={passwd}
              secureTextEntry={true}
              placeholderText={"Password"}
              onChangeText={val => setPasswd(val)}
            />
          </View>
        ) : null}

        <View
          style={{
            color: "black",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Text style={{ color: "black" }}>
            {signin ? "Dont't have an account? " : " Already have account? "}
          </Text>
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate("Login");
              setSignIn(!signin);
              setPasswd("");
              setPhoneNo("");
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              {signin ? "Register" : "Sign IN"}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#FFEB2A",
            height: 50,
            width: 350,
            alignSelf: "center",
            borderRadius: 10,
            top: "2%",
          }}
          onPress={() => {
            signin
              ? // send request here
                "hello"
              : navigation.navigate(
                  "UserSignIn1",
                  (ph_number = "+" + Country.callingCode + phoneNo)
                );
          }}
        >
          <Text
            style={{
              textAlign: "center",
              top: 12,
              fontSize: 18,
              color: "black",
              fontWeight: "bold",
            }}
          >
            CONTINUE
          </Text>
        </TouchableOpacity>
        <View style={{ height: "52%", top: "3%", alignSelf: "center" }}>
          <Image source={require("../../images/map.png")} />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default UserSignIn;
