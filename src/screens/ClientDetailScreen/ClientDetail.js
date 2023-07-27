import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  Linking,
} from "react-native";
import { style } from "./ClientDetail.styles";
import {
  backgroundImage,
  callIcon,
  circleDollar,
  city,
  edit,
  enevelop,
  estimatesIcon,
  invoices,
  job,
  leads,
  leadsIcon,
  locatemap,
  location,
  noAvailableImg,
  phoneCall,
  rectDollar,
} from "@/assets";
import { shadow, spacing } from "@/theme";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { useDispatch, useSelector } from "react-redux";
import { clientEditDetail } from "@/actions/UserActions";
import { NAVIGATION } from "@/constants";
import { ModalLoader } from "@/components/ModalLoader";

const ClientDetail = ({ navigation, route }) => {
  const SelectedAddress = route?.params?.AllAddress;
  const [isFocus, setIsFocus] = useState(false);
  const dispatch = useDispatch();
  const getClientDetail = useSelector(
    (state) => state?.user?.storeExistClientListReducer
  );
  const editClientDetailData = useSelector(
    (state) => state?.user?.clientEditDetailsReducer
  );

  console.log("SelectedAddress----->>>", SelectedAddress);

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
    const payload = {
      id: getClientDetail?.id,
    };
    console.log("clientD----", payload);
    dispatch(clientEditDetail(payload, navigation));
  }, [isFocus]);

  const openDialer = () => {
    // console.log('------>>>>>',item)
    let phone = "9772343445";
    let phoneNumberWithPrefix = "";
    if (Platform.OS === "android") {
      phoneNumberWithPrefix = `tel:${phone}`;
    } else {
      phoneNumberWithPrefix = `telprompt:${phone}`;
    }
    Linking.openURL(phoneNumberWithPrefix);
  };

  const DATA = [
    {
      image: job,
      title: "Job",
    },
    {
      image: leads,
      title: "Leads",
    },
    {
      image: invoices,
      title: "Invoices",
    },
    {
      image: estimatesIcon,
      title: "Estimates",
    },
    {
      image: invoices,
      title: "Client Notes",
    },
  ];

  // const Item = ({ item }) => (
  //     <View style={{ flex: 2, marginTop: 10 }}>
  //         <TouchableOpacity style={[style.clientModalView]}>
  //             <View style={{ flexDirection: 'row', }}>
  //                 <Image source={invoices} style={{ marginTop: spacing.s, marginLeft: 10 }} />
  //                 <Text style={style.modalText}>{item?.title}</Text>
  //                 <View style={style.clientCount}>
  //             <Text style={{ color: '#041B3E', textAlign: 'center', }}>2</Text>
  //         </View>
  //             </View>
  //         </TouchableOpacity>
  //     </View>
  // );
  return (
    <SafeAreaView style={style.container}>
      <ScrollView style={style.container}>
        <View style={style.firstView}>
          <ImageBackground source={backgroundImage} style={style.headerImg}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: spacing.s,
              }}
            >
              <Entypo
                name="chevron-left"
                size={30}
                style={style.custIcon}
                onPress={() => navigation.goBack()}
              />
              <Entypo
                name="dots-three-vertical"
                size={25}
                style={style.custIcon}
              />
            </View>
          </ImageBackground>
        </View>

        <View
          style={{ backgroundColor: "#ffffff", flex: 2, shadowColor: "#00000" }}
        >
          <View
            style={{
              backgroundColor: "#ECECEC",
              height: 100,
              width: 100,
              borderRadius: 100,
              alignSelf: "center",
              marginTop: -30,
              justifyContent: "center",
            }}
          >
            <Image
              source={{ uri: editClientDetailData?.image_url }}
              style={{ height: 80, width: 80, alignSelf: "center" }}
            />
          </View>
          <Text style={style.clientTitle}>
            {editClientDetailData?.first_name
              ? editClientDetailData?.first_name
              : "Michlie"}{" "}
            {editClientDetailData?.last_name
              ? editClientDetailData?.last_name
              : "Christopher"}
          </Text>

          <View style={{ padding: 20}}>
            <View style={style.clientMainView}>
              <View style={[style.txtView, { justifyContent: "space-between", marginHorizontal: 2}]}>
                <View>
                  <Image source={rectDollar} />
                </View>
                <View style={{ marginHorizontal: 5 }}>
                  <Text>Total Revenue</Text>
                </View>
                <View>
                  <Text style={[style.txtClient, { marginLeft: 0 }]}>
                    {editClientDetailData?.total_amount_due
                      ? editClientDetailData?.total_amount_due
                      : "2K"}
                  </Text>
                </View>
              </View>
              <View style={{ backgroundColor: "#CECECE", height: 40, width: 1 }}></View>
                <View style={[style.txtView, {justifyContent: "space-between",marginHorizontal:2}]}>
                  <View>
                    <Image source={circleDollar} style={[style.imgIcon, { marginLeft: 0 }]} />
                  </View>
                  <View style={{ marginHorizontal: 5 }}>
                    <Text> Due Amount</Text>
                  </View>
                  <View>
                    <Text style={[style.txtClient, { marginLeft: 0 }]}>
                      ${editClientDetailData?.total_amount_due
                        ? editClientDetailData?.total_amount_due
                        : "59.99"} 
                    </Text>
                  </View>
                </View>
            </View>
          </View>
        </View>

        <View style={{ flex: 2 }}>
          <View
            style={[style.modalsideView, { justifyContent: "space-between" }]}
          >
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={openDialer}
            >
              <Image source={phoneCall} style={{ marginTop: spacing.s }} />
              <Text style={style.modalText}>
                {editClientDetailData?.phone
                  ? editClientDetailData?.phone
                  : "(871) 9589 - 5789"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={callIcon} />
            </TouchableOpacity>
          </View>
          <View style={style.modalEmpView}></View>
          <View style={style.modalsideView}>
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <Image source={enevelop} style={{ marginTop: spacing.xx }} />
              <Text style={style.modalText}>
                {editClientDetailData?.email
                  ? editClientDetailData?.email
                  : "info.job@gmail.com"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style.modalEmpView}></View>
          <View style={style.modalsideView}>
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <Image source={location} style={{ marginTop: spacing.s }} />
              <Text style={style.modalText}>
                {editClientDetailData?.address1
                  ? editClientDetailData?.address1
                  : "Manhattan , New York 10038"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style.modalEmpView}></View>
          <View style={style.modalsideView}>
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <Image source={city} style={{ marginTop: spacing.s }} />
              <Text style={style.modalText}>
                {editClientDetailData?.company_name
                  ? editClientDetailData?.company_name
                  : "Aptech Pvt Ltd"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Text style={style.headingText}>Client Address</Text>
            <View style={style.txtFieldView}>
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() =>
                  navigation.navigate("Search Address screen", {
                    clientId: getClientDetail?.id,
                    type: "clientDetails",
                  })
                }
              >
                <EvilIcons name={"location"} size={30} style={style.custIcon} />
                {/* <TextInput
                                    placeholder="Select Address"
                                    style={style.textboxfield}
                                    placeholderTextColor={"#757588"}
                                /> */}
                <Text style={style.modallText}>
                  {SelectedAddress?.address
                    ? SelectedAddress?.address
                    : editClientDetailData?.address1}

                  {/* {editClientDetailData?.address1
                    ? editClientDetailData?.address1
                    : "gjhgjhj"} */}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* <View style={{ marginTop: 30 }}>
                    <FlatList
                        data={DATA}
                        renderItem={Item}
                        keyExtractor={item => item.id}
                    />
                </View> */}

        <View style={{ flex: 2, marginTop: 30 }}>
          {editClientDetailData?.job_count !== 0 ? (
            <TouchableOpacity
              style={[style.clientModalView]}
              onPress={() =>
                navigation.navigate("Client Jobs", {
                  clientId: getClientDetail?.id,
                })
              }
            >
              <View style={{ flexDirection: "row",width:"100%",justifyContent:"space-between",padding:8}}>
               <View style={{flexDirection:"row"}}>
                <Image
                  source={job}
                  style={{ marginTop: spacing.s }}
                />
                <Text style={style.modalText}>Job</Text>
                </View>
                <View style={style.clientCount}>
                  <Text style={{ color: "#041B3E", textAlign: "center" }}>
                    {editClientDetailData?.job_count
                      ? editClientDetailData?.job_count
                      : "0"}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={[style.clientModalView]}>
              <View style={{ flexDirection: "row",width:"100%",justifyContent:"space-between",padding:8}}>
               <View style={{flexDirection:"row"}}>
                <Image
                  source={job}
                  style={{ marginTop: spacing.s }}
                />
                <Text style={style.modalText}>Job</Text>
                </View>
                <View style={style.clientCount}>
                  <Text style={{ color: "#041B3E", textAlign: "center" }}>
                    {editClientDetailData?.job_count
                      ? editClientDetailData?.job_count
                      : "0"}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}

          {editClientDetailData?.invoice_count !== 0 ? (
            <TouchableOpacity
              style={[style.clientModalView, { marginVertical: 5 }]}
              onPress={() =>
                navigation.navigate("Client Invoices", {
                  invoiceId: getClientDetail?.id,
                })
              }
            >
              <View style={{ flexDirection: "row" ,width:"100%",justifyContent:"space-between",padding:8}}>
                <View style={{flexDirection:"row"}}>
                <Image
                  source={invoices}
                  style={{ marginTop: spacing.s }}
                />
                <Text style={[style.modalText]}>Invoices</Text>
                </View>
                <View style={style.clientCount}>
                  <Text style={{ color: "#041B3E", textAlign: "center" }}>
                    {editClientDetailData?.invoice_count
                      ? editClientDetailData?.invoice_count
                      : "0"}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[style.clientModalView, { marginVertical: 5 }]}
            >
              <View style={{ flexDirection: "row",width:"100%",justifyContent:"space-between",padding:8}}>
               <View style={{flexDirection:"row"}}>
                <Image
                  source={invoices}
                  style={{ marginTop: spacing.s }}
                />
                <Text style={[style.modalText]}>Invoices</Text>
                </View>
                <View style={style.clientCount}>
                  <Text style={{ color: "#041B3E", textAlign: "center" }}>
                    {editClientDetailData?.invoice_count
                      ? editClientDetailData?.invoice_count
                      : "0"}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}

          {editClientDetailData?.estimate_count !== 0 ? (
            <TouchableOpacity
              style={[style.clientModalView, { marginVertical: 5 }]}
              onPress={() =>
                navigation.navigate("Client Estimates", {
                  estimateId: getClientDetail?.id,
                })
              }
            >
              <View style={{ flexDirection: "row",width:"100%",justifyContent:"space-between",padding:8}}>
               <View style={{flexDirection:"row"}}>
               <Image
                  source={estimatesIcon}
                />
                <Text style={[style.modalText]}>Estimates</Text>
               </View>
                <View style={[style.clientCount]}>
                  <Text style={{ color: "#041B3E", textAlign: "center" }}>
                    {editClientDetailData?.estimate_count
                      ? editClientDetailData?.estimate_count
                      : "0"}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[style.clientModalView, { marginVertical: 5 }]}
            >
              <View style={{ flexDirection: "row",width:"100%",justifyContent:"space-between",padding:8}}>
               <View style={{flexDirection:"row"}}>
                <Image
                  source={estimatesIcon}
                  style={{ marginTop: spacing.s,}}
                />
                <Text style={style.modalText}>Estimates</Text>
                </View>
                <View style={style.clientCount}>
                  <Text style={{ color: "#041B3E", textAlign: "center" }}>
                    {editClientDetailData?.estimate_count
                      ? editClientDetailData?.estimate_count
                      : "0"}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        </View>
        <View style={{ marginBottom: 30 }}></View>
      </ScrollView>
      <ModalLoader modalView={isFocus} />
    </SafeAreaView >
  );
};
export default ClientDetail;
