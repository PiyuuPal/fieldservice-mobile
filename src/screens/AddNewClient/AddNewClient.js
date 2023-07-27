import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { style } from "./AddNewClient.styles";
import {
  backgroundImage,
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
import Entypo from "react-native-vector-icons/Entypo";
import { shadow, spacing } from "@/theme";
import { Formik } from "formik";
import * as Yup from "yup";
import { createaClient } from "@/actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import { NAVIGATION } from "@/constants";
import { useFormik } from "formik";

const AddNewClient = ({ route, navigation }) => {
  //console.log(route?.params);
  const dispatch = useDispatch();
  const googleMapstoredata = useSelector(
    (state) => state?.business?.storeGoogleAddreesListReducer
  );

  useEffect(() => {
    formik.setFieldValue("address", googleMapstoredata?.address);
    formik.setFieldValue("floar", googleMapstoredata?.appartment);
    formik.setFieldValue("cities", googleMapstoredata?.city);
    formik.setFieldValue("countries", googleMapstoredata?.country);
    formik.setFieldValue("states", googleMapstoredata?.state);
    formik.setFieldValue("pincode", googleMapstoredata?.zipCode);
  }, [googleMapstoredata]);

  const validate = (values) => {

    const errors = {};

    // Perform your validation logic
    // For example, check if a field is empty
    if (!values.email) {
      errors.email = "email is required";
    }
    if (!values.firstname) {
      errors.firstname = "firstname is required";
    }
    if (!values.lastname) {
      errors.lastname = "lastname is required";
    }
    if (!values.phonenumber) {
      errors.phonenumber = "phonenumber is required";
    }
    if (!values.email) {
      errors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.address) {
      errors.address = "address is required";
    }
    if (!values.floar) {
      errors.floar = "floar is required";
    }
    if (!values.pincode) {
      errors.pincode = "pincode is required";
    }
    if (!values.states) {
      errors.states = "states is required";
    }
    if (!values.cities) {
      errors.cities = "cities is required";
    }
    if (!values.countries) {
      errors.countries = "countries is required";
    }
    if (!values.companyname) {
      errors.companyname = "companyname is required";
    }

    // Add more validation rules as needed

    return errors;
  };

  const createNewJob = (values) => {

    let data = {
      first_name: values?.firstname,
      last_name: values?.lastname,
      company_name: values?.companyname,
      phone_number: values?.phonenumber,
      email: values?.email,
      type: "Regular",
      ad_source_id: "1",
      is_allow_billing: "0",
      address1: values?.address,
      city: values?.cities,
      state: values?.states,
      zip: values?.pincode,
      country: values?.countries,
    };

    dispatch(createaClient(data, navigation, route?.params?.screen === "invoice"));
  };

  const formik = useFormik({
    initialValues: {
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
    },
    onSubmit: createNewJob,
    validate,
  });

  return (
    <SafeAreaView style={style.container}>
      <ScrollView style={style.container}>
        <View style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 1,
            height: 1,
          },
          shadowOpacity: 0.5,
          shadowRadius: 3,
          elevation: 50,
          backgroundColor: "white",
          paddingBottom: 10
        }}>
          <ImageBackground
            source={backgroundImage}
            resizeMode="cover"
            style={[shadow.primary, { height: 100, paddingTop: 30 }]}
          >
            <View style={{ flexDirection: "row" }}>
              <Entypo
                name="cross"
                size={30}
                // style={{marginTop:2}}
                onPress={() => navigation.goBack()}
              />
              <Text style={[style.headerTitle, { padding: 0, marginLeft: 20 }]}>Client Details</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={style.secView}>
          {/* <Text>jnjnjjn</Text> */}
          <View style={{ marginHorizontal: 20, marginTop: spacing.x }}>
            <Text style={style.txtFieldTitle}>First Name</Text>
            <View style={style.txtFieldView}>
              <View style={{ flexDirection: "row" }}>
                <Image style={{ margin: 12 }} source={person} />
                <TextInput
                  placeholder="First Name"
                  onChangeText={formik.handleChange("firstname")}
                  style={style.textboxfield}
                  onBlur={formik.handleBlur("firstname")}
                  value={formik.values.firstname}
                />
              </View>
            </View>

            {formik.errors.firstname && formik.touched.firstname && (
              <Text style={style.error}>{formik.errors.firstname}</Text>
            )}

            <View style={{ marginTop: spacing.x }}>
              <Text style={style.txtFieldTitle}>Last Name</Text>
              <View style={style.txtFieldView}>
                <View style={{ flexDirection: "row" }}>
                  <Image style={{ margin: 12 }} source={person} />
                  <TextInput
                    placeholder="Last Name"
                    onChangeText={formik.handleChange("lastname")}
                    style={style.textboxfield}
                    onBlur={formik.handleBlur("lastname")}
                    value={formik.values.lastname}

                  // keyboardType="email-address"
                  // autoCapitalize="none"
                  />
                </View>
              </View>
              {formik.errors.lastname && formik.touched.lastname && (
                <Text style={style.error}>{formik.errors.lastname}</Text>
              )}
            </View>

            <View style={{ marginTop: spacing.x }}>
              <Text style={style.txtFieldTitle}>Phone Number</Text>
              <View style={style.txtFieldView}>
                <View style={{ flexDirection: "row" }}>
                  <Image style={{ margin: 16 }} source={phoneCall} />
                  <TextInput
                    placeholder="Phone Number"
                    onChangeText={formik.handleChange("phonenumber")}
                    style={style.textboxfield}
                    onBlur={formik.handleBlur("phonenumber")}
                    value={formik.values.phonenumber}
                    maxLength={10}
                  />
                </View>
              </View>
              {formik.errors.phonenumber && formik.touched.phonenumber && (
                <Text style={style.error}>{formik.errors.phonenumber}</Text>
              )}
            </View>

            <View style={{ marginTop: spacing.x }}>
              <Text style={style.txtFieldTitle}>Email Address</Text>
              <View style={style.txtFieldView}>
                <View style={{ flexDirection: "row" }}>
                  <Image style={{ margin: 16 }} source={enevelop} />
                  <TextInput
                    placeholder="Registered Email Address"
                    onChangeText={formik.handleChange("email")}
                    style={style.textboxfield}
                    onBlur={formik.handleBlur("email")}
                    value={formik.values.email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>
              </View>
              {formik.errors.email && formik.touched.email && (
                <Text style={style.error}>{formik.errors.email}</Text>
              )}
            </View>

            {/* <View style={{ marginHorizontal: 20, height: 30, backgroundColor: 'pink', marginVertical: 10 }}>
                                    <Text style={{ textAlign: 'center' }}>Map</Text>
                                </View> */}
            <View style={{ marginTop: spacing.x }}>
              <Text style={style.txtFieldTitle}>Address</Text>
              <TouchableOpacity
                style={style.txtFieldView}
                onPress={() => navigation.navigate(NAVIGATION.address)}
              >
                <View style={{ flexDirection: "row" }}>
                  <Image style={{ margin: 16 }} source={location} />
                  <TextInput
                    placeholder="Address"
                    onChangeText={formik.handleChange("address")}
                    style={{ width: "80%" }}
                    onBlur={formik.handleBlur("address")}
                    value={formik.values.address}
                  />
                </View>
              </TouchableOpacity>
              {formik.errors.address && formik.touched.address && (
                <Text style={style.error}>{formik.errors.address}</Text>
              )}
              {/* {errors.address && touched.address && <Text style={style.error}>{errors.address}</Text>} */}
              <View style={[style.txtFieldView, { marginTop: spacing.x }]}>
                <View style={{ flexDirection: "row" }}>
                  <Image style={{ margin: 16 }} source={location} />
                  {/* <Text>{googleMapstoredata?.address}</Text> */}
                  <TextInput
                    placeholder="Apt/ Suite / Floor"
                    onChangeText={formik.handleChange("floar")}
                    style={style.textboxfield}
                    onBlur={formik.handleBlur("floar")}
                    // value={googleMapstoredata?.address ? googleMapstoredata?.address : values.floar}
                    value={formik.values.floar}
                  />
                </View>
              </View>
              {formik.errors.floar && formik.touched.floar && (
                <Text style={style.error}>{formik.errors.floar}</Text>
              )}

              <View style={[style.txtFieldView, { marginTop: spacing.x }]}>
                <View style={{ flexDirection: "row" }}>
                  <Image style={{ margin: 16 }} source={zipcode} />
                  <TextInput
                    placeholder="Zip Code"
                    onChangeText={formik.handleChange("pincode")}
                    style={style.textboxfield}
                    onBlur={formik.handleBlur("pincode")}
                    // value={googleMapstoredata?.zipCode ? googleMapstoredata?.zipCode : values.pincode}
                    value={formik.values.pincode}
                  />
                </View>
              </View>
              {formik.errors.pincode && formik.touched.pincode && (
                <Text style={style.error}>{formik.errors.pincode}</Text>
              )}

              <View style={[style.txtFieldView, { marginTop: spacing.x }]}>
                <View style={{ flexDirection: "row" }}>
                  <Image style={{ margin: 16 }} source={state} />
                  <TextInput
                    placeholder="State"
                    onChangeText={formik.handleChange("states")}
                    style={style.textboxfield}
                    onBlur={formik.handleBlur("states")}
                    // value={googleMapstoredata?.state ? googleMapstoredata?.state : values.states}
                    value={formik.values.states}
                  />
                </View>
              </View>
              {formik.errors.states && formik.touched.states && (
                <Text style={style.error}>{formik.errors.states}</Text>
              )}

              <View style={[style.txtFieldView, { marginTop: spacing.x }]}>
                <View style={{ flexDirection: "row" }}>
                  <Image style={{ margin: 16 }} source={city} />
                  <TextInput
                    placeholder="City"
                    onChangeText={formik.handleChange("cities")}
                    style={style.textboxfield}
                    onBlur={formik.handleBlur("cities")}
                    // value={googleMapstoredata?.city ? googleMapstoredata?.city : values.cities}
                    value={formik.values.cities}
                  />
                </View>
              </View>
              {formik.errors.cities && formik.touched.cities && (
                <Text style={style.error}>{formik.errors.cities}</Text>
              )}

              <View style={[style.txtFieldView, { marginTop: spacing.x }]}>
                <View style={{ flexDirection: "row" }}>
                  <Image style={{ margin: 16 }} source={country} />
                  <TextInput
                    placeholder="Country"
                    onChangeText={formik.handleChange("countries")}
                    style={style.textboxfield}
                    onBlur={formik.handleBlur("countries")}
                    // value={googleMapstoredata?.country ? googleMapstoredata?.country : values.countries}
                    value={formik.values.countries}
                  />
                </View>
              </View>
            </View>
            {formik.errors.countries && formik.touched.countries && (
              <Text style={style.error}>{formik.errors.countries}</Text>
            )}

            <View style={{ marginTop: spacing.x }}>
              <Text style={style.txtFieldTitle}>Client Company Name</Text>
              <View style={style.txtFieldView}>
                <View style={{ flexDirection: "row" }}>
                  <Image style={{ margin: 16 }} source={companyName} />
                  <TextInput
                    placeholder="Company Name"
                    onChangeText={formik.handleChange("companyname")}
                    style={style.textboxfield}
                    onBlur={formik.handleBlur("companyname")}
                    value={formik.values.companyname}
                  />
                </View>
              </View>
            </View>
            <View style={{}}>
              {formik.errors.companyname && formik.touched.companyname && (
                <Text style={style.error}>{formik.errors.companyname}</Text>
              )}
            </View>

            <TouchableOpacity
              style={style.logInbutton}
              onPress={formik.handleSubmit}
            >
              <View style={style.logInbuttonView}>
                <Entypo
                  name="arrow-right"
                  size={20}
                  style={style.logInbuttonIcon}
                />
              </View>
              <Text style={[style.txtFieldTitle, { fontSize: 16 }]}>Save</Text>
            </TouchableOpacity>
            <View style={{ marginBottom: spacing.s }}></View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default AddNewClient;
