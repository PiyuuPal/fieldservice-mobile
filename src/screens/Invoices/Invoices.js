import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, ScrollView, View, ImageBackground, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import { style } from './Invoices.styles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { backgroundImage, cyberwolf, job, locationIcon, noAvailableImg, noImg, search, timeSheetIcon } from '@/assets';
import { useNavigation } from '@react-navigation/native';
import { spacing } from '@/theme';
import { useDispatch, useSelector } from 'react-redux';
import { invoiceListdata, invoicesStatus } from '@/actions/UserActions';
import { NAVIGATION } from '@/constants';
import { ModalLoader } from '@/components/ModalLoader';


const Invoices = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [pressedButtonId, setPressedButtonId] = useState(null);
    const [defaultColor, setDeafultColor] = useState(null);
    const [pagedata, setPageData] = useState([]);
    console.log('pagegggc',pagedata)
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(false);
    const [statusText, setStatusText] = useState('');
    const [isFocus, setIsFocus] = useState(false);
    const [userInput, setUserInput] = useState(''); // for searching
    const statusInvoicedata = useSelector((state) => state?.user?.statusOfinvices);
    const invoiceListData = useSelector((state) => state?.user?.invoiceList);
    console.log('totalInvoices------', invoiceListData)


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
        dispatch(invoicesStatus(navigation))
    }, [])

    useEffect(() => {
        const payload = {
            name: 'list',
        };
        dispatch(invoiceListdata(navigation, payload));
    }, [statusText]);


    useEffect(() => {
        navigation.addListener('focus', () => {
            setIsFocus(true)
            setTimeout(function () {
                setIsFocus(false)
            }, 2000);
        }, []);
    }, [isFocus])

    const DATA = invoiceListData;
    const invoiceStatus = statusInvoicedata;
    const renderItem = ({ item }) => {
        return (
            <View style={{ marginLeft: 10 }}>
                <TouchableOpacity style={[style.dashbtn,
                    // {
                    //     backgroundColor:
                    //         pressedButtonId === item?.id || defaultColor === item?.id ? '#E5F1FF' : 'white',
                    // }
                ]} >
                    <Text style={style.textTitle}>{item?.name ? item?.name : 'Status'}</Text>
                </TouchableOpacity>
            </View>
        )
    };

    const renderCard = ({ item }) => {
        // console.log(item);
        if (userInput === "") {
            return (
                <TouchableOpacity style={[style.card, { backgroundColor: '#E4EFF2' }]}
                    onPress={() => navigation.navigate('Create Invoice', { invoiceId: item.id, type: 'invoice' })}
                // onPress={()=>console.log('newwdjndj=====',{ invoiceId: item.id, type: 'invoice' })}
                >
                    <View style={style.cardcontainer}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={[style.txtheader, { backgroundColor: '#E27E7E' }]}>Paid</Text>
                        </View>
                        <View style={[style.jobDetails]}>
                            <View>
                                <Text style={style.title}>Invoice Number: {item?.invoice_id ? item?.invoice_id : '258'}</Text>
                            </View>
                        </View>


                        <View style={[style.jobDetails, { marginTop: 12 }]}>
                            <View style={{ flex: 1, flexDirection: "row", marginLeft: -10 }}>
                                <View style={style.imgView}>
                                    <Image
                                        source={noAvailableImg}
                                        // style={style.profileicon}
                                        style={{ height: 20, width: 20, alignSelf: 'center' }}
                                    />
                                </View>
                                <Text style={style.fullname}>{item?.first_name} {item?.last_name}</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                                <Text style={[style.jobDescription]}>${item?.total_amount}</Text>
                            </View>
                        </View>
                        {/* : */}
                        <View style={[style.jobDetails, { flexDirection: "row", marginTop: 5 }]}>
                            <Entypo name="mail" size={20} style={style.custIconn} />
                            <Text style={style.fullname}>{item?.email}</Text>
                        </View>
                        <View style={[style.jobDetails, { marginTop: 12 }]}>
                            <Entypo name="calendar" size={20} style={style.custIconn} />
                            <Text style={style.dueDate}>Due Date</Text>
                            <Text style={style.fullname}>{item?.due_date}</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            )
        }
        if (item?.first_name?.toLowerCase().includes(userInput?.toLowerCase())) {
            return (
                // <TouchableOpacity style={[style.txtFieldView, { marginVertical: 2 }]} onPress={() => navigation.navigate('Create Invoice', { invoiceId: item.id, type: 'invoice' })}>
                //     <Text style={[style.txtFieldTitle, { marginLeft: 10 }]}>{item?.first_name != undefined ? item?.first_name : ''} {item?.last_name != undefined ? item?.last_name : ''}</Text>
                // </TouchableOpacity>
                <TouchableOpacity style={[style.card, { backgroundColor: '#E4EFF2' }]} onPress={() => navigation.navigate('Create Invoice', { invoiceId: item.id, type: 'invoice' })}>
                    <View style={style.cardcontainer}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={[style.txtheader, { backgroundColor: '#E27E7E' }]}>Paid</Text>
                        </View>
                        <View style={[style.jobDetails]}>
                            <View>
                                <Text style={style.title}>Invoice Number: {item?.invoice_id ? item?.invoice_id : '258'}</Text>
                            </View>
                        </View>


                        <View style={[style.jobDetails, { marginTop: 12 }]}>
                            <View style={{ flex: 1, flexDirection: "row", marginLeft: -10 }}>
                                <View style={style.imgView}>
                                    <Image
                                        source={noAvailableImg}
                                        // style={style.profileicon}
                                        style={{ height: 20, width: 20, alignSelf: 'center' }}
                                    />
                                </View>
                                <Text style={style.fullname}>{item?.first_name} {item?.last_name}</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                                <Text style={[style.jobDescription]}>${item?.total_amount}</Text>
                            </View>
                        </View>
                        {/* : */}
                        <View style={[style.jobDetails, { flexDirection: "row", marginTop: 5 }]}>
                            <Entypo name="mail" size={20} style={style.custIconn} />
                            <Text style={style.fullname}>{item?.email}</Text>
                        </View>
                        <View style={[style.jobDetails, { marginTop: 12 }]}>
                            <Entypo name="calendar" size={20} style={style.custIconn} />
                            <Text style={style.dueDate}>Due Date</Text>
                            <Text style={style.fullname}>{item?.due_date}</Text>
                        </View>
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
                            <Text style={style.headerTitle}>Invoices</Text>
                        </View>
                        <View style={{ paddingRight: 20, justifyContent: "center", alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => navigation.navigate(NAVIGATION.SelectClient)}>
                                <Entypo name="circle-with-plus" size={30} style={{ color: "#195090" }} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={[style.searchView]}>
                        <View style={{ flex: 1 }}>
                            <TextInput style={style.textboxfield} placeholder="Search" onChangeText={(text) => setUserInput(text)} />
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <Image source={search} style={style.imgIcon} />
                        </View>
                    </View>
                    <Text style={[style.headerTitle, { marginHorizontal: spacing.x }]}>Status:</Text>
                    <View style={{ paddingBottom: 10 }}>
                        <FlatList
                            data={invoiceStatus}
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
                    data={DATA}
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
export default Invoices;