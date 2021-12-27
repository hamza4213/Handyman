import React from "react";
import {
  View,
  Text,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
const DataForm = (props) => {
  const [show, setShow] = React.useState(Platform.OS === "ios");
  const [date, setDate] = React.useState(new Date());
  const [selectfor, setSelectfor] = React.useState("");
  //   const [date, setDate] = React.useState(new Date(1598051730000));
  const [item, setItem] = React.useState({});
  const [ind, setInd] = React.useState();
  const [image, setImage] = React.useState({
    cancelled: false,
    height: 540,
    type: "image",
    uri: "No File Choosen",
    width: 720,
  });
  React.useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

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
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    console.log("Selected is ", typeof selectfor);
    if (selectfor === "1") {
      setPic(result);
    } else {
      setAddressprof(result);
    }
    // const data = new FormData();
    // // data.append('name', 'avatar');
    // data.append("user_id", UserID);
    // data.append("myFile", {
    //   uri: result.uri,
    //   type: "image/jpg",
    //   name: "avatarf",
    // });
  };
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
    { name: "Address", state: address, setstate: setAddress },
    {
      name: "Pincode",
      state: pincode,
      setstate: setPincode,
      keyboardType: "numeric",
    },
  ];
  const onChange = React.useCallback(async (selectedDate) => {
    // console.log("itemis", item);
    const currentDate = selectedDate || date;
    await setShow(Platform.OS === "ios");
    await console.log("date", currentDate.nativeEvent.timestamp);

    item.setstate(currentDate.nativeEvent.timestamp);
    setShow(false);
  });
  return (
    <View>
      {data.map((item, index) => (
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
                onPress={async () => {
                  await setItem(item);
                  await setInd(index);
                  setShow(true);
                }}
              >
                {Platform.OS === "android" ? (
                  <Text style={{ color: "black" }}>
                    {item.state.toDateString()}
                  </Text>
                ) : null}
                {show && ind === index ? (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={item.state}
                    // mode={mode}
                    is24Hour={true}
                    // display="default"
                    onChange={onChange}
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
          onPress={async () => {
            await setSelectfor("1");
            pickImage();
          }}
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

        <Text style={{ left: 20, color: "black" }}>{addressprof.uri}</Text>
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
          onPress={async () => {
            await setSelectfor("2");
            pickImage();
          }}
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

        <Text style={{ left: 20, color: "black" }}>{pic.uri}</Text>
      </View>
    </View>
  );
};
export default DataForm;
