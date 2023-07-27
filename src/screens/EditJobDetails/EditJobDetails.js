import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { editJobDetailsStyles } from './EditJobDetailsStyle';
import { spacing } from '@/theme';
import { NAVIGATION } from '@/constants';
import { useDispatch, useSelector } from 'react-redux'
export function EditJobDetails({navigation}) {
    const editJobDetailsData = useSelector((state) => state?.user?.jobDetailsDataReducer);
    // 
    const storejobTypeData = useSelector((state) => state?.user?.storeJobType);
    // 
    const storeAdSourceData = useSelector((state) => state?.user?.storeAdSource);
    // 
  return (
    <SafeAreaView style={{ flex: 1, padding: spacing.s }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
        <View>
          <Text>Job Info</Text>
        </View>
        <View style={{ flex: 1, marginTop: 15 }}>
          <Text style={{ fontWeight: 'bold' }}>Job Type</Text>
          <TouchableOpacity
            style={editJobDetailsStyles.viewContain}
              onPress={() => navigation.navigate(NAVIGATION.jobType)}
          >
            <View style={{ flexDirection: 'row' }}>
              <Text>{storejobTypeData?.type_name?storejobTypeData?.type_name:editJobDetailsData?.job_type}</Text>
            </View>
            <View>
              <Feather name="chevron-right" size={20} />
            </View>
          </TouchableOpacity>
          <Text style={{ fontWeight: 'bold',marginTop:10 }}>Ad Source</Text>
          <TouchableOpacity
            style={editJobDetailsStyles.viewContain}
            onPress={() => navigation.navigate(NAVIGATION.adSource)}
          >
            <View style={{ flexDirection: 'row' }}>
              <Text>{storeAdSourceData?.ad_group_name?storeAdSourceData?.ad_group_name:"adSource"}</Text>
            </View>
            <View>
              <Feather name="chevron-right" size={20} />
            </View>
          </TouchableOpacity>
          <TextInput
           multiline
           style={{borderBottomWidth:1,backgroundColor:'white',marginTop:10}}
          />
             <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: 'purple',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              marginTop: 50,
            }}
            // onPress={jobTagFun}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Update Job</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
