import React, { useState, useRef, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Pressable,
  Animated,
} from "react-native";
import moment from 'moment';
import { Drawer, drawer, noAvailableImg } from "@/assets";
import { useDispatch, useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Estimatedetails, Invoicedetails, businessList, estimateDelAttach, estimateDelSigns, estimateDeleteItem, estimatePaymentDelete } from "@/actions/UserActions";
import { backIcon, backgroundImage } from "@/assets";
import { shadow, spacing, typography } from "@/theme";
import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
import { NAVIGATION } from "@/constants";
import { FlatList } from "react-native-gesture-handler";
import { createNewInvoice } from "@/actions/UserActions";
import { styles } from "./CreateEstimateStyles";
import { style } from "../Invoices/Invoices.styles";
import { ModalLoader } from "@/components/ModalLoader";

export const CreateEstimate = ({ route }) => {
  const [gndtotal, setGndtotal] = useState(0);
  const [expandedItems, setExpandedItems] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const navigation = useNavigation();
  const [subtotal, setSubtotal] = useState(0);

  const dispatch = useDispatch();

  const estimatedetails = useSelector((state) => state.user?.estimateDetails);
  const estimateItems = useSelector((state) => state.user?.estimateDetails?.estimateItems);
  const estimatePaymentList = useSelector((state) => state.user?.estimateDetails?.estimatePayment);
  const estimateSignsList = useSelector((state) => state.user?.estimateDetails?.estimateSignature);
  const estimateAttachmentList = useSelector((state) => state.user?.estimateDetails?.estimateAttachment);
  const EstimateNote = useSelector((state) => state.user?.estimateDetails?.estimateDetails?.estimate_notes)
  console.log("Estimate details----Est", estimatedetails?.estimateDetails?.id);

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
  const filteredData = [
    { id: 1, name: "lab", price: "20.25", quantity: 2.0 },
    { id: 2, name: "pen", price: "5.00", quantity: 1.0 },
  ];

  useEffect(() => {
    navigation.addListener('focus', () => {
      setIsFocus(true)
      setTimeout(function () {
        setIsFocus(false)
      }, 2000);
    }, []);
    // console.log('existingclient-->');
    if (route?.params?.type == "client") {
      const data = {
        po: route?.params?.poNumber,
        client_id: route?.params?.clientId,
      };
      dispatch(createNewInvoice(data));
    }
    else {

      const estimate_id = route?.params?.estimateId;
      //  dispatch(Invoicedetails(invoice_id));
      dispatch(Estimatedetails(estimate_id))

    }
  }, []);

  const deleteEstimateItems = (id) => {
    setIsFocus(true)
    let data = {
      id: id,
    }
    console.log('dele--', data)
    // console.log('helloo', id)
    dispatch(estimateDeleteItem(data, navigation, setIsFocus))
  }

  const delEstPaymentItems = (id, estimate_id) => {
    // console.log('helloo', id)
    setIsFocus(true)
    let data = {
      payment_id: id,
      estimate_id: estimate_id,
    }
    console.log('dePay--', data)
    dispatch(estimatePaymentDelete(data, navigation, setIsFocus))
  }

  const deleteSignaturesEstimate = (id) => {
    setIsFocus(true)
    let data = {
      id: id,
      estimate_id: estimatedetails?.estimateDetails?.id,
    }
    console.log('sign--', data)
    dispatch(estimateDelSigns(data, navigation, setIsFocus))
  }

  const deleteAttachedEstimates = (id) => {
    setIsFocus(true)
    let data = {
      id: id,
      estimate_id: estimatedetails?.estimateDetails?.id,
    }
    console.log('attache---', data)
    dispatch(estimateDelAttach(data, navigation, setIsFocus))
  }

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
  let grandTotal = [];
  let addgrandTotal = 0;
  const RenderItemsComponent = (item) => {
    console.log('EstimateItem--', item);
    // Implement your custom component for "Items" here
    console.log(item);
    const total = item.item.quantity * parseFloat(item.item.price);
    grandTotal.push(total);
    console.log('totalEst--', grandTotal);
    addgrandTotal = grandTotal.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
    setGndtotal(addgrandTotal)
    console.log('addgrandTotaEstl-----', addgrandTotal)

    return (
      <View style={{ flexDirection: 'row', marginVertical: 5 }}>
        <View style={{ height: 60, width: 60, backgroundColor: '#ECECEC', justifyContent: 'center', borderRadius: 5, borderWidth: 1, borderColor: '#ECECEC' }}>
          <Image source={noAvailableImg} style={{ height: '90%', width: '90%', alignSelf: 'center' }} />
        </View>
        <View style={{ marginLeft: spacing.x }}>
          <Text style={styles.itemname}>{item?.item?.item_name}</Text>
          <Text style={styles.quantity}>
            {item.item.quantity} x {item.item.price} (Per item)
          </Text>
          <Text style={styles.price}>${total.toFixed(2)}</Text>
        </View>
        <Entypo name="box" size={20} style={[styles.custIconn, { marginLeft: 'auto' }]} onPress={() => deleteEstimateItems(item?.item?.id)} />
      </View>
    );
  };

  const isItemExpanded = (item) => {
    return expandedItems.includes(item);
  };


  const estimatePaymentCard = ({ item }) => {
    return (
      <Pressable style={[style.card, { backgroundColor: '#E4EFF2' }]}>
        <View style={style.cardcontainer}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={[style.txtheader, { backgroundColor: '#E27E7E' }]}>{item?.payment_status}</Text>
          </View>
          <View style={[style.jobDetails, { flexDirection: "row", marginTop: 5 }]}>
            <Entypo name="credit" size={20} style={style.custIconn} />
            <Text style={style.dueDate}>Total Amount</Text>
            <Text style={style.fullname}>${item?.amount_paid}</Text>
            <Entypo name="box" size={20} style={[style.custIconn, { marginLeft: 'auto' }]} onPress={() => delEstPaymentItems(item?.id, item?.estimate_id)} />
          </View>
          <View style={[style.jobDetails, { marginTop: 12 }]}>
            <Entypo name="calendar" size={20} style={style.custIconn} />
            <Text style={style.dueDate}>Payment Date:-</Text>
            <Text style={style.fullname}>{item?.payment_date}</Text>
          </View>
          <View style={[style.jobDetails, { marginTop: 12 }]}>
            <Entypo name="credit-card" size={20} style={style.custIconn} />
            <Text style={style.dueDate}>Payment Mode</Text>
            <Text style={style.fullname}>{item?.payment_mode}</Text>
          </View>
        </View>
      </Pressable>

    )

  }

  const signsOfEstimateList = ({ item }) => {
    const dateString = item?.createdate;
    const formattedDate = dateString.substring(0, 10);
    // console.log('formattedDate--->>>',formattedDate)
    return (
      <View style={[styles.card, { backgroundColor: '#F9F9F9' }]} >
        <View style={styles.cardcontainer}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => deleteSignaturesEstimate(item?.id)}>
              <Text style={[styles.txtheader, { backgroundColor: '#E27E7E' }]}>Delete</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.jobDetails, { marginTop: 12 }]}>
            <View style={{ flex: 1, flexDirection: "row", }}>
              <View style={styles.imgView}>
                <Image
                  source={{ uri: item?.file_name }}
                  style={{ height: "100%", width: "100%", alignSelf: 'center' }}
                />
              </View>
              <Text style={styles.fullname}>{item?.sign_by}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
              <Text style={[styles.jobDescription]}>{formattedDate}</Text>
            </View>
          </View>
          <View style={{ marginBottom: spacing.s }}></View>
        </View>
      </View>
    )
  }


  const attchmentsOfListEstimate = ({ item }) => {
    const dateString = item?.created
    const formattedDate = dateString.substring(0, 10);
    return (
      <View style={[styles.card, { backgroundColor: '#F9F9F9' }]} >
        <View style={styles.cardcontainer}>
          <TouchableOpacity onPress={() => deleteAttachedEstimates(item?.id)}>
            <Text style={[styles.txtheader, { backgroundColor: '#E27E7E' }]}>Delete</Text>
          </TouchableOpacity>
          <View style={[styles.jobDetails, { marginTop: 12 }]}>
            <View style={{ flex: 1, flexDirection: "row", }}>
              <View style={styles.imgView}>
                <Image
                  source={{ uri: item?.file_name }}
                  style={{ height: "100%", width: "100%", alignSelf: 'center', borderRadius: 100 }}
                />
              </View>
              <Text style={styles.fullname}>{item?.upload_by}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
              <Text style={[styles.jobDescription]}>{formattedDate}</Text>
            </View>
          </View>
          <View style={{ marginBottom: spacing.s }}></View>
        </View>
      </View>
    )
  }

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
      <View key={item} style={styles.itemContainer}>
        <TouchableOpacity
          style={styles.itemHeader}
          onPress={handleAccordionToggle}
        >
          <Animated.View
            style={{
              transform: [{ rotate: rotateAnimation }],
            }}
          >
            <Ionicons name="arrow-forward" size={15} style={styles.icon} />
          </Animated.View>
          <Text style={styles.itemHeaderText}>{item}</Text>
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
          <View style={styles.itemContent}>
            {item === "Items" && (
              <View >
                <View style={{ marginHorizontal: spacing.xx }}>
                  <FlatList
                    data={estimateItems}
                    renderItem={RenderItemsComponent}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.flatList}
                  />
                  <View>
                    <View style={styles.amount}>
                      <Text style={styles.amountheading}>Sub total</Text>
                      <Text style={styles.textamount}>
                        ${gndtotal.toFixed(2)}
                      </Text>
                    </View>
                    <View style={styles.amount}>
                      <Text style={styles.amountheading}>Tax rate 8.00%</Text>
                      <Text style={styles.textamount}>0</Text>
                    </View>
                    <View style={styles.amount}>
                      <Text style={styles.amountheading}>Discount</Text>
                      <Text style={styles.textamount}>0.00(0.00%)</Text>
                    </View>
                  </View>
                </View>
                <View style={{ marginHorizontal: 3 }}>
                  <View style={styles.totalPoint}>
                    <View style={styles.amount}>
                      <Text style={styles.totalamountheading}>Total</Text>
                      <Text style={styles.subTotaltextamount}>
                        ${gndtotal.toFixed(2)}
                      </Text>
                    </View>
                    <View style={styles.amount}>
                      <Text style={styles.totalamountheading}>Due</Text>
                      <Text style={styles.subTotaltextamount}>0</Text>
                    </View>
                  </View>
                </View>
              </View>
            )}

            {item === "Payments" && (
              <FlatList
                data={estimatePaymentList}
                renderItem={estimatePaymentCard}
              />
            )}
            <View style={{ marginBottom: 30 }}></View>


            {item === 'Signatures' && (<FlatList
              data={estimateSignsList}
              renderItem={signsOfEstimateList}
            />)}
            <View style={{ marginBottom: 20 }}></View>

            {item === 'Attachments' && (<FlatList
              data={estimateAttachmentList}
              renderItem={attchmentsOfListEstimate}
            />)}
            <View style={{ marginBottom: 20 }}></View>

            {EstimateNote != null ? item === "Notes" && (<TouchableOpacity style={styles.noteView} >
              <View style={{ padding: 15, flexDirection: 'row' }}>
                <Text style={{ color: '#041B3E', marginLeft: 20, fontSize: 18, fontWeight: '400' }}>{EstimateNote}</Text>
              </View>
            </TouchableOpacity>) : null}
            <View style={{ marginBottom: 20 }}></View>
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ width: "100%" }}>
          <ImageBackground
            resizeMode="cover"
            style={[shadow.primary, { height: 150 }]}
            source={backgroundImage}
          >
            <View style={{ flexDirection: "row", padding: spacing.s }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={backIcon} style={styles.backicon} />
              </TouchableOpacity>
              <Text style={styles.invoiceId}>Estimate #{estimatedetails?.estimateDetails?.estimate_id}</Text>
              <TouchableOpacity style={{ marginLeft: "auto" }}>
                <Entypo
                  name="dots-three-vertical"
                  style={styles.doticon}
                  size={20}
                ></Entypo>
              </TouchableOpacity>
            </View>
            <View style={styles.details}>
              <View style={styles.userdetails}>
                <Text>{estimatedetails?.clientDetails?.first_name} {estimatedetails?.clientDetails?.last_name}</Text>
                <Text>{estimatedetails?.billTo?.address1}</Text>
                <Text>Phone {estimatedetails?.clientDetails?.phone}</Text>
              </View>
              <View style={styles.invoicedetails}>
                <Text style={{ marginLeft: "auto" }}>Total: ${gndtotal.toFixed(2)}</Text>
                <Text style={{ marginLeft: "auto" }}>Due: $0.00</Text>
                <Text>Due on: {moment(estimatedetails?.estimatedetails?.due_date).format('ddd Do MMMM YYYY')}</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View>
          {renderItem("Items")}
          {renderItem("Payments")}
          {renderItem("Signatures")}
          {renderItem("Attachments")}
          {renderItem("Notes")}
        </View>
        <ModalLoader modalView={isFocus} />
      </ScrollView>
    </SafeAreaView>
  );
};
