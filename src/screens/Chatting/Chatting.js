import { ChhattingLists, SendMessage } from "@/actions/UserActions";
import {
  backgroundImage,
  search,
  avater,
  PhoneCall,
  attach,
  arrow,
  phoneCalls,
  saveIcon,
} from "@/assets";
import { HomeHeader } from "@/components/CustomHeaders/HomeHeader";
import { MessageHeader } from "@/components/CustomHeaders/MessageHeader";
import { shadow, spacing } from "@/theme";
import { font } from "@/theme/font";
import moment from "moment";
import React, { useState } from "react";
import { useEffect } from "react";
import { Linking } from "react-native";
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
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { useDispatch, useSelector } from "react-redux";

const messages = [
  {
    id: 1,
    sender: "James Anderson",
    text: "Lorem Ipsum is simply dummy ...",
    messageCount: "3",
  },
  {
    id: 2,
    sender: "Criag",
    text: "Lorem Ipsum is simply dummy ...",
    messageCount: "1",
  },
  {
    id: 3,
    sender: "Grace Vazquez",
    text: "Lorem Ipsum is simply dummy ...",
    messageCount: "1",
  },
  {
    id: 4,
    sender: "Misty Ortega",
    text: "Lorem Ipsum is simply dummy ...",
    messageCount: "2",
  },
  { id: 5, sender: "Christi Reis", text: "Lorem Ipsum is simply dummy ..." },
  {
    id: 6,
    sender: "EFG Home Service",
    text: "Lorem Ipsum is simply dummy ...",
    messageCount: "6",
  },
  // Add more messages as needed
];

