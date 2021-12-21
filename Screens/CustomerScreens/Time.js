// React Native Get Current Date Time
// https://aboutreact.com/react-native-get-current-date-time/

// import React in our code
import React, { useState, useEffect } from "react";
import CalendarPicker from "react-native-calendar-picker";
// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
// setTimeout(() => {
//   TimeData();
// }, [1000]);
const Time = () => {
  const [currentDate, setCurrentDate] = useState("");

  const TimeData = () => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(hours + ":" + min + ":" + sec);
  };
  useEffect(() => {
    TimeData();
  }, [1000]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.container}>
          <CalendarPicker
            todayBackgroundColor="#f2e6ff"
            selectedDayColor="#7300e6"
            selectedDayTextColor="#FFFFFF"
            // nextTitle=" "
            // previousTitle=" "
            onDateChange={val => console.log(val)}
          />
          <View style={{ marginTop: 10 }}>
            <Text style={styles.textStyle}> Time</Text>
            <Text style={styles.textStyle}>{currentDate}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    padding: 10,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 18,
    color: "black",
  },
});

export default Time;
