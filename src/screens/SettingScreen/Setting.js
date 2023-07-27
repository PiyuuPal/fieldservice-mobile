import React from 'react-native';
import { SafeAreaView, View, Text, ScrollView, ImageBackground, TextInput, Image } from 'react-native';
import { style } from './Setting.styles';
import { backgroundImage, search } from '@/assets';
import Entypo from "react-native-vector-icons/Entypo";

const SettingScreen = ({navigation}) => {
    return (
        <SafeAreaView style={style.container}>
            <ScrollView>
                <View style={style.firstView}>
                    <ImageBackground
                        source={backgroundImage}
                        style={{
                            height: 98,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 12,
                            },
                            shadowOpacity: 0.58,
                            shadowRadius: 16.0,

                            elevation: 24,
                            backgroundColor: "white",
                        }}
                    >
                        <View style={{ flexDirection: "row", padding: 20 }}>
                            <Entypo
                                name="cross"
                                size={30}
                                style={style.custIcon}
                                onPress={() => navigation.goBack()}
                            />
                            <Text style={style.headerTitle}>Settings</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={style.secView}>
                    <View
                        style={{ flexDirection: "row", justifyContent: "space-between", }}>
                        <Text style={style.headerTitle}></Text>
                    </View>




                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SettingScreen;