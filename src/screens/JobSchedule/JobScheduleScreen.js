import React, { useState } from 'react';

import { style } from './JobSchedule.styles';
import { useNavigation } from '@react-navigation/native';
import JobScheduleComponent from '@/components/JobSchedule/JobSchedule';
import { backgroundImage } from '@/assets';
import {
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
const JobSchedule = ({ screenProps }, routes) => {
  const navigation = useNavigation();
  
   const { jobId } = screenProps;
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
     
        <ImageBackground source={backgroundImage}>
          <View style={[style.viewheader, { flexDirection: 'row' }]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../../assets/images/cancel.png')}
                style={style.iconrightChevron}
              />
            </TouchableOpacity >
            <Text style={style.headertext}>Reschedule</Text>
          </View>
        </ImageBackground>
        <JobScheduleComponent jobId={jobId}/>
      
    </SafeAreaView>
  );
};
export default JobSchedule;
