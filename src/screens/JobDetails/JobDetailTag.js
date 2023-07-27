import React, { Component } from 'react'
import { Text, View,Image,TouchableOpacity ,FlatList} from 'react-native'
import { jobStyles } from './JobDetailStyle'
import { addIcon, edit } from '@/assets';
import { shadow } from '@/theme';
import { NAVIGATION } from '@/constants';
import { useNavigation } from '@react-navigation/native';
import { NoRecords } from '@/components/NoRecords';
export function JobDetailTag(props) {
  const jobTagdataList=props?.tagData?.tag
  console.log("jobTagdataList-------------->",jobTagdataList?.length)
  const navigation=useNavigation()
    const darecords = [
        {
          id: '$Collect$',
          title: 'Details',
        },
        {
          id: '$Refunded$',
          title: 'Finance',
        },
        {
          id: 'Part Delivery Delay',
          title: 'Timeline',
        },
      ];
    const renderJobTagsItem = ({ item }) => {
        return (
          <View style={{ padding: 5 }}>
            <TouchableOpacity
              style={{
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                borderColor: '#D2DDE9',
                borderWidth: 1,
              }}
            >
              <Text style={{ color: '#041B3E', fontSize: 15, fontWeight: '600' }}>{item?.name}</Text>
            </TouchableOpacity>
          </View>
        );
      };
    return (
        <View style={{ marginTop: 20 }}>
        <View style={jobStyles.viewTags}>
          <Text style={jobStyles.headingTxt}>Job Tags</Text>
          <TouchableOpacity onPress={()=>navigation.navigate(NAVIGATION.jobTags,{refresh:props?.refresh,jobTagTick:jobTagdataList})}><Image source={edit} style={jobStyles.editImg} /></TouchableOpacity>
        </View>
        {jobTagdataList?.length !=0?
        <FlatList
          style={{ width: '100%', marginTop: 5 }}
          renderItem={renderJobTagsItem}
          data={jobTagdataList}
          horizontal
          showsHorizontalScrollIndicator={false}
        />:<NoRecords/>}
      </View>
    )
}
