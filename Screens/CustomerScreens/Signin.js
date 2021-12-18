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
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import FormInput from "../../Components/Forminput";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import CountryPicker from "react-native-country-picker-modal";
const Signin = props => {
  const [IMageSource, setIMageSource] = useState("");
  // useState;
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
  const height = Dimensions.get("screen").height;
  const [PhoneNumber, setPhoneNumber] = useState();
  const [Otp, setOtp] = useState();
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [Pincode, setPincode] = useState();
  const [Password, setPassword] = useState("");
  const [police, setPolice] = useState(false);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
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
      <View style={{ height: "8%" }} />
      <ScrollView>
        {CheckIMage ? (
          <TouchableOpacity onPress={() => pickImage()}>
            <View style={{ alignSelf: "center" }}>
              <Ionicons name="person-outline" size={34} color="black" />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => pickImage()}>
            <View style={{ alignSelf: "center", height: 50, width: 50 }}>
              <Image
                style={{ height: 50, width: 50, borderRadius: 25 }}
                source={{ uri: IMageSource }}
              />
            </View>
          </TouchableOpacity>
        )}
        <View
          style={{ width: "85%", alignSelf: "center", height: height - 220 }}
        >
          {/* <FormInput
            labelValue={PhoneNumber}
            placeholderText={"Phone Number"}
            onChangeText={val => setPhoneNumber(val)}
            keyboardTyp="numeric"
          /> */}

          <View style={{ height: "5%", width: "90%" }} />
          <View
            style={{
              alignSelf: "center",
              flexDirection: "row",
              height: 50,
              borderWidth: 1,
              borderColor: "gray",
              justifyContent: "center",
              // padding:10,
            }}
          >
            <View style={{ width: "6%", justifyContent: "center" }} />
            <View style={{ justifyContent: "center" }}>
              <CountryPicker
                placeholder={Country.callingCode}
                // placeholderTextColor="#fff"
                // image={require("../../Images/flag.png")}
                // onSelect={check ? country => setCountry(country) : null}
                onSelect={country => setCountry(country)}
                ios={true}
                withFlag={true}
                onOpen={val => console.log(val)}
                withCallingCode={true}
                withFilter={true}
                withAlphaFilter={true}
                withEmoji={true}
                country={true}
                visible={false}
                countryCode={false}
              />
            </View>
            <View style={{ justifyContent: "center" }}>
              <AntDesign name="down" size={15} color="black" />
            </View>
            <View style={{ width: "88%", justifyContent: "center" }}>
              <TextInput placeholder="Phone" maxLength={14} />
            </View>
          </View>

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
        </View>
        <View style={{ marginTop: -10 }} />
        <View
          style={{ width: "80%", alignSelf: "center", flexDirection: "row" }}
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
            <Text style={{ color: "gray", fontSize: 16, fontWeight: "bold" }}>
              Handyman
            </Text>
          </TouchableOpacity>
          <View style={{ width: 3 }} />
          <Text style={{ fontSize: 16 }}>Polices</Text>
        </View>
        <View style={{ height: 15 }} />
        <TouchableOpacity onPress={() => props.navigation.navigate("SetDate")}>
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
              Continue
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Signin;