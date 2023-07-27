import { estimatesIcon, invoices, jobsIcon, leads, search, team } from '@/assets';
import { shadow, spacing } from '@/theme'
import React, { Component } from 'react'
import { useState } from 'react';
import { Text, View, ScrollView, FlatList, TextInput, Image, TouchableOpacity } from 'react-native'
import { style } from '../JobCreate/JobCreate.styles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { globalSearch, sentJobId } from '@/actions/JobActions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { jobStyles } from '../JobDetails/JobDetailStyle';
import { useNavigation } from '@react-navigation/native';
import { Invoicedetails, clientEditDetail, storeClientData } from '@/actions/UserActions';
export function GlobarSearch(props) {
    const [userInput, setUserInput] = useState('');
    const dispatch = useDispatch()
    const globalSearchList = useSelector((state) => state?.job?.globalSearch);
    console.log("globalSearchSelector1-->", globalSearchList)
    console.log("globalSearchSelector2-->", globalSearchList?.length)
    const [show, setShow] = useState(false);
    const [showId, setShowId] = useState();
    const navigation = useNavigation();
    const data = [
        { id: '1', title: 'Jobs', items: [{ id: '236', business_id: '214', first_name: 'shiva', last_name: '', company_name: 'obs' }] },
        { id: '2', title: 'Invoices', items: [{ id: '236', business_id: '214', first_name: 'shiva', last_name: '', company_name: 'obs' }] },
        { id: '3', title: 'Estimates', items: [] },
        { id: '4', title: 'Customers', items: [] },
        { id: '5', title: 'Users', items: [] }
    ];

    useEffect(() => {
        const data = {
            search: userInput
        }
        console.log("datasend-->", data)
        dispatch(globalSearch(data))
    }, [userInput])

    function clickShow(id) {
        if (show == true) {
            setShow(false)
        }
        else {
            setShow(true);
            setShowId(id)
        }
    }
    const editjobDetail = (itemId) => {
       console.log("jobitem-->",itemId)
       props?.modalClose(false)
        dispatch(sentJobId(itemId, navigation))
    }
    const invoiceDetail = (itemId) => {
        console.log("invoiceitem-->",itemId)
        props?.modalClose(false)
        navigation.navigate('Create Invoice', { invoiceId: itemId, type: 'invoice' })
        // dispatch(Invoicedetails(itemId,navigation,props?.modalClose));
        //  dispatch(sentJobId(itemId, navigation,props?.modalClose))
     }
     const estimatesDetail = (itemId) => {
        console.log("estimatesitem-->",itemId)
        props?.modalClose(false)
       navigation.navigate('Create Estimate', { estimateId:itemId, type: 'estimate' })
     }
     const clientDetail = (itemId) => {
        console.log("clientitem-->",itemId)
        props?.modalClose(false)
        const payload = {
            id: itemId,
          };
        dispatch(clientEditDetail(payload, navigation));
     }
    const filterData = ({ item }) => {
        if (item?.title === 'Jobs') {

            return (
                <View style={{ padding: 10, marginTop: 20 }}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item?.title}</Text>
                        <View style={{ padding: 1, backgroundColor: '#E4EFF2', }}></View>
                    </TouchableOpacity>
                    <View>
                        {item.items.map((item, index) => (

                            <TouchableOpacity onPress={() => editjobDetail(item?.id)} style={[shadow.primeView, { flexDirection: 'row', backgroundColor: "white", elevation: 2 }]}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                                    <Image source={jobsIcon} />
                                </View>
                                <View style={{ flex: 5 }}>
                                    <Text style={jobStyles.nametxt}>Job #{item?.job_id} - {item?.first_name}{item?.last_name}</Text>
                                    <Text style={jobStyles.statusTxt}>{item?.address1} {item?.address2}</Text>
                                </View>
                            </TouchableOpacity>

                        ))}
                    </View>

                </View >
            );
        }
        if (item?.title === 'Invoices') {

            return (
                <View style={{ padding: 10, marginTop: 20 }}>
                    <TouchableOpacity onPress={() => clickShow(item?.id)}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item?.title}</Text>
                        <View style={{ padding: 1, backgroundColor: '#E4EFF2', }}></View>
                    </TouchableOpacity>
                    <View>
                        {item.items.map((item, index) => (

                            <TouchableOpacity onPress={() => invoiceDetail(item?.id)} style={[shadow.primeView, { flexDirection: 'row', backgroundColor: "white", elevation: 2 }]}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                                    <Image source={invoices} />
                                </View>
                                <View style={{ flex: 5 }}>
                                    <Text style={jobStyles.nametxt}>Invoices #{item?.invoice_id} - {item?.first_name}{item?.last_name}</Text>
                                    <Text style={jobStyles.statusTxt}>{item?.address1} {item?.address2}</Text>
                                </View>
                            </TouchableOpacity>

                        ))}
                    </View>

                </View >
            );
        }
        if (item?.title === 'Quotes') {

            return (
                <View style={{ padding: 10, marginTop: 20 }}>
                    <TouchableOpacity onPress={() => clickShow(item?.id)}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item?.title}</Text>
                        <View style={{ padding: 1, backgroundColor: '#E4EFF2', }}></View>
                    </TouchableOpacity>
                    <View>
                        {item.items.map((item, index) => (

                            <TouchableOpacity onPress={() => estimatesDetail(item?.id)} style={[shadow.primeView, { flexDirection: 'row', backgroundColor: "white", elevation: 2 }]}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                                    <Image source={estimatesIcon} />
                                </View>
                                <View style={{ flex: 5 }}>
                                    <Text style={jobStyles.nametxt}>Estimates #{item?.estimate_id} - {item?.first_name}{item?.last_name}</Text>
                                    <Text style={jobStyles.statusTxt}>{item?.address1} {item?.address2}</Text>
                                </View>
                            </TouchableOpacity>

                        ))}
                    </View>

                </View >
            );
        }
        if (item?.title === 'Customers') {

            return (
                <View style={{ padding: 10, marginTop: 20 }}>
                    <TouchableOpacity onPress={() => clickShow(item?.id)}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item?.title}</Text>
                        <View style={{ padding: 1, backgroundColor: '#E4EFF2', }}></View>
                    </TouchableOpacity>
                    <View>
                        {item.items.map((item, index) => (

                            <TouchableOpacity onPress={() => clientDetail(item?.id)} style={[shadow.primeView, { flexDirection: 'row', backgroundColor: "white", elevation: 2 }]}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                                    <Image source={team} />
                                </View>
                                <View style={{ flex: 5 }}>
                                    <Text style={jobStyles.nametxt}>Clients #{item?.id} - {item?.first_name}{item?.last_name}</Text>
                                    <Text style={jobStyles.statusTxt}>{item?.address1} {item?.address2}</Text>
                                </View>
                            </TouchableOpacity>

                        ))}
                    </View>

                </View >
            );
        }
        if (item?.title === 'Users') {

            return (
                <View style={{ padding: 10, marginTop: 20 }}>
                    <TouchableOpacity onPress={() => clickShow(item?.id)}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item?.title}</Text>
                        <View style={{ padding: 1, backgroundColor: '#E4EFF2', }}></View>
                    </TouchableOpacity>
                    <View>
                        {item.items.map((item, index) => (

                            <View style={[shadow.primeView, { flexDirection: 'row', backgroundColor: "white", elevation: 2 }]}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                                    <Image source={leads} />
                                </View>
                                <View style={{ flex: 5 }}>
                                    <Text style={jobStyles.nametxt}>Users#{item?.job_id} - {item?.first_name}{item?.last_name}</Text>
                                    <Text style={jobStyles.statusTxt}>{item?.address1} {item?.address2}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View >
            );
        }

    };
    return (
        <View style={{ padding: spacing.s, height: '100%', backgroundColor: "white", position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
            <ScrollView>
                <View>
                    <Ionicons name='close' size={25} color={'#041B3E'} style={{ marginLeft: 5, marginVertical: 10 }} onPress={() => props?.modalClose(false)} />
                    <View style={{ flexDirection: "row", borderRadius: 10, padding: 10, borderWidth: 1, borderColor: '#E4EFF2' }}>
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="Search"
                            onChangeText={(text) => setUserInput(text)}
                        />
                        <Image source={search} style={[style.imgIcon, { alignSelf: "center" }]} />
                    </View>
                    {globalSearchList?.length != 0 && userInput != '' ? <FlatList data={globalSearchList} renderItem={filterData} /> : ''}
                </View>
            </ScrollView>
        </View>
    )
}
