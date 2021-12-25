import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import OrderDetail from "../../Components/OrderDetail";
import axios from "axios";
const OrderDetailScreen = () => {
  const [Arr3, setArr3] = useState();
  useEffect(() => {
    axios
      .post("http://floringetest.in/handiman/api/orderList", {
        userid: "48",
        user_type: "3",
      })
      .then(function (response) {
        console.log(response.data.result.orderList);
        setArr3(response.data.result.orderList);
      })
      .catch(function (error) {
        console.log(error);
      });
    return () => {};
  }, []);

  return (
    <View
      style={{
        width: Dimensions.get("screen").width,
        height: Dimensions.get("window").height,
        marginTop: "6%",
        padding: "2%",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "7%",
          justifyContent: "center",
          paddingLeft: "2%",
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>ORDER DETAILS</Text>
      </View>
      <FlatList
        data={Arr3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderDetail item={item} />}
      />
    </View>
  );
};
export default OrderDetailScreen;
