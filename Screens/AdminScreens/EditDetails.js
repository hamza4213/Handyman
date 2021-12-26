import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import DataForm from "../../Components/DataForm";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export default function EditDetails({ navigation, route }) {
  const { item, Data, index } = route.params;
  console.log(item);
  console.log("Data is ", Data);
  const [name, setName] = useState(item.name);
  const [phone, setPhone] = useState(item.phone);
  const [email, setEmail] = useState(item.email);
  const [dob, setDob] = useState(new Date(item.dob));
  const [doj, setDoj] = useState(new Date(item.doj));
  const [dol, setDol] = useState(new Date(item.dol));
  const [address, setAddress] = useState(item.address);
  const [pincode, setPincode] = useState(item.pincode);
  const [addressprof, setAddressprof] = useState(item.addressprof);
  const [pic, setPic] = useState(item.pic);
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 25,
          height: 50,
          width: "95%",
          backgroundColor: "#3A8EC0",
          justifyContent: "center",
          left: 10,
        }}
      >
        <Text
          style={{ color: "white", fontWeight: "bold", fontSize: 18, left: 10 }}
        >
          Edit Technician
        </Text>
      </View>
      <ScrollView>
        <View
          style={
            {
              //   height: 650,
              //   top: 30,
            }
          }
        >
          <DataForm
            name={name}
            setName={setName}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
            dob={dob}
            setDob={setDob}
            doj={doj}
            setDoj={setDoj}
            dol={dol}
            setDol={setDol}
            address={address}
            setAddress={setAddress}
            pincode={pincode}
            setPincode={setPincode}
            addressprof={addressprof}
            setAddressprof={setAddressprof}
            pic={pic}
            setPic={setPic}
          />
        </View>

        <View
          style={{
            height: 50,
            width: "100%",
            // top: 35,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={async () => {
              // setIndex(index);
              await Data.splice(index, 1, {
                name: name,
                phone: phone,
                email: email,
                //   password: ,
                dob: dob,
                doj: doj,
                dol: dol,
                address: address,
                pincode: pincode,
                addressprof: addressprof,
              });
              //updatnig data and passing updated data tp the dasboard so that it can be dispalyed on dashboard and then navigating to dashboard

              navigation.navigate("Technician", { Data });
            }}
            style={{
              height: 50,
              width: 100,
              backgroundColor: "#3A8EC0",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>Update</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
