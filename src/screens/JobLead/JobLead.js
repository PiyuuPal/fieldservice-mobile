import React from 'react';
import { SafeAreaView, TextInput, View, ScrollView, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { style } from './JobLead.styles';
import { backgroundImage, bell, cyberwolf, search } from '@/assets';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { spacing } from '@/theme';
import { useNavigation } from '@react-navigation/native';

const JobLead = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={style.container}>
                <View style={style.firstView}>
                    <ImageBackground source={backgroundImage}>
                        <View style={{ flexDirection: 'row', padding: 20 }}>
                            <Entypo name="cross" size={30} style={style.custIcon} onPress={()=>navigation.goBack()} />
                            <Text style={style.headerTitle}>New Lead</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={style.secView}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={style.headerTitle}>Client Info</Text>
                        <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                            <Entypo name="circle-with-plus" size={30} style={[style.custIcon, { color: "#195090" }]} />
                            <Text style={style.headersubTitle}>Add New Client</Text>
                        </View>
                    </View>
                    <View style={style.searchView}>
                        <TextInput style={style.textboxfield} placeholder="Search for Clients" />
                        <Image source={search} style={style.imgIcon} />
                    </View>
                    {/* <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: spacing.s }}>
                        <View style={{ flex: 2 }}>
                            <View style={{ backgroundColor: 'white', borderRadius: 100, height: 70, width: 70, }}>
                                <Image source={cyberwolf} style={{ height: 50, width: 50, alignSelf: 'center' }} />
                            </View>
                        </View>
                        <View style={{ flex: 4 }}>
                            <Text style={style.txtClient}>Client</Text>
                            <Text style={style.txtName}>Michlie Christopher</Text>
                            <View style={style.clientDetailView}>
                                <Entypo name="phone" size={18} style={[style.txtwithIcon]} />
                                <Text style={style.txtClientDetail}>(817) 915-5534</Text>
                            </View>
                            <View style={style.clientDetailView}>
                                <Entypo name="location" size={18} style={[style.txtwithIcon]} />
                                <Text style={style.txtClientDetail}>Manhattan , New York 10038</Text>
                            </View>
                            <View style={style.clientDetailView}>
                                <Entypo name="mail" size={18} style={[style.txtwithIcon]} />
                                <Text style={style.txtClientDetail}>info.job@gmail.com</Text>
                            </View>

                        </View>

                    </View> */}
                    <View style={{ marginHorizontal: 18 }}>
                        <Text style={[style.headerJobTitle,{marginTop:spacing.x}]}>Lead Info</Text>
                        <Text style={[style.txtClient, { marginTop: spacing.x }]}>Job Type</Text>
                        <View style={style.txtFieldView}>
                            <View style={{ flexDirection: 'row' }}>
                                <Entypo name={'user'} size={20} style={style.custIcon} />
                                {/* <Text style={style.textName}>Dishwasher</Text> */}
                                <TextInput placeholder="Select job Types"
                                    style={style.textboxfield}
                                    maxLength={50} />
                            </View>
                        </View>

                        <Text style={[style.txtClient, { marginTop: spacing.x }]}>Job Source</Text>
                        <View style={style.txtFieldView}>
                            <View style={{ flexDirection: 'row' }}>
                                <Entypo name={'user'} size={20} style={style.custIcon} />
                                {/* <Text style={style.textName}>Live Chat</Text> */}
                                <TextInput placeholder="Select job Ad Source"
                                    style={style.textboxfield}
                                    maxLength={50} />
                            </View>
                        </View>

                    </View>
                </View>
                <View style={style.thirdView}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={[style.txtClient, { marginTop: spacing.x, marginHorizontal: 20 }]}>Job Start Date & Time</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={[style.txtClient, { marginTop: spacing.x }]}>Job End Date & Time</Text>
                        </View>
                    </View>

                    <View style={{ marginHorizontal: 18, marginTop: spacing.x }}>
                        <Text style={[style.txtClient, { marginTop: spacing.x }]}>Job Description</Text>
                        <View style={style.txtFieldView}>
                            <View style={{ flexDirection: 'row' }}>
                                <Entypo name={'user'} size={20} style={style.custIcon} />
                                <TextInput style={style.textName} placeholder='Type your job description' />
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity style={style.logbtn}>
                        <AntDesign size={20} name="login" color="white" />
                    </TouchableOpacity>
                    <Text style={style.loginButton}>Log In</Text>
                    <View style={{ marginBottom: spacing.xl }}></View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default JobLead;