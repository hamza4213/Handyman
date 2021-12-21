import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import CalendarPicker from "react-native-calendar-picker";

const SetDate = props => {
  return (
    <View
      style={{
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#FFFFFF"
        // marginTop: 100,
      }}
    >
      {/* <Calendar
        // Collection of dates that have to be marked. Default = {}
        markedDates={{
          "2012-05-16": { selected: true, marked: true, selectedColor: "blue" },
          "2012-05-17": { marked: true },
          "2012-05-18": { marked: true, dotColor: "red", activeOpacity: 0 },
          "2012-05-19": { disabled: true, disableTouchEvent: true },
        }}
      /> */}
      <CalendarPicker
        todayBackgroundColor="#f2e6ff"
        selectedDayColor="#7300e6"
        selectedDayTextColor="#FFFFFF"
        // nextTitle=" "
        // previousTitle=" "
        onDateChange={val => console.log(val)}
      />
      <View style={{ height: 20 }} />
      <View style={{ alignItems: "center" }}>
        <Text> no Time slot avaliable </Text>
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate("Time")}>
        <View
          style={{
            height: 50,
            width: "90%",
            borderWidth: 1,
            borderRadius: 10,
            justifyContent: "center",
            alignSelf: "center",
            backgroundColor: "cyan"
          }}
        >
          <Text
            style={{
              justifyContent: "center",
              alignSelf: "center",
              color: "#fff"
            }}
          >
            Continue
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SetDate;
