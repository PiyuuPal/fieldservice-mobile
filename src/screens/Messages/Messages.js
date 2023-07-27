import { GetMessageMember } from "@/actions/UserActions";
import { backgroundImage, search, avater, noAvailableImg } from "@/assets";
import { HomeHeader } from "@/components/CustomHeaders/HomeHeader";
import { MessageHeader } from "@/components/CustomHeaders/MessageHeader";
import { shadow, spacing } from "@/theme";
import React, { useState } from "react";
import { useEffect } from "react";
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

import { useDispatch, useSelector } from "react-redux";

const messages = [
  {
    id: 1,
    sender: "James Anderson",
    text: "Lorem Ipsum is simply dummy ...",
    messageCount: "3",
  },
  { id: 2, sender: "Criag", text: "Lorem Ipsum is simply dummy ..." },
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

const Messages = ({ navigation }) => {
  const dispatch = useDispatch();
  const GetMessageMembers = useSelector(
    (state) => state?.user?.GetMessageMember
  );
  console.log("GetMessageMembers", GetMessageMembers);

  const [searchText, setSearchText] = useState("");

  const renderMessage = ({ item }) => {
    // const initials = item.sender.slice(0, 2).toUpperCase();
    const navigateToMessageScreen = () => {
      navigation.navigate("Chatting", { message: item });
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
          {item?.user_image ? (
            <Image
              style={{
                alignSelf: "center",
                height: 60,
                width: 60,
                borderRadius: 100,
              }}
              source={{
                uri: `https://observancedev.com/public/uploads/user/${item?.user_image}`,
              }}
            />
          ) : (
            <Image
              style={{
                alignSelf: "center",
                height: 60,
                width: 60,
                borderRadius: 100,
              }}
              source={noAvailableImg}
            />
          )}
          {/* </View> */}
          <View style={styles.messageContent}>
            <Text style={styles.sender}>
              {item?.firstname ? item?.firstname : item?.role}
            </Text>
            <Text style={styles.text}>
              {item?.email ? item?.email : item?.msgnum}
            </Text>
          </View>
          {/* {item?.countmesage ? ( */}
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
              {item?.countmesage}
            </Text>
          </View>
          {/* ) : null} */}
        </View>
      </TouchableOpacity>
    );
  };

  const filteredMessages = messages.filter((item) =>
    item.sender.toLowerCase().includes(searchText.toLowerCase())
  );
  useEffect(() => {
    dispatch(GetMessageMember(navigation));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MessageHeader title={"Messages"} />
      <View style={[shadow.shadowImage]}>
        <ImageBackground
          style={{ flexDirection: "row", padding: 20 }}
          source={backgroundImage}
        >
          <View style={styles.viewInput}>
            <TextInput
              placeholder={"Search Contacts"}
              style={{ flex: 1, paddingHorizontal: 10 }}
              placeholderTextColor="#9393AB"
            />
            <Image style={{ alignSelf: "center" }} source={search} />
          </View>
        </ImageBackground>
      </View>

      <View style={{ marginHorizontal: 15, marginVertical: 20 }}>
        <Text style={styles.sender}>All Messages</Text>
      </View>
      {/* <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
        <FontAwesome5Icon name="search" size={24} color="#888" style={styles.searchIcon} />
      </View> */}
      <FlatList
        data={GetMessageMembers}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
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
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
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
});

export default Messages;
