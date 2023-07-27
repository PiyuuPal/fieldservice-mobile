import { shadow, spacing } from '@/theme'
import { useNavigation } from '@react-navigation/native'
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, ImageBackground, Image, TextInput, FlatList } from 'react-native'
import { jobStyles } from './JobDetailStyle'
import { backIcon, backgroundImage, job, search } from '@/assets'
import { style } from '@/screens/JobCreate/JobCreate.styles'
import { ScrollView } from 'react-native-gesture-handler'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ViewBase } from 'react-native/types'
import { timeLineAll } from '@/actions/JobActions'
import Moment from 'moment';
import { color } from 'react-native-reanimated'

export function TimeLinesAll() {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    // const data = [{ "id": '1', "name": 'prashant', 'address': 'deva' }, { "id": '1', "name": 'prashant', 'address': 'deva' }, { "id": '1', "name": 'prashant', 'address': 'deva' }]
    const timeLineAllListData = useSelector(
        (state) => state?.job?.timeLineAllList
    );
    console.log("timeLineAllListDataSelector=======>", timeLineAllListData)
    useEffect(() => {
        const data = {
            "job_id": 200,
            "type": "all"
        }
        dispatch(timeLineAll(data))
    }, [])
    const filterData = ({ item }) => {
        const createDate = Moment(item?.created_at).format('ddd MMM Do YYYY h:mm a');
        console.log("createDate-->", createDate);
        return (
            <View style={[shadow.primaryView, { marginVertical:8, marginHorizontal: 20 }]}>
                <View style={{justifyContent:"flex-start",alignItems:"center"}}>
                    <Text style={{ backgroundColor: "#7DC05D" ,alignSelf:"flex-start",paddingLeft:10,paddingRight:10,borderRadius:20,color:"white",fontWeight:"600",fontSize:15,marginTop:-18}}>{item?.type}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Image source={job} />
                    </View>
                    <View style={{ flex: 1, marginHorizontal: 10 }}>
                        <View>
                            <Text style={{ color: '#041B3E', fontWeight: "600", fontSize: 17 }}>{item?.created_by}</Text>
                            <Text style={{ color: "#9393AB", fontSize: 14, fontWeight: "600" }}>{createDate}</Text>
                        </View>
                    </View>
                </View>

            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, width: "100%", height: "100%" }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1, backgroundColor: "white" }}>
                    <View style={{ padding: 20 }}>
                        <View style={[style.searchView, { marginHorizontal: 0 }]}>
                            <TextInput
                                style={{ flex: 1 }}
                                placeholder="Search"
                            // onChangeText={(text) => setUserInput(text)}
                            />
                            <Image source={search} style={style.imgIcon} />
                        </View>
                    </View>

                    <View style={{ width: '100%' }}>
                        <FlatList
                            data={timeLineAllListData}
                            renderItem={filterData}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
