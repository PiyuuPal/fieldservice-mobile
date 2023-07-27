import { backIcon, backgroundImage, saveIcon } from "@/assets";
import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
} from "react-native";
import { jobStyles } from "../JobDetails/JobDetailStyle";
import { shadow, spacing } from "@/theme";
import { useSelector } from "react-redux";

const OnMyWay = () => {
  const getjobId = useSelector((state) => state?.job?.getJobId);
  const [message, setMessage] = useState("");
  const jobDetailsData = useSelector(
    (state) => state?.user?.jobDetailsDataReducer
  );
  console.log("dgdfgdfgdfgd on my way", jobDetailsData);
  const handleSendButtonPress = () => {
    // Handle sending the message
    // Add your logic for sending the message here
  };

  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 22 ,position:"absolute",bottom:100 }}>
        <Text style={{ color: "#041B3E", fontSize: 18, fontWeight: "bold" }}>
          On My Way
        </Text>
        <Text
          style={{
            color: "#041B3E",
            fontSize: 16,
            fontWeight: "bold",
            paddingTop: 15,
          }}
        >
          Hi {jobDetailsData?.client_first_name} ,
        </Text>

        <Text
          style={{
            color: "#041B3E",
            fontSize: 16,
            fontWeight: "500",
            paddingBottom: 15,
          }}
        >
          This is {jobDetailsData?.user_first_name} from {jobDetailsData?.job_type_name}. Just letting you know I’m on
          the way! Need to talk? Give me a call!
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
      {/* <TouchableOpacity style={styles.button} onPress={handleSendButtonPress}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff"
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
});

export default OnMyWay;
