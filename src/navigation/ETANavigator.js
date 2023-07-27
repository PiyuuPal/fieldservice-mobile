import * as React from "react";
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ETA } from "@/constants/navigation";
import OnMyWay from "@/screens/OnMyWay/OnMyWay";
import Late from "@/screens/Late/Late";
import { shadow, spacing } from "@/theme";
import { backIcon, backgroundImage } from "@/assets";
import { useSelector } from "react-redux";
import { jobStyles } from "@/screens/JobDetails/JobDetailStyle";
const Tab = createMaterialTopTabNavigator();

export default function ETANavigator({navigation}) {
  const getjobId = useSelector((state) => state?.job?.getJobId);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: "100%" }}>
        <ImageBackground
          resizeMode="cover"
          style={[shadow.primary, { height: 70 }]}
          source={backgroundImage}
        >
          <View style={{ flexDirection: "row", padding: spacing.s }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={backIcon} />
            </TouchableOpacity>
            <Text style={jobStyles.jobId}>ETA</Text>
          </View>
        </ImageBackground>
      </View>
      <Tab.Navigator>
        <Tab.Screen name={ETA.onmyway} component={OnMyWay} />
        <Tab.Screen name={ETA.late} component={Late} />
      </Tab.Navigator>
    </View>
  );
}
