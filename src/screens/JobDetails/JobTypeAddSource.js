import { shadow, spacing } from '@/theme'
import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView, Modal, TextInput, SafeAreaView } from 'react-native'
import { jobStyles } from './JobDetailStyle'
import { adsource, descriptionIcon, edit, job, jobdes, save } from '@/assets'
import { NAVIGATION } from '@/constants'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react'
import { font } from '@/theme/font'
import { useDispatch, useSelector } from 'react-redux'
import { JobType } from '../JobType/jobType'
import { AdSource } from '../AdSource/AdSource'
import { setPath } from 'react-native-reanimated/lib/types/lib/reanimated2/animation/styleAnimation'
import { modalAdSource, modalJobType } from '@/constants/status'
import { useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { editjobDetails } from '@/actions/JobActions';
import { clearJobTypeAndAdSource } from '@/actions/UserActions';
export function JobTypeAddSource(props) {

    const jobTypeSelect = useSelector((state) => state?.user?.storeJobType);
    console.log('Storejobtypeselectordata==>', jobTypeSelect);
    const jobAdSource = useSelector((state) => state?.user?.storeAdSource);
    console.log('storeadsourceselectordata==>', jobAdSource);
    const getjobId = useSelector((state) => state?.job?.getJobId);
    console.log("getJobDetailsId==>", getjobId)
    const navigation = useNavigation();
    const dispatch = useDispatch();
    console.log("propsJobTypeAddSource----->", props)
    const jobTypAdSource = props?.jobTypeAd
    console.log("jobtypeAdsurce12345---->", jobTypAdSource)

    const [openModal, setOpenModal] = useState(false)
    const [jobTypeModal, setJobTypeModal] = useState(false)
    const [adModal, setAdModal] = useState(false)
    const transparent = 'rgba(0,0,0,0.5)'
    const [description, setDescription] = useState('')


    const sendJobAdType = () => {
        const data = {
            job_id: getjobId,
            key: "job_type",
            job_type: jobTypeSelect?.id ? jobTypeSelect?.id : jobTypAdSource?.job_type[0]?.id,
            job_ad_source: jobAdSource?.id ? jobAdSource?.id : jobTypAdSource?.job_source[0]?.id,
            job_description: description
        }
        // console.log("descriptionvalue--->",description)
        dispatch(editjobDetails(data, '', setOpenModal, props?.refresh))
    }

    function renderJobTypeModal() {
        return (
            <Modal onBackdropPress={() => setJobTypeModal(false)} onRequestClose={() => setJobTypeModal(false)} visible={jobTypeModal} animationType="slide" transparent={true} >
                <View style={{ height: '100%', flex: 1, backgroundColor: "red" }}>
                    <JobType modalView={setJobTypeModal} />
                </View>
            </Modal>
        )
    }
    function renderJobAdSourceModal() {
        return (
            <Modal onBackdropPress={() => setAdModal(false)} onRequestClose={() => setAdModal(false)} visible={adModal} animationType="slide" transparent={true} >
                <View style={{ height: '100%', flex: 1, backgroundColor: "red" }}>
                    <AdSource modalView={setAdModal} />
                </View>
            </Modal>
        )
    }
    const openjobType = () => {
        // global.modalJobType=true;
        setJobTypeModal(true)
        console.log("value-->", global.modalJobType)
    }
    const openModalView = () => {
        setOpenModal(true)
        setDescription('')
        dispatch(clearJobTypeAndAdSource())
    }

    function renderModal() {
        return (
            <Modal onBackdropPress={() => setOpenModal(false)} onRequestClose={() => setOpenModal(false)} visible={openModal} animationType="slide" transparent={true} >
                <View style={{ flex: 1, backgroundColor: transparent, justifyContent: 'center' }}>
                    <View style={jobStyles.modalView}>
                    <Ionicons name='close' size={25} color={'#041B3E'} style={{marginLeft: 5 }}  onPress={()=>setOpenModal(false)}/>
                        <View style={{ alignItems: "center" }}>
                            <Text style={jobStyles.modalheading}>Job Details</Text>
                        </View>
                        <SafeAreaView>
                            <ScrollView contentContainerStyle={{ flexGrow: 1, }} style={{ width: "100%" }} showsVerticalScrollIndicator={false}>
                                <View style={{ marginVertical: 10, marginTop: 30, width: "100%", padding: 10 }}>
                                    <Text style={jobStyles.txtTypAddSource}>Job Type</Text>
                                    <TouchableOpacity onPress={openjobType} style={[shadow.primaryView, { flexDirection: 'row', alignItems: "center", marginTop: 5 }]}>
                                        <View>
                                            <Image source={job} style={{ height: 20, width: 19 }} />
                                        </View>
                                        <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                                            <Text style={jobStyles.txtValTypAS}>
                                                {jobTypeSelect?.type_name ? jobTypeSelect?.type_name : jobTypAdSource?.job_type[0]?.name}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ marginVertical: 10, width: "100%", padding: 10 }}>
                                    <Text style={jobStyles.txtTypAddSource}>Job Source</Text>
                                    <TouchableOpacity onPress={() => setAdModal(true)} style={[shadow.primaryView, { flexDirection: 'row', alignItems: "center", marginTop: 5 }]}>
                                        <View>
                                            <Image source={adsource} />
                                        </View>
                                        <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                                            <Text style={jobStyles.txtValTypAS}>
                                                {jobAdSource?.ad_group_name ? jobAdSource?.ad_group_name : jobTypAdSource?.job_source[0]?.name}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ marginVertical: 10, width: "100%", padding: 10 }}>
                                    <Text style={jobStyles.txtTypAddSource}>Job Description</Text>
                                    <View style={[shadow.primaryView, { flexDirection: 'row', alignItems: "center", marginTop: 5 }]}>
                                        <View>
                                            <Image source={descriptionIcon} />
                                        </View>
                                        <View style={{ justifyContent: 'center', marginLeft: 10, flex: 1 }}>
                                            <TextInput style={{ color: "#757588" }}
                                                onChangeText={(text) => setDescription(text)}
                                                placeholder="Type your job description"
                                                numberOfLines={4}
                                                value={description?description:jobTypAdSource?.client_job_description}
                                                multiline={true}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={{ marginVertical: 20, width: "100%", justifyContent: "center", alignItems: "center" }}>
                                    <TouchableOpacity onPress={sendJobAdType} style={jobStyles.saveBtn}>
                                        <Image source={save} />
                                    </TouchableOpacity>
                                    <Text style={{ color: '#195090', fontFamily: font.bold, fontSize: 16 }}>Save</Text>
                                </View>
                            </ScrollView>
                        </SafeAreaView>
                    </View>
                </View>
            </Modal >
        )
    }
    return (
        <View style={[shadow.primary, { marginTop: 4, borderRadius: 10, padding: spacing.s }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Image source={job} style={{ height: 20, width: 19 }} />
                    </View>
                    <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                        <Text style={jobStyles.txtTypAddSource}>
                            Job Type
                        </Text>
                        <Text style={jobStyles.txtValTypAS}>
                            {jobTypAdSource?.job_type[0]?.name}
                        </Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={openModalView}><Image source={edit} style={jobStyles.editImg} /></TouchableOpacity>
                </View>
            </View>
            <View style={jobStyles.blankView}></View>

            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Image source={adsource} />
                    </View>
                    <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                        <Text style={jobStyles.txtTypAddSource}>
                            Select job Ad Source
                        </Text>
                        <Text style={jobStyles.txtValTypAS}>
                            {jobTypAdSource?.job_source[0]?.name}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={jobStyles.blankView}></View>

            <View style={{ flexDirection: 'row'}}>
                <View style={{ flexDirection: 'row', width: "100%" }}>
                    <View >
                        <Image source={jobdes} />
                    </View>
                    <View style={{ justifyContent: 'center', flex: 4, alignSelf: "center", marginLeft: 10 }}>
                        <Text style={jobStyles.txtTypAddSource}>
                            Job Description
                        </Text>
                        <View>
                            <ScrollView style={{height:25}} horizontal={true} showsHorizontalScrollIndicator={false}>
                                <Text numberOfLines={1} style={[jobStyles.txtValTypAS]}>
                                    {jobTypAdSource?.job_description}
                                </Text>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </View>
            {renderModal()}
            {renderJobTypeModal()}
            {renderJobAdSourceModal()}
        </View>
    )
}
