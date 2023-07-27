import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { jobStyles } from "./JobDetailStyle";
import { shadow, spacing } from "@/theme";
import { edit, locatemap, search, addIcon } from "@/assets";
import { useState } from "react";
import { SlideInUp } from "react-native-reanimated";
import { ScrollView } from "react-native-gesture-handler";
import JobStatus from "../JobStatus/JobStatus";
import { saveIcon } from "@/assets";
import { font } from "@/theme/font";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NAVIGATION } from "@/constants";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { PropertyListing, editjobDetails } from "@/actions/JobActions";

export function JobDetailStatus(props) {
  const navigation = useNavigation();
  const [openModal, setOpenModal] = useState(false);
  const transparent = "rgba(0,0,0,0.5)";
  const [userInput, setUserInput] = useState("");
  const [sendItem, setSendItem] = useState({});
  const [addressModal, setAddressModal] = useState(false);
  const jobDetailsData = useSelector(
    (state) => state?.user?.jobDetailsDataReducer
  );

  const AllPropertyListing = useSelector(
    (state) => state?.job?.propertyListing
  );
  console.log("AllPropertyListing address", AllPropertyListing);
  const dispatch = useDispatch();

  function renderModal() {
    return (
      <Modal
        visible={openModal}
        onBackdropPress={() => setOpenModal(false)}
        onRequestClose={() => setOpenModal(false)}
        animationType="slide"
        transparent={true}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: transparent,
            justifyContent: "center",
          }}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
          >
            <View style={jobStyles.modalView}>
              <Ionicons
                name="close"
                size={25}
                color={"#041B3E"}
                style={{ marginLeft: 5 }}
                onPress={() => setOpenModal(false)}
              />
              <View style={{ alignItems: "center" }}>
                <Text style={jobStyles.modalheading}>Job Status</Text>
              </View>
              <View style={{ marginTop: 30 }}>
                <JobStatus
                  modalView={setOpenModal}
                  refreshView={props?.refresh}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
    );
  }
  const SelectAddress = (item) => {
    navigation.navigate(NAVIGATION.address, { type: "jobDetails" });
    setAddressModal(false);
  };

  const existClientListDataList = [{ list: "gjgjgjgh" }, { list: "gggg" }];

  useEffect(() => {
    const data = {
      client_id: jobDetailsData?.client_id,
    };
    dispatch(PropertyListing(data));
  }, []);

  console.log("sendItem", sendItem);

  const EditAddress = (item) => {
    console.log("itemmmm", item);
    const data = {
      key: "address",
      property: sendItem?.id,
      job_id: jobDetailsData?.job_id,
      // client_id: jobDetailsData?.client_id,
      // address1: item?.address1,
      // address2: item?.address2,
      // city: item?.city,
      // state: item?.state,
      // country: item?.country,
      // zip: item?.zip,
    };
  console.log("props?.refesh---->",{props})
    dispatch(editjobDetails(data,'','',props?.refresh,'addressupdate'));
  };

  const filterData = (item) => {
    if (userInput === "") {
      return (
        <View style={[jobStyles.jobtypeView, { marginHorizontal: 10 }]}>
          <TouchableOpacity
            style={jobStyles.jobTypetouch}
            onPress={() => {
              setSendItem(item);
              setAddressModal(false);
              EditAddress(item);
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={jobStyles.nametxt}>
                {item?.address1}, {item?.city}, {item?.state},{item?.country},{" "}
                {item?.zip}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    if (item.address1.toLowerCase().includes(userInput.toLowerCase())) {
      return (
        <View style={[jobStyles.jobtypeView, { marginHorizontal: 10 }]}>
          <TouchableOpacity
            style={jobStyles.jobTypetouch}
            onPress={() => {
              setSendItem(item);
              setAddressModal(false);
              EditAddress(item);
            }}
          >
            <Text style={jobStyles.nametxt}>{item?.address1}</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };
  return (
    <View style={jobStyles.viewStatus}>
      <View style={[shadow.primary, jobStyles.viewSetStatus]}>
        <Text style={[jobStyles.statusTxt, { fontSize: 17 }]}>Status</Text>
        <View style={jobStyles.viewSetStatusColor}>
          <Text style={jobStyles.statusTxt}>{props?.status}</Text>
        </View>
        <TouchableOpacity onPress={() => setOpenModal(true)}>
          <Image source={edit} style={jobStyles.editImg} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[shadow.primary]}
        onPress={
          () => setAddressModal(true)

          // navigation.navigate(NAVIGATION.address,{type: 'jobDetails'})
        }
      >
        <Image source={locatemap} style={{ height: 35, width: 35 }} />
      </TouchableOpacity>
      {renderModal()}

      <Modal transparent={true} visible={addressModal}>
        <Pressable
          onPress={() => {
            // setClientModal(false);
          }}
          style={{
            backgroundColor: "#000000aa",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              // padding: 30,
              borderRadius: 15,
              width: "100%",
              height: "100%",

              // justifyContent: 'center',
              // alignItems: "center",
              // flexDirection: "column",
            }}
          >
            <View
              style={{
                marginVertical: 20,
                justifyContent: "space-between",
                flexDirection: "row",
                paddingHorizontal: 20,
                alignItems: "center",
              }}
            >
              <Text
                style={[
                  jobStyles.headerJobTitle,
                  {
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: "center",
                    fontSize: 20,
                  },
                ]}
              >
                Search Address
              </Text>
              <Ionicons
                size={28}
                name="close-circle-outline"
                color="red"
                onPress={() => {
                  setAddressModal(false);
                }}
              />
            </View>

            <View style={jobStyles.viewInput}>
              <View style={{ paddingHorizontal: 15 }}>
                <TextInput
                  placeholder={"Search Address"}
                  onChangeText={(text) => setUserInput(text)}
                />
              </View>
              <View style={{ paddingHorizontal: 20 }}>
                <Image source={search} />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => SelectAddress()}
              style={{
                marginHorizontal: 10,
                // marginVertical: 20,
                paddingVertical: 10,
                // borderWidth: 1,
                borderColor: "#D5DBE4",
                // flexDirection: "row",
                width: "95%",
                // paddingRight: 10,
                borderRadius: 10,
                alignItems: "center",
                // justifyContent: "space-between",
              }}
            >
              {/* <Text
                style={[
                  jobStyles.headerJobTitle,
                  {
                    // alignItems: "center",
                    justifyContent: "center",
                    alignSelf: "center",
                    fontSize: 16,
                  },
                ]}
              >
                Create new property
              </Text> */}
              <Image source={addIcon} />
            </TouchableOpacity>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <FlatList
                style={{}}
                data={AllPropertyListing}
                renderItem={({ item, index }) => filterData(item)}
                showsVerticalScrollIndicator={false}
              ></FlatList>
            </ScrollView>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}
