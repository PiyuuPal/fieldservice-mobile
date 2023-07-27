import { storeClientJobType, jobTypeList } from '@/actions/UserActions';
import { shadow, spacing } from '@/theme'
import React, { Component, useEffect, useState } from 'react'
import { SafeAreaView, Text, View, FlatList, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { style } from '../JobCreate/JobCreate.styles';
import { backgroundImage, search } from '@/assets';
import Entypo from 'react-native-vector-icons/Entypo';
import { jobStyles } from '../JobDetails/JobDetailStyle';
import { useNavigation } from '@react-navigation/native';

export function JobType(props) {
    const dispatch = useDispatch();
    const navigation=useNavigation();
    const jobTypeListData = useSelector((state) => state?.user?.jobTypeList);
    console.log('jobTypeListDataselectordata==>', jobTypeListData);
    console.log("propconsole-->",props)
    const [userInput, setUserInput] = useState('');

    useEffect(() => {
        dispatch(jobTypeList(navigation));
    }, []);

    const sendItem = (item) => {
        dispatch(storeClientJobType(item,navigation,props?.modalView))
    }

    const filterData = (item) => {
        if (userInput === "") {
            return (<View style={jobStyles.jobtypeView}>
                <TouchableOpacity style={jobStyles.jobTypetouch} onPress={() => { sendItem(item) }}>
                    <Text style={jobStyles.nametxt}>{item?.type_name}</Text>
                </TouchableOpacity>
            </View>)
        }
        if (item.type_name.toLowerCase().includes(userInput.toLowerCase())) {
            return (<View style={jobStyles.jobtypeView}>
                <TouchableOpacity style={jobStyles.jobTypetouch} onPress={() => { sendItem(item) }}>
                    <Text style={jobStyles.nametxt}>{item?.type_name}</Text>
                </TouchableOpacity>
            </View>)
        }
    }

    return (
        <SafeAreaView style={style.container}>
            <View style={style.firstView}>
                <ImageBackground source={backgroundImage} style={shadow.primary} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Entypo name="cross" size={30} style={style.custIcon} onPress={() => navigation.goBack()} />
                            <Text style={style.headerTitle}>Job Types</Text>
                        </View>
                        <Entypo name="circle-with-plus" size={30} style={[style.custIcon, { color: "#195090" }]} />
                    </View>
                    <View style={[style.searchView, { marginBottom: 10 }]}>
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="Search"
                            onChangeText={(text) => setUserInput(text)}
                        />
                        <Image source={search} style={style.imgIcon} />
                    </View>
                </ImageBackground>
                <View style={{ padding: spacing.m }}>
                    <FlatList data={jobTypeListData} renderItem={({ item, index }) => filterData(item)}></FlatList>
                </View>
            </View>
        </SafeAreaView>

    )
}
