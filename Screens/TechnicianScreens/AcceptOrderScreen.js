import React from "react";
import {
  View,
  TextInput,
  Dimensions,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
const AcceptOrderScreen = ({ navigation }) => {
  const count = useSelector((state) => state.counter.data);
  async function handleorderaccept() {
    try {
      const res = await axios.post(
        " http://floringetest.in/handiman/api/orderStatus",
        {
          orderid: count.id,
          userid: count.user_id,
        }
      );
      // const jsonValue = await JSON.stringify(res.data.result.users);
      console.log("datais", res.data);
      // console.log(res.data.result.users);
      if (!res.data.HasError) {
        console.log("Semd");
        Alert.alert("Order Accepted");
        // navigation.navigate("Technician",);
      } else Alert.alert("invalid credentials");
    } catch (error) {
      // console.log("object");
      Alert.alert("invalid credentials");
      console.log(error);
    }
  }
  return (
    <View
      style={{
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
        marginTop: "6%",
        padding: "4%",
        backgroundColor: "#fff",
      }}
    >
      <View style={{ width: "100%", height: "7%" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Accept By Technician
        </Text>
      </View>

      <View
        style={{
          width: "100%",
          height: "5%",
          borderWidth: 1,
          borderRadius: 5,
          borderColor: "#8c8c8c",
          padding: "2%",
        }}
      >
        <TextInput />
      </View>
      <View
        style={{
          height: 35,
          width: "100%",
          marginTop: "2%",
          justifyContent: "center",
          left: "40%",
        }}
      >
        <TouchableOpacity
          onPress={handleorderaccept}
          style={{
            height: "100%",
            width: "20%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            backgroundColor: "#3A8EC0",
          }}
        >
          <Text>Accept</Text>
        </TouchableOpacity>
      </View>
      {/* ///////////////////////////////////////////////////////////////////////// */}

      <View style={{ width: "100%", height: "15%", justifyContent: "center" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          {count.order_reference_no}
        </Text>
        <View style={{ flexDirection: "row", marginTop: "1%" }}>
          <Text style={{ fontSize: 16, color: "#8c8c8c", fontWeight: "bold" }}>
            {count.receive_date}
          </Text>
          <Text style={{ fontSize: 16, color: "#8c8c8c", fontWeight: "bold" }}>
            {count.close_time}
          </Text>
        </View>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Technician Assigned
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          {count.technician_name}
        </Text>
      </View>

      {/* 1 ///////////////////////////////////////////////////////////// */}

      <View
        style={{
          width: "100%",
          height: "5%",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View style={{ width: "50%" }}>
          <Text style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>
            Service
          </Text>
        </View>

        <View style={{ width: "50%" }}>
          <Text style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>
            Addition Information
          </Text>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          height: "7%",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View style={{ width: "50%" }}>
          <Text style={{ fontSize: 20, color: "#8C8C8C", fontWeight: "bold" }}>
            {count.service_id}
          </Text>
        </View>

        <View style={{ width: "50%" }}>
          <Text style={{ fontSize: 20, color: "#8C8C8C", fontWeight: "bold" }}>
            {count.additional_info}
          </Text>
        </View>
      </View>
      {/* 2 ///////////////////////////////////////////////// */}
      <View
        style={{
          width: "100%",
          height: "5%",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View style={{ width: "50%" }}>
          <Text style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>
            Customer Name
          </Text>
        </View>
        <View style={{ width: "50%" }}>
          <Text style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>
            Mobile No
          </Text>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          height: "7%",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View style={{ width: "50%" }}>
          <Text style={{ fontSize: 20, color: "#8C8C8C", fontWeight: "bold" }}>
            NMIRU
          </Text>
        </View>
        <View style={{ width: "50%" }}>
          <Text style={{ fontSize: 20, color: "#8C8C8C", fontWeight: "bold" }}>
            33212567898
          </Text>
        </View>
      </View>
      {/* 3 ///////////////////////////////////////////////////// */}
      <View
        style={{
          width: "100%",
          height: "5%",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View style={{ width: "50%" }}>
          <Text style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>
            Customer Adress
          </Text>
        </View>
        <View style={{ width: "50%" }}>
          <Text style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>
            Pin Code
          </Text>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          height: "7%",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View style={{ width: "50%" }}>
          <Text style={{ fontSize: 18, color: "#8C8C8C", fontWeight: "bold" }}>
            nepuormu strt 3421 main 567 ft
          </Text>
        </View>
        <View style={{ width: "50%" }}>
          <Text style={{ fontSize: 18, color: "#8C8C8C", fontWeight: "bold" }}>
            608000
          </Text>
        </View>
      </View>
      {/* 4 ////////////////////////////////////////////////////// */}
      <View
        style={{
          width: "100%",
          height: "5%",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View style={{ width: "50%" }}>
          <Text style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>
            Technician Name
          </Text>
        </View>
        <View style={{ width: "50%" }}>
          <Text style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>
            Technician Mobile No
          </Text>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          height: "7%",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View style={{ width: "50%" }}>
          <Text style={{ fontSize: 18, color: "#8C8C8C", fontWeight: "bold" }}>
            {count.technician_name}
          </Text>
        </View>
        <View style={{ width: "50%" }}>
          <Text style={{ fontSize: 18, color: "#8C8C8C", fontWeight: "bold" }}>
            {count.technician_phone}
          </Text>
        </View>
      </View>
      {/* 5 ////////////////////////////////////////////////////// */}
      <View
        style={{
          width: "100%",
          height: "5%",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View style={{ width: "50%" }}>
          <Text style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>
            Payment Recieved
          </Text>
        </View>
        <View style={{ width: "50%" }}>
          <Text style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>
            Payment Date&Time
          </Text>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          height: "7%",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View style={{ width: "50%" }}>
          <Text style={{ fontSize: 18, color: "#8C8C8C", fontWeight: "bold" }}>
            {count.amount}
          </Text>
        </View>
        <View style={{ width: "50%", flexDirection: "row" }}>
          <Text style={{ fontSize: 18, color: "#8C8C8C", fontWeight: "bold" }}>
            {count.paymentdate}
          </Text>
          <Text style={{ fontSize: 18, color: "#8C8C8C", fontWeight: "bold" }}>
            {count.add_date}
          </Text>
        </View>
      </View>
      {/* ////////////////////////////////////////////////////// */}
    </View>
  );
};
export default AcceptOrderScreen;
