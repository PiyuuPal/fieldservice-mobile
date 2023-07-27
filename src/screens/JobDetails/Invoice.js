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

import { backIcon, backgroundImage } from "@/assets";

import { TextInput, StyleSheet, Animated } from "react-native";
import moment from "moment";
import { Drawer, drawer } from "@/assets";
import { useDispatch, useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
// import { jobStyles } from "./CreateInvoicejobStyles";
import { Invoicedetails, businessList } from "@/actions/UserActions";

import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
import { NAVIGATION } from "@/constants";

import { createNewInvoice } from "@/actions/UserActions";

export function Invoice({ route }) {
  const dispatch = useDispatch();
  const getjobId = useSelector((state) => state?.job?.getJobId);

  const Invoice = useSelector((state) => state?.job?.tabCount?.data);

  const [JobHide, setJobHide] = useState(false);

  const invoicedetails = useSelector((state) => state.user.invoiceDetails);
  console.log("invoice details----->>>", invoicedetails);
  const filteredData = [
    { id: 1, name: "lab", price: "20.25", quantity: 2.0 },
    { id: 2, name: "pen", price: "5.00", quantity: 1.0 },
  ];
  useEffect(() => {
    // console.log('existingclient-->');
    if (route?.params?.type == "client") {
      const data = {
        po: route?.params?.poNumber,
        client_id: route?.params?.clientId,
      };
      dispatch(createNewInvoice(data));
    } else {
      const invoice_id = route?.params?.invoiceId;
      dispatch(Invoicedetails(invoice_id));
    }
  }, []);
  const [expandedItems, setExpandedItems] = useState([]);
  const navigation = useNavigation();
  const [subtotal, setSubtotal] = useState(0);
  const handleAccordionToggle = (item) => {
    if (expandedItems.includes(item)) {
      setExpandedItems(expandedItems.filter((i) => i !== item));
    } else {
      setExpandedItems([...expandedItems, item]);
    }
  };
  useEffect(() => {
    calculateSubtotal();
  }, []);
  const calculateSubtotal = () => {
    let calculatedSubtotal = 0;
    filteredData.forEach((item) => {
      const total = item.quantity * parseFloat(item.price);
      calculatedSubtotal += total;
    });
    setSubtotal(calculatedSubtotal);
  };
  const RenderItemsComponent = (item) => {
    // Implement your custom component for "Items" here
    console.log(item);
    const total = item.item.quantity * parseFloat(item.item.price);

    return (
      <View style={jobStyles.itemdetails}>
        <Text style={jobStyles.itemname}>{item.item.item_name}</Text>
        <Text style={jobStyles.quantity}>
          {item.item.quantity} x {item.item.price} (Per item)
        </Text>
        <Text style={jobStyles.price}>${total.toFixed(2)}</Text>
      </View>
    );
  };

  const isItemExpanded = (item) => {
    return expandedItems.includes(item);
  };

  const renderItem = (item) => {
    const isExpanded = isItemExpanded(item);
    const navigatepath = "Invoice " + item;
    const rotateValue = useRef(new Animated.Value(isExpanded ? 1 : 0)).current;
    const rotateAnimation = rotateValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "90deg"],
    });

    const handleAccordionToggle = () => {
      if (isExpanded) {
        Animated.timing(rotateValue, {
          toValue: 0,
          duration: 100, // Transition time in milliseconds (adjust as needed)
          useNativeDriver: true,
        }).start(() => {
          setExpandedItems(expandedItems.filter((i) => i !== item));
        });
      } else {
        setExpandedItems([...expandedItems, item]);
        Animated.timing(rotateValue, {
          toValue: 1,
          duration: 300, // Transition time in milliseconds (adjust as needed)
          useNativeDriver: true,
        }).start();
      }
    };

    return (
      <View key={item} style={jobStyles.itemContainer}>
        <TouchableOpacity
          style={jobStyles.itemHeader}
          onPress={handleAccordionToggle}
        >
          <Animated.View
            style={{
              transform: [{ rotate: rotateAnimation }],
            }}
          >
            <Ionicons name="arrow-forward" size={15} style={jobStyles.icon} />
          </Animated.View>
          <Text style={jobStyles.itemHeaderText}>{item}</Text>
          <TouchableOpacity style={{ marginLeft: "auto" }}>
            <Text
              onPress={() => navigation.navigate(navigatepath)}
              style={{ fontSize: 20 }}
            >
              +
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
        {isExpanded && (
          <View style={jobStyles.itemContent}>
            {item === "Job Items" && (
              <View>
                <FlatList
                  data={invoicedetails?.invoiceItems}
                  renderItem={RenderItemsComponent}
                  keyExtractor={(item) => item.id}
                  contentContainerStyle={jobStyles.flatList}
                />
                <View>
                  <View style={jobStyles.amount}>
                    <Text style={jobStyles.amountheading}>Sub total</Text>
                    <Text style={jobStyles.textamount}>
                      ${subtotal.toFixed(2)}
                    </Text>
                  </View>
                  <View style={jobStyles.amount}>
                    <Text style={jobStyles.amountheading}>Tax rate 8.00%</Text>
                    <Text style={jobStyles.textamount}>0</Text>
                  </View>
                  <View style={jobStyles.amount}>
                    <Text style={jobStyles.amountheading}>Discount</Text>
                    <Text style={jobStyles.textamount}>0.00(0.00%)</Text>
                  </View>
                </View>
              </View>
            )}
            {item === "Payments" && (
              <View>
                <FlatList
                  data={invoicedetails?.invoiceItems}
                  renderItem={RenderItemsComponent}
                  keyExtractor={(item) => item.id}
                  contentContainerStyle={jobStyles.flatList}
                />
                <View>
                  <View style={jobStyles.amount}>
                    <Text style={jobStyles.amountheading}>Sub total</Text>
                    <Text style={jobStyles.textamount}>
                      ${subtotal.toFixed(2)}
                    </Text>
                  </View>
                  <View style={jobStyles.amount}>
                    <Text style={jobStyles.amountheading}>Tax rate 8.00%</Text>
                    <Text style={jobStyles.textamount}>0</Text>
                  </View>
                  <View style={jobStyles.amount}>
                    <Text style={jobStyles.amountheading}>Discount</Text>
                    <Text style={jobStyles.textamount}>0.00(0.00%)</Text>
                  </View>
                </View>
              </View>
            )}
            {item === "Estimates" && (
              <View>
                <FlatList
                  data={invoicedetails?.invoiceItems}
                  renderItem={RenderItemsComponent}
                  keyExtractor={(item) => item.id}
                  contentContainerStyle={jobStyles.flatList}
                />
                <View>
                  <View style={jobStyles.amount}>
                    <Text style={jobStyles.amountheading}>Sub total</Text>
                    <Text style={jobStyles.textamount}>
                      ${subtotal.toFixed(2)}
                    </Text>
                  </View>
                  <View style={jobStyles.amount}>
                    <Text style={jobStyles.amountheading}>Tax rate 8.00%</Text>
                    <Text style={jobStyles.textamount}>0</Text>
                  </View>
                  <View style={jobStyles.amount}>
                    <Text style={jobStyles.amountheading}>Discount</Text>
                    <Text style={jobStyles.textamount}>0.00(0.00%)</Text>
                  </View>
                </View>
              </View>
            )}
            {item === "Time Sheets ( 01:00 hours)" && (
              <View>
                <FlatList
                  data={invoicedetails?.invoiceItems}
                  renderItem={RenderItemsComponent}
                  keyExtractor={(item) => item.id}
                  contentContainerStyle={jobStyles.flatList}
                />
                <View>
                  <View style={jobStyles.amount}>
                    <Text style={jobStyles.amountheading}>Sub total</Text>
                    <Text style={jobStyles.textamount}>
                      ${subtotal.toFixed(2)}
                    </Text>
                  </View>
                  <View style={jobStyles.amount}>
                    <Text style={jobStyles.amountheading}>Tax rate 8.00%</Text>
                    <Text style={jobStyles.textamount}>0</Text>
                  </View>
                  <View style={jobStyles.amount}>
                    <Text style={jobStyles.amountheading}>Discount</Text>
                    <Text style={jobStyles.textamount}>0.00(0.00%)</Text>
                  </View>
                </View>
              </View>
            )}
            {item === "Costs" && (
              <View>
                <FlatList
                  data={invoicedetails?.invoiceItems}
                  renderItem={RenderItemsComponent}
                  keyExtractor={(item) => item.id}
                  contentContainerStyle={jobStyles.flatList}
                />
                <View>
                  <View style={jobStyles.amount}>
                    <Text style={jobStyles.amountheading}>Sub total</Text>
                    <Text style={jobStyles.textamount}>
                      ${subtotal.toFixed(2)}
                    </Text>
                  </View>
                  <View style={jobStyles.amount}>
                    <Text style={jobStyles.amountheading}>Tax rate 8.00%</Text>
                    <Text style={jobStyles.textamount}>0</Text>
                  </View>
                  <View style={jobStyles.amount}>
                    <Text style={jobStyles.amountheading}>Discount</Text>
                    <Text style={jobStyles.textamount}>0.00(0.00%)</Text>
                  </View>
                </View>
              </View>
            )}
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        <View style={{ width: "100%" }}>
          <ImageBackground
            resizeMode="cover"
            style={[shadow.primary, { height: 80 }]}
            source={backgroundImage}
          >
            <View style={{ flexDirection: "row", padding: spacing.s }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={backIcon} />
              </TouchableOpacity>
              <Text style={jobStyles.jobId}>JOB#{getjobId}</Text>
            </View>
            {/* <View style={jobStyles.viewCenter}>
              <FlatList
                style={{ padding: 10, width: "100%" }}
                renderItem={renderJobTabItem}
                data={darecords}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View> */}
          </ImageBackground>
        </View>
        <ScrollView>
          <TouchableOpacity
            style={{
              backgroundColor: "#041B3E",
              width: 130,
              padding: 5,
              borderRadius: 50,
              marginVertical: 20,
              alignItems: "center",
              justifyContent: "center",
              marginHorizontal: 20,
            }}
            onPress={() => {
              setJobHide(!JobHide);
            }}
          >
            <Text style={{ color: "white", fontWeight: "700" }}>
              Create Invoice
            </Text>
          </TouchableOpacity>
          {JobHide ? (
            <View style={{ marginVertical: 20, marginHorizontal: 20 }}>
              <Text
                style={{ fontSize: 20, color: "#041B3E", fontWeight: "600" }}
              >
                Test Job
              </Text>
              <Text
                style={{ fontSize: 25, color: "#041B3E", fontWeight: "800" }}
              >
                $ 0.00
              </Text>
              <Text
                style={{ fontSize: 16, color: "#041B3E", fontWeight: "600" }}
              >
                Balance $ -100.00
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ fontSize: 15, color: "#041B3E", fontWeight: "600" }}
                >
                  Invoice #04154
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#041B3E",
                    width: 130,
                    padding: 5,
                    borderRadius: 50,
                    marginVertical: 20,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    setJobHide(true);
                  }}
                >
                  <Text style={{ color: "white", fontWeight: "700" }}>
                    View Invoice
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}

          <View>
            {renderItem("Job Items")}
            {renderItem("Payments")}
            {renderItem("Estimates")}
            {renderItem("Time Sheets ( 01:00 hours)")}
            {renderItem("Costs")}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
