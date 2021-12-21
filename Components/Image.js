import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const Images = props => {
  const { item } = props;
  const navigation = useNavigation();
  return (
    <View style={{ marginHorizontal: "17%", marginVertical: "5%" }}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(`${item.navigateto}`, (header = item.Imgtext))}
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
