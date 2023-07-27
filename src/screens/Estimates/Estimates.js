import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, ScrollView, View, ImageBackground, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import { style } from './Estimates.styles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { backgroundImage, cyberwolf, job, locationIcon, noAvailableImg, search, timeSheetIcon } from '@/assets';
import { useNavigation } from '@react-navigation/native';
import { spacing } from '@/theme';
import { useDispatch, useSelector } from 'react-redux';
import { estimateListdata, estimateStatus } from '@/actions/UserActions';
import { NAVIGATION } from '@/constants';
import { ModalLoader } from '@/components/ModalLoader';

const Estimates = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [isFocus, setIsFocus] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [eststatusText, setEststatusTex] = useState();
    const statusEstimatedata = useSelector((state) => state?.user?.statusOfestimate);
    const estimateListData = useSelector((state) => state?.user?.estimateList);
    // 

    useEffect(() => {

        const grandparentNavigation = navigation.getParent("rootNavigator");

        if (grandparentNavigation) {
            const screenOptions = {
                tabBarStyle: { display: "none" },
            };
            try {
                grandparentNavigation.setOptions(screenOptions);
            } catch (error) {
                console.log("Error occurred while setting options:", error);
            }
        } else {
            console.log("grandparentNavigation is null or undefined");
        }

        return () => {
            if (grandparentNavigation) {
                const screenOptions = {
                    tabBarStyle: { backgroundColor: "#FCFDFF", height: 80 },
                };
                try {
                    grandparentNavigation.setOptions(screenOptions);
                } catch (error) {
                    console.log("Error occurred while setting options:", error);
                }
            }
        };
    }, []);

    useEffect(() => {
        dispatch(estimateStatus());
    }, [])


    useEffect(() => {
        const payload = {
            name: 'list',
        };
        dispatch(estimateListdata(payload, navigation))
    }, []);

    useEffect(() => {
        navigation.addListener('focus', () => {
            setIsFocus(true)
            setTimeout(function () {
                setIsFocus(false)
            }, 2000);
        }, []);
    }, [isFocus])

    const statusEstimate = statusEstimatedata;
    // 
    const getestimateList = estimateListData;

    const renderItem = ({ item }) => {
        return (
            <View style={{ marginLeft: 10 }}>
                <TouchableOpacity style={style.dashbtn}>
                    <Text style={style.textTitle}>{item?.name ? item?.name : 'Status'}</Text>
                </TouchableOpacity>
            </View>
        )
    };

    const renderCard = ({ item }) => {
        if (userInput === "") {
            return (
                <TouchableOpacity style={[style.card, { backgroundColor: '#F9F9F9' }]} onPress={() => navigation.navigate('Create Estimate', { estimateId: item.id, type: 'estimate' })}>
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
                                        source={noAvailableImg}
                                        // style={style.profileicon}
                                        style={{ height: 20, width: 20, alignSelf: 'center' }}
                                    />
                                </View>
                                <Text style={style.fullname}>{item?.first_name ? item?.first_name : 'Michlie'} {item?.last_name ? item?.last_name : 'Christopher'}</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                                <Text style={[style.jobDescription]}>${item?.total_amount ? item?.total_amount : '1000.00'}</Text>
                            </View>
                        </View>
                        <View style={{ marginBottom: spacing.s }}></View>
                    </View>
                </TouchableOpacity>


            )
        }
        if (item?.first_name?.toLowerCase().includes(userInput?.toLowerCase())) {
            return (
                // <TouchableOpacity style={[style.txtFieldView, { marginVertical: 2 }]}>
                //     <Text style={[style.txtFieldTitle, { marginLeft: 10 }]}>{item?.first_name != undefined ? item?.first_name : ''} {item?.last_name != undefined ? item?.last_name : ''}</Text>
                // </TouchableOpacity>
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
                                        source={noAvailableImg}
                                        // style={style.profileicon}
                                        style={{ height: 20, width: 20, alignSelf: 'center' }}
                                    />
                                </View>
                                <Text style={style.fullname}>{item?.first_name ? item?.first_name : 'Michlie'} {item?.last_name ? item?.last_name : 'Christopher'}</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                                <Text style={[style.jobDescription]}>${item?.total_amount ? item?.total_amount : '1000.00'}</Text>
                            </View>
                        </View>
                        <View style={{ marginBottom: spacing.s }}></View>
                    </View>
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

                        <View style={{ flexDirection: 'row', padding: 10, justifyContent: "center", alignItems: "center" }}>
                            <Entypo name="chevron-left" size={30} onPress={() => navigation.goBack()} />
                            <Text style={style.headerTitle}>Estimates</Text>
                        </View>
                        <View style={{ paddingRight: 20, justifyContent: "center", alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => navigation.navigate(NAVIGATION.SelectEstimateClient)}>
                                <Entypo name="circle-with-plus" size={30} style={{ color: "#195090" }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={style.searchView}>
                        <View style={{ flex: 1 }}>
                            <TextInput style={style.textboxfield} placeholder="Search" onChangeText={(text) => setUserInput(text)} />
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <Image source={search} style={[style.imgIcon,{marginTop:0}]} />
                        </View>
                    </View>
                    <Text style={[style.headerTitle, { marginHorizontal: spacing.x }]}>Status:</Text>
                    <View style={{ paddingBottom: spacing.x }}>
                        <FlatList
                            data={statusEstimate}
                            horizontal={true}
                            renderItem={renderItem}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </ImageBackground>

                {/* <View style={{marginTop:20}}></View> */}
            </View>
            <View style={style.secView}>
                <FlatList
                    data={getestimateList}
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
export default Estimates;