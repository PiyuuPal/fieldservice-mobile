import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, ScrollView, View, ImageBackground, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import { style } from './Estimates.styles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { backgroundImage, cyberwolf, job, locationIcon, noAvailableImg, search, timeSheetIcon } from '@/assets';
import { useNavigation } from '@react-navigation/native';
import { spacing } from '@/theme';
import { useDispatch, useSelector } from 'react-redux';
import { clientEstimateCountList } from '@/actions/UserActions';
import { ModalLoader } from '@/components/ModalLoader';
// import { useDispatch, useSelector } from 'react-redux';
// import {estimateListdata, estimateStatus } from '@/actions/UserActions';


const ClientEstimates = () => {
    const [isFocus, setIsFocus] = useState(false);
    const [userInput, setUserInput] = useState('');
    const getClientDetail = useSelector((state) => state?.user?.storeExistClientListReducer);
    const estimateClientCount = useSelector((state) => state?.user?.clientEstimateCount);

    const navigation = useNavigation();
    const dispatch = useDispatch();


    useEffect(() => {
        navigation.addListener('focus', () => {
            setIsFocus(true)
            setTimeout(function () {
                setIsFocus(false)
            }, 2000);
        }, []);
        const payload = {
            id: getClientDetail?.id,
        };
        // console.log('check---',payload)
        dispatch(clientEstimateCountList(payload, navigation))
    }, []);

    const listofEstimate = estimateClientCount;
    const renderCard = ({ item }) => {
        if (userInput === "") {
            return (
                <TouchableOpacity style={[style.card, { backgroundColor: '#F9F9F9' }]}>
                    <View style={style.cardcontainer}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={[style.txtheader, { backgroundColor: '#E27E7E' }]}>{item?.estimate_status ? item?.estimate_status : 'Paid'}</Text>
                        </View>
                        <View style={[style.jobDetails]}>
                            <View>
                                <Text style={style.title}>Estimate No: {item?.estimate_id ? item?.estimate_id : '135980 - 12589'}</Text>
                            </View>
                        </View>
                        <View style={[style.jobDetails, { marginTop: 12 }]}>
                            <View style={{ flex: 1, flexDirection: "row", }}>
                                <View style={style.imgView}>
                                    <Image
                                        source={{ uri: item?.image_url } ? { uri: item?.image_url } : noAvailableImg}
                                        // style={style.profileicon}
                                        style={{ height: 20, width: 20, alignSelf: 'center' }}
                                    />
                                </View>
                                <Text style={style.fullname}>{item?.first_name ? item?.first_name : 'Michlie'} {item?.last_name ? item?.last_name : 'Christopher'}</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                                <Text style={[style.jobDescription]}>{item?.total_amount ? item?.total_amount : '$1000.00'}</Text>
                            </View>
                        </View>
                        <View style={{ marginBottom: spacing.s }}></View>
                    </View>
                </TouchableOpacity>


            )
        }
        if (item?.first_name?.toLowerCase().includes(userInput?.toLowerCase())) {
            return (
                <TouchableOpacity style={[style.txtFieldView, { marginVertical: 2 }]}>
                  <Text style={[style.txtFieldTitle, { marginLeft: 10 }]}>{item?.first_name != undefined ? item?.first_name : ''} {item?.last_name != undefined ? item?.last_name : ''}</Text>
              </TouchableOpacity>
            )
        }
    }
    return (
        <SafeAreaView style={style.container}>
            {/* <ScrollView style={style.container}> */}
            <View style={style.firstView}>
                <ImageBackground source={backgroundImage} style={{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.0,

                    elevation: 4,
                    backgroundColor: "#ffffff",
                }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', padding: 20 }}>
                            <Entypo name="chevron-left" size={30} style={style.custIcon} onPress={() => navigation.goBack()} />
                            <Text style={style.headerTitle}>Estimates</Text>
                        </View>
                        <Entypo name="circle-with-plus" size={30} style={[style.custIcon, { color: "#195090", marginTop: spacing.s }]} />
                    </View>

                    <Text style={[style.headerTitle, { marginHorizontal: spacing.x }]}>All Estimates</Text>
                    <View style={style.searchView}>
                        <TextInput style={style.textboxfield} placeholder="Search" maxLength={50} onChangeText={(text) => setUserInput(text)}/>
                        <Image source={search} style={style.imgIcon} />
                    </View>
                    <View style={{ marginBottom: spacing.xii }}></View>
                </ImageBackground>

            </View>
            <View style={style.secView}>
                <FlatList
                    data={listofEstimate}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.id.toString()}
                />
                <View style={{ marginBottom: 20 }}></View>
            </View>
            {/* </ScrollView> */}
            <ModalLoader modalView={isFocus} />
        </SafeAreaView>
    )
}
export default ClientEstimates;