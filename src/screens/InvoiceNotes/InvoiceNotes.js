import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ImageBackground,
  Image,
} from "react-native";
import { styles } from "./InvoiceNotesStyles";
import { backgroundImage, cancel } from "@/assets";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { invoicenotes } from "@/actions/UserActions";
import { routes } from "@/controllers/routes";
export const InvoiceNotes = ({ route }) => {

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
  const navigation = useNavigation();
  const [textinput, settextinput] = useState("");
  const invoiceid = useSelector((state) => state.user.invoiceDetails?.invoiceDetails?.id);
  const notes = useSelector((state) => state?.user?.invoiceDetails?.invoiceDetails?.invoice_notes);
  // console.log(invoiceid, '=====');

  const dispatch = useDispatch();
  useEffect(() => {
    settextinput(notes);
  }, [notes]);

  const handleSubmit = () => {
    let data = {
      invoice_id: invoiceid,
      invoice_notes: textinput
    }
    // console.log('notedata--', data)
    dispatch(invoicenotes(data,navigation));
    navigation.goBack();
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ImageBackground source={backgroundImage}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", padding: 20 }}>
              <TouchableOpacity
                style={styles.custIcon}
                onPress={() => navigation.goBack()}
              >
                <Image source={cancel} />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Notes</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.container1}>
          <Text style={styles.heading}>Invoice Notes</Text>
          <TextInput
            placeholder="Type Your Note"
            style={styles.textboxfield}
            onChangeText={(text) => settextinput(text)}
            keyboardType="email-address"
            autoCapitalize="none"
            value={textinput}
            multiline={true}
          />
          <TouchableOpacity style={styles.cardbutton} onPress={() => handleSubmit()}><Text style={styles.cardbuttontext}>Save Notes</Text></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
