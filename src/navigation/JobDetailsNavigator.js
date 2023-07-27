import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '@/constants';
import { Text } from 'react-native';
import Home from '@/screens/Home/Home';
import ETANavigator from '@/navigation/ETANavigator';


import { JobNavigator } from './JobNavigator';
import { JobDetails } from '@/screens/JobDetails/JobDetails';
import AddNotes from '@/screens/AddNotes/AddNotes';
import JobStatus from '@/screens/JobStatus/JobStatus';
import JobSchedule from '@/screens/JobSchedule/JobScheduleScreen';
import {ImageShown} from '@/screens/ImageShown/ImageShown';
import { ClientDetails } from '@/screens/ClientDetails/ClientDetails';
import { JobTags } from '@/screens/JobTags/JobTags';
import { Team } from '@/screens/Team/Team';
import { EditJobDetails } from '@/screens/EditJobDetails/EditJobDetails';
import {EditImage } from '@/screens/EditImage/EditImage';
import { JobType } from '@/screens/JobType/jobType';
import { AdSource } from '@/screens/AdSource/AdSource';
import { Address } from '@/screens/Address/Address';
import JobMessage from '@/screens/JobDetails/JobMessage';
const Stack = createNativeStackNavigator();

export function JobDetailsNavigator() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name={NAVIGATION.jobDetails} options={{ headerShown: false }} children={() => <JobDetails screenProps={screenProps} />}/> */}
      <Stack.Screen name={NAVIGATION.jobDetails} component={JobDetails}  options={{headerShown:false}}/>
      {/* <Stack.Screen name={NAVIGATION.addNotes} component={AddNotes}/> */}
      {/* <Stack.Screen name={NAVIGATION.jobStatus} component={JobStatus}/> */}
      <Stack.Screen name={NAVIGATION.jobSchedule} component={JobSchedule} options={{ headerShown: false }}/>
      <Stack.Screen name={NAVIGATION.clientDetails} component={ClientDetails}/>
      <Stack.Screen name={NAVIGATION.imageShown} component={ImageShown}/>
      <Stack.Screen name={NAVIGATION.jobTags} component={JobTags} options={{ headerShown: false }}/>
      <Stack.Screen name={NAVIGATION.jobType} component={JobType} options={{ headerShown: false }}/>
      <Stack.Screen name={NAVIGATION.adSource} component={AdSource} options={{ headerShown: false }}/>
      <Stack.Screen name={NAVIGATION.team} component={Team}/>
      <Stack.Screen name={NAVIGATION.editJobDetails} component={EditJobDetails}/>
      <Stack.Screen name={NAVIGATION.editImage} component={EditImage}/>
      <Stack.Screen name={NAVIGATION.address} component={Address} />
      <Stack.Screen name={NAVIGATION.jobMessage} component={JobMessage} />
    </Stack.Navigator>
  );
}
