import { exisitngClientListFun, stateListFun, storeClientData, storeStateListData } from '@/actions/UserActions'
import { spacing } from '@/theme'
import React, { Component, useEffect, useState } from 'react'
import { SafeAreaView,Text, View,FlatList } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'

export function StateList ({navigation}) {
    const dispatch=useDispatch();
    const stateListData = useSelector((state) => state?.business?.stateListReducer);
    
    const data= [
        { name: 'Robert' },
        { name: 'Bryan' },
        { name: 'vicente' },
        { name: 'tristan' },
        { name: 'Marie' },
        { name: '' },
      ]
      const [userInput,setUserInput]=useState('');

      useEffect(() => {
        
        dispatch(stateListFun(navigation));
      }, []);

      const sendItem=(item)=>{
        
        dispatch(storeStateListData(item,navigation))
      }

    const filterData=(item)=>{
        if(userInput===""){
            return(<View style={{backgroundColor:'green',justifyContent:'space-between',marginTop:5}}>
              <TouchableOpacity style={{backgroundColor:'gray',padding:10}} onPress={()=>{sendItem(item)}}>
                    <Text>{item?.name}</Text>
                    </TouchableOpacity>
            </View>)
        }
                if(item.name.toLowerCase().includes(userInput.toLowerCase())){
                    return(<View  style={{backgroundColor:'green',justifyContent:'space-between',margin:5}}>
                        <TouchableOpacity  style={{backgroundColor:'gray',padding:10}} onPress={()=>{sendItem(item)}}>
                        <Text>{item?.name !=undefined?item?.name:''}</Text>
                        </TouchableOpacity>
                    </View>)
            }
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1,padding:10}}>
                <View>
                     <TextInput onChangeText={(text)=>setUserInput(text)} style={{backgroundColor:'white',borderWidth:1,marginVertical:10}} placeholder={"search state name"}/>
                </View>
                <FlatList data={stateListData} renderItem={({item,index})=>filterData(item)}></FlatList>
            </View>
        </SafeAreaView>
    
    )
}
