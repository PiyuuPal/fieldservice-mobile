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

import { useDispatch, useSelector } from "react-redux";

import { backIcon, backgroundImage } from "@/assets";

export function Quotes({ route, navigation }) {
  const Invoice = useSelector((state) => state?.job?.tabCount?.data);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        <View style={{ width: "100%" }}>
          <ImageBackground
            resizeMode="cover"
            style={[shadow.primary, { height: 10 }]}
            source={backgroundImage}
          ></ImageBackground>
        </View>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              alignItems: "center",
              paddingVertical: 20,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600" }}>Quotes</Text>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: "#041B3E",
                padding: 10,
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 16, color: "#fff" }}>
                {Invoice?.[3]?.count}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
