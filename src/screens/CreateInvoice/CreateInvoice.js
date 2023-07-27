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
  Animated,
  Pressable,
  Appearance
} from "react-native";
import moment from 'moment';
import { Drawer, drawer, invoices, noAvailableImg } from "@/assets";
import { useDispatch, useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import { styles } from "./CreateInvoiceStyles";
import { Invoicedetails, businessList, deleteInvoiceAttach, deleteInvoiceSigns, invoiceDeleteItem, invoicePaymentDelete } from "@/actions/UserActions";
import { backIcon, backgroundImage } from "@/assets";
import { shadow, spacing, typography } from "@/theme";
import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";
import { NAVIGATION } from "@/constants";
import { FlatList } from "react-native-gesture-handler";
import { createNewInvoice } from "@/actions/UserActions";
import { Payment } from "../JobDetails/Payment";
import { ModalLoader } from "@/components/ModalLoader";
import { style } from "../Invoices/Invoices.styles";


export const CreateInvoice = ({ route }) => {

  const dispatch = useDispatch();
  const [expandedItems, setExpandedItems] = useState([])
  const [isFocus, setIsFocus] = useState(false);
  const navigation = useNavigation();
  const [subtotal, setSubtotal] = useState(0);
  const [gndtotal, setGndtotal] = useState(0);

  const invoicedetails = useSelector((state) => state.user.invoiceDetails);
  const invoicedetailId = useSelector((state) => state.user.invoiceDetails?.invoiceDetails?.id);
  const paymentItems = useSelector((state) => state.user.invoiceDetails?.invoicePayment);
  const invoiceNote = useSelector((state) => state.user.invoiceDetails?.invoiceDetails?.invoice_notes);
  const invoiceAttachments = useSelector((state) => state.user.invoiceDetails?.invoiceAttachment);
  const invoiceSignatures = useSelector((state) => state.user.invoiceDetails?.invoiceSignature);
  console.log("invoicedetails--", invoicedetails)
  console.log("invoiceAttachments--", invoiceAttachments)

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
    // console.log('existingclient-->');
    navigation.addListener('focus', () => {
      setIsFocus(true)
      setTimeout(function () {
        setIsFocus(false)
      }, 2000);
    }, []);

    if (route?.params?.type == "client") {
      const data = {
        po: route?.params?.poNumber,
        client_id: route?.params?.clientId,
      };
      dispatch(createNewInvoice(data));
    }
    else {

      const invoice_id = route?.params?.invoiceId;
      // const invoice_id = invoiceListData?.[0]?.invoice_id;
      console.log('sdsdsdsd---', invoice_id)
      dispatch(Invoicedetails(invoice_id));

    }
  }, [isFocus]);

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
      // console.log('rrraddd----',total)
      calculatedSubtotal += total;
    });
    // console.log('addd----',calculatedSubtotal)
    setSubtotal(calculatedSubtotal);
  };

  let grandTotal = [];
  let addgrandTotal = 0;
  const RenderItemsComponent = (item) => {
    // Implement your custom component for "Items" here
    console.log('InvoiceItemsListing--', item);
    const total = item.item.quantity * parseFloat(item.item.price);
    grandTotal.push(total);
    console.log('total0000--', grandTotal);
    addgrandTotal = grandTotal.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
    setGndtotal(addgrandTotal)
    console.log('addgrandTotal-----', addgrandTotal)
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
        <Entypo name="box" size={20} style={[style.custIconn, { marginLeft: 'auto' }]} onPress={() => deleteInvoiceItems(item?.item?.id)} />
      </View>


    );
  };

  const itemsOFPayment = paymentItems;
  const delPaymentItems = (id, invoice_id) => {
    setIsFocus(true)
    let data = {
      payment_id: id,
      invoice_id: invoice_id,
    }
    dispatch(invoicePaymentDelete(data, navigation, setIsFocus))
  }


  const deleteInvoiceItems = (id) => {
    setIsFocus(true)
    let data = {
      id: id,
    }
    console.log(';;;;;---', data)
    dispatch(invoiceDeleteItem(data, navigation, setIsFocus))
  }


  const deleteAttachedInvoices = (id) => {
    setIsFocus(true)
    let data = {
      id: id,
      invoice_id: invoicedetailId,
    }
    console.log('attache---', data)
    dispatch(deleteInvoiceAttach(data, navigation, setIsFocus))
  }


  const deleteSignaturesInvoices = (id) => {
    setIsFocus(true)
    let data = {
      id: id,
      invoice_id: invoicedetailId,
    }
    console.log('attache-sign--', data)
    dispatch(deleteInvoiceSigns(data, navigation, setIsFocus))
  }


  const paymentCard = ({ item }) => {
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
            <Entypo name="box" size={20} style={[style.custIconn, { marginLeft: 'auto' }]} onPress={() => delPaymentItems(item?.id, item?.invoice_id)} />
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


  const listOfInvoiceSigns = invoiceSignatures;
  const listOFInvoicsAttach = invoiceAttachments;
  // console.log('5555--', listOFInvoicsAttach)

  const signsOfInvoiceList = ({ item }) => {
    const dateString = item?.createdate;
    const date = new Date(dateString);
    // const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    // const hyphenatedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    // const formattedDate = hyphenatedDate.replace(/\//g, '-');
    const formattedDate = date.toISOString().slice(0, 10);
    return (
      <View style={[styles.card, { backgroundColor: '#F9F9F9' }]} >
        <View style={styles.cardcontainer}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => deleteSignaturesInvoices(item?.id)}>
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

  const attchmentsOfListInvoice = ({ item }) => {
    const dateString = item?.created
    const date = new Date(dateString);
    // const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    // const hyphenatedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    // const formattedDate = hyphenatedDate.replace(/\//g, '-');
    const formattedDate = date.toISOString().slice(0, 10);
    return (
      <View style={[styles.card, { backgroundColor: '#F9F9F9' }]} >
        <View style={styles.cardcontainer}>
          <TouchableOpacity onPress={() => deleteAttachedInvoices(item?.id)}>
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
                    data={invoicedetails?.invoiceItems}
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
                      <Text style={styles.subamountheading}>Tax rate 8.00%</Text>
                      <Text style={styles.subtextamount}>0</Text>
                    </View>
                    <View style={styles.subamount}>
                      <Text style={styles.subamountheading}>Discount</Text>
                      <Text style={styles.subtextamount}>0.00(0.00%)</Text>
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
                data={itemsOFPayment}
                renderItem={paymentCard}
              />
            )}
            <View style={{ marginBottom: 30 }}></View>


            {invoiceNote != null ? item === "Notes" && (<TouchableOpacity style={styles.noteView}
            // onPress={() => handleItemPress(item)}
            >
              <View style={{ padding: 15, flexDirection: 'row' }}>
                <Text style={{ color: '#041B3E', marginLeft: 20, fontSize: 18, fontWeight: '400' }}>{invoiceNote}</Text>
              </View>
            </TouchableOpacity>) : null}
            <View style={{ marginBottom: 20 }}></View>


            {item === 'Signatures' && (<FlatList
              data={listOfInvoiceSigns}
              renderItem={signsOfInvoiceList}
            />)}
            <View style={{ marginBottom: 20 }}></View>

            {item === 'Attachments' && (<FlatList
              data={listOFInvoicsAttach}
              renderItem={attchmentsOfListInvoice}
            />)}
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
              <Text style={styles.invoiceId}>Invoice #{invoicedetails?.invoiceDetails?.invoice_id}</Text>
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
                <Text>{invoicedetails?.clientDetails?.first_name} {invoicedetails?.clientDetails?.last_name}</Text>
                <Text>{invoicedetails?.billTo?.address1}</Text>
                <Text>Phone {invoicedetails?.clientDetails?.phone}</Text>
              </View>
              <View style={styles.invoicedetails}>
                <Text style={{ marginLeft: "auto" }}>Total:${gndtotal.toFixed(2)}</Text>
                <Text style={{ marginLeft: "auto" }}>Due: $0.00</Text>
                <Text>Due on: {moment(invoicedetails?.invoiceDetails?.due_date).format('ddd Do MMMM YYYY')}</Text>
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
