import React, { Component, useState } from 'react'
import { Text, View, TouchableOpacity, Image, FlatList,Modal,ActivityIndicator } from 'react-native'
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Entypo from 'react-native-vector-icons/Entypo';
import { styles } from './Home.styles';
import moment from 'moment';
import { font } from '@/theme/font';
import { job, locationIcon, timeSheetIcon } from '@/assets';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getColorlisting, upcomingListing } from '@/actions/HomeActions';
import { busTypecolor, upcomingBackground } from '.';
import { shadow } from '@/theme';
import { NoRecords } from '@/components/NoRecords';
import { JobDetails } from '../JobDetails/JobDetails';
import { useNavigation } from '@react-navigation/native';
import { JobDetailsNavigator } from '@/navigation/JobDetailsNavigator';
import { NAVIGATION } from '@/constants';
import { sentJobId } from '@/actions/JobActions';
export function UpcomingList() {
  const navigation = useNavigation();
  const [isFocus,setIsFocus]=useState(false)
  const upcomingListData = useSelector((state) => state?.home?.upcomingList);
  const getColorListData = useSelector((state) => state?.home?.getColorList);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("UPCOMING")
    dispatch(getColorlisting())
    // dispatch(upcomingListing())
  }, [])

  const renderItem = ({ item }) => {
    
    const date = moment(item?.start_date).format('DD MMM');
    
    // navigation.navigate(NAVIGATION.jobDetails,{jobId:item?.id})} 
    const sendJobId=(itemId)=>{
      dispatch(sentJobId(itemId,navigation))
    }
   
    return (
      <TouchableOpacity onPress={() =>sendJobId(item?.job_id)} style={[styles.card, { backgroundColor: upcomingBackground[item.id % upcomingBackground.length] }]}>
        <View style={styles.cardcontainer}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={[styles.txtheader, { backgroundColor:'#7DC05D' }]}>{item?.type}</Text>
          </View>
          <View style={[styles.jobDetails,{justifyContent:"space-between"}]}>
            <View style={{marginRight:50}}>
              <Text style={styles.title}>Job#{item?.job_id}</Text>
            </View>
            <View style={{ flexDirection: 'row'}}>
              <Text>{date}  {item?.start_time}</Text>
              <Entypo name='dots-three-vertical' size={20} />
            </View>
          </View>

          {item?.business_type != 'LEAD' ?
            <View style={[styles.jobDetails, { marginTop: 12,justifyContent:"space-between" }]}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Image
                  source={job}
                  style={styles.profileicon}
                />
                <Text style={styles.fullname}>{item?.job_type}</Text>
              </View>
              <View style={{ flex: 1, justifyContent: "center", alignItems: 'center',marginLeft:5 }}>
                <Text style={[styles.jobDescription]}>{item?.job_status}</Text>
              </View>
            </View>
            :
            <View style={[styles.jobDetails, { flexDirection: "row", marginTop: 5 }]}>
              <Image
                source={timeSheetIcon}
                style={styles.profileicon}
              />
              <Text style={styles.date}>{item?.start_time}-{item?.end_time}</Text>
            </View>
          }
          <View style={[styles.jobDetails, { marginTop: 12 }]}>
            <Image
              source={locationIcon}
              style={styles.profileicon}
            />
            <Text style={[styles.address,{width:200}]} numberOfLines={1} ellipsizeMode='tail'>{item?.address1},{item?.address2}</Text>
          </View>
          <View style={[styles.jobDetails, { marginTop: 12 }]}>
            <Image
              source={{ uri: item?.image_url }}
              style={{ height: 20, width: 20 }}
            />
            <Text style={styles.jobTiming}>{item?.first_name} {item?.last_name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  };
  return (
    <View>
      <Text style={styles.headingDashboard}>Upcoming Work</Text>
      {upcomingListData?.length != undefined ?
        <FlatList
          data={upcomingListData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        /> : <NoRecords />}
    </View>
  )
}
