import React from "react";
import { View, Text, Platform } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";
export default function DataForm(props) {
  const [show, setShow] = React.useState(Platform.OS === "ios");
  //   const [date, setDate] = React.useState(new Date(1598051730000));
  const {
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    dob,
    setDob,
    doj,
    setDoj,
    dol,
    setDol,
    address,
    setAddress,
    pincode,
    setPincode,
    setPic,
    pic,
    setAddressprof,
    addressprof,
  } = props;
  const data = [
    { name: "Name", state: name, setstate: setName },
    {
      name: "Phone No",
      state: phone,
      setstate: setPhone,
      keyboardType: "numeric",
    },
    { name: "Email Address", state: email, setstate: setEmail },
    { name: "Date Of Birth", state: dob, setstate: setDob, date: true },
    { name: "Date of Joining", state: doj, setstate: setDoj, date: true },
    { name: "Date of leaving", state: dol, setstate: setDol, date: true },
    { name: "Address", state: addressprof, setstate: setAddressprof },
    {
      name: "Pincode",
      state: pincode,
      setstate: setPincode,
      keyboardType: "numeric",
    },
  ];
  const onChange = (event, selectedDate) => {
    console.log(event);
    console.log("selected date", selectedDate);
    // const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    // event.setstate(currentDate);
  };
  return (
    <View>
      {data.map((item) => (
        <View
          style={{
            height: 65,
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "20%",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Text>{item.name}</Text>
            <Text style={{ color: "red" }}> *</Text>
          </View>
          {item.date ? (
            <View
              style={{
                borderWidth: 2,
                borderRadius: 5,
                borderColor: "#f2f2f2",
                padding: 10,
                height: 40,
                margin: 10,
                width: "75%",
              }}
            >
              <TouchableOpacity
                //   style={}
                onPress={() => {
                  setShow(true);
                }}
              >
                {Platform.OS === "android" ? (
                  <Text style={{ color: "black" }}>
                    {item.state.toDateString()}
                  </Text>
                ) : null}
                {show ? (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={item.state}
                    // mode={mode}
                    is24Hour={true}
                    // display="default"
                    onChange={onChange(item)}
                  />
                ) : null}
              </TouchableOpacity>
            </View>
          ) : (
            <TextInput
              style={{
                height: 40,
                margin: 10,
                borderWidth: 2,
                width: "75%",
                borderRadius: 5,
                borderColor: "#f2f2f2",
                padding: 10,
              }}
              keyboardType={item.keyboardType}
              placeholder=""
              onChangeText={item.setstate}
              value={item.state}
            />
          )}
        </View>
      ))}

      <View
        style={{
          height: 65,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          // backgroundColor:"blue"
        }}
      >
        <View
          style={{
            width: "20%",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Text>Address Prof</Text>
          <Text style={{ color: "red" }}> *</Text>
        </View>

        <TouchableOpacity
          // onPress={}
          style={{
            height: 40,
            width: 100,
            backgroundColor: "#f2f2f2",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
            left: 10,
          }}
        >
          <Text style={{ color: "black" }}>Choose file</Text>
        </TouchableOpacity>

        <Text style={{ left: 20, color: "black" }}>No file chosen</Text>
      </View>

      <View
        style={{
          height: 65,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "20%",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Text>Photo</Text>
          <Text style={{ color: "red" }}> *</Text>
        </View>

        <TouchableOpacity
          // onPress={}
          style={{
            height: 40,
            width: 100,
            backgroundColor: "#f2f2f2",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
            left: 10,
          }}
        >
          <Text style={{ color: "black" }}>Choose file</Text>
        </TouchableOpacity>

        <Text style={{ left: 20, color: "black" }}>No file chosen</Text>
      </View>
    </View>
  );
}
