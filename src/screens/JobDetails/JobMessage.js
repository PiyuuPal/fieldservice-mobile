import { saveIcon, backIcon, attach } from "@/assets";
import { headers } from "@/networking/config";
import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { useSelector } from "react-redux";

const JobMessage = ({ navigation }) => {
  const [selectedTime, setSelectedTime] = useState("Price inquiry");
  const [message, setMessage] = useState(
    `If you have any questions, please reply to this message or call us at 8179008324 .Hi Test Worki , Thanks for updating us about the scheduling issue. When would be a good date to reschedule the appointment?Hi Test Worki ,The average amount of time for a job depends on a few different factors. We can normally get this type of job done between X-X hours, but it may vary.`
  );
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customTime, setCustomTime] = useState("");

  const jobDetailsData = useSelector(
    (state) => state?.user?.jobDetailsDataReducer
  );
  console.log("dgdfgdfgdfgd eta", jobDetailsData);

  const timeOptions = ["Price inquiry", "Reschedule", "Scheduling inquiry"];

  const handleTimeOptionPress = (time) => {
    setSelectedTime(time);
    if (time == "Price inquiry") {
      setMessage(
        "If you have any questions, please reply to this message or call us at 8179008324 .Hi Test Worki Thanks for updating us about the scheduling issue. When would be a good date to reschedule the appointment?Hi Test Worki ,The average amount of time for a job depends on a few different factors. We can normally get this type of job done between X-X hours, but it may vary."
      );
    } else if (time == "Reschedule") {
      setMessage(
        "If you have any questions, please reply to this message or call us at 8179008324 .Hi Test Worki , Thanks for updating us about the scheduling issue. When would be a good date to reschedule the appointment?Hi Test Worki ,The average amount of time for a job depends on a few different factors. We can normally get this type of job done between X-X hours, but it may vary."
      );
    } else if (time == "Scheduling inquiry") {
      setMessage(
        "If you have any questions, please reply to this message or call us at 8179008324 .Hi Test Worki , Pricing for jobs typically depends on the type of job and the amount of time it takes to complete the job. This type of job is usually under [$$$]."
      );
    }

    // setSelectedTime(time === selectedTime ? null : time);
    // setMessage(""); // Toggle the selected time
  };

  // useEffect(() => {
  //   if (selectedTime !== null) {
  //     setMessage(
  //       `If you have any questions, please reply to this message or call us at 8179008324 .Hi Test Worki , Thanks for updating us about the scheduling issue. When would be a good date to reschedule the appointment?Hi Test Worki ,The average amount of time for a job depends on a few different factors. We can normally get this type of job done between X-X hours, but it may vary.`
  //     );
  //   }
  // }, [selectedTime]);

  // useEffect(() => {
  //   setMessage(
  //     `If you have any questions, please reply to this message or call us at 8179008324 .Hi Test Worki , Thanks for updating us about the scheduling issue. When would be a good date to reschedule the appointment?Hi Test Worki ,The average amount of time for a job depends on a few different factors. We can normally get this type of job done between X-X hours, but it may vary.`
  //   );
  // }, [customTime]);

  useEffect(() => {
    const grandparentNavigation = navigation.getParent("rootNavigator");

    if (grandparentNavigation) {
      const screenOptions = {
        tabBarStyle: { display: "none" },
      };
      try {
        grandparentNavigation.setOptions(screenOptions);
      } catch (error) {
        console.log("Error occurred while setting options:", error);
      }
    } else {
      console.log("grandparentNavigation is null or undefined");
    }

    return () => {
      if (grandparentNavigation) {
        const screenOptions = {
          tabBarStyle: { backgroundColor: "#FCFDFF", height: 80 },
        };
        try {
          grandparentNavigation.setOptions(screenOptions);
        } catch (error) {
          console.log("Error occurred while setting options:", error);
        }
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          paddingVertical: 15,
          backgroundColor: "#BDCDD6",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Job Details Screen");
          }}
        >
          <Image source={backIcon} />
        </TouchableOpacity>

        <Text
          style={{ left: 140, fontSize: 16, color: "#000", fontWeight: "bold" }}
        >
          {" "}
          Message
        </Text>
      </View>

      <View
        style={{
          marginHorizontal: 22,
          position: "absolute",
          bottom: 150,
          backgroundColor: "#195090",
          padding: 15,
          borderRadius: 20,
        }}
      >
        {/* <Text
          style={{
            color: "#041B3E",
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Late
        </Text> */}
        {/* <Text
          style={{
            color: "#041B3E",
            fontSize: 16,
            fontWeight: "bold",
            paddingTop: 15,
          }}
        >
          Hi zz,
        </Text> */}

        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            fontWeight: "500",
            paddingBottom: 15,
          }}
        >
          {message}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 15,
          position: "absolute",
          bottom: 80,
        }}
      >
        {timeOptions.map((time) => (
          <TouchableOpacity
            key={time}
            style={{
              marginVertical: 15,
              paddingHorizontal: 12,
              paddingVertical: 3,
              borderWidth: selectedTime === time ? null : 1,
              borderColor: "gray",
              marginRight: 10,
              backgroundColor: selectedTime == time ? "#E5F1FF" : null,
              borderRadius: 50,
            }}
            onPress={() => handleTimeOptionPress(time)}
          >
            <Text
              style={{
                ...styles.timeButtonText,
                color: "black",
                fontSize: 14,
                fontWeight: "600",
              }}
            >
              {time}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={[styles.input]}>
        <TextInput
          style={{ width: "70%" }}
          placeholder="Type Your Message here...."
          value={message}
          onChangeText={setMessage}
          multiline={true}
        />
        <TouchableOpacity
          style={{
            // backgroundColor: "#195090",
            // width: 42,
            height: 42,
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image source={attach} style={{ width: 25, height: 25 }} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#195090",
            width: 42,
            height: 42,
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image source={saveIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
  },
  input: {
    position: "absolute",
    bottom: 0,
    width: "90%",
    height: 60,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  border: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "90%",
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#0066FF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: "auto",
    width: "80%",
    textAlign: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  timeButton: {
    // Add your styles for time buttons here
  },
  timeButtonText: {
    // Add your styles for time button text here
  },
  customOption: {
    // Add your styles for custom option button here
  },
  customOptionText: {
    // Add your styles for custom option text here
  },
});

export default JobMessage;
