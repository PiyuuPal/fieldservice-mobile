import React, { Component, useEffect, useState, useRef } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Button,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
  Linking,
  Modal,
} from "react-native";

import { shadow, spacing, typography } from "@/theme";

import { jobStyles } from "./JobDetailStyle";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  Calling,
  clearJobTypeAndAdSource,
  jobDetailsFun,
  setShownImage,
} from "@/actions/UserActions";
import {
  addIcon,
  addnotes,
  adsource,
  backIcon,
  backgroundImage,
  callIcon,
  edit,
  job,
  jobdes,
  locatemap,
  location,
  mapimage,
  message,
  schduleIcon,
  team,
  timeSheetIcon,
  Tick,
  Dolar,
  Clocks,
} from "@/assets";
import { add } from "react-native-reanimated";
import { JobTypeAddSource } from "./JobTypeAddSource";
import { JobDetailAttachment } from "./JobDetailAttachment";
import { JobDetailStatus } from "./JobDetailStatus";
import { JobDetailTag } from "./JobDetailTag";
import { JobDetailAddNotes } from "./JobDetailAddNotes";
import { JobDetailSchedule } from "./JobDetailSchedule";
import { JobDetailTeam } from "./JobDetailTeam";
import { jobTabCounts, sentJobId } from "@/actions/JobActions";
import MapView, { Marker } from "react-native-maps";
import { NAVIGATION } from "@/constants";

