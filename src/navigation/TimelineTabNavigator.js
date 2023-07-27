import { Timesheet } from '@/screens/DrawerScreens/Timesheet';
import { InvoiceNotes } from '@/screens/InvoiceNotes/InvoiceNotes';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { shadow, spacing } from '@/theme'
import { useNavigation } from '@react-navigation/native'
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, ImageBackground, Image } from 'react-native'
import { backIcon, backgroundImage } from '@/assets'
import { jobStyles } from '@/screens/JobDetails/JobDetailStyle';
import { TimeLinesAll } from '@/screens/JobDetails/Timeline/TimeLineAll';
import { useSelector } from 'react-redux';
const Tab = createMaterialTopTabNavigator();
export function TimelineTabNavigator() {
    const navigation = useNavigation()
    const jobDetailsData = useSelector(
        (state) => state?.user?.jobDetailsDataReducer
    );
    console.log("jobddetaildata=======>", jobDetailsData)
    return (
        <SafeAreaView style={{ flex: 1, width: "100%", height: "100%", backgroundColor: "white" }}>
            <ImageBackground
                resizeMode="cover"
                style={[shadow.primary, { height: 80, padding: 0 }]}
                source={backgroundImage}
            >
                <View style={{ flexDirection: "row", padding: spacing.s }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={backIcon} />
                    </TouchableOpacity>
                    <Text style={jobStyles.jobId}>JOB#{jobDetailsData?.job_id}</Text>
                </View>
                <View style={jobStyles.viewCenter}></View>
            </ImageBackground>
            <View style={{ backgroundColor: "gray", flex: 1 }}>
                <Tab.Navigator screenOptions={({ route }) => ({
                    tabBarHideOnKeyboard: true,
                    headerShown: false,
                    tabBarActiveTintColor: "#195090"
                })}>
                    <Tab.Screen name="All" component={TimeLinesAll} />
                    <Tab.Screen name="Actions" component={TimeLinesAll} />
                    <Tab.Screen name="Notes" component={TimeLinesAll} />
                    <Tab.Screen name="calls" component={TimeLinesAll} />
                </Tab.Navigator>
            </View>
        </SafeAreaView>

    );
}

