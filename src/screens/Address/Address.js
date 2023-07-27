import React, { PureComponent, useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import PlacesAutocomplete from "react-places-autocomplete";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { NAVIGATION } from "@/constants";
import { useSelector, useDispatch } from "react-redux";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { add } from "react-native-reanimated";
import { clientUpdateAddress, storeGoogleAddress } from "@/actions/UserActions";
import { shadow, spacing, typography } from "@/theme";
import { style } from "./Address.styles";
import { backgroundImage } from "@/assets";
import Entypo from "react-native-vector-icons/Entypo";
import { Formik } from "formik";
import * as Yup from "yup";
import { editjobDetails } from "@/actions/JobActions";

export function Address({ navigation, route }) {
  const getClientDetail = useSelector(
    (state) => state?.user?.storeExistClientListReducer
  );
  const jobDetailsData = useSelector(
    (state) => state?.user?.jobDetailsDataReducer
  );
  const AllType = route?.params?.type;
  console.log("AllType---", AllType);

  const dispatch = useDispatch();
  const [address, setAddress] = useState(getClientDetail?.address1);
  const [zipCode, setZipCode] = useState(getClientDetail?.zip);
  const [state, setState] = useState(getClientDetail?.state);
  const [country, setCountry] = useState(getClientDetail?.country);
  const [city, setCity] = useState(getClientDetail?.city);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [appartment, setAppartment] = useState("");

  console.log("address", address);
  console.log("zipCode", zipCode);
  console.log("state", state);
  console.log("country", country);
  console.log("city", city);
  console.log("appartment", appartment);
  const mapRef = useRef();
  useEffect(() => {
    if (mapRef) {
      mapRef?.current.animateToRegion({
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    }
  }, [latitude, longitude, mapRef]);

  // const storeAddress = () => {
  //   const data = {
  //     address: address,
  //     city: city,
  //     state: state,
  //     country: country,
  //     zipCode: zipCode,
  //   };
  //   console.log("hitfun-->", data);
  // dispatch(storeGoogleAddress(data, navigation));
  // };
  const onRegionChange = (region) => {
    console.log("=====", region);
  };
  const signUpSchema = Yup.object().shape({
    address: Yup.string().required("Please enter address."),
    Apt_floor: Yup.string().required("Please enter Apt/Suite/Floor."),
    zipCode: Yup.string().required("Please enter Zipcode"),
    state: Yup.string().required("Please enter State"),
    city: Yup.string().required("Please enter City"),
    country: Yup.string().required("Please enter Country."),
  });
  const submit = (values) => {
    console.log("values", values);
    const data = {
      address: values.address,
      city: values.city,
      state: values.state,
      country: values.country,
      zipCode: values.zipCode,
      appartment: values.Apt_floor,
    };
    dispatch(storeGoogleAddress(data, navigation));
    if (AllType == "clientDetails") {
      navigation.navigate("Client Edit", { AllAddress: data });
    } else if (AllType == "jobDetails") {

      const data = {
        key: "address",       
        job_id: jobDetailsData?.job_id,
        client_id: jobDetailsData?.client_id,
        address1: values?.address,
        address2: values.Apt_floor,
        city: values?.city,
        state: values?.state,
        country: values?.country,
        zip: values?.zip,
      };
  
      dispatch(editjobDetails(data));

      navigation.navigate("Job Details Screen", { AllAddress: data });
    } else {
      navigation.navigate("Add New Client", { AllAddress: data });
    }
  };

  // useEffect((values)=>{
  //   const data = {
  //         id:getClientDetail?.id,
  //         address1:' values.address',
  //         city: "values.city",
  //         state: "values.state",
  //         country: 'values.country',
  //         zip: "values.zipCode",
  //         address2: 'values.Apt_floor',
  //       };
  //       console.log('=====>',data)
  //       dispatch(clientUpdateAddress(data,navigation))

  // },[])

  return (
    <SafeAreaView style={style.container}>
      <ScrollView keyboardShouldPersistTaps={"handled"}>
        <View style={style.firstView}>
          <ImageBackground source={backgroundImage}>
            <View style={{ flexDirection: "row", padding: 20 }}>
              <Entypo
                name="cross"
                size={30}
                style={style.custIcon}
                onPress={() => navigation.goBack()}
              />
              <Text style={style.headerTitle}>Search Address</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ padding: spacing.m, flex: 1 }}>
          <View>
            <MapView
              provider="google"
              ref={mapRef}
              style={{ height: 150 }}
              onRegionChange={onRegionChange}
              showsUserLocation={true}
              initialRegion={{
                latitude: latitude ? latitude : 20.5937,
                longitude: longitude ? longitude : 78.9629,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }}
            >
              <Marker
                coordinate={{
                  latitude: latitude ? latitude : 20.5937,
                  longitude: longitude ? longitude : 78.9629,
                  latitudeDelta: 0.005,
                  longitudeDelta: 0.005,
                }}
              />
            </MapView>
          </View>
          <View
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              zIndex: 1,
              padding: spacing.m,
              marginTop: 200,
            }}
          >
            <Text style={style.txtFieldTitle}>Search for Address</Text>
            <ScrollView keyboardShouldPersistTaps={"handled"}>
              <GooglePlacesAutocomplete
                placeholder="Enter Location"
                styles={{
                  textInputContainer: {
                    backgroundColor: "#FFFFFF",
                    borderColor: "#E4EFF2",
                    // borderColor:'red',
                    borderRadius: 8,
                    borderWidth: 2,
                    // padding: 10
                  },
                  textInput: {
                    // height: 38,
                    color: "#5d5d5d",
                    fontSize: 16,
                    padding: 8,
                  },
                  predefinedPlacesDescription: {
                    color: "#1faadb",
                  },
                }}
                fetchDetails={true}
                onPress={(data, details = null) => {
                  // console.log( "geolocation data",data);
                  console.log(
                    "geolocation details",
                    details?.address_components?.[0]?.long_name
                  );
                  const addressComponents = details?.address_components;
                  const latLong = details?.geometry?.location;
                  let postalCode = "";
                  let state = "";
                  let address = "";
                  let country = "";
                  let city = "";
                  let latitude = "";
                  let longitude = "";
                  latitude = details?.geometry?.location?.lat;
                  longitude = details?.geometry?.location?.lng;
                  address = details?.formatted_address;
                  country = details?.address_components.find((c) =>
                    c.types.includes("country")
                  )?.long_name;
                  city = details?.address_components.find((c) =>
                    c.types.includes("locality")
                  )?.long_name;

                  for (let i = 0; i < addressComponents.length; i++) {
                    const types = addressComponents[i].types;
                    for (let j = 0; j < types.length; j++) {
                      if (types[j] === "postal_code") {
                        postalCode = addressComponents[i].long_name;
                      }
                      if (types[j] === "administrative_area_level_1") {
                        state = addressComponents[i].long_name;
                      }
                    }
                  }
                  setAddress(address);
                  setAppartment(details?.address_components?.[0]?.long_name);
                  setCity(city);
                  setCountry(country);
                  setZipCode(postalCode);
                  setState(state);
                  setLatitude(latitude);
                  setLongitude(longitude);
                }}
                query={{
                  key: "AIzaSyAo57iuaP1NHJ_e3u9hAdS50JcWL2qILsI",
                  language: "en",
                }}
              />
            </ScrollView>
          </View>
          <Formik
            validationSchema={signUpSchema}
            onSubmit={(values) => submit(values)}
            enableReinitialize
            initialValues={{
              address: address ? address : "",
              Apt_floor: appartment ? appartment : "",
              zipCode: zipCode ? zipCode : "",
              state: state ? state : "",
              country: country ? country : "",
              city: city ? city : "",
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
              <View
                style={[
                  shadow.primary,
                  { padding: spacing.m, marginTop: "40%" },
                ]}
              >
                <Text style={style.txtFieldTitle}>Address</Text>
                <TextInput
                  // style={{ borderBottomWidth: 1 }}
                  // value={address ? address : ""}

                  placeholder="Address"
                  style={{ borderBottomWidth: 1 }}
                  //   maxLength={50}
                  value={values.address}
                  onChangeText={handleChange("address")}
                  placeholderTextColor={"#757588"}
                />
                <View style={{}}>
                  {errors.address ? (
                    <Text style={style.error}>{errors.address}</Text>
                  ) : null}
                </View>
                <Text style={style.txtFieldTitle}>Apt/Suite/Floor</Text>
                <TextInput
                  placeholder="App/Suite/Floor"
                  style={{ borderBottomWidth: 1 }}
                  //   maxLength={50}
                  value={values.Apt_floor}
                  onChangeText={handleChange("Apt_floor")}
                  placeholderTextColor={"#757588"}
                />
                <View style={{}}>
                  {errors.Apt_floor ? (
                    <Text style={style.error}>{errors.Apt_floor}</Text>
                  ) : null}
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 5,
                    borderBottomWidth: 1,
                  }}
                >
                  <View style={{ flex: 1, marginRight: 1 }}>
                    <Text style={style.txtFieldTitle}>Zip Code</Text>
                    <TextInput
                      // style={{ backgroundColor: "white" }}
                      // value={zipCode ? zipCode : ""}
                      placeholder="ZipCode"
                      //   maxLength={50}
                      value={values.zipCode}
                      onChangeText={handleChange("zipCode")}
                      placeholderTextColor={"#757588"}
                    />
                    <View style={{}}>
                      {errors.zipCode ? (
                        <Text style={style.error}>{errors.zipCode}</Text>
                      ) : null}
                    </View>
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text style={style.txtFieldTitle}>State</Text>
                    {/* <TouchableOpacity
                      style={{ padding: 13 }}
                      onPress={() => {
                        navigation.navigate(NAVIGATION.stateList);
                      }}
                    >
                      <Text>{state ? state : ""}</Text>
                    </TouchableOpacity> */}
                    <TextInput
                      // style={{ backgroundColor: "white" }}
                      // value={zipCode ? zipCode : ""}
                      placeholder="State"
                      //   maxLength={50}
                      value={values.state}
                      onChangeText={handleChange("state")}
                      placeholderTextColor={"#757588"}
                    />
                    <View style={{}}>
                      {errors.state ? (
                        <Text style={style.error}>{errors.state}</Text>
                      ) : null}
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 5,
                    borderBottomWidth: 1,
                  }}
                >
                  <View style={{ flex: 1, marginRight: 2 }}>
                    <Text style={style.txtFieldTitle}>City</Text>
                    {/* <TextInput
                      style={{ backgroundColor: "white" }}
                      value={city ? city : ""}
                    /> */}
                    <TextInput
                      // style={{ backgroundColor: "white" }}
                      // value={zipCode ? zipCode : ""}
                      placeholder="city"
                      //   maxLength={50}
                      value={values.city}
                      onChangeText={handleChange("city")}
                      placeholderTextColor={"#757588"}
                    />
                    <View style={{}}>
                      {errors.city ? (
                        <Text style={style.error}>{errors.city}</Text>
                      ) : null}
                    </View>
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text style={style.txtFieldTitle}>Country</Text>
                    {/* <TouchableOpacity
                      onPress={() => {
                        navigation.navigate(NAVIGATION.countryList);
                      }}
                      style={{
                        padding: 14,
                        alignItems: "center",
                        backgroundColor: "white",
                        justifyContent: "space-between",
                        flexDirection: "row",
                      }}
                    >
                      <Text>{country ? country : ""}</Text>
                      <Feather name="chevron-right" size={20} />
                    </TouchableOpacity> */}
                    <TextInput
                      // style={{ backgroundColor: "white" }}
                      // value={zipCode ? zipCode : ""}
                      placeholder="Country"
                      //   maxLength={50}
                      value={values.country}
                      onChangeText={handleChange("country")}
                      placeholderTextColor={"#757588"}
                    />
                    <View style={{}}>
                      {errors.country ? (
                        <Text style={style.error}>{errors.country}</Text>
                      ) : null}
                    </View>
                  </View>
                </View>
                <TouchableOpacity onPress={handleSubmit} style={style.btn}>
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Done
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
