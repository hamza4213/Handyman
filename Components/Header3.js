import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import IonicIcon from "react-native-vector-icons/Ionicons";

const Header3 = (props) => {
  const { txt, txt2, Iconname1, Iconname2 } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#dcdcdc",
        padding: "2%",
        paddingLeft: "4%",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        {/* <TouchableOpacity>
                    <IonicIcon name={Iconname1} color='#000' size={30}/>
                </TouchableOpacity> */}
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            top: "0.5%",
            color: "#8c8c8c",
          }}
        >
          {txt}
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
            top: "3%",
            color: "#8c8c8c",
          }}
        >
          {txt2}
        </Text>
        <IonicIcon
          name={Iconname2}
          color="#8c8c8c"
          size={20}
          style={{ top: "5%" }}
        />
      </View>
    </View>
  );
};
export default Header3;