export function JobDetails({ route, navigation }) {
  const getjobId = useSelector((state) => state?.job?.getJobId);
  const JobIds = route?.params?.JobId;
  const TabCount = useSelector((state) => state?.job?.tabCount?.data);
  console.log("TabCount==>", TabCount);
  const userDetails = useSelector((state) => state?.user?.data);
  const allCallingDetails = useSelector((state) => state?.user?.callingDetails);
  const mapRef = useRef();
  const darecords = [
    {
      id: "JobDetails",
      title: "Details",
    },
    {
      id: "Invoice",
      title: "Finance",
    },
    {
      id: "Payments",
      title: "Timeline",
    },
    {
      id: "Quotes",
      title: "Quotes",
    },
    {
      id: "Files",
      title: "Files",
    },
  ];
  const transparent = "rgba(0,0,0,0.5)";

  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [stop, setStop] = useState(false);
  const jobDetailsData = useSelector(
    (state) => state?.user?.jobDetailsDataReducer
  );
  console.log("jobddetaildata=======>",jobDetailsData)
  const Address =
    jobDetailsData?.client_address1 +
    "," +
    jobDetailsData?.client_city +
    "," +
    jobDetailsData?.client_state +
    "," +
    jobDetailsData?.client_zip;

  console.log("Address", Address);
  const [mapRegion, setMapRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });
  console.log("mapRegion", mapRegion);

  useEffect(() => {
    // Get Location
    const getLocation = async (address) => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            address
          )}&key=AIzaSyCUV0J0zhPMSEdBQSBinVBox0BOTDhiZMc`
        );
        const data = await response.json();

        if (data.status === "OK") {
          const { lat, lng } = data.results[0].geometry.location;
          setMapRegion((prevRegion) => ({
            ...prevRegion,
            latitude: lat,
            longitude: lng,
          }));
        }
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    // Replace 'address' with the desired address
    getLocation(Address);
  }, [mapRef]);
  console.log("dgdfgdfgdfgd---", jobDetailsData);

  const onRegionChange = (region) => {};
  useEffect(() => {
    setIsFocus(true);
  }, []);
  useEffect(() => {
    console.log("useeffectclear==>", getjobId);
    const data = {
      jobId: getjobId,
    };
    dispatch(jobDetailsFun(data, navigation, setIsFocus));
    dispatch(clearJobTypeAndAdSource());
  }, [isFocus]);

  useEffect(() => {
    dispatch(clearJobTypeAndAdSource());
  }, []);

  useEffect(() => {
    const data = {
      job_id: getjobId,
    };
    dispatch(jobTabCounts(data, navigation, setIsFocus));
  }, [isFocus]);

  const Call = () => {
    const data = {
     
      // user_id: userDetails?.id,
      // business_id: userDetails?.business_id,
      // client_id: 346,
      // job_id: 431,

   
        "user_id": 296,
        "business_id": 210,
        "client_id": 346,
        "job_id": 431
     
    };
    console.log("data eeeeeeeeeeee", data);

    dispatch(Calling(data));

    // allCallingDetails?.data?.number
    //   ? Linking.openURL(`${"tel:"}${allCallingDetails?.data?.number}`)
    //   : null;
  };
  console.log("userDetails",userDetails)

  const renderJobTabItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity
          style={jobStyles.tabItem}
          onPress={() => {
            item?.id == "JobDetails"
              ? navigation.navigate("JobDetails")
              : item?.id == "Invoice"
              ? navigation.navigate("Invoice")
              : navigation.navigate(NAVIGATION.Timeline);
          }}
        >
          <Text style={jobStyles.txtValTypAS}>{item.title}</Text>
          <View
            style={{
              backgroundColor: "#041B3E",
              width: item?.id == "JobDetails" ? null : 20,
              height: item?.id == "JobDetails" ? null : 20,
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: item?.id == "JobDetails" ? null : 10,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "900" }}>
              {item?.id == "JobDetails"
                ? null
                : item?.id == "Invoice"
                ? TabCount?.[1]?.count
                : item?.id == "Payments"
                ? TabCount?.[2]?.count
                : item?.id == "Quotes"
                ? TabCount?.[3]?.count
                : item?.id == "Files"
                ? TabCount?.[4]?.count
                : null}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
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
  const refreshModal = () => {
    return (
      <Modal
        visible={isFocus}
        onBackdropPress={() => setIsFocus(false)}
        onRequestClose={() => setIsFocus(false)}
        animationType="slide"
        transparent={true}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: transparent,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator color="white" size="large" />
        </View>
      </Modal>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        <View style={{ width: "100%" }}>
          <ImageBackground
            resizeMode="cover"
            style={[shadow.primary, { height: 150 }]}
            source={backgroundImage}
          >
            <View style={{ flexDirection: "row", padding: spacing.s }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={backIcon} />
              </TouchableOpacity>
              <Text style={jobStyles.jobId}>JOB#{jobDetailsData?.job_id}</Text>
            </View>
            <View style={jobStyles.viewCenter}>
              <FlatList
                style={{ padding: 10, width: "100%" }}
                renderItem={renderJobTabItem}
                data={darecords}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </ImageBackground>
        </View>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={jobStyles.viewcall}>
            <View style={jobStyles.viewrow}>
              <View>
                <Image
                  source={{ uri: jobDetailsData?.image_url }}
                  style={{ height: 30, width: 30 }}
                />
              </View>
              <View style={{ justifyContent: "center", marginLeft: 10 }}>
                <Text
                  style={{ color: "#757588", fontWeight: "600", fontSize: 16 }}
                >
                  {jobDetailsData?.type}
                </Text>
                <Text style={jobStyles.nametxt}>
                  {jobDetailsData?.client_first_name}{" "}
                  {jobDetailsData?.client_last_name}
                </Text>
              </View>
            </View>
            <View style={[jobStyles.viewrow, { marginTop: 5 }]}>
              <TouchableOpacity
                onPress={() => {
                  Call();
                  allCallingDetails?.data?.number
                    ? Linking.openURL(
                        `${"tel:"}${allCallingDetails?.data?.number}`
                      )
                    : null;
                }}
              >
                <Image source={callIcon} style={jobStyles.imgCall} />
              </TouchableOpacity>
              <TouchableOpacity
              onPress={() => {
                navigation.navigate("jobMessage")
              }}
             
              >
                <Image source={message} style={jobStyles.imgCall} />
              </TouchableOpacity>
            </View>
          </View>
          {mapRegion?.latitude ? (
            <View style={{ height: 150 }}>
              <MapView
                style={{ width: "100%", height: "100%" }}
                showsUserLocation={false}
                provider="google"
                ref={mapRef}
                onRegionChange={onRegionChange}
                initialRegion={{
                  latitude: mapRegion?.latitude,
                  longitude: mapRegion?.longitude,
                  latitudeDelta: 0.1,
                  longitudeDelta: 0.1,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: mapRegion?.latitude,
                    longitude: mapRegion?.longitude,
                  }}
                  title={jobDetailsData?.client_address1}
                  description={jobDetailsData?.client_address1}
                />
              </MapView>
            </View>
          ) : null}
          <View>
            {/* <ImageBackground
              source={mapimage}
              style={{ height: 200, width: "100%" }}
            ></ImageBackground> */}
          </View>

          <JobDetailStatus
            status={jobDetailsData?.job_status}
            refresh={setIsFocus}
          />

          <View style={jobStyles.ViewSchDet}>
            <Text style={jobStyles.headingTxt}>Schedule</Text>
            <JobDetailSchedule schedule={jobDetailsData} refresh={setIsFocus} />
          </View>
          <View style={[jobStyles.ViewSchDet]}>
            <View>
              <Text style={jobStyles.headingTxt}>Job Details</Text>
              <JobTypeAddSource
                jobTypeAd={jobDetailsData}
                refresh={setIsFocus}
              />
            </View>
            <View>
              <JobDetailTag refresh={setIsFocus} tagData={jobDetailsData} />
            </View>
            <View>
              <JobDetailTeam refresh={setIsFocus} teamList={jobDetailsData} />
            </View>

            <View>
              <JobDetailAttachment
                dataAttach={jobDetailsData}
                refresh={setIsFocus}
              />
            </View>

            <View>
              <JobDetailAddNotes
                addNotes={jobDetailsData}
                refresh={setIsFocus}
              />
            </View>
            {refreshModal()}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                // alignItems: "center",
                marginTop: 20,
              }}
            >
              <TouchableOpacity
                style={{ alignItems: "center", marginTop: 35 }}
                onPress={() => {
                  navigation.navigate("ETANavigator");
                }}
              >
                <View
                  style={{
                    padding: 11,
                    borderColor: "#E5F1FF",
                    borderWidth: 1,
                    borderRadius: 50,
                  }}
                >
                  <Image source={Clocks} style={{ height: 25, width: 25 }} />
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#041B3E",
                    paddingVertical: 10,
                  }}
                >
                  ETA
                </Text>
              </TouchableOpacity>
              {stop == false ? (
                <TouchableOpacity
                  style={{ alignItems: "center" }}
                  onPress={() => {
                    setStop(!stop);
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#91D073",
                      padding: 20,
                      borderRadius: 50,
                    }}
                  >
                    <Image source={Tick} style={{ height: 45, width: 45 }} />
                  </View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      color: "#041B3E",
                      paddingVertical: 10,
                    }}
                  >
                    Start
                  </Text>
                </TouchableOpacity>
              ) : null}

              {stop == true ? (
                <TouchableOpacity
                  style={{ alignItems: "center" }}
                  onPress={() => {
                    setStop(!stop);
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "orange",
                      padding: 20,
                      borderRadius: 50,
                    }}
                  >
                    <Image source={Tick} style={{ height: 45, width: 45 }} />
                  </View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      color: "#041B3E",
                      paddingVertical: 10,
                    }}
                  >
                    Stop
                  </Text>
                </TouchableOpacity>
              ) : null}

              <TouchableOpacity
                style={{ alignItems: "center", marginTop: 35 }}
                onPress={() => {
                  navigation.navigate("Payment");
                }}
              >
                <View
                  style={{
                    padding: 12,

                    borderColor: "#E5F1FF",
                    borderWidth: 1,
                    borderRadius: 50,
                  }}
                >
                  <Image source={Dolar} style={{ width: 22, height: 22 }} />
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#041B3E",
                    paddingVertical: 10,
                  }}
                >
                  Pay
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
