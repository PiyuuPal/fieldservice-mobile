//import liraries
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { shadow, spacing } from "@/theme";
import { font } from "@/theme/font";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { JobDetails } from "./JobDetails";
import { Invoice } from "./Invoice";
import { backIcon, backgroundImage } from "@/assets";
import { Payment } from "./Payment";
import { Quotes } from "./Quotes";
import { Files } from "./Files";

const Tab = createMaterialTopTabNavigator();
const JobAllDetails = ({ navigation, route }) => {
  const getjobId = useSelector((state) => state?.job?.getJobId);
  return (
    <SafeAreaView style={{ flex: 1, width: "100%", height: "100%" }}>
      <ImageBackground
        resizeMode="cover"
        style={[{ height: 70 }]}
        source={backgroundImage}
      >
        <View style={{ flexDirection: "row", padding: spacing.s }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backIcon} />
          </TouchableOpacity>
          <Text style={jobStyles.jobId}>JOB#{getjobId}</Text>
        </View>
        <View style={jobStyles.viewCenter}></View>
      </ImageBackground>

      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: "700",

            // margin: 6,
            // paddingLeft: 30,
            // paddingRight: 30,
            padding: 10,
            backgroundColor: "#E5F1FF",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
          },
          tabBarStyle: { backgroundColor: "transparent", elevation: 0 },
          tabBarItemStyle: { paddingHorizontal: 0 },
        }}
      >
        <Tab.Screen name="Details" component={JobDetails} />
        <Tab.Screen name="Invoice" component={Invoice} />
        <Tab.Screen name="Payment" component={Payment} />
        <Tab.Screen name="Quotes" component={Quotes} />
        <Tab.Screen name="Files" component={Files} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

// define your styles

export const jobStyles = StyleSheet.create({
  viewCenter: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  renderNotes: {
    borderRadius: 10,
    padding: spacing.s,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E4EFF2",
    marginVertical: 5,
  },
  tabItem: {
    margin: 6,
    paddingLeft: 30,
    paddingRight: 30,
    padding: 10,
    backgroundColor: "#E5F1FF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  viewrow: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  viewcall: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: spacing.m,
  },
  jobId: {
    marginLeft: 25,
    color: "#041B3E",
    fontSize: 18,
    fontWeight: "700",
  },
  nametxt: {
    fontSize: 17,
    fontWeight: "600",
    color: "#041B3E",
  },
  imgCall: {
    height: 60,
    width: 60,
  },
  viewStatus: {
    marginTop: -45,
    padding: spacing.s,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  viewSetStatus: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    padding: 10,
    borderRadius: 50,
  },
  viewSetStatusColor: {
    marginHorizontal: 10,
    paddingLeft: 10,
    paddingRight: 10,
    padding: 3,
    borderRadius: 50,
    backgroundColor: "#EDEDED",
  },
  statusTxt: {
    fontSize: 15,
    fontWeight: "600",
    color: "#757588",
  },
  ViewSchDet: {
    padding: spacing.m,
    paddingTop: 0,
  },
  viewSchInter: {
    marginTop: 4,
    backgroundColor: "#E5F1FF",
    borderRadius: 10,
    padding: spacing.s,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  txtSch: {
    fontSize: 15,
    fontWeight: "600",
    color: "#757588",
    marginLeft: -30,
  },
  txtWetColor: {
    color: "#041B3E",
    fontWeight: "600",
  },
  txtTypAddSource: {
    fontSize: 14,
    fontWeight: "600",
    color: "#757588",
  },
  txtValTypAS: {
    fontSize: 16,
    color: "#041B3E",
    fontWeight: "600",
  },
  blankView: {
    padding: 1,
    backgroundColor: "#E4EFF2",
    marginVertical: 20,
  },
  viewTags: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: spacing.s,
  },
  headingTxt: {
    fontSize: 19,
    color: "#041B3E",
    fontWeight: "600",
  },
  viewAssTeam: {
    marginTop: 10,
    borderRadius: 10,
    padding: spacing.s,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  teamTxt: {
    fontSize: 15,
    fontWeight: "600",
    color: "#757588",
    marginLeft: 10,
  },
  flatListNotes: {
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
  },
  editImg: {
    // height: 20,
    // width: 18
  },
  jobTypetouch: {
    padding: spacing.s,
    backgroundColor: "white",
    borderColor: "#E4EFF2",
    borderWidth: 1,
    borderRadius: 15,
  },
  jobtypeView: {
    justifyContent: "space-between",
    marginVertical: 5,
  },
  statusJobTouch: {
    borderWidth: 1,
    borderColor: "#D2DDE9",
    padding: 10,
    borderRadius: 50,
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalView: {
    backgroundColor: "white",
    padding: spacing.m,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "75%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  modalheading: {
    color: "#041B3E",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: font.bold,
  },
  saveBtn: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#195090",
    justifyContent: "center",
    alignItems: "center",
  },
});

// //make this component available to the app
export default JobAllDetails;
