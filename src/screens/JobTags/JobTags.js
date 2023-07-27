import {
  exisitngClientListFun,
  stateListFun,
  storeClientData,
  storeStateListData,
} from '@/actions/UserActions';
import { style } from '../JobCreate/JobCreate.styles';
import { shadow, spacing } from '@/theme';
import React, { Component, useEffect, useState } from 'react';
import { SafeAreaView, Text, View, FlatList, TouchableOpacity, TextInput, ImageBackground, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import { CheckBox } from 'react-native-elements';
import { backgroundImage, saveIcon, search } from '@/assets';
import { editjobDetails, jobTagList } from '@/actions/JobActions';
import { jobStyles } from '../JobDetails/JobDetailStyle';
import { font } from '@/theme/font';
import { useNavigation } from '@react-navigation/native';

export function JobTags({route}) {
  const navigation=useNavigation()
  console.log("routesparams--->",route)
  const refresh=route?.params?.refresh
  const jobTagTick=route?.params?.jobTagTick
  const dispatch = useDispatch();
  const jobTagDataList = useSelector((state) => state?.job?.tagList);
  const getjobId = useSelector((state) => state?.job?.getJobId);
  console.log("getJobDetailsId==>", getjobId)
  console.log('jobTagDataListselectordata==>', jobTagDataList);
  console.log("jobtagtick==>",jobTagTick)
  const [userInput, setUserInput] = useState('');
  const tagSelected =jobTagTick?.map(item=>item?.id)
  console.log("tagSleected--->",tagSelected)
  const [selectedId, setSelectedId] = useState(tagSelected);
  useEffect(() => {
    console.log('jobtags-->');
    dispatch(jobTagList(navigation));
  }, []);

  // const handleCheck = (id) => {
  //   console.log("enter-->", id)
  //   const newState = [...state];
  //   const index = newState.findIndex((item) => item.id === id);
  //   newState[index].checked = !newState[index].checked;
  //   setState(newState);
  //   console.log("state-->", state)
  // };
  const sendJobTagList = () => {
    console.log("dataarraya-->", selectedId)
    // if (selectedId?.length == '' || selectedId?.length == undefined) {
    //   ShowToastMessage("Please select Tag.")
    // }
    const data = {
      job_id: getjobId,
      key: "job_tag",
      job_tag: selectedId
    }
   dispatch(editjobDetails(data,navigation,'',refresh))
  }
  useEffect(()=>{
    setSelectedId(tagSelected)
 },[])

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
  const filterData = (item) => {
    if (userInput === '') {
      return (
        <View style={[shadow.primaryView, { justifyContent: 'space-between', marginTop: 8, margin: 5 }]}>
          <View style={{ flexDirection: 'row', justifyContent: "space-between" }} >
            <View style={{ flexDirection: 'row', flex:4,alignItems:'center'}}>
              <Text style={jobStyles.headingTxt}>{item?.name}</Text>
            </View>
            <View>
              <CheckBox
                checked={selectedId?.includes(item?.id)}
                onPress={() => handleCheckboxClick(item?.id)}
              />
            </View>
          </View>
        </View>
      );
    }
    if (item.name.toLowerCase().includes(userInput.toLowerCase())) {
      return (
        <View style={[shadow.primaryView, { justifyContent: 'space-between', marginTop: 8, margin: 5 }]}>
          <View style={{ flexDirection: 'row', justifyContent: "space-between" }} >
            <View style={{ flexDirection: 'row' ,flex:4,alignItems:'center' }}>
              <Text style={jobStyles.headingTxt}>{item?.name}</Text>
            </View>
            <View>
              <CheckBox
                checked={selectedId?.includes(item?.id)}
                onPress={() => handleCheckboxClick(item?.id)}
              />
            </View>
          </View>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.firstView}>
        <ImageBackground source={backgroundImage} style={shadow.primary} >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
            <View style={{ flexDirection: 'row' }}>
              <Entypo name="cross" size={30} style={style.custIcon} onPress={() => navigation.goBack()} />
              <Text style={style.headerTitle}>Job Tags</Text>
            </View>
            <View style={{ marginHorizontal: 20 }}>
              <TouchableOpacity onPress={() => setSelectedId([])}>
                <Text style={{ color: "#1A5090", fontSize: 18, fontWeight: '600' }}>Clear</Text>
              </TouchableOpacity>
            </View>
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
          <FlatList data={jobTagDataList} renderItem={({ item, index }) => filterData(item)}></FlatList>
        </View>
        <View style={{ marginBottom: 10, marginTop: 20, justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity onPress={sendJobTagList} style={jobStyles.saveBtn}>
            <Image source={saveIcon} style={{ height: 35, width: 35 }} />
          </TouchableOpacity>
          <Text style={{ color: '#195090', fontFamily: font.bold, fontSize: 16 }}>Save</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
