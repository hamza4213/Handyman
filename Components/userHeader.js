import React from "react";
import { View, Text } from "react-native";

const UserHeader = props => {
  const { text, fontSize, fontWeight, color, left } = props;
  return (
    <View>
      <Text
        style={{
          fontSize: fontSize,
          fontWeight: fontWeight,
          color: color,
          left: left
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default UserHeader;
