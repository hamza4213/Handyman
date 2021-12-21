import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  Dimensions,
  Pressable,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import FormInput from "../../Components/Forminput";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native";

const Signin = ({ route, navigation }) => {
  const ph_number = route.params;
  console.log();
  const [IMageSource, setIMageSource] = useState("");
  useState;
  const [CheckIMage, setCheckIMage] = useState(true);
  const height = Dimensions.get("screen").height;
  const [PhoneNumber, setPhoneNumber] = useState(ph_number);
  const [Otp, setOtp] = useState();
  const [otpVerify, setOtpVerify] = useState(false);
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [Pincode, setPincode] = useState();
  const [Password, setPassword] = useState("");
  const [police, setPolice] = useState(false);

  return (
    <View style={{ height: "100%", width: "100%", backgroundColor: "#fff" }}>
      <View style={{ height: "8%" }} />
      <ScrollView>
        <View style={{ alignSelf: "center" }}>
          <Ionicons name="person-outline" size={34} color="black" />
        </View>
        <View
          style={{
            width: "85%",
            alignSelf: "center",
            // height:"90%"
            height: height - 210,
          }}
        >
          {!otpVerify ? (
            <>
              <FormInput
                labelValue={PhoneNumber}
                editable={false}
                placeholderText={"productexperience@gmail.com"}
                onChangeText={val => setPhoneNumber(val)}
                keyboardTyp="numeric"
              />
              <View style={{ height: "4%" }} />
              <FormInput
                labelValue={Otp}
                placeholderText={"Enter One Time Password"}
                onChangeText={val => setOtp(val)}
              />
              <View style={{ height: "2%" }} />
              <Pressable onPress={() => alert("Otp Sended")}>
                <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
                  <Entypo
                    style={[{ transform: [{ rotate: "180deg" }] }]}
                    name="forward"
                    size={20}
                    color="black"
                  />
                  <Text style={{ fontSize: 18 }}>Resend Otp</Text>
                </View>
              </Pressable>
            </>
          ) : (
            <>
              <View style={{ height: "1%" }} />
              <FormInput
                labelValue={Email}
                placeholderText={"Enter Email"}
                onChangeText={val => setEmail(val)}
              />
              <FormInput
                labelValue={UserName}
                placeholderText={"Enter Name"}
                onChangeText={val => setUserName(val)}
              />
              <FormInput
                labelValue={Address}
                placeholderText={"Enter Address"}
                onChangeText={val => setAddress(val)}
              />
              <FormInput
                labelValue={Pincode}
                placeholderText={"Enter Pincode"}
                onChangeText={val => setPincode(val)}
              />
              <FormInput
                labelValue={Password}
                placeholderText={"Enter Password"}
                onChangeText={val => setPassword(val)}
              />
              <View
                style={{
                  width: "80%",
                  alignSelf: "center",
                  flexDirection: "row",
                  padding: 20,
                }}
              >
                <TouchableOpacity onPress={() => setPolice(!police)}>
                  <View
                    style={{
                      backgroundColor: police ? "#fbd43e" : "white",
                      height: 18,
                      width: 18,
                      borderRadius: 20,
                      borderWidth: 1,
                      borderColor: "gray",
                    }}
                  />
                </TouchableOpacity>
                <View style={{ width: 5 }} />
                <Text style={{ fontSize: 16 }}>I accept the</Text>
                <View style={{ width: 5 }} />
                <TouchableOpacity>
                  <Text
                    style={{ color: "gray", fontSize: 16, fontWeight: "bold" }}
                  >
                    Handiman
                  </Text>
                </TouchableOpacity>
                <View style={{ width: 3 }} />
                <Text style={{ fontSize: 16 }}>Polices</Text>
              </View>
            </>
          )}
        </View>

        <View style={{ height: 15 }} />
        <TouchableOpacity
          onPress={() => {
            // console.log(Email, UserName, Address, Password, Pincode);
            const req = {
              name: UserName,
              address: Address,
              password: Password,
              phone: ph_number,
              email: Email,
              pincode: Pincode,
            };
            // console.log(req);
            setOtpVerify(!otpVerify);
            // otpVerify ? console.log(true) : console.log("false");
            // axios
            //   .post(" https://floringetest.in/handiman/api/register", req)
            //   .then(res => {
            //     // console.log(res.data);
            //     // res.data.HasError
            //     //   ? Alert.alert("error occured")
            //     //   :
            //     navigation.navigate("UserSignIn");
            //   });
          }}
        >
          <View
            style={{
              width: "80%",
              alignSelf: "center",
              alignItems: "center",
              borderWidth: 1,
              height: 35,
              borderRadius: 10,
              justifyContent: "center",
              backgroundColor: "#fbd43e",
            }}
          >
            <Text style={{ justifyContent: "center", fontSize: 18 }}>
              {otpVerify ? " Register " : "Verify OTP"}
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Signin;
