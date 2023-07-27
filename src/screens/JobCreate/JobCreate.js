import React, { useState, useEffect, useCallback } from "react";
import {
  SafeAreaView,
  TextInput,
  View,
  ScrollView,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { style } from "./JobCreate.styles";
import {
  backgroundImage,
  bell,
  cyberwolf,
  noAvailableImg,
  search,
} from "@/assets";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

import { shadow, spacing } from "@/theme";
import { useNavigation } from "@react-navigation/native";
import { NAVIGATION } from "@/constants";
import Feather from "react-native-vector-icons/Feather";
import DatePicker from "react-native-date-picker";
import { font } from "@/theme/font";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { Modal } from "react-native";
import { Pressable } from "react-native";
import {
  clientEditDetail,
  jobSourceList,
  jobTypeList,
} from "@/actions/UserActions";
import {
  city,
  companyName,
  country,
  enevelop,
  location,
  person,
  phoneCall,
  state,
  zipcode,
} from "@/assets";
import moment from "moment";
import { CreateAJob } from "@/actions/JobActions";
import { ModalLoader } from '@/components/ModalLoader';
import { exisitngClientListFun, storeClientData } from "@/actions/UserActions";


const JobCreate = () => {
  const ClientDetails = useSelector(
    (state) => state?.user?.createJobDetails?.data
  );

  console.log("ClientDetails job create", ClientDetails);
  // useEffect(() => {
  //   console.log("ClientDetails", ClientDetails);
  // }, [ClientDetails]);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const [openStartDate, setOpenStartDate] = useState(false);
  const [openStartTime, setOpenStartTime] = useState(false);
  const [openEndDate, setOpenEndDate] = useState(false);
  const [openEndTime, setOpenEndTime] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [clientModal, setClientModal] = useState(false);
  const [clientId, setClientId] = useState("");

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const existClientListData = useSelector((state) => state?.user?.jobTypeList);
  const existClientListDatas = useSelector(
    (state) => state?.user?.existClientListReducer?.clientDetails
  );
  console.log(existClientListData, "existClientListData");
  const editClientDetailData = useSelector(
    (state) => state?.user?.clientEditDetailsReducer
  );
  console.log("editClientDetailData", editClientDetailData);
  // modal
  const [jobTypeModalVisible, setJobTypeModalVisible] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [jobTypes, setjobTypes] = useState({});
  const [allClientDetails, setAllClientDetails] = useState({});

  const [jobSourceModalVisible, setJobSourceModalVisible] = useState(false);
  const [clientDetailsModalVisible, setClientDetailsModalVisible] =
    useState(false);

  const [selectedSourceTypes, setSelectedSourceTypes] = useState({});

  const storeExistClientListData = useSelector((state) => state?.user);
  const jobAdSourceList = useSelector(
    (state) => state?.user?.jobAdSourceList?.data
  );

  const existClientListDataList = useSelector(
    (state) => state?.user?.existClientListReducer?.clientDetails
  );

  console.log("jobTypes---->>", jobTypes);

  const signUpSchema = Yup.object().shape({
    jobtypes: Yup.string().required("Please enter Jobtypes."),
    sourceTypes: Yup.string().required("Please enter Source Types"),
    jobDescription: Yup.string().required("Please enter Job Description."),
  });

  const ClintSignUpSchema = Yup.object().shape({
    firstname: Yup.string().required("Enter First Name."),
    lastname: Yup.string().required("Enter Last Name."),
    email: Yup.string()
      .email("Invalid email")
      .required("Enter registered Email Address."),
    phonenumber: Yup.string().required("Enter Phone number."),
    address: Yup.string().required("Enter Address."),
    floar: Yup.string().required("Enter Landmark address ."),
    pincode: Yup.string().required("Enter zip code ."),
    states: Yup.string().required("Enter state ."),
    cities: Yup.string().required("Enter city ."),
    countries: Yup.string().required("Enter country ."),
    companyname: Yup.string().required("Enter Company Name."),
  });
  console.log("editClientDetailData", editClientDetailData);

  function getOrdinalSuffix(day) {
    if (day >= 11 && day <= 13) {
      return "th";
    }

    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  const CallApi = (item) => {
    setClientId(item);
    setClientModal(false);
    const payload = {
      id: item,
    };

    dispatch(clientEditDetail(payload, navigation));
  };

  const filterData = (item) => {
    console.log("item", item);
    if (userInput === "") {
      return (
        <View
          style={{
            justifyContent: "space-between",
            marginTop: 5,
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 0.5,
              borderColor: "gray",
              paddingHorizontal: 10,
              paddingVertical: 10,
              marginHorizontal: 10,
              marginVertical: 5,
              borderRadius: 10,
            }}
            onPress={() => CallApi(item?.id)}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={style.imgView}>
                <Image
                  source={noAvailableImg}
                  style={{
                    height: 25,
                    width: 25,
                    alignSelf: "center",
                    margin: 5,
                  }}
                />
              </View>
              <Text style={[style.txtFieldTitle,{alignSelf:"center"}]}>
                {item?.first_name} {item?.last_name}
              </Text>
              <Entypo
                name="dots-three-vertical"
                size={20}
                style={style.custIcon}
                onPress={() => showModal(item)}
              />
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    if (item?.first_name?.toLowerCase()?.includes(userInput?.toLowerCase())) {
      return (
        <TouchableOpacity
          style={[
            {
              borderWidth: 0.5,
              borderColor: "gray",
              paddingHorizontal: 10,
              paddingVertical: 10,
              marginHorizontal: 10,
              marginVertical: 5,
              borderRadius: 10,
            },
          ]}
          onPress={() => CallApi(item?.id)}
        // onPress={() => navigation.navigate("Client Edit", sendItem(item))}
        >
          <View style={{ flexDirection: "row", alignItems: "center" ,justifyContent:"space-between"}}>
            <View style={style.imgView}>
              <Image
                source={noAvailableImg}
                style={{
                  height: 25,
                  width: 25,
                  alignSelf: "center",
                  margin: 5,
                }}
              />
            </View>
            <Text style={[style.txtFieldTitle, { marginLeft: 10 }]}>
              {item?.first_name != undefined ? item?.first_name : ""}{" "}
              {item?.last_name != undefined ? item?.last_name : ""}
            </Text>
            <Entypo
                name="dots-three-vertical"
                size={20}
                style={style.custIcon}
                onPress={() => showModal(item)}
              />
          </View>
        </TouchableOpacity>
      );
    }
  };

  const filterDatas = (item) => {
    if (userInput === "") {
      return (
        <View style={{ marginVertical: 10 }}>
          <TouchableOpacity
            style={{
              paddingHorizontal: 30,
              paddingVertical: 25,
              backgroundColor: "#fff",
              borderRadius: 15,
              marginHorizontal: 20,
              borderColor: "#E4EFF2",
              borderWidth: 1,
              shadowColor: "#f5f5f5",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.32,
              shadowRadius: 1.46,

              elevation: 50,
            }}
            onPress={() => {
              // sendItem(item);

              setjobTypes(item);
              setJobTypeModalVisible(false);
              setUserInput("");
            }}
          >
            <Text style={{ fontSize: 17, fontWeight: "600", color: "#041B3E" }}>
              {item?.type_name}
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
    if (item.type_name.toLowerCase().includes(userInput.toLowerCase())) {
      return (
        <View
          style={{
            marginVertical: 10,
          }}
        >
          <TouchableOpacity
            style={{
              paddingHorizontal: 30,
              paddingVertical: 25,
              backgroundColor: "#fff",
              borderRadius: 15,
              marginHorizontal: 20,
              borderColor: "#E4EFF2",
              borderWidth: 1,
              shadowColor: "#f5f5f5",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.32,
              shadowRadius: 1.46,

              elevation: 50,
            }}
            onPress={() => {
              // sendItem(item);
              //
              setjobTypes(item);
              setJobTypeModalVisible(false);
              setUserInput("");
            }}
          >
            <Text style={{ fontSize: 17, fontWeight: "600", color: "#041B3E" }}>
              {item?.type_name}
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  const submit = (values) => {
    console.log("new job", values);
    let data = {
      client_id: ClientDetails?.id
        ? ClientDetails?.id
        : editClientDetailData?.id,
      end_date: moment(endDate).format("DD-MM-YYYY"),
      end_time: moment(endTime).format("hh:mm A"),
      start_date: moment(startDate).format("DD-MM-YYYY"),
      start_time: moment(startTime).format("hh:mm A"),
      job_description: values.jobDescription,
      job_source_id: selectedSourceTypes?.id,
      job_type_id: jobTypes?.id,
    };
    console.log("data job data", data);
    dispatch(CreateAJob(data, navigation));
    setEndDate(new Date())
    setEndTime(new Date())
    setStartTime(new Date())
    setStartDate(new Date())

  };

  const createNewJob = (values) => {
    //
    setAllClientDetails(values);
    setClientDetailsModalVisible(false);
  };

  useEffect(() => {
    dispatch(jobTypeList());
    dispatch(jobSourceList());
  }, []);

  useEffect(() => {
    navigation.addListener(
      "focus",
      () => {
        setIsFocus(true);
        setTimeout(function () {
          setIsFocus(false);
        }, 2000);
      },
      []
    );
    let data = {
      page: 1,
      limit: 10,
    };
    // console.log(']]]]]---',data)
    dispatch(exisitngClientListFun(data, navigation));
  }, [isFocus]);

  return (
    <SafeAreaView style={[style.container,{backgroundColor:"white"}]}>
      <Formik
        validationSchema={signUpSchema}
        onSubmit={(values) => submit(values)}
        enableReinitialize
        initialValues={{
          jobtypes: jobTypes?.type_name ? jobTypes?.type_name : "",
          sourceTypes: selectedSourceTypes?.ad_group_name
            ? selectedSourceTypes?.ad_group_name
            : "",
          jobDescription: "",
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          setFieldTouched,
          setFieldValue,
          isValid,
        }) => (
          <ScrollView style={[style.container,{backgroundColor:"white"}]}>
            <View style={[style.firstView]}>
              <ImageBackground
                source={backgroundImage}
                style={{
                  height: 98,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 12,
                  },
                  shadowOpacity: 0.58,
                  shadowRadius: 16.0,
                  elevation:10,
                  backgroundColor: "white",
                }}
              >
                <View style={{ flexDirection: "row", paddingTop: 20 }}>
                  <Entypo
                    name="cross"
                    size={30}
                    style={style.custIcon}
                    onPress={() => navigation.goBack()}
                  />
                  <Text style={style.headerTitlee}>New Job</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={style.secView}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={style.headerTitle}>Client Info</Text>

                <TouchableOpacity
                  style={{ flexDirection: "row", marginHorizontal: 20 }}
                // onPress={
                //   // () => setClientDetailsModalVisible(true)
                //
                //   //  navigation.navigate(NAVIGATION.addNewClient)
                // }
                >
                  <Entypo
                    name="circle-with-plus"
                    size={30}
                    style={[style.custIcon, { color: "#195090" }]}
                    onPress={() =>
                      // setClientDetailsModalVisible(true)
                      navigation.navigate(NAVIGATION.addNewClient)
                    }
                  />
                  <Text style={style.headersubTitle}>Add New Client</Text>
                </TouchableOpacity>
              </View>
              <View
                style={style.searchView}
                onPress={() => {
                  setClientModal(true);
                }}
              >
                <TextInput
                  placeholder={"Search Clients"}
                  onChangeText={() => {
                    setClientModal(true);
                  }}
                  style={{ flex: 1 }}
                />
                {/* <TextInput
                  style={style.textboxfield}
                  placeholder="Search for Client"
                  // //   placeholderTextColor={"#9393AB"}
                  // placeholderStyle={{color:"red"}}
                  placeholderStyle={style.placeholder}
                /> */}
                <Image
                  source={search}
                  onPress={() => {
                    setClientModal(true);
                  }}
                />
              </View>
              {
                existClientListDataList && userInput ? (
                  <Text style={style.headerTitle}>Clients List</Text>
                ) : null
                // <View style={style.noClientAvailable}>
                //   <Text style={style.noClientText}>No Clients Available</Text>
                // </View>
              }

              {/* {existClientListDataList.map((item) => (
                <View
                  style={{
                    justifyContent: "space-between",
                    marginTop: 5,
                    backgroundColor: "white",
                    borderRadius: 10,
                  }}
                >
                  <TouchableOpacity
                    style={style.txtFieldView}
                    //  onPress={() => navigation.navigate("Client Edit", sendItem(item))}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View style={style.imgView}>
                        <Image
                          source={noAvailableImg}
                          style={{
                            height: 25,
                            width: 25,
                            alignSelf: "center",
                            margin: 5,
                          }}
                        />
                      </View>
                      <Text style={style.txtFieldTitle}>
                        {item?.first_name} {item?.last_name}
                      </Text>
                      <Entypo
                        name="dots-three-vertical"
                        size={20}
                        style={style.custIcon}
                        // onPress={() => showModal(item)}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              ))} */}

              {/* {existClientListDataList && userInput ? (
                <FlatList
                // style={{height:100}}
                  data={existClientListDataList}
                  renderItem={({ item, index }) => filterData(item)}
                  showsVerticalScrollIndicator={false}
                ></FlatList>
              ) : null} */}

              {ClientDetails?.id || editClientDetailData?.id ? (
                <>
                  <View
                    style={{
                      flexDirection: "row",
                      marginHorizontal: 20,
                      marginTop: spacing.s,
                    }}
                  >
                    <View style={{ flex: 2 }}>
                      <View
                        style={{
                          backgroundColor: "white",
                          borderRadius: 100,
                          height: 70,
                          width: 70,
                        }}
                      >
                        <Image
                          source={{
                            uri: ClientDetails?.image_url
                              ? ClientDetails?.image_url
                              : editClientDetailData?.image_url,
                          }}
                          style={{ height: 50, width: 50, alignSelf: "center" }}
                        />
                      </View>
                    </View>
                    <View style={{ flex: 4 }}>
                      <Text style={style.txtClient}>Client</Text>
                      <Text style={style.txtName}>
                        {ClientDetails?.first_name
                          ? ClientDetails?.first_name
                          : editClientDetailData?.first_name}{" "}
                        {ClientDetails?.last_name
                          ? ClientDetails?.last_name
                          : editClientDetailData?.last_name}
                      </Text>
                      <View style={style.clientDetailView}>
                        <Entypo
                          name="phone"
                          size={18}
                          style={[style.txtwithIcon]}
                        />
                        <Text style={style.txtClientDetail}>
                          {ClientDetails?.phone
                            ? ClientDetails?.phone
                            : editClientDetailData?.phone}
                        </Text>
                      </View>
                      <View style={style.clientDetailView}>
                        <Entypo
                          name="location"
                          size={18}
                          style={[style.txtwithIcon]}
                        />
                        <Text style={style.txtClientDetail}>
                          {ClientDetails?.address1
                            ? ClientDetails?.address1
                            : editClientDetailData?.address1}{" "}
                          ,
                          {ClientDetails?.zip
                            ? ClientDetails?.zip
                            : editClientDetailData?.zip}{" "}
                        </Text>
                      </View>
                      <View style={style.clientDetailView}>
                        <Entypo
                          name="mail"
                          size={18}
                          style={[style.txtwithIcon]}
                        />
                        <Text style={style.txtClientDetail}>
                          {ClientDetails?.email
                            ? ClientDetails?.email
                            : editClientDetailData?.email}
                        </Text>
                      </View>
                    </View>
                  </View>
                </>
              ) : null}

              <View style={{ marginTop: 10, padding: 18 }}>
                <Text style={style.headerJobTitle}>Job Info</Text>
                <Text style={[style.txtClient, { marginTop: spacing.x }]}>
                  Job Type
                </Text>
                <View style={[shadow.primeView, { width: "100%", padding: 0, elevation: 1, borderRadius: 8 }]}>
                  <TouchableOpacity
                    style={{ flexDirection: "row" }}
                    onPress={
                      () => setJobTypeModalVisible(true)
                      // navigation.navigate(NAVIGATION.jobType)
                    }
                  >
                    <Entypo name={"tools"} size={20} style={style.custIcon} />
                    {/* <Text style={style.textName}>Dishwasher</Text> */}
                    <TextInput
                      placeholder="Select job Types"
                      style={[style.textboxfield, { paddingHorizontal: 0 }]}
                      //   maxLength={50}
                      value={values.jobtypes}
                      onChangeText={handleChange("jobtypes")}
                      placeholderTextColor={"#757588"}
                    // keyboardType="phone-pad"
                    // onBlur={()=>setFieldTouched('firstName')}
                    //   autoCapitalize="none"
                    />
                  </TouchableOpacity>
                </View>
                <View style={{}}>
                  {errors.jobtypes ? (
                    <Text style={style.error}>{errors.jobtypes}</Text>
                  ) : null}
                </View>

                <Text style={[style.txtClient, { marginTop: spacing.x }]}>
                  Job Source
                </Text>
                <View style={style.txtFieldView}>
                  <TouchableOpacity
                    style={{ flexDirection: "row" }}
                    onPress={
                      () => setJobSourceModalVisible(true)
                      // navigation.navigate(NAVIGATION.adSource)
                    }
                  >
                    <Entypo name={"user"} size={20} style={style.custIcon} />
                    {/* <Text style={style.textName}>Live Chat</Text> */}
                    <TextInput
                      placeholder="Select job Types"
                      style={[style.textboxfield, { paddingHorizontal: 0 }]}
                      //   maxLength={50}
                      value={values.sourceTypes}
                      onChangeText={handleChange("sourceTypes")}
                      placeholderTextColor={"#757588"}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{}}>
                  {errors.sourceTypes ? (
                    <Text style={style.error}>{errors.sourceTypes}</Text>
                  ) : null}
                </View>
              </View>
            </View>
            <View style={style.thirdView}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text
                    style={[
                      style.txtClient,
                      { marginTop: spacing.x, marginHorizontal: 20 },
                    ]}
                  >
                    Job Start Date & Time
                  </Text>
                  <View style={style.dateViewTime}>
                    <TouchableWithoutFeedback
                      onPress={() => setOpenStartDate(true)}
                      style={{ width: "100%" }}
                    >
                      <View style={{ width: "100%" }}>
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <Text style={style.dateTextTime}>
                            {startDate
                              .toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })
                              .replace(
                                /(\d{1,2})(st|nd|rd|th)/,
                                (_, day, suffix) =>
                                  `${day}${getOrdinalSuffix(day)}`
                              )}
                          </Text>
                          <Feather
                            name="calendar"
                            size={20}
                            style={[style.custIcon, { marginLeft: "auto" }]}
                          />
                        </View>
                      </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                      onPress={() => setOpenStartTime(true)}
                      style={{ width: "100%" }}
                    >
                      <View style={{ width: "100%" }}>
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <Text style={style.dateTextTime}>
                            {startTime.toLocaleTimeString("en-US", {
                              hour: "numeric",
                              minute: "numeric",
                            })}
                          </Text>
                          <Feather
                            name="clock"
                            size={20}
                            style={[style.custIcon, { marginLeft: "auto" }]}
                          />
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                  <DatePicker
                    modal
                    open={openStartDate}
                    date={startDate}
                    mode="date"
                    androidVariant="iosClone"
                    onConfirm={(selectedDate) => {
                      setOpenStartDate(false);
                      setStartDate(selectedDate);
                    }}
                    onCancel={() => {
                      setOpenStartDate(false);
                    }}
                  />
                  <DatePicker
                    modal
                    open={openStartTime}
                    date={startTime}
                    mode="time"
                    androidVariant="iosClone"
                    onConfirm={(selectedTime) => {
                      setOpenStartTime(false);
                      setStartTime(selectedTime);
                    }}
                    onCancel={() => {
                      setOpenStartTime(false);
                    }}
                  />
                </View>

                <View style={{ flex: 1 }}>
                  <Text style={[style.txtClient, { marginTop: spacing.x }]}>
                    Job End Date & Time
                  </Text>
                  <View style={style.dateViewTime}>
                    <TouchableWithoutFeedback
                      onPress={() => setOpenEndDate(true)}
                      style={{ width: "100%" }}
                    >
                      <View style={{ width: "100%" }}>
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <Text style={style.dateTextTime}>
                            {endDate
                              .toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })
                              .replace(
                                /(\d{1,2})(st|nd|rd|th)/,
                                (_, day, suffix) =>
                                  `${day}${getOrdinalSuffix(day)}`
                              )}
                          </Text>
                          <Feather
                            name="calendar"
                            size={20}
                            style={[style.custIcon, { marginLeft: "auto" }]}
                          />
                        </View>
                      </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                      onPress={() => setOpenEndTime(true)}
                      style={{ width: "100%" }}
                    >
                      <View style={{ width: "100%" }}>
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <Text style={style.dateTextTime}>
                            {endTime.toLocaleTimeString("en-US", {
                              hour: "numeric",
                              minute: "numeric",
                            })}
                          </Text>
                          <Feather
                            name="clock"
                            size={20}
                            style={[style.custIcon, { marginLeft: "auto" }]}
                          />
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                  <DatePicker
                    modal
                    open={openEndDate}
                    date={endDate}
                    mode="date"
                    androidVariant="iosClone"
                    onConfirm={(endSelectedDate) => {
                      setOpenEndDate(false);
                      setEndDate(endSelectedDate);
                    }}
                    onCancel={() => {
                      setOpenEndDate(false);
                    }}
                  />
                  <DatePicker
                    modal
                    open={openEndTime}
                    date={endTime}
                    mode="time"
                    androidVariant="iosClone"
                    onConfirm={(endSelectedTime) => {
                      setOpenEndTime(false);
                      setEndTime(endSelectedTime);
                    }}
                    onCancel={() => {
                      setOpenEndTime(false);
                    }}
                  />
                </View>
              </View>

              <View style={{ marginHorizontal: 18, marginTop: spacing.x }}>
                <Text style={[style.txtClient, { marginTop: spacing.x }]}>
                  Job Description
                </Text>
                <View style={style.txtFieldView}>
                  <View style={{ flexDirection: "row" }}>
                    <Entypo name={"user"} size={20} style={style.custIcon} />
                    <TextInput
                      placeholder="Type your job description"
                      style={[style.textName, { flex: 1 }]}
                      //   maxLength={50}
                      value={values.jobDescription}
                      onChangeText={handleChange("jobDescription")}
                      placeholderTextColor={"#757588"}
                    />
                  </View>
                </View>
              </View>
              <View style={{}}>
                {errors.jobDescription ? (
                  <Text style={style.error}>{errors.jobDescription}</Text>
                ) : null}
              </View>

              <TouchableOpacity
                style={style.logbtn}
                onPress={() => handleSubmit()}
              >
                <AntDesign size={20} name="login" color="white" />
              </TouchableOpacity>
              <Text style={style.loginButton}>Create New Job</Text>
              <View style={{ marginBottom: spacing.xl }}></View>
            </View>
          </ScrollView>
        )}
      </Formik>

      <Modal transparent={true} visible={clientModal}>
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
                  style.headerJobTitle,
                  {
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: "center",
                    fontSize: 20,
                  },
                ]}
              >
                Select Client
              </Text>
              <Ionicons
                size={28}
                name="close-circle-outline"
                color="red"
                onPress={() => {
                  setClientModal(false);
                }}
              />
            </View>

            <View style={style.viewInput}>
              <View style={{ paddingHorizontal: 15 }}>
                <TextInput
                  placeholder={"Search Clients"}
                  onChangeText={(text) => setUserInput(text)}
                />
              </View>
              <View style={{ paddingHorizontal: 20 }}>
                <Image source={search} />
              </View>
            </View>
            <FlatList
              // style={{height:100}}
              data={existClientListDataList}
              renderItem={({ item, index }) => filterData(item)}
              showsVerticalScrollIndicator={false}
            ></FlatList>
          </View>
        </Pressable>
      </Modal>

      <Modal transparent={true} visible={jobTypeModalVisible}>
        <Pressable
          onPress={() => {
            setJobTypeModalVisible(false);
          }}
          style={{
            backgroundColor: "#000000aa",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              // padding: 30,
              // borderRadius: 15,
              width: "100%",
              height: "100%",
              // justifyContent: 'center',
              // alignItems: "center",
              // flexDirection: "column",
            }}
          >
            <View style={style.firstView}>
              <ImageBackground
                source={backgroundImage}
                style={{
                  height: 150,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 12,
                  },
                  shadowOpacity: 0.58,
                  shadowRadius: 16.0,

                  elevation: 24,
                  backgroundColor: "white",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    // justifyContent: "space-between",
                    alignItems: "center",
                    marginVertical: 10,
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Entypo
                      name="cross"
                      size={30}
                      style={style.custIcon}
                      onPress={() => setJobTypeModalVisible(false)}
                    />
                    <Text style={style.headerTitle}>Job Types</Text>
                  </View>

                  <Entypo
                    name="circle-with-plus"
                    size={30}
                    style={[style.custIcon, { color: "#195090" }]}
                  />
                </View>
                <View style={[style.searchView, { marginBottom: 20 }]}>
                  <TextInput
                    style={style.textboxfield}
                    placeholder="Search"
                    onChangeText={(text) => setUserInput(text)}
                  />
                  <Image source={search} style={style.imgIcon} />
                </View>
              </ImageBackground>
              {/* <View
                style={{
                  
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 11,
                  },
                  shadowOpacity: 0.57,
                  shadowRadius: 15.19,

                  elevation: 23,
                }}
              ></View> */}
              <FlatList
                data={existClientListData}
                renderItem={({ item, index }) => filterDatas(item)}
                style={{ marginTop: 30 }}
              ></FlatList>
            </View>
          </View>
        </Pressable>
      </Modal>
      <Modal transparent={true} visible={jobSourceModalVisible}>
        <Pressable
          onPress={() => {
            setJobSourceModalVisible(false);
          }}
          style={{
            backgroundColor: "#000000aa",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              // padding: 30,
              // borderRadius: 15,
              width: "100%",
              height: "100%",
              // justifyContent: 'center',
              // alignItems: "center",
              // flexDirection: "column",
            }}
          >
            <View style={style.firstView}>
              <ImageBackground
                source={backgroundImage}
                style={{
                  height: 80,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 12,
                  },
                  shadowOpacity: 0.58,
                  shadowRadius: 16.0,

                  elevation: 24,
                  backgroundColor: "white",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    // justifyContent: "space-between",
                    alignItems: "center",
                    marginVertical: 10,
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Entypo
                      name="cross"
                      size={30}
                      style={style.custIcon}
                      onPress={() => setJobSourceModalVisible(false)}
                    />
                    <Text style={style.headerTitle}>Ad Source</Text>
                  </View>
                </View>
              </ImageBackground>

              <FlatList
                data={jobAdSourceList}
                renderItem={({ item, index }) => {
                  //
                  return (
                    <View style={{ marginVertical: 10 }}>
                      <TouchableOpacity
                        style={{
                          paddingHorizontal: 30,
                          paddingVertical: 25,
                          backgroundColor: "#fff",
                          borderRadius: 15,
                          marginHorizontal: 20,
                          borderColor: "#E4EFF2",
                          borderWidth: 1,
                          shadowColor: "#f5f5f5",
                          shadowOffset: {
                            width: 0,
                            height: 4,
                          },
                          shadowOpacity: 0.32,
                          shadowRadius: 1.46,

                          elevation: 50,
                        }}
                        onPress={() => {
                          // sendItem(item);

                          setSelectedSourceTypes(item);
                          setJobSourceModalVisible(false);
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 17,
                            fontWeight: "600",
                            color: "#041B3E",
                          }}
                        >
                          {item?.ad_group_name}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                }}
                style={{ marginTop: 30 }}
              ></FlatList>
            </View>
          </View>
        </Pressable>
      </Modal>
      <Modal transparent={true} visible={clientDetailsModalVisible}>
        <Pressable
          onPress={() => {
            // setClientDetailsModalVisible(false);
          }}
          style={{
            backgroundColor: "#000000aa",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              // padding: 30,
              // borderRadius: 15,
              width: "100%",
              height: "100%",
              // justifyContent: 'center',
              // alignItems: "center",
              // flexDirection: "column",
            }}
          >
            <View style={style.firstView}>
              <ImageBackground
                source={backgroundImage}
                style={{
                  height: 80,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 12,
                  },
                  shadowOpacity: 0.58,
                  shadowRadius: 16.0,

                  elevation: 24,
                  backgroundColor: "white",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    // justifyContent: "space-between",
                    alignItems: "center",
                    marginVertical: 10,
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Entypo
                      name="cross"
                      size={30}
                      style={style.custIcon}
                      onPress={() => setClientDetailsModalVisible(false)}
                    />
                    <Text style={style.headerTitle}>Client Details</Text>
                  </View>
                </View>
              </ImageBackground>
              <Formik
                initialValues={{
                  email: "",
                  firstname: "",
                  lastname: "",
                  phonenumber: "",
                  email: "",
                  address: "",
                  floar: "",
                  pincode: "",
                  states: "",
                  cities: "",
                  countries: "",
                  companyname: "",
                }}
                // onSubmit={(values) =>
                onSubmit={(values, { resetForm }) => {
                  // // setAddress(values.address)
                  createNewJob(values);
                  // setTimeout(() => {
                  //   resetForm();
                  // }, 1000);
                }}
                validationSchema={ClintSignUpSchema}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                }) => (
                  <SafeAreaView style={style.container}>
                    <ScrollView style={{ flex: 1 }}>
                      <View style={style.secView}>
                        {/* <Text>jnjnjjn</Text> */}
                        <View
                          style={{ marginHorizontal: 20, marginTop: spacing.x }}
                        >
                          <Text style={style.txtFieldTitle}>First Name</Text>
                          <View style={style.txtFieldView}>
                            <View style={{ flexDirection: "row" }}>
                              <Image style={{ margin: 12 }} source={person} />
                              <TextInput
                                placeholder="First Name"
                                onChangeText={handleChange("firstname")}
                                style={style.textboxfield}
                                onBlur={handleBlur("firstname")}
                                value={values.firstname}
                                maxLength={50}
                              />
                            </View>
                          </View>
                          {errors.firstname && touched.firstname && (
                            <Text style={style.error}>{errors.firstname}</Text>
                          )}

                          <View style={{ marginTop: spacing.x }}>
                            <Text style={style.txtFieldTitle}>Last Name</Text>
                            <View style={style.txtFieldView}>
                              <View style={{ flexDirection: "row" }}>
                                <Image style={{ margin: 12 }} source={person} />
                                <TextInput
                                  placeholder="Last Name"
                                  onChangeText={handleChange("lastname")}
                                  style={style.textboxfield}
                                  onBlur={handleBlur("lastname")}
                                  value={values.lastname}
                                  maxLength={50}
                                // keyboardType="email-address"
                                // autoCapitalize="none"
                                />
                              </View>
                            </View>
                            {errors.lastname && touched.lastname && (
                              <Text style={style.error}>{errors.lastname}</Text>
                            )}
                          </View>

                          <View style={{ marginTop: spacing.x }}>
                            <Text style={style.txtFieldTitle}>
                              Phone Number
                            </Text>
                            <View style={style.txtFieldView}>
                              <View style={{ flexDirection: "row" }}>
                                <Image
                                  style={{ margin: 16 }}
                                  source={phoneCall}
                                />
                                <TextInput
                                  placeholder="Phone Number"
                                  onChangeText={handleChange("phonenumber")}
                                  style={style.textboxfield}
                                  onBlur={handleBlur("phonenumber")}
                                  value={values.phonenumber}
                                  maxLength={10}
                                />
                              </View>
                            </View>
                            {errors.phonenumber && touched.phonenumber && (
                              <Text style={style.error}>
                                {errors.phonenumber}
                              </Text>
                            )}
                          </View>

                          <View style={{ marginTop: spacing.x }}>
                            <Text style={style.txtFieldTitle}>
                              Email Address
                            </Text>
                            <View style={style.txtFieldView}>
                              <View style={{ flexDirection: "row" }}>
                                <Image
                                  style={{ margin: 16 }}
                                  source={enevelop}
                                />
                                <TextInput
                                  placeholder="Registered Email Address"
                                  onChangeText={handleChange("email")}
                                  style={style.textboxfield}
                                  onBlur={handleBlur("email")}
                                  value={values.email}
                                  maxLength={50}
                                  keyboardType="email-address"
                                  autoCapitalize="none"
                                />
                              </View>
                            </View>
                            {errors.email && touched.email && (
                              <Text style={style.error}>{errors.email}</Text>
                            )}
                          </View>

                          {/* <View style={{ marginHorizontal: 20, height: 30, backgroundColor: 'pink', marginVertical: 10 }}>
                                    <Text style={{ textAlign: 'center' }}>Map</Text>
                                </View> */}
                          <View style={{ marginTop: spacing.x }}>
                            <Text style={style.txtFieldTitle}>Address</Text>
                            <TouchableOpacity
                              style={style.txtFieldView}
                            // onPress={() =>
                            //   navigation.navigate(NAVIGATION.address)
                            // }
                            >
                              <View style={{ flexDirection: "row" }}>
                                <Image
                                  style={{ margin: 16 }}
                                  source={location}
                                />
                                <TextInput
                                  placeholder="Address"
                                  onChangeText={handleChange("address")}
                                  //  onChangeText={(text)=>setAddress(text)}
                                  style={style.textboxfield}
                                  onBlur={handleBlur("address")}
                                  // value={googleMapstoredata?.address ? googleMapstoredata?.address : ''}
                                  value={values.address}
                                  maxLength={50}
                                />
                              </View>
                            </TouchableOpacity>
                            {errors.address && touched.address && (
                              <Text style={style.error}>{errors.address}</Text>
                            )}
                            <View
                              style={[
                                style.txtFieldView,
                                { marginTop: spacing.x },
                              ]}
                            >
                              <View style={{ flexDirection: "row" }}>
                                <Image
                                  style={{ margin: 16 }}
                                  source={location}
                                />
                                {/* <Text>{googleMapstoredata?.address}</Text> */}
                                <TextInput
                                  placeholder="Apt/ Suite / Floor"
                                  onChangeText={handleChange("floar")}
                                  style={style.textboxfield}
                                  onBlur={handleBlur("floar")}
                                  // value={googleMapstoredata?.address ? googleMapstoredata?.address : values.floar}
                                  value={values.floar}
                                  maxLength={50}
                                />
                              </View>
                            </View>
                            {errors.floar && touched.floar && (
                              <Text style={style.error}>{errors.floar}</Text>
                            )}

                            <View
                              style={[
                                style.txtFieldView,
                                { marginTop: spacing.x },
                              ]}
                            >
                              <View style={{ flexDirection: "row" }}>
                                <Image
                                  style={{ margin: 16 }}
                                  source={zipcode}
                                />
                                <TextInput
                                  placeholder="Zip Code"
                                  onChangeText={handleChange("pincode")}
                                  style={style.textboxfield}
                                  onBlur={handleBlur("pincode")}
                                  // value={googleMapstoredata?.zipCode ? googleMapstoredata?.zipCode : values.pincode}
                                  value={values.pincode}
                                  maxLength={50}
                                />
                              </View>
                            </View>
                            {errors.pincode && touched.pincode && (
                              <Text style={style.error}>{errors.pincode}</Text>
                            )}

                            <View
                              style={[
                                style.txtFieldView,
                                { marginTop: spacing.x },
                              ]}
                            >
                              <View style={{ flexDirection: "row" }}>
                                <Image style={{ margin: 16 }} source={state} />
                                <TextInput
                                  placeholder="State"
                                  onChangeText={handleChange("states")}
                                  style={style.textboxfield}
                                  onBlur={handleBlur("states")}
                                  // value={googleMapstoredata?.state ? googleMapstoredata?.state : values.states}
                                  value={values.states}
                                  maxLength={50}
                                />
                              </View>
                            </View>
                            {errors.states && touched.states && (
                              <Text style={style.error}>{errors.states}</Text>
                            )}

                            <View
                              style={[
                                style.txtFieldView,
                                { marginTop: spacing.x },
                              ]}
                            >
                              <View style={{ flexDirection: "row" }}>
                                <Image style={{ margin: 16 }} source={city} />
                                <TextInput
                                  placeholder="City"
                                  onChangeText={handleChange("cities")}
                                  style={style.textboxfield}
                                  onBlur={handleBlur("cities")}
                                  // value={googleMapstoredata?.city ? googleMapstoredata?.city : values.cities}
                                  value={values.cities}
                                  maxLength={50}
                                />
                              </View>
                            </View>
                            {errors.cities && touched.cities && (
                              <Text style={style.error}>{errors.cities}</Text>
                            )}

                            <View
                              style={[
                                style.txtFieldView,
                                { marginTop: spacing.x },
                              ]}
                            >
                              <View style={{ flexDirection: "row" }}>
                                <Image
                                  style={{ margin: 16 }}
                                  source={country}
                                />
                                <TextInput
                                  placeholder="Country"
                                  onChangeText={handleChange("countries")}
                                  style={style.textboxfield}
                                  onBlur={handleBlur("countries")}
                                  // value={googleMapstoredata?.country ? googleMapstoredata?.country : values.countries}
                                  value={values.countries}
                                  maxLength={50}
                                />
                              </View>
                            </View>
                            {errors.countries && touched.countries && (
                              <Text style={style.error}>
                                {errors.countries}
                              </Text>
                            )}
                          </View>

                          <View style={{ marginTop: spacing.x }}>
                            <Text style={style.txtFieldTitle}>
                              Client Company Name
                            </Text>
                            <View style={style.txtFieldView}>
                              <View style={{ flexDirection: "row" }}>
                                <Image
                                  style={{ margin: 16 }}
                                  source={companyName}
                                />
                                <TextInput
                                  placeholder="Company Name"
                                  onChangeText={handleChange("companyname")}
                                  style={style.textboxfield}
                                  onBlur={handleBlur("companyname")}
                                  value={values.companyname}
                                  maxLength={50}
                                />
                              </View>
                            </View>
                          </View>
                          {errors.companyname && touched.companyname && (
                            <Text style={style.error}>
                              {errors.companyname}
                            </Text>
                          )}

                          <TouchableOpacity
                            style={style.logInbutton}
                            onPress={handleSubmit}
                          >
                            <View style={style.logInbuttonView}>
                              <Entypo
                                name="arrow-right"
                                size={20}
                                style={style.logInbuttonIcon}
                              />
                            </View>
                            <Text
                              style={[style.txtFieldTitle, { fontSize: 16 }]}
                            >
                              Save
                            </Text>
                          </TouchableOpacity>
                          <View style={{ marginBottom: spacing.s }}></View>
                        </View>
                      </View>
                    </ScrollView>
                  </SafeAreaView>
                )}
              </Formik>
            </View>
          </View>
        </Pressable>
      </Modal>
      <ModalLoader modalView={isFocus} />
    </SafeAreaView>
  );
};
export default JobCreate;
