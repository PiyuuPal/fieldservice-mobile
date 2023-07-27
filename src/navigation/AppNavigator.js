import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabBarIcon } from '@/components';
import { HomeNavigator } from '@/navigation/HomeNavigator';
import { ProfileNavigator } from '@/navigation/ProfileNavigator';
import { TABS } from '@/constants/navigation';
import { MessageNavigator } from '@/navigation/MessagesNavigator';
// import { JobDetails } from '@/screens/jobDetails/JobDetails';
import { useRoute } from '@react-navigation/native';
import JobSchedule from '@/screens/JobSchedule/JobScheduleScreen';
import { ExistingClientList } from '@/screens/ExistingClientList/ExistingClientList';

import Schedule from '@/screens/Schedule/Schedule';
import ExploreBottomsheet from '@/screens/JobCreate/ExploreBottomsheet';
import { spacing } from '@/theme';
import { font } from '@/theme/font';
import { ScheduleNavigator } from './ScheduleNavigator';
import { ClientNavigator } from './ClientNavigator';
import { BottomNavigator } from './BottomNavigator';
import JobCreate from '@/screens/JobCreate/JobCreate';

const Tab = createBottomTabNavigator();

export function AppNavigator() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarActiveTintColor: "#195090",
        tabBarLabelStyle: {
          fontSize: 13,
          marginBottom: spacing.s,
          fontFamily: font.bold,
          fontWeight: "600"
        },
        tabBarInactiveTintColor: "#757588",
        tabBarStyle: { backgroundColor: '#FCFDFF', height: 80, },
        tabBarIcon: ({ color }) =>
          <TabBarIcon color={color} routeName={route.name} />
      })}
      tabBarOptions= {{ labelStyle: { position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, textAlignVertical: 'center'}, }}
      id="rootNavigator"
    >
      <Tab.Screen name={TABS.home} component={HomeNavigator}/>
      <Tab.Screen name={TABS.jobSchedule} component={ScheduleNavigator}  />     
      <Tab.Screen name={TABS.addBottomSheet} component={JobCreate}  options={{ tabBarLabel: '' }}/>
      <Tab.Screen name={TABS.messages} component={MessageNavigator}  />
      <Tab.Screen name={TABS.existingClientList} component={ClientNavigator}/>
    </Tab.Navigator>
  );
}
