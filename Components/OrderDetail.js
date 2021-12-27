import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
const OrderDetail = (props) => {
  const { item, navigatin } = props;
  const navigation = useNavigation();
  const itm = useSelector((state) => state.counter.navigator);
  return (
    <>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: "#8c8c8c",
          paddingLeft: "2%",
          padding: "4%",
          //   width: "100%",
          //   backgroundColor: "black",
        }}
        onPress={() => navigation.navigate(itm.navigateto, { data: item })}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          {item.order_reference_no}
        </Text>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            {item.technician_name}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>751003</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#8c8c8c" }}>
            {item.receive_date}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#8c8c8c" }}>
            {item.close_time}
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#dcdcdc" }}>
            status -
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#dcdcdc" }}>
            {item.close_info}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginRight: "12%",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#dcdcdc" }}>
            Additional Info -
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000" }}>
            {item.additional_info}
          </Text>
        </View>
      </TouchableOpacity>

      <View style={{ height: "0.05%" }}></View>
    </>
  );
};
export default OrderDetail;
