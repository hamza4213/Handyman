import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
const AdminFlatlist = (props) => {
  let Data = [];
  const { item } = props;
  const navigation = useNavigation();
  return (
    <View style={{ marginHorizontal: "18%", marginVertical: "5%" }}>
      <TouchableOpacity
        onPress={() => navigation.navigate(item.navigateto, { Data })}
      >
        <Image
          source={item.IMAGE}
          style={{
            height: item.height,
            width: item.width,
            justifyContent: item.justifyContent,
            left: item.left,
            right: item.right,
          }}
        />
      </TouchableOpacity>
      <Text style={{ left: item.left, right: item.right }}>{item.Imgtext}</Text>
    </View>
  );
};
export default AdminFlatlist;
