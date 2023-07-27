import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NAVIGATION } from "@/constants";

import Schedule from "@/screens/Schedule/Schedule";
import ScheduleFilters from "@/screens/ScheduleFilters/ScheduleFilters";
// import { JobDetails } from '@/screens/JobDetails/JobDetails';

const Stack = createNativeStackNavigator();

export function ScheduleNavigator({ screenProps }) {
  //
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      {/* <Stack.Screen name={NAVIGATION.jobDetails} options={{ headerShown: false }} children={() => <JobDetails screenProps={screenProps} />}/> */}
      <Stack.Screen name={NAVIGATION.schedule} component={Schedule} />
      <Stack.Screen
        name={NAVIGATION.ScheduleFilters}
        component={ScheduleFilters}
      
      />
    </Stack.Navigator>
  );
}
