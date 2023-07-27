import React, { Component, useRef } from 'react';
import { Text, View, SafeAreaView,FlatList ,TouchableOpacity} from 'react-native';
import { useSelector } from 'react-redux';
import MapView from 'react-native-maps';
import { spacing } from '@/theme';
import { NAVIGATION } from '@/constants';
export function ImageShown({navigation}) {
  const data= [
    { name: 'Robert',desc:'mob1',fileName:'Prashant' },
    { name: 'Bryan' ,desc:'mob2',fileName:'shant' },
    { name: 'vicente' ,desc:'mob3',fileName:'Praveen' },
    { name: 'tristan' ,desc:'mob4',fileName:'shyam' },
    { name: 'Marie' ,desc:'mob5',fileName: "Rohan"},
  ]
  const filterData=(item)=>{
        return(<View style={{justifyContent:'space-between',marginTop:5}}>
          <TouchableOpacity style={{padding:10,padding:5,backgroundColor:'white',flexDirection:'row',borderRadius:10,marginVertical:5}} onPress={()=>{navigation.navigate(NAVIGATION.editImage)}}>
                <View>
                <Text>{item?.name}</Text>
                </View>
                <View style={{marginLeft:8}}>
                  <Text>{item?.fileName}</Text>
                  <Text>{item?.desc}</Text>
                </View>
          </TouchableOpacity>
        </View>)
           
}

  return (
      <View style={{flex:1,padding:spacing.m}}>
        <Text>Image List</Text>
        <FlatList data={data} renderItem={({item,index})=>filterData(item)}></FlatList>
      </View>
  );
}
