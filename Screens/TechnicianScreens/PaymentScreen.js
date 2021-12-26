import React from "react";
import {
  View,
  TextInput,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
const PaymentScreen = () => {
  const count = useSelector((state) => state.counter.data);
  return (
    <ScrollView>
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
          <TextInput
            placeholder="Amount"
            style={{ fontWeight: "bold", color: "#000", fontSize: 16 }}
          />
        </View>

        <View
          style={{
            width: "100%",
            height: "5%",
            marginTop: "2%",
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "#8c8c8c",
            padding: "2%",
          }}
        >
          <TextInput
            placeholder="Amount Receipt date "
            style={{ fontWeight: "bold", color: "#000", fontSize: 16 }}
          />
        </View>

        <View
          style={{
            width: "100%",
            height: "5%",
            marginTop: "2%",
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "#8c8c8c",
            padding: "2%",
          }}
        >
          <TextInput
            placeholder="Amount Receipt Time"
            style={{ fontWeight: "bold", color: "#000", fontSize: 16 }}
          />
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

        <View
          style={{ width: "100%", height: "15%", justifyContent: "center" }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            {count.Text1}
          </Text>
          <View style={{ flexDirection: "row", marginTop: "1%" }}>
            <Text
              style={{ fontSize: 16, color: "#8c8c8c", fontWeight: "bold" }}
            >
              {count.Text4}
            </Text>
            <Text
              style={{ fontSize: 16, color: "#8c8c8c", fontWeight: "bold" }}
            >
              {count.Text5}
            </Text>
          </View>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Technician Assigned
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
            <Text
              style={{ fontSize: 20, color: "#8C8C8C", fontWeight: "bold" }}
            >
              {count.Service}
            </Text>
          </View>

          <View style={{ width: "50%" }}>
            <Text
              style={{ fontSize: 20, color: "#8C8C8C", fontWeight: "bold" }}
            >
              {count.AddInfo}
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
            <Text
              style={{ fontSize: 20, color: "#8C8C8C", fontWeight: "bold" }}
            >
              {count.CustmerName}
            </Text>
          </View>
          <View style={{ width: "50%" }}>
            <Text
              style={{ fontSize: 20, color: "#8C8C8C", fontWeight: "bold" }}
            >
              {count.CMOBNO}
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
            <Text
              style={{ fontSize: 18, color: "#8C8C8C", fontWeight: "bold" }}
            >
              {count.customerAddress}
            </Text>
          </View>
          <View style={{ width: "50%" }}>
            <Text
              style={{ fontSize: 18, color: "#8C8C8C", fontWeight: "bold" }}
            >
              {count.Pincode}
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
            <Text
              style={{ fontSize: 18, color: "#8C8C8C", fontWeight: "bold" }}
            >
              {count.Techname}
            </Text>
          </View>
          <View style={{ width: "50%" }}>
            <Text
              style={{ fontSize: 18, color: "#8C8C8C", fontWeight: "bold" }}
            >
              {count.TechMobNo}
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
            <Text
              style={{ fontSize: 18, color: "#8C8C8C", fontWeight: "bold" }}
            >
              {count.paymentRec}
            </Text>
          </View>
          <View style={{ width: "50%", flexDirection: "row" }}>
            <Text
              style={{ fontSize: 18, color: "#8C8C8C", fontWeight: "bold" }}
            >
              {count.paymentdate}
            </Text>
            <Text
              style={{ fontSize: 18, color: "#8C8C8C", fontWeight: "bold" }}
            >
              {count.paymentTime}
            </Text>
          </View>
        </View>
        {/* ////////////////////////////////////////////////////// */}
      </View>
    </ScrollView>
  );
};
export default PaymentScreen;
