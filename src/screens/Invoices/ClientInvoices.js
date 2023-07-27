import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, ImageBackground, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { style } from './Invoices.styles';
import { backgroundImage, cyberwolf, job, locationIcon, noAvailableImg, noImg, search, timeSheetIcon } from '@/assets';
import Entypo from 'react-native-vector-icons/Entypo';
import { spacing } from '@/theme';
import { NAVIGATION } from '@/constants';
import { useNavigation } from '@react-navigation/native';
import { clientInvoiceCountList } from '@/actions/UserActions';
import { useDispatch, useSelector } from 'react-redux';
import { ModalLoader } from '@/components/ModalLoader';


const ClientInvoices = () => {
    const [userInput, setUserInput] = useState('');
    const [isFocus, setIsFocus] = useState(false);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const getClientDetail = useSelector((state) => state?.user?.storeExistClientListReducer);
    const invoiceClientCount = useSelector((state) => state?.user?.clientInvoiceCount);
    console.log('=====invoice...', invoiceClientCount)
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
        console.log('checkInvoice---', payload)
        dispatch(clientInvoiceCountList(payload, navigation))
    }, [isFocus]);

    const listofInvoices = invoiceClientCount;
    const renderCard = ({ item }) => {
        // console.log(item);
        if (userInput === "") {
            return (
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
                                        source={{ uri: item?.image_url } ? { uri: item?.image_url } : noAvailableImg}
                                        // style={style.profileicon}
                                        style={{ height: 20, width: 20, alignSelf: 'center' }}
                                    />
                                </View>
                                <Text style={style.fullname}>{item?.first_name ? item?.first_name : 'Mahindra'} {item?.last_name ? item?.last_name : 'Michel'}</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                                <Text style={[style.jobDescription]}>${item?.total_amount ? item?.total_amount : '1000'}</Text>
                            </View>
                        </View>
                        {/* : */}
                        <View style={[style.jobDetails, { flexDirection: "row", marginTop: 5 }]}>
                            <Entypo name="mail" size={20} style={style.custIconn} />
                            <Text style={style.fullname}>{item?.email ? item?.email : 'info.job@gmail.com'}</Text>
                        </View>
                        <View style={[style.jobDetails, { marginTop: 12 }]}>
                            <Entypo name="calendar" size={20} style={style.custIconn} />
                            <Text style={style.dueDate}>Due Date</Text>
                            <Text style={style.fullname}> {item?.due_date ? item?.due_date : 'June 13th 2023'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            )
        }
        if (item?.first_name?.toLowerCase().includes(userInput?.toLowerCase())) {
            return (
                <TouchableOpacity style={[style.txtFieldView, { marginVertical: 2 }]}
                    onPress={() => navigation.navigate('Create Invoice', { invoiceId: item.id, type: 'invoice' })}
                >
                    <Text style={[style.txtFieldTitle, { marginLeft: 10 }]}>{item?.first_name != undefined ? item?.first_name : ''} {item?.last_name != undefined ? item?.last_name : ''}</Text>
                </TouchableOpacity>
            )
        }
    }

    return (
        <SafeAreaView style={style.container}>
            <View style={[style.firstView]}>
                <ImageBackground source={backgroundImage} style={{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.0,
                    elevation:6,
                    backgroundColor: "#ffffff",
                    paddingTop:20
                }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", padding: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Entypo name="chevron-left" size={30} onPress={() => navigation.goBack()} />
                            <Text style={style.headerTitle}>Invoices</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate(NAVIGATION.SelectClient)}>
                            <Entypo name="circle-with-plus" size={30} style={[{ color: "#195090" }]} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingLeft:20}}>
                        <Text style={[style.headerTitle,{marginLeft:0}]}>All Invoices</Text>
                    </View>
                    <View style={style.searchView}>
                        <View style={{flex:1}}>
                            <TextInput style={style.textboxfield} placeholder="Search" onChangeText={(text) => setUserInput(text)} />
                        </View>
                        <View style={{justifyContent:"center",alignItems:"center",padding:5}}>
                            <Image source={search} style={style.imgIcon} />
                        </View>
                    </View>
                    <View style={{ marginBottom: spacing.xii }}></View>
                </ImageBackground>
                {/*                 
                <FlatList
                    data={DATA}
                    horizontal={true}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                /> */}
                {/* <View style={{marginTop:20}}></View> */}
            </View>
            <View style={style.secView}>
                <FlatList
                    data={listofInvoices}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.id.toString()}
                />
                <View style={{ marginBottom: 20 }}></View>
            </View>
            <ModalLoader modalView={isFocus} />
        </SafeAreaView>
    )
}
export default ClientInvoices;
