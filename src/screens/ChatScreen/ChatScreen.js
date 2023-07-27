import React from 'react';
import { SafeAreaView, View, Text, ImageBackground, ScrollView, Image, TextInput } from 'react-native';
import { style } from './ChatScreen.styles';
import { backgroundImage, noAvailableImg, phoneCall } from '@/assets';
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { spacing } from '@/theme';


const ChatScreen = ({navigation}) => {

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={style.container} 
            // scrollEnabled={false}
            >
                <View style={style.firstView}>
                    {/* <Text>dvjnkjdvbdsjbk</Text> */}
                    <ImageBackground
                        source={backgroundImage}
                        style={style.headerImg}>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between',marginTop:spacing.s }}>
                            <Entypo name="chevron-left" size={30} style={style.custIcon} onPress={()=>navigation.goBack()}/>
                            <Text style={style.headerTitle}>Client Name</Text>
                            <Ionicons name="person" size={25} style={style.custIcon} />
                        </View>
                    </ImageBackground>
                </View>
                <View style={{ flex: 4, }}>
                    <View style={style.noResultView}>
                        <Image source={noAvailableImg} style={style.noResImg} />
                    </View>
                    <Text style={style.noResText}>No result found</Text>

                </View>
                <View style={{ flex: 2,marginVertical:280 }}>
                    <View style={{ marginHorizontal: 10 }}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <View style={{ flex: 2, flexDirection: 'row', borderWidth: 0.5, borderRadius: 10, borderColor: '#D5DBE4' }}>
                                <View style={{ flex: 2, }}>
                                    <TextInput placeholder='Type Something' multiline={true} style={{ padding: 15 }} />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <MaterialCommunityIcons name="message-badge-outline" size={25} style={style.custIcon} />
                                    <Ionicons name="attach" size={30} style={style.custIcon} />
                                </View>
                            </View>
                            <View>
                                <View style={{ flexDirection: 'row', }}>
                                    <View style={{ height: 50, width: 50, backgroundColor: '#ECECEC', borderRadius: 50 }}>
                                        <Feather name="send" size={25} style={style.custIconn} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={{marginBottom:spacing.s}}></View>

            </ScrollView>
        </SafeAreaView>
    )
}
export default ChatScreen;