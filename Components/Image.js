import { useNavigation } from "@react-navigation/native";
import React, { useState, useCallback, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Images = props => {
  const { item } = props;
  const navigation = useNavigation();
  const [user, setUser] = useState({});

  const getData = useCallback(
    async () => {
      try {
        const value = await AsyncStorage.getItem("@user");
        if (value !== null) {
          setUser(JSON.parse(value));
          // value previously stored
        }
      } catch (e) {
        console.log(e);
        // error reading value
      }
    },
    [user]
  );

  useEffect(() => {
    getData();

    return () => {};
  }, []);
  return (
    <View style={{ marginHorizontal: "17%", marginVertical: "5%" }}>
      <TouchableOpacity
        onPress={() => {
          user.id
            ? navigation.navigate(`${item.navigateto}`, (header = item))
            : Alert.alert("Login First", "Please Login to continue", [
                { text: "OK", onPress: () => navigation.navigate("UserSignIn") }
              ]);
        }}
      >
        <Image
          source={item.IMAGE}
          style={{
            height: item.height,
            width: item.width,
            left: item.imgleft,
            right: item.imgright
          }}
        />
      </TouchableOpacity>
      <Text style={{ left: item.left, right: item.right }}>
        {item.Imgtext}
      </Text>
    </View>
  );
};

export default Images;
