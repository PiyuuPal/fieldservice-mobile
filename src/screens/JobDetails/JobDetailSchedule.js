import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, Modal, ScrollView } from 'react-native'
import { jobStyles } from './JobDetailStyle'
import { edit, schduleIcon } from '@/assets'
import moment from 'moment';
import { useState } from 'react';
import { spacing } from '@/theme';
import JobScheduleComponent from '@/components/JobSchedule/JobSchedule';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { font } from '@/theme/font';
export function JobDetailSchedule(props) {
    const jobDetailsData = props?.schedule
    const [openModal, setOpenModal] = useState(false)
    
    const transparent = 'rgba(0,0,0,0.5)'
   
    const date = moment(jobDetailsData?.start_date).format('ddd MMM Do');
   
    const startTime = moment(jobDetailsData?.start_time, 'h:mm a').format('hh:mm A');
    // 
    const endTime = moment(jobDetailsData?.end_time, 'h:mm a').format('hh:mm A');
    function renderModal() {
        return (
            <Modal onBackdropPress={() => setOpenModal(false)} onRequestClose={() => setOpenModal(false)} visible={openModal} animationType="slide" transparent={true} >
                <View style={{ flex: 1, backgroundColor: transparent, justifyContent: 'center' }}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                        <View style={jobStyles.modalView}>
                        <Ionicons name='close' size={25} color={'#041B3E'} style={{marginLeft: 5 }}  onPress={()=>setOpenModal(false)}/>
                            <View style={{ alignItems: "center" }}>
                                <Text style={jobStyles.modalheading}>Schedule</Text>
                            </View>
                            <JobScheduleComponent modalView={setOpenModal} refreshView={props?.refresh} />
                        </View>
                    </ScrollView>
                </View>
            </Modal>
        )
    }
    return (
        <View style={jobStyles.viewSchInter}>
            <Image source={schduleIcon} style={{ height: 20, width: 18 }} />
            <Text style={{ fontSize: 15, fontWeight: '600', color: '#757588', marginLeft: -20 }}>
                {date} {startTime} - {endTime}
            </Text>
            <TouchableOpacity onPress={() => setOpenModal(true)}><Image source={edit} style={jobStyles.editImg} /></TouchableOpacity>
            {renderModal()}
        </View>
    )
}
