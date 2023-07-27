import {
    exisitngClientListFun,
    stateListFun,
    storeClientData,
    storeStateListData,
  } from '@/actions/UserActions';
  import { spacing } from '@/theme';
  import React, { Component, useEffect, useState } from 'react';
  import { SafeAreaView, Text, View, FlatList ,TouchableOpacity,TextInput} from 'react-native';
  import { useDispatch, useSelector } from 'react-redux';
  import Entypo from 'react-native-vector-icons/Entypo';
  import CheckBox from '@react-native-community/checkbox';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  const data = [
      { id:'1',name: 'Robert' },
      { id:'2',name: 'Bryan' },
      { id:'3',name: 'vicente' },
      { id:'4',name: 'tristan' },
      { id:'5',name: 'Marie' },
      // { name: '' },
    ];
  export function Team({ navigation }) {
    const dispatch = useDispatch();
    // const stateListData = useSelector((state) => state?.user?.stateListReducer);
    // console.log('StateListDataselectordata==>', stateListData);
    
    const [state, setState] = useState(data);
    const [isSelected, setSelection] = useState(false);
    const [userInput, setUserInput] = useState('');
  const [checkedId,setCheckId]=useState('');
  
    useEffect(() => {
      console.log('jobteams-->');
      // dispatch(stateListFun(navigation));
    }, []);
  
    const handleCheck = (id) => {
      console.log("enter-->",id)
      const newState = [...state];
      const index = newState.findIndex((item) => item.id === id);
      newState[index].checked = !newState[index].checked;
      setState(newState);
      console.log("state-->",state)
    };
  
  
    const filterData = (item) => {
      if (userInput === '') {
        return (
          <View style={{justifyContent: 'space-between', marginTop: 5 }}>
            <View style={{padding: 10, flexDirection: 'row',justifyContent:"space-between"}} >
              <View style={{flexDirection:'row'}}>
              <Text>{item?.name}</Text>
              </View>
             <View>
             <CheckBox
                value={item.checked}
                onValueChange={() => handleCheck(item.id)}
              />
             </View>
              {/* {isSelected?<MaterialCommunityIcons name="checkbox-outline" size={30}  key={item.id} onPress={()=>{setSelection(false),console.log("idcheck->",item.id)}}/>:<MaterialCommunityIcons name="checkbox-blank-outline" size={30}  onPress={()=>{setSelection(true)}} />} */}
            </View>
          </View>
        );
      }
      if (item.name.toLowerCase().includes(userInput.toLowerCase())) {
        return (
          <View style={{ backgroundColor: 'green', justifyContent: 'space-between', margin: 5 }}>
            <View style={{ backgroundColor: 'gray', padding: 10, flexDirection: 'row',justifyContent:'space-between' }}>
             <View style={{flexDirection:'row'}}>
              <Text>{item?.name}</Text>
              </View>
             <View>
             <CheckBox
                value={item.checked}
                onValueChange={() => handleCheck(item.id)}
              />
             </View>
            </View>
          </View>
        );
      }
    };
   const jobTagFun=()=>{
      console.log("jobtagfun-->",state)
      const filteredData = state.filter((item) => item.checked ==true);
      console.log("filterData-->",filteredData)
   }
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 10 }}>
          <FlatList data={state} renderItem={({ item, index }) => filterData(item)}></FlatList>
          <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: 'purple',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
                marginTop: 50,
              }}
              onPress={jobTagFun}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Save</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  