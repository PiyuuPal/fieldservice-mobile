import { arrowLeft, arrowRight, backIcon, backgroundImage, timeSheetIcon, timesheetBtn } from '@/assets'
import { shadow, spacing } from '@/theme'
import React, { Component, useEffect } from 'react'
import { Text, View, SafeAreaView, ImageBackground, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { timeStyle } from './TimeSheetStyle'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkInOutFun, timesheetFun } from '@/actions/DrawerAction'
import moment from 'moment';
import { NoRecords } from '@/components/NoRecords'
import { ModalLoader } from '@/components/ModalLoader'
import { NAVIGATION } from '@/constants'

export function Timesheet({ navigation }) {
    const timeSheetData = useSelector((state) => state?.drawer?.timeSheetDetails);
    // console.log("timesheetSelector-->", timeSheetData)
    const [checkInOutText, setCheckInOutText] = useState(false)
    const [currentDate, setCurrentDate] = useState(moment());
    const [dayShow, setDayShow] = useState(true)
    const [weekShow, setWeekShow] = useState(false)
    const [monthShow, setMonthShow] = useState(false)
    const [openModal, setOpenModal] = useState(true)
    const [currentWeek, setCurrentWeek] = useState(moment())
    const [currentMonth, setCurrentMonth] = useState(moment().startOf('month'));
    const startOfWeek = currentWeek.clone().startOf('week');
    const endOfWeek = currentWeek.clone().endOf('week');
    const startOfMonth = currentMonth.clone().startOf('month');
    const endOfMonth = currentMonth.clone().endOf('month');
    const dispatch = useDispatch();
    let data = ''
    // { id: '1', day: 'Sat, Jun 7th', from: '12:55 Am', to: '1:55 Am', hour: '1:00:00 Hrs' },
    // { id: '2', day: 'Sat, Jun 7th', from: '12:55 Am', to: '1:55 Am', hour: '1:00:00 Hrs' },
    // { id: '3', day: 'Sat, Jun 7th', from: '12:55 Am', to: '1:55 Am', hour: '1:00:00 Hrs' },
    // { id: '4', day: 'Sat, Jun 7th', from: '12:55 Am', to: '1:55 Am', hour: '1:00:00 Hrs' }
    // ]
    useEffect(() => {
        console.log("hello")
        if (dayShow) {
            data = {
                start_date: currentDate.format('YYYY-MM-DD'),
                end_date: currentDate.format('YYYY-MM-DD')
            }
        }
        if (weekShow) {
            data = {
                start_date: startOfWeek.format('MMMM DD,YYYY'),
                end_date: endOfWeek.format('MMMM DD,YYYY')
            }
        }
        if (monthShow) {
            data = {
                start_date: startOfMonth.format('Do MMMM'),
                end_date: endOfMonth.format('Do MMMM, YYYY')
            }
        }
        console.log("dataSendDate---->", data)
        setOpenModal(true)
        dispatch(timesheetFun(data, setOpenModal))
    }, [checkInOutText, dayShow, weekShow, monthShow, currentDate, currentMonth, currentWeek])

    const handlePrev = () => {
        setCurrentDate(currentDate.clone().subtract(1, 'day'));
        setCurrentWeek(currentWeek.clone().subtract(1, 'week'));
        setCurrentMonth(currentMonth.clone().subtract(1, 'month'));
    };

    const handleNext = () => {
        setCurrentDate(currentDate.clone().add(1, 'day'));
        setCurrentWeek(currentWeek.clone().add(1, 'week'));
        setCurrentMonth(currentMonth.clone().add(1, 'month'));
    };

    const daysShowView = () => {
        setMonthShow(false)
        setWeekShow(false)
        setDayShow(true)
        setCurrentDate(moment())
    }
    const weeksShowView = () => {
        setDayShow(false)
        setMonthShow(false)
        setWeekShow(true)
        setCurrentWeek(moment())
    }
    const monthShowView = () => {
        setDayShow(false)
        setWeekShow(false)
        setMonthShow(true)
        setCurrentMonth(moment())
    }
    const renderData = ({ item }) => {
        const dateIn = moment(item?.clock_in_date);
        const from = dateIn.format('hh:mm A');
        const dateOut = moment(item?.clock_out_date);
        const to = dateOut.format('hh:mm A');

        // console.log("clockindate-->",from); // Output: 2AM
        return (
            <View style={{ padding: 10 }}>
                <Text style={[timeStyle.txtMon, { marginVertical: 5 }]}>{item?.clock_in}</Text>
                <View style={[shadow.primaryView, { flexDirection: 'row', padding: 0, elevation: 2 }]}>
                    <View style={{ flexDirection: 'row', flex: 1, padding: 10 }}>
                        <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }}>
                            <Image source={timeSheetIcon} />
                        </TouchableOpacity>
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={timeStyle.fromto}>From</Text>
                            <Text style={timeStyle.txtfrom}>{from}</Text>
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center", padding: 3, marginHorizontal: 10 }}>
                            <View style={{ padding: 1, width: 10, backgroundColor: "#000000" }}></View>
                        </View>
                        <View>
                            <Text style={timeStyle.fromto}>To</Text>
                            <Text style={timeStyle.txtfrom}>{to}</Text>
                        </View>
                    </View>
                    <View style={{ paddingTop: 15, justifyContent: "center", alignItems: "center", padding: 10,flex:0.5 }}>
                        <Text>{item?.duration}</Text>
                    </View>
                </View>
            </View>
        )
    }
    const checkInOut = () => {
        console.log("click me")
        if (checkInOutText == false) {
            setCheckInOutText(true)
        }
        if (checkInOutText == true) {
            setCheckInOutText(false)
        }
        dispatch(checkInOutFun())
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flex: 1 }}>
                <View style={{ width: "100%" }}>
                    <ImageBackground
                        resizeMode="cover"
                        style={{ height: 200 }}
                        source={backgroundImage}
                    >
                        <View style={{ flexDirection: "row", padding: spacing.s }}>
                            <TouchableOpacity onPress={() => navigation.navigate(NAVIGATION.home)}>
                                <Image source={backIcon} />
                            </TouchableOpacity>
                            <Text style={timeStyle.timesheetHead}>Timesheet</Text>
                        </View>
                        <View style={{ padding: 10, alignItems: "center", flexDirection: "row" }}>
                            <TouchableOpacity onPress={daysShowView} style={[timeStyle.dayweakMon, { backgroundColor: dayShow ? '#E5F1FF' : 'white' }]}>
                                <Text style={timeStyle.txtMon}>Day</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={weeksShowView} style={[timeStyle.dayweakMon, , { backgroundColor: weekShow ? '#E5F1FF' : 'white' }]}>
                                <Text style={timeStyle.txtMon}>Week</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={monthShowView} style={[timeStyle.dayweakMon, { backgroundColor: monthShow ? '#E5F1FF' : 'white' }]}>
                                <Text style={timeStyle.txtMon}>Month</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={timeStyle.txtView}>
                            <View >
                                <TouchableOpacity onPress={handlePrev} style={[shadow.primeView, { borderRadius: 50 }]}>
                                    <Image source={arrowLeft} />
                                </TouchableOpacity>
                            </View>
                            <View style={[shadow.primaryView, { justifyContent: "center", alignItems: "center", flex: 2, padding: 5, marginHorizontal: 10 }]}>
                                {dayShow ? <Text style={timeStyle.txtDateShow}>{currentDate.format('MMMM DD, YYYY')}</Text> : ''}
                                {weekShow ? <Text style={timeStyle.txtDateShow}>{startOfWeek.format('MMMM DD,YYYY')} - {endOfWeek.format('MMMM DD, YYYY')}</Text> : ''}
                                {monthShow ? <Text style={timeStyle.txtDateShow}>{`${startOfMonth.format('Do MMMM')} - ${endOfMonth.format('Do MMMM, YYYY')}`}</Text> : ''}
                            </View>
                            <View >
                                <TouchableOpacity onPress={handleNext} style={[shadow.primeView, { borderRadius: 50 }]}>
                                    <Image source={arrowRight} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={timeStyle.totalView}>
                    <Text style={timeStyle.totaltxt}>
                        Total Time
                    </Text>
                    <Text style={timeStyle.totaltxt}>
                        {timeSheetData?.TotalDurationCount}
                    </Text>
                </View>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ padding: 10, width: "100%" }}>
                        {timeSheetData?.list.length != 0 ? <FlatList
                            data={timeSheetData?.list}
                            renderItem={renderData}
                        /> : <NoRecords />}
                    </View>
                </ScrollView>
                <View style={[{ height: 70, justifyContent: "center", alignItems: "center" }]}>
                    <TouchableOpacity onPress={checkInOut} style={[shadow.primaryView, timeStyle.touchClock]}>
                        <Image source={timesheetBtn} />
                        <Text style={timeStyle.txtbtnclock}>{timeSheetData?.clock}</Text>
                    </TouchableOpacity>
                </View>
                <ModalLoader modalView={openModal} />
            </View>
        </SafeAreaView>
    )
}