const Chatting = ({ navigation, route }) => {
  const User = route?.params?.message;
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const MessageLists = useSelector((state) => state?.user?.MessageList);
  console.log("searchText",searchText)

  console.log("MessageLists", MessageLists?.messages);
  console.log("User User", User);

  const renderMessage = ({ item }) => {
    const initials = item.sender.slice(0, 2).toUpperCase();
    const navigateToMessageScreen = () => {
      navigation.navigate("MessageScreen", { message: item });
    };
    return (
      <TouchableOpacity
        style={styles.messageContainer}
        onPress={navigateToMessageScreen}
      >
        {/* <View style={styles.avatarContainer}> */}
        {/* <Text style={styles.avatar}>{initials}</Text> */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Image
            style={{
              alignSelf: "center",
              height: 60,
              width: 60,
              borderRadius: 100,
            }}
            source={avater}
          />
          {/* </View> */}
          <View style={styles.messageContent}>
            <Text style={styles.sender}>{item.sender}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>

          <View
            style={{
              backgroundColor: "#195090",
              height: 25,
              width: 25,
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
            }}
          >
            <Text style={[styles.sender, { color: "#fff", marginBottom: 0 }]}>
              {item.messageCount}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const filteredMessages = messages.filter((item) =>
    item.sender.toLowerCase().includes(searchText.toLowerCase())
  );

  const ChattingList = [
    { name: "jhghg" },
    { name: "jhgdhg" },
    { name: "jhgdhg" },
    { name: "jhgdhg" },
    { name: "jhgdhg" },
    { name: "jhgdhg" },
  ];
  useEffect(() => {
    const data = { id: User?.id ? User?.id : User?.Id, role: "user" };
    dispatch(ChhattingLists(data, navigation));
  }, []);
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

  const Submit = () => {
    const data = {
      phone_number: User?.phone,
      text: searchText,
      sender: "+18102554513",
      image: "",
    };

    dispatch(SendMessage(data, navigation));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground style={{ flex: 1 }} source={backgroundImage}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 15,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={() => navigation.navigate("Messages")}>
              <Image
                source={require("../../assets/imageslog/Vector.png")}
                style={styles.iconrightChevron}
              />
            </TouchableOpacity>

            <View style={{ paddingHorizontal: 20 }}>
              <Image
                source={avater}
                style={{ width: 40, height: 40, borderRadius: 100 }}
              />
            </View>
            <Text style={styles.headertext}>
              {User?.firstname} {User?.lastname}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                `${"tel:"}${MessageLists?.selectedContact?.phone}`
              );
            }}
            style={{
              backgroundColor: "#91D073",
              padding: 8,
              borderRadius: 100,
              marginHorizontal: 15,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,

              elevation: 8,
            }}
          >
            <Image source={phoneCalls} style={{ width: 22, height: 22 }} />
          </TouchableOpacity>
        </View>
        <View style={{ height: "75%" }}>
          <FlatList
            data={MessageLists?.messages}
            style={{ marginTop: 30 }}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    marginVertical: 10,
                    alignItems:
                      item?.Direction == null ? "flex-end" : "flex-start",
                  }}
                >
                  <View style={{ marginHorizontal: 20, marginVertical: 7 }}>
                    <Text>
                      {item?.Direction == null
                        ? // ? User?.firstname + " " +User?.lastname
                          null
                        : MessageLists?.selectedContact?.first_name +
                          " " +
                          MessageLists?.selectedContact?.last_name}
                    </Text>
                  </View>
                  <View
                    style={{
                      paddingHorizontal: 30,
                      paddingVertical: 10,
                      backgroundColor:
                        item?.Direction == null ? "#fff" : "#C5DFF8",
                      borderRadius: 10,
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
                    // onPress={() => {
                    //   // sendItem(item);

                    // }}
                  >
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: "600",
                        color: "#041B3E",
                        // textAlign: item?.Direction == null ? "right" : "left",
                      }}
                    >
                      {item?.Body}
                    </Text>
                  </View>
                  <View style={{ marginHorizontal: 20, marginVertical: 7 }}>
                    <Text>
                      {item?.Direction == null
                        ? item?.SmsStatus +
                          "  " +
                          moment(item?.created_at).format("LT")
                        : null}
                    </Text>
                  </View>
                </View>
              );
            }}
          ></FlatList>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Write your message...."
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity style={{ paddingHorizontal: 7 }}>
            <Image source={attach} style={{ width: 25, height: 25 }} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {    

              Submit();
            }}
            style={{
              backgroundColor: "#195090",
              padding: 8,
              borderRadius: 100,
              marginHorizontal: 7,
            }}
          >
            <Image source={saveIcon} style={{ width: 25, height: 25 }} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  viewInput: {
    borderWidth: 1,
    borderColor: "#D5DBE4",
    flexDirection: "row",
    width: "100%",
    // paddingRight: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },

  searchIcon: {
    marginLeft: 8,
  },
  messageContainer: {
    // flexDirection: 'row',
    // justifyContent:"space-between",
    marginBottom: 8,
    padding: 10,
    paddingVertical: 15,
    borderWidth: 1.5,
    borderColor: "#E4EFF2",
    marginHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#FFF",
    // shadowColor: '#D5DBE4',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 1.31,

    // elevation: 2,
  },
  avatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  messageContent: {
    flex: 1,
    marginLeft: 16,
  },
  sender: {
    fontWeight: "bold",
    marginBottom: 4,
    fontSize: 16,
    color: "#041B3E",
  },
  text: {
    color: "#757588",
    fontSize: 14,
  },
  viewheader: {
    marginTop: 15,
    paddingBottom: 10,
    height: 150,
  },
  iconrightChevron: {
    marginBottom: "auto",
    marginLeft: spacing.m,
    tintColor: "#195090",
  },
  headertext: {
    color: "#041B3E",
    fontSize: 18,
    fontWeight: "700",

    fontFamily: font.regular,
  },
  searchInput: {
    width: "72%",
    // backgroundColor:"red",
    padding: 20,
    borderRadius: 100,

    // flex: 1,
    // height: 40,
    // borderColor: '#ccc',
    // borderWidth: 1,
    // borderRadius: 8,
    // paddingHorizontal: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C6C6C6",
    borderRadius: 100,
    marginHorizontal: 20,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    position: "absolute",
    bottom: 10,
  },
});

export default Chatting;
