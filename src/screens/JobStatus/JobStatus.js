import { jobStatusFun } from '@/actions/UserActions';
import { NAVIGATION } from '@/constants';
import { shadow, spacing } from '@/theme';
import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import { jobStyles } from '../JobDetails/JobDetailStyle';
import { useState } from 'react';
import { saveIcon } from '@/assets';
import { font } from '@/theme/font';
import { CheckBox } from 'react-native-elements';
import { ShowToastMessage } from '@/helpers';
import { useNavigation } from '@react-navigation/native';
import { editjobDetails} from '@/actions/JobActions';


const JobStatus = (props) => {
  // const modal=props?.modalView
  // console.log("modalView====>",modal)
  const dispatch = useDispatch();
  const navigation = useNavigation()
  const [pressId, setPressId] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [defaultColor, setDeafultColor] = useState('#041B3E');
  const data = [{ name: 'hello', status: 'item' }, { name: 'hello', status: 'item' }, { name: 'hello', status: 'item' }, { name: 'hello', status: 'item' }, { name: 'hello', status: 'item' }, { name: 'hello', status: 'item' }]
  const jobStatusData = useSelector((state) => state?.user?.jobStatusReducer);
  const getjobId = useSelector((state) => state?.job?.getJobId);
  console.log("getJobDetailsId==>", getjobId)
  console.log('jobStatusDataselectordata==>', jobStatusData);
  const [state, setState] = useState(jobStatusData);
  const [checked, setChecked] = useState(false);
  const [selectedId, setSelectedId] = useState([]);
  const [idCheck, setIdCheck] = useState();
  useEffect(() => {
    
    dispatch(jobStatusFun(navigation))
  }, []);


  // useEffect(() => {
  //   const grandparentNavigation = navigation.getParent('HomeNavigator');
  //    
  //   if (grandparentNavigation) {
  //     const screenOptions = {
  //       headerShown: false,
  //     };
  //     try {
  //      grandparentNavigation.setOptions(screenOptions);
  //     } catch (error) {
  //       
  //     }
  //   } else {
  //     
  //   }
  //   return () => {
  //     if (grandparentNavigation) {
  //       const screenOptions = {
  //         headerShown: true,
  //       };
  //       try {
  //         grandparentNavigation.setOptions(screenOptions);
  //       } catch (error) {
  //         
  //       }
  //     }
  //   };
  // }, []);
  

  // function selectedItem(ItemId) {
  //   console.log("idget---->", ItemId)
  //   console.log("pushIds-->", pressId)
  //   if (pressId.includes(ItemId)) {
  //     console.log("id exists in the array");
  //     const index = pressId.indexOf(ItemId);
  //     if (index > -1) {
  //       pressId.splice(index, 1);
  //       setPressId([...pressId]);
  //     }
  //     console.log("IfIdd--->", pressId)
  //   } else {
  //     console.log("id does not exist in the array");
  //     setPressId([...pressId, ItemId])
  //   }

  // }
  const [isSelected, setSelection] = useState(false);

  // const handleCheck = (id) => {

  //   console.log("enter-->", id)
  //   const newState = [...state];
  //   const index = newState.findIndex((item) => item.id === id);
  //   newState[index].checked = !newState[index].checked;
  //   setState(newState);
  //   console.log("state-->", state)
  // };

  const handleCheckboxClick = (id) => {
    console.log("--->", id);
    // setSelectedId(...selectedId,);
    // console.log("id selected-->",selectedId)
    // setChecked(!checked);

    if (selectedId.includes(id)) {
      setIdCheck(id)
      console.log("id exists in the array");
      const index = selectedId.indexOf(id);
      if (index > -1) {
        selectedId.splice(index, 1);
        setSelectedId([...selectedId]);
        // setChecked(!checked)
        setIdCheck('');
      }

    } else {
      console.log("id does not exist in the array", selectedId?.length);
      setIdCheck(id)
      // if(selectedId?.length==0 || selectedId?.length==''){
      //  ShowToastMessage("Select only one status.")
      setSelectedId([id])
      // }
    }
  };

  const renderStatus = ({ item }) => {
    // console.log(idCheck,"<----------renderItems--->", item?.id )
    return (
      <View style={[shadow.primaryView, { justifyContent: 'space-between', marginTop: 8, margin: 5 }]}>
        <View style={{ flexDirection: 'row', justifyContent: "space-between" }} >
          <View style={{ flexDirection: 'row',flex:4 ,alignItems:"center"}}>
            <Text style={jobStyles.headingTxt}>{item?.name}</Text>
          </View>
          <View>
            <CheckBox
              // title="Click me"
              checked={item?.id === idCheck}
              // checked={true}
              onPress={() => handleCheckboxClick(item?.id)}
            />
            {/* <CheckBox
                value={item.checked}
                onValueChange={() => handleCheck(item.id)}
              /> */}
          </View>
          {/* {isSelected?<MaterialCommunityIcons name="checkbox-outline" size={30}  key={item.id} onPress={()=>{setSelection(false),console.log("idcheck->",item.id)}}/>:<MaterialCommunityIcons name="checkbox-blank-outline" size={30}  onPress={()=>{setSelection(true)}} />} */}
        </View>
      </View>
      // <View>
      //   {/* <Text style={jobStyles.headingTxt}>{item?.name}</Text> */}
      //   <View style={{ flexDirection: "row", marginTop: 10 }}>
      //     <TouchableOpacity onPress={() => selectedItem(item?.id)} style={[jobStyles.statusJobTouch, { borderColor: defaultColor }]}>
      //       {pressId.includes(item?.id, setDeafultColor('#195090')) ? <Feather name={'check'} size={20} color={defaultColor} /> : null}
      //       <Text style={jobStyles.statusTxt}>{item?.name}</Text>
      //     </TouchableOpacity>
      //   </View>
      //   <View style={{ padding: 1, backgroundColor: "#E4EFF2", marginVertical: 25 }}></View>
      // </View>
    )
  }

  function sendStatusId() {
    console.log("sendIds", selectedId)
    if (selectedId?.length == '' || selectedId?.length == undefined) {
      ShowToastMessage("Please select only one status.")
    }
    else {
      const data={
        job_id:getjobId,
        key:"job_status",
        job_status:selectedId
      }
      console.log(props?.refreshView,"---->datasent-->",data)
      dispatch(editjobDetails(data, '',props?.modalView,props?.refreshView))
    }
    // setIdCheck(selectedId[0])
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View>
        <FlatList
          data={jobStatusData}
          renderItem={renderStatus}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={{ marginBottom: 10, marginTop: 20, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity onPress={() => sendStatusId()} style={jobStyles.saveBtn}>
          <Image source={saveIcon} style={{ height: 35, width: 35 }} />
        </TouchableOpacity>
        <Text style={{ color: '#195090', fontFamily: font.bold, fontSize: 16 }}>Save</Text>
      </View>
    </ScrollView>

  );
};

export default JobStatus;
