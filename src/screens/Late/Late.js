import { saveIcon } from "@/assets";
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

const Late = ({ navigation }) => {
  const [selectedTime, setSelectedTime] = useState(10);
  const [message, setMessage] = useState(`Hi Cragi,
This is Manindra from appliance recovery,
Unfortunately it appears that i will be ${selectedTime} minutes late.I apologize for the inconvenience and am doing my best to get to you as quickly as possible.Need to talk? Give me a call!`);
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customTime, setCustomTime] = useState("");

  const jobDetailsData = useSelector(
    (state) => state?.user?.jobDetailsDataReducer
  );
  console.log("dgdfgdfgdfgd eta", jobDetailsData);
  // Track the selected time
  const [additionalText, setAdditionalText] = useState(""); // New state for additional text

  const timeOptions = [15, 20, 30, 45];

  const handleTimeOptionPress = (time) => {
    //
    setSelectedTime(time === selectedTime ? null : time);
    setMessage(""); // Toggle the selected time
  };
  useEffect(() => {
    if (selectedTime !== null) {
      setMessage(`Hi ${jobDetailsData?.client_first_name},
This is ${jobDetailsData?.user_first_name} from ${jobDetailsData?.job_type_name},
Unfortunately it appears that i will be ${selectedTime} minutes late.I apologize for the inconvenience and am doing my best to get to you as quickly as possible.Need to talk? Give me a call!`);
    }
  }, [selectedTime]);
  useEffect(() => {
    setMessage(`Hi ${jobDetailsData?.client_first_name},
This is ${jobDetailsData?.user_first_name} from ${jobDetailsData?.job_type_name},
Unfortunately it appears that i will be ${customTime} minutes late.I apologize for the inconvenience and am doing my best to get to you as quickly as possible.Need to talk? Give me a call!`);
  }, [customTime]);
  const handleCustomOptionPress = () => {
    setShowCustomInput(true);
    setSelectedTime(null); // Reset the selected time when custom option is pressed
    setMessage(`Hi ${jobDetailsData?.client_first_name},
This is ${jobDetailsData?.user_first_name} from ${jobDetailsData?.job_type_name},
Unfortunately it appears that i will be ${customTime} minutes late.I apologize for the inconvenience and am doing my best to get to you as quickly as possible.Need to talk? Give me a call!`);
  };

  const handleSendButtonPress = () => {
    // Handle sending the message
    // Add your logic for sending the message here
  };

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
      <Text
        style={{
          marginRight: "auto",
          fontSize: 15,
          color: "#757588",
          marginHorizontal: 20,
          marginTop: 10,
        }}
      >
        You Will Be late By :
      </Text>
      <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
        {timeOptions.map((time) => (
          <TouchableOpacity
            key={time}
            style={{
              marginVertical: 20,
              paddingHorizontal: 15,
              paddingVertical: 3,
              borderWidth: selectedTime === time ? null : 1,
              borderColor: "gray",
              marginRight: 10,

              backgroundColor: selectedTime === time ? "#E5F1FF" : null,
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

        {/* <TouchableOpacity
          style={{
      
            paddingHorizontal: 15,
            paddingVertical: 5,
            borderColor:"grey",
            borderWidth:1,
            backgroundColor: selectedTime === null ? "grey" : null,
            borderRadius: 10,
            paddingVertical: 8,
            marginVertical: 15,
          }}
          onPress={handleCustomOptionPress}
        ></TouchableOpacity> */}
      </View>
      <Text style={{ ...styles.customOptionText, marginHorizontal: 20 }}>
        Add Custom Time :
      </Text>

      <View
        style={{
          ...styles.border,
          marginBottom: 20,
          marginTop: 15,
          marginHorizontal: 20,
        }}
      >
        <TextInput
          style={{ paddingHorizontal: 20 }}
          placeholder="Custom Time"
          value={customTime}
          onChangeText={(text) => setCustomTime(text)}
        />
      </View>

      <View style={{ marginHorizontal: 22, position: "absolute", bottom: 100 }}>
        <Text
          style={{
            color: "#041B3E",
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Late
        </Text>
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
            color: "#041B3E",
            fontSize: 16,
            fontWeight: "500",
            paddingBottom: 15,
          }}
        >
          {message}
        </Text>
      </View>

      <View style={[styles.input]}>
        <TextInput
          style={{ width: "80%" }}
          placeholder="Type Your Message here...."
          value={message}
          onChangeText={setMessage}
          multiline={true}
        />
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

export default Late;
