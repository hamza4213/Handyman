import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
const Textinput = ({ labelValue, keyboardTyp, placeholderText, ...rest }) => {
return (
    <View style={styles.inputContainer}>
    <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        keyboardType={keyboardTyp}
        placeholderTextColor="#666"
        {...rest}
    />
    </View>
);
};
export default Textinput;
const styles = StyleSheet.create({
    inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: "100%",
    borderColor: "gray",
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "#fff",
},
    input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    color: "#333",
    justifyContent: "center",
    alignItems: "center",
},
});