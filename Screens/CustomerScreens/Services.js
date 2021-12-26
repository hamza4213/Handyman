import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import axios from "axios";
import Header from "../../Components/UserHeader";
import { AntDesign } from "@expo/vector-icons";
import Images from "../../Components/Image";

const Services = ({ navigation }) => {
  const [data, setData] = useState([]);
  const handleFetchServices = useCallback(async () => {
    axios
      .get(" https://floringetest.in/handiman/api/serviceList")
      .then((res) => {
        setData(res.data.result.service);
        console.log(data);
      });
  }, [data, setData]);

  useEffect(() => {
    handleFetchServices();
    return () => {};
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          height: 70,
          backgroundColor: "#D3D3D3",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Header text={"Services"} fontSize={24} color="black" left={20} />
      </View>
      <View>
        {data ? (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("ElectricianScreen", item);
                  }}
                  style={{
                    flexDirection: "row",
                    padding: 10,
                  }}
                >
                  <View
                    style={{
                      padding: 2,
                    }}
                  >
                    <AntDesign name="setting" size={48} color="black" />
                  </View>
                  <View
                    style={{
                      padding: 2,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 28,
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default Services;
