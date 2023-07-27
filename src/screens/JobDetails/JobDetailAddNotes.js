import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, FlatList, Modal, ScrollView, TextInput } from 'react-native'
import { jobStyles } from './JobDetailStyle'
import { addIcon, addnotes, saveIcon } from '@/assets'
import { shadow, spacing } from '@/theme';
import { useState } from 'react';
import { font } from '@/theme/font';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAttachNotes, editjobDetails } from '@/actions/JobActions';
import { useNavigation } from '@react-navigation/native';
import { NoRecords } from '@/components/NoRecords';
import { addNotesFun } from '@/actions/UserActions';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function JobDetailAddNotes(props) {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    // const getNotes = props
    console.log("getNotes===>", props?.addNotes?.note)
    const noteslList = props?.addNotes?.note
    const getjobId = useSelector((state) => state?.job?.getJobId);
    console.log("getJobDetailsId==>", getjobId)
    const [openModal, setOpenModal] = useState(false)
    const [addNotes, setAddNotes] = useState();
    const[updateData,setUpdateData]=useState()
    const[noteId,setNoteId]=useState('')
    // console.log("statusprops------>", props)
    const transparent = 'rgba(0,0,0,0.5)'

    const sendAddnotes = () => {
       
        const data = {
                note_id:noteId,
                jobId:getjobId,
                description:addNotes,
                sourceType:"App"
        }
        console.log("sendnotesrecords------>",data)
        dispatch(addNotesFun(data, navigation, setOpenModal, props?.refresh))
        setUpdateData('')
    }

    function deleteNotes(id) {
        console.log("deletenotes--->", id)
        const data = {
            job_id:getjobId,
            "job_note_id":id,
            "key": "job_note"
        }
        dispatch(deleteAttachNotes(data, navigation, setOpenModal, props?.refresh))
    }

    function renderModal() {
        return (
            <Modal onBackdropPress={() => setOpenModal(false)} onRequestClose={() => setOpenModal(false)} visible={openModal} animationType="slide" transparent={true} >
                <View style={{ flex: 1, backgroundColor: transparent, justifyContent: 'center' }}>
                    <View style={[jobStyles.modalView, { height: '40%' }]}>
                    <Ionicons name='close' size={25} color={'#041B3E'} style={{marginLeft: 5 }}  onPress={()=>setOpenModal(false)}/>
                        <View style={{ alignItems: "center", marginVertical: 10 }}>
                            <Text style={jobStyles.modalheading}>Type Your Note</Text>
                        </View>
                        <ScrollView style={{ width: "100%" }} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                            <View style={{ flex: 1, padding: 10 }}>
                                <View style={[shadow.primaryView, { width: "100%", elevation: 9 }]}>
                                    <TextInput style={{ color: "#757588" }}
                                        placeholder="Type your note here and send"
                                        numberOfLines={3}
                                        value={addNotes?addNotes:updateData}
                                        onChangeText={(text) => setAddNotes(text)}
                                    />
                                </View>
                                <View style={{ marginBottom: 10, marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                                    <TouchableOpacity onPress={sendAddnotes} style={jobStyles.saveBtn}>
                                        <Image source={saveIcon} style={{ height: 35, width: 35 }} />
                                    </TouchableOpacity>
                                    <Text style={{ color: '#195090', fontFamily: font.bold, fontSize: 16 }}>Save</Text>
                                </View>
                            </View>

                        </ScrollView>
                    </View>
                </View>
            </Modal>
        )
    }
    const updateNotes=(item)=>{
        setUpdateData('')
        setAddNotes('')
        console.log("datainpiut--->",updateData)
        console.log("id====>",item?.id)
        console.log("id====>",item?.name)
        setOpenModal(true)
        setNoteId(item?.id)
        setUpdateData(item?.name)
    }
    const renderNotestItem = ({ item }) => {
        
        return (
            <View style={jobStyles.renderNotes}>
                <View>
                    <TouchableOpacity onPress={() => updateNotes(item)}>
                    <Image source={addnotes} />
                    </TouchableOpacity>
                </View>
                <View style={{flex:3,marginHorizontal:2,alignItems:'center'}}>
                <ScrollView style={{height:30}} horizontal={true}  showsHorizontalScrollIndicator={false}>
                <Text style={[jobStyles.nametxt]}>
                    {item?.name}
                </Text>
                </ScrollView>
                </View>
                <View>
                <TouchableOpacity onPress={() => deleteNotes(item?.id)}>
                    <Text style={{ color: '#757588', fontSize: 18, fontWeight: '600' }}>
                        X
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    };

   const modalViewOpen=()=>{
    setNoteId('')
    setAddNotes('')
    setOpenModal(true)
    setUpdateData('')
   }
    return (
        <View style={{ marginTop: 30 }}>
            <View style={jobStyles.viewTags}>
                <Text style={jobStyles.headingTxt}>
                    Added Notes
                </Text>
                <TouchableOpacity onPress={modalViewOpen} >
                    <Image source={addIcon} />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 5 }}>
                {noteslList?.length != 0 ? <FlatList
                    style={jobStyles.flatListNotes}
                    renderItem={renderNotestItem}
                    data={noteslList}
                    showsVerticalScrollIndicator={false}
                /> : <NoRecords />}
            </View>
            {renderModal()}
        </View>
    )
}