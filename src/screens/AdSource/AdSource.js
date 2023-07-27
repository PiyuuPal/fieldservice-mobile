import { adSourceList, storeClientAdSourceType } from '@/actions/UserActions'
import { shadow, spacing } from '@/theme'
import React, { Component, useEffect, useState } from 'react'
import { SafeAreaView, Text, View, FlatList, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { style } from '../JobCreate/JobCreate.styles'
import { backgroundImage, search } from '@/assets';
import Entypo from 'react-native-vector-icons/Entypo';
import { jobStyles } from '../JobDetails/JobDetailStyle';
import { useNavigation } from '@react-navigation/native';

export function AdSource(props) {
    const dispatch = useDispatch();
    const navigation=useNavigation()
    const adSourceListData = useSelector((state) => state?.user?.jobAdSourceList);
    console.log('adSourceDataselectordata==>', adSourceListData);

    const [userInput, setUserInput] = useState('');

    useEffect(() => {
        // 
        dispatch(adSourceList(navigation));
    }, []);

    const sendItem = (item) => {
        dispatch(storeClientAdSourceType(item, navigation,props?.modalView))
    }

    const filterData = (item) => {
        return (<View style={jobStyles.jobtypeView}>
            <TouchableOpacity style={jobStyles.jobTypetouch}
                onPress={() => { sendItem(item) }}>
                <Text style={jobStyles.nametxt}>{item?.ad_group_name}</Text>
            </TouchableOpacity>
        </View>)
    }

    return (
        <SafeAreaView style={style.container}>
            <View style={style.firstView}>
                <ImageBackground source={backgroundImage} style={shadow.primary}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row'}}>
                            <Entypo name="cross" size={30} style={style.custIcon} onPress={() => navigation.goBack()} />
                            <Text style={style.headerTitle}>Ad Source</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{ padding: spacing.m }}>
                    <FlatList data={adSourceListData} renderItem={({ item, index }) => filterData(item)}></FlatList>
                </View>
            </View>
        </SafeAreaView>


    )
}
