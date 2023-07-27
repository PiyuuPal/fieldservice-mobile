import React, { Component, useState } from 'react'
import { Text, View, TouchableOpacity, Image, Modal, FlatList } from 'react-native'
import { jobStyles } from './JobDetailStyle'
import { shadow, spacing } from '@/theme'
import { edit, saveIcon, team } from '@/assets'
import { font } from '@/theme/font'
import { JobTeam } from '../JobTeam/JobTeam'
import { CheckBox } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editjobDetails, getTeamList } from '@/actions/JobActions'
import { useNavigation } from '@react-navigation/native'
import { NoRecords } from '@/components/NoRecords';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ShowToastMessage } from '@/helpers'
export function JobDetailTeam(props) {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    // const [selectedId, setSelectedId] = useState([]);
    const teamDataList = props?.teamList?.team
    console.log('propsteamList----->', teamDataList?.length)
    const teamSelected =teamDataList?.map(item=>item?.id)
    const [selectedId, setSelectedId] = useState([]);
    const [val,setVal]=useState();
    console.log("<-------helloTeam--------->",teamSelected)
    console.log("aaaryaTeamm-->",selectedId)
    const getjobId = useSelector((state) => state?.job?.getJobId);
    const jobTeamListData = useSelector((state) => state?.job?.teamList);
    console.log("teamlistselector--->", jobTeamListData)
    console.log("getJobDetailsId==>", getjobId)
    const [openModal, setOpenModal] = useState(false)
    useEffect(() => {
        dispatch(getTeamList())
    }, [])
    useEffect(()=>{
       setSelectedId(teamSelected)
    },[openModal])

     

    // console.log("statusprops------>", props)
    const transparent = 'rgba(0,0,0,0.5)'

    const handleCheckboxClick = (id) => {
        console.log("--->", id);
        if (selectedId?.includes(id)) {
            console.log("id exists in the array");
            const index = selectedId.indexOf(id);
            if (index > -1) {
                selectedId.splice(index, 1);
                setSelectedId([...selectedId]);
            }

        } else {
            console.log("id does not exist in the array", selectedId?.length);
            setSelectedId([...selectedId, id])
        }
    };
    const sendJobTeamList = () => {
        console.log("dataarraya-->", selectedId)
        // if (selectedId?.length == '' || selectedId?.length == undefined) {
        //     ShowToastMessage("Please select team.")
        // }
        const data = {
            job_id: getjobId,
            key: "job_team",
            job_team: selectedId
        }
        dispatch(editjobDetails(data, '', setOpenModal, props?.refresh))
    }
    const filterData = (item) => {
        return (
            <View style={[shadow.primaryView, { justifyContent: 'space-between', marginTop: 8, margin: 5 }]}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between" }} >
                    <View style={{ flexDirection: 'row', flex: 4, alignItems: "center" }}>
                        <Text style={jobStyles.headingTxt}>{item?.firstname} {item?.lastname}</Text>
                    </View>
                    <View>
                        <CheckBox
                            checked={selectedId?.includes(item?.id)}
                            onPress={() => handleCheckboxClick(item?.id)}
                        />
                    </View>
                    {/* {isSelected?<MaterialCommunityIcons name="checkbox-outline" size={30}  key={item.id} onPress={()=>{setSelection(false),console.log("idcheck->",item.id)}}/>:<MaterialCommunityIcons name="checkbox-blank-outline" size={30}  onPress={()=>{setSelection(true)}} />} */}
                </View>
            </View>
        );
    };
    const nullFun=()=>{
        setSelectedId([])
    }
    function renderModal() {
        //   console.log("team1-->",selectedId)
        //   console.log("team2-->",teamSelected)
        //   if(teamSelected?.length!=0)
        //   {
        //     console.log("teamList-->",setSelectedId(teamSelected))
        //   }
        // setVal('hy')
        return (
            <Modal visible={openModal} onBackdropPress={() => setOpenModal(false)} onRequestClose={() => setOpenModal(false)} animationType="slide" transparent={true} >
                <View style={{ flex: 1, backgroundColor: transparent, justifyContent: 'center' }}>
                    <View style={jobStyles.modalView}>
                    <Ionicons name='close' size={25} color={'#041B3E'} style={{marginLeft: 5 }}  onPress={()=>setOpenModal(false)}/>
                        <View style={{ alignItems: "center" }}>
                            <Text style={jobStyles.modalheading}>Assign Team</Text>
                            <TouchableOpacity style={{ marginVertical: 10 }}>
                                <Text onPress={nullFun} style={{ color: "#1A5090", fontSize: 18, fontWeight: '600' }}>Clear</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                            <View style={{ padding: spacing.s }}>
                                <FlatList data={jobTeamListData} style={{ width: '100%', padding: 10 }} renderItem={({ item, index }) => filterData(item)}></FlatList>
                            </View>
                            <View style={{ marginBottom: 10, marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                                <TouchableOpacity onPress={sendJobTeamList} style={jobStyles.saveBtn}>
                                    <Image source={saveIcon} style={{ height: 35, width: 35 }} />
                                </TouchableOpacity>
                                <Text style={{ color: '#195090', fontFamily: font.bold, fontSize: 16 }}>Save</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        )
    }
    const renderJobTeamItem = ({ item }) => {
        return (
            <View>
                <Text style={{ color: '#041B3E', fontSize: 15, fontWeight: '600' }}>{item?.firstname} {item?.lastname}  </Text>
            </View>
        );
    };
    return (
        <View style={{ marginTop: 20 }}>
            <Text style={jobStyles.headingTxt}>Assigned Team</Text>
            <View style={[shadow.primary, jobStyles.viewAssTeam]}>
                <View style={{ flexDirection: "row"}}>
                    <View style={jobStyles.viewCenter}>
                        <Image source={team} />
                    </View>
                    <View style={{flex:5}}>
                        {teamDataList?.length != 0  ?
                            <FlatList
                                style={{padding:5}}
                                renderItem={renderJobTeamItem}
                                data={teamDataList}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            /> : <NoRecords />}
                    </View>
                    <View style={jobStyles.viewCenter}>
                        <TouchableOpacity onPress={() => setOpenModal(true)}>
                            <Image source={edit} style={jobStyles.editImg} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            {renderModal()}
        </View>
    )
}
