import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import OrderDetail from "../../Components/OrderDetail";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
const OrderDetailScreen = ({ route, navigation }) => {
  const [Arr3, setArr3] = useState([]);
  const user = useSelector((state) => state.counter.userData);
  useEffect(() => {
    console.log("pincode", user.pincode);
    axios
      .post("http://floringetest.in/handiman/api/orderList", {
        userid: user.id,
        user_type: user.user_type,
      })
      .then(function (response) {
        // console.log(response.data.result.orderList);
        // for (let i = 0; i < response.data.result.orderList.length; i++) {
        //   if (
        //     response.data.result.orderList[i].technician_pincode ===
        //     user.pincode
        //   ) {
        //     Arr3.push(i);
        //   }
        // }
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
      {Arr3.length === 0 ? (
        <Text>No Orders yet</Text>
      ) : (
        <FlatList
          data={Arr3}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <OrderDetail item={item} />}
        />
      )}
    </View>
  );
};
export default OrderDetailScreen;
