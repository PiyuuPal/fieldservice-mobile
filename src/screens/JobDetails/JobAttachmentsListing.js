import { backIcon, backgroundImage, timeSheetIcon } from '@/assets'
import { shadow, spacing } from '@/theme'
import React, { Component } from 'react'
import { Text, View, ImageBackground, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import { jobStyles } from './JobDetailStyle'
import { useNavigation } from '@react-navigation/native'

export function JobAttachmentsListing() {
    const navigation = useNavigation()
    // const data = [
    //     {
    //       image: require('./images/image1.png'),
    //       title: 'Mensiehrhgs',
    //     },
    //     {
    //       image: require('./images/image3.jpg'),
    //       title: 'MenskjrkjertCasual',
    //     },
    //     {
    //       image: require('./images/image6.png'),
    //       title: 'MensklelkerJacket',
    //     },
    //     {
    //       image: require('./images/image2.jpg'),
    //       title: 'CasualerjkeSlim ',
    //     },
    //     {
    //       image: require('./images/image4.jpg'),
    //       title: 'HandkkneklrKangan',
    //     },
    //     {
    //       image: require(timeSheetIcon),
    //       title: 'MensrelkjtkeKangan',
    //     },
    //     {
    //       image: require('./images/image5.jpg'),
    //       title: 'MensrelkjtkeKangan',
    //     },
    //     {
    //       image: require('./images/image5.jpg'),
    //       title: 'MensrelkjtkeKangan',
    //     },
    //     {
    //       image: require('./images/image5.jpg'),
    //       title: 'MensrelkjtkeKangan',
    //     },
    //     {
    //       image: require('./images/image5.jpg'),
    //       title: 'MensrelkjtkeKangan',
    //     },
    //   ];
    return (
        <SafeAreaView style={{ flex: 1, width: "100%", height: "100%", backgroundColor: "white" }}>
            <ImageBackground
                resizeMode="cover"
                style={[shadow.primary,{ height: 70 ,padding:0}]}
                source={backgroundImage}
            >
                <View style={{ flexDirection: "row", padding: spacing.s }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={backIcon} />
                    </TouchableOpacity>
                    <Text style={jobStyles.jobId}>Attachments</Text>
                </View>
                <View style={jobStyles.viewCenter}></View>
            </ImageBackground>
        </SafeAreaView>
    )
}
