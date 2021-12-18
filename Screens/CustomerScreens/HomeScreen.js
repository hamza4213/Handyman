import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CountryPicker from "react-native-country-picker-modal";

const HomeScreen = () => {
  const [Country, setCountry] = useState();
  return (
    <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
      <CountryPicker
        placeholder=" Country "
        // placeholderTextColor="#fff"
        // image={require("../../Images/flag.png")}
        onSelect={country => setCountry(country)}
        // ios={true}
        withFlag={true}
        withCallingCode={true}
        withFilter={true}
        withAlphaFilter={true}
        withEmoji={true}
        // country={true}
        // visible={false}
        // countryCode={true}
      />
    </View>
  );
};

export default HomeScreen;
