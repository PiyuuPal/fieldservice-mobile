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
import { backIcon, backgroundImage, cancel, edit, invoices, noAvailableImg } from "@/assets";


export function Payment({ route, navigation }) {


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
                <Image source={cancel} />
              </TouchableOpacity>
              <Text style={jobStyles.jobId}>Collect Payment</Text>
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
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              flexDirection: "row",

              // paddingHorizontal: 20,
              alignItems: "center",
              paddingVertical: 10,
              backgroundColor: "#E5F1FF",
              marginHorizontal: 20,
              borderRadius: 10,
              marginVertical: 10,
            }}
          >
            <View
              style={{
                backgroundColor: "#A0BFE0",
                height: 40,
                width: 40,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
                marginHorizontal: 10,
              }}
            >
              <Image source={cancel} />
            </View>

            <Text style={{ paddingHorizontal: 10 }}>
              This Job doesn't have a balance yet
            </Text>
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text>Amount due</Text>
            <View
              style={{
                flexDirection: "row",
                paddingVertical: 10,
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>$0.00</Text>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", marginTop: 12 }}
                >
                  /$0.00{" "}
                </Text>
              </View>
              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Image source={edit} style={{ width: 16, height: 16 }} />
                <Text
                  style={{
                    color: "#A0BFE0",
                    paddingHorizontal: 10,
                    fontWeight: "bold",
                  }}
                >
                  Edit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{ color: "orange", marginHorizontal: 20 }}>
            Amount is required to collect payment
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#041B3E",
              marginHorizontal: 20,
              padding: 10,
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 100
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "900" }}>Type card manually</Text>
          </TouchableOpacity>

         

         

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
