import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import CountryPicker from "react-native-country-picker-modal";
import { AntDesign } from "@expo/vector-icons";
// import Textinput from "../../Components/Textinputcomponent";
import FormInput from "../../Components/Forminput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setuserData } from "../../Redux/counterSlice";
const UserSignIn = ({ navigation }) => {
  const [IMageSource, setIMageSource] = useState("");
  const [signin, setSignIn] = useState(false);
  const dispatch = useDispatch();
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

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@user", jsonValue);
    } catch (e) {
      console.warn(e);
      // saving error
    }
  };
  const HandleSignIn = useCallback(async () => {
    console.log(phoneNo, passwd);
    try {
      const res = await axios.post(
        " https://floringetest.in/handiman/api/login",
        {
          phone: phoneNo,
          password: passwd,
          // phone: 5652267890,
          // password: 123456,
        }
      );
      // const jsonValue = await JSON.stringify(res.data.result.users);
      if (res.data) {
        console.log(res.data);
        await AsyncStorage.setItem(
          "@user",
          JSON.stringify(res.data.result.users)
        );
        if (!res.data.HasError) {
          dispatch(setuserData(res.data.result.users));
          navigation.navigate("Navigator", {
            type: res.data.result.users.user_type,
          });
        }
      }
    } catch (error) {
      // console.log("object");
      Alert.alert("invalid credentials");
      console.log(error);
    }
  });
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
            <Text>91</Text>
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
              onChangeText={(val) => setPasswd(val)}
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
                HandleSignIn()
              : navigation.navigate("Register", {
                  ph_number: "+" + Country.callingCode + phoneNo,
                });
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
        <View style={{ top: "3%", alignSelf: "center" }}>
          <Image
            source={require("../../Images/map.png")}
            style={{ height: "70%" }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default UserSignIn;
